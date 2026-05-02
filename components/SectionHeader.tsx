import { Reveal } from "./Reveal";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "./Button";

interface SectionHeaderProps {
  label: string;
  title: string;
  description?: string;
  centered?: boolean;
  actionLabel?: string;
  actionHref?: string;
  titleNoWrap?: boolean;
}

export function SectionHeader({
  label,
  title,
  description,
  centered = false,
  actionLabel,
  actionHref,
  titleNoWrap = false,
}: SectionHeaderProps) {
  const content = (
    <div
      className={[
        centered ? "text-center mx-auto" : "text-left",
        centered ? "max-w-3xl" : "w-full max-w-5xl",
      ].join(" ")}
    >
      <Reveal>
        <span className="font-english tracking-[0.2em] text-sm text-accent-gold uppercase font-bold mb-3 block">
          {label}
        </span>
      </Reveal>

      <Reveal delay={0.1}>
        <h2
          className={[
            "text-3xl md:text-4xl lg:text-5xl font-bold mb-5 leading-tight tracking-tight text-white",
            titleNoWrap ? "lg:whitespace-nowrap" : "max-w-4xl",
          ].join(" ")}
        >
          {title}
        </h2>
      </Reveal>

      {description && (
        <Reveal delay={0.2}>
          <p className="mt-3 max-w-2xl text-base leading-8 text-white/60 md:text-lg">
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );

  if (actionLabel && actionHref && !centered) {
    return (
      <div className="flex flex-col gap-6 mb-12 md:mb-16 lg:flex-row lg:items-end lg:justify-between">
        {content}

        <Reveal delay={0.3}>
          <div className="flex shrink-0 lg:justify-end lg:pb-5">
            <Link href={actionHref}>
              <Button variant="ghost" className="gap-2 group px-0 md:px-4 whitespace-nowrap">
                {actionLabel}
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </Reveal>
      </div>
    );
  }

  return (
    <div className={`mb-12 md:mb-16 ${centered ? "flex flex-col items-center" : ""}`}>
      {content}

      {actionLabel && actionHref && centered && (
        <Reveal delay={0.3}>
          <div className="mt-8">
            <Link href={actionHref}>
              <Button variant="primary" className="gap-2">
                {actionLabel}
              </Button>
            </Link>
          </div>
        </Reveal>
      )}
    </div>
  );
}