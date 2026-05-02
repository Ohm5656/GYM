"use client";

import { usePathname, useRouter } from "next/navigation";
import { useCallback, useEffect, useRef } from "react";

const routeImages: Record<string, string[]> = {
  "/": [
    "/images/gym-class.webp",
    "/images/personal-training.webp",
    "/images/gym-equipment.webp",
    "/images/strength-training.webp",
  ],
  "/services": [
    "/images/weight-room.webp",
    "/images/gym-equipment.webp",
    "/images/personal-training.webp",
    "/images/strength-training.webp",
    "/images/gym-class.webp",
  ],
  "/packages": ["/images/weight-room.webp"],
  "/trainers": [
    "/images/personal-training.webp",
    "/images/strength-training.webp",
    "/images/coach-may.webp",
    "/images/gym-equipment.webp",
  ],
  "/reviews": ["/images/gym-class.webp"],
  "/contact": ["/images/gym-equipment.webp", "/images/map-preview.webp"],
};

const routes = Object.keys(routeImages);
const passiveCapture = { capture: true, passive: true } as const;

type IdleWindow = Window &
  typeof globalThis & {
    requestIdleCallback?: Window["requestIdleCallback"];
    cancelIdleCallback?: Window["cancelIdleCallback"];
  };

function getRouteFromHref(href: string | null) {
  if (!href) return null;

  try {
    const url = new URL(href, window.location.origin);
    if (url.origin !== window.location.origin) return null;

    const route = url.pathname.length > 1 ? url.pathname.replace(/\/$/, "") : url.pathname;
    return routes.includes(route) ? route : null;
  } catch {
    return null;
  }
}

function getRouteFromEvent(event: Event) {
  const target = event.target as Element | null;
  const anchor = target?.closest?.("a[href]") as HTMLAnchorElement | null;

  if (!anchor || anchor.target || anchor.hasAttribute("download")) {
    return null;
  }

  return getRouteFromHref(anchor.getAttribute("href"));
}

function isPlainPrimaryPointer(event: PointerEvent) {
  return event.button === 0 && !event.metaKey && !event.ctrlKey && !event.shiftKey && !event.altKey;
}

export function NavigationWarmup() {
  const pathname = usePathname();
  const router = useRouter();
  const prefetchedRoutes = useRef(new Set<string>());
  const prefetchedImages = useRef(new Set<string>());
  const loadedImages = useRef(new Set<string>());
  const imageLoads = useRef<HTMLImageElement[]>([]);

  const prefetchImage = useCallback((src: string) => {
    if (prefetchedImages.current.has(src)) return;

    const link = document.createElement("link");
    link.rel = "prefetch";
    link.as = "image";
    link.href = src;
    document.head.appendChild(link);
    prefetchedImages.current.add(src);
  }, []);

  const loadImageNow = useCallback((src: string) => {
    if (loadedImages.current.has(src)) return;

    const image = new window.Image();
    image.decoding = "async";
    image.src = src;
    imageLoads.current.push(image);
    loadedImages.current.add(src);
  }, []);

  const warmRoute = useCallback(
    (route: string, eagerImages = false) => {
      if (!routes.includes(route)) return;

      if (route !== pathname && !prefetchedRoutes.current.has(route)) {
        router.prefetch(route);
        prefetchedRoutes.current.add(route);
      }

      routeImages[route].forEach((src) => {
        if (eagerImages) {
          loadImageNow(src);
        } else {
          prefetchImage(src);
        }
      });
    },
    [loadImageNow, pathname, prefetchImage, router]
  );

  useEffect(() => {
    const idleWindow = window as IdleWindow;
    const timers: number[] = [];

    const warmAllRoutes = () => {
      routes.forEach((route, index) => {
        timers.push(window.setTimeout(() => warmRoute(route), index * 120));
      });
    };

    if (typeof idleWindow.requestIdleCallback === "function" && typeof idleWindow.cancelIdleCallback === "function") {
      const idleId = idleWindow.requestIdleCallback(warmAllRoutes, { timeout: 1500 });
      return () => {
        idleWindow.cancelIdleCallback?.(idleId);
        timers.forEach((timer) => window.clearTimeout(timer));
      };
    }

    const timeoutId = window.setTimeout(warmAllRoutes, 600);
    return () => {
      window.clearTimeout(timeoutId);
      timers.forEach((timer) => window.clearTimeout(timer));
    };
  }, [warmRoute]);

  useEffect(() => {
    const warmLink = (event: Event) => {
      const route = getRouteFromEvent(event);

      if (route) {
        warmRoute(route, true);
      }
    };

    document.addEventListener("pointerover", warmLink, passiveCapture);
    document.addEventListener("touchstart", warmLink, passiveCapture);
    document.addEventListener("focusin", warmLink, true);

    return () => {
      document.removeEventListener("pointerover", warmLink, passiveCapture);
      document.removeEventListener("touchstart", warmLink, passiveCapture);
      document.removeEventListener("focusin", warmLink, true);
    };
  }, [warmRoute]);

  useEffect(() => {
    const navigateEarly = (event: PointerEvent) => {
      if (!isPlainPrimaryPointer(event)) return;

      const route = getRouteFromEvent(event);
      if (!route || route === pathname) return;

      warmRoute(route, true);
      router.push(route);
    };

    document.addEventListener("pointerdown", navigateEarly, passiveCapture);

    return () => {
      document.removeEventListener("pointerdown", navigateEarly, passiveCapture);
    };
  }, [pathname, router, warmRoute]);

  return null;
}
