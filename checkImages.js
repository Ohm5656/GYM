const fs = require('fs');
const path = require('path');

const directoriesToScan = ['app', 'components', 'lib'];
const urlRegex = /(https:\/\/images\.unsplash\.com\/[^"'\s\)]+)/g;

async function checkUrl(url) {
  try {
    const response = await fetch(url, { method: 'HEAD' });
    return response.ok;
  } catch (error) {
    return false;
  }
}

function scanDirectory(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      scanDirectory(fullPath, fileList);
    } else if (fullPath.endsWith('.ts') || fullPath.endsWith('.tsx')) {
      fileList.push(fullPath);
    }
  }
  return fileList;
}

async function main() {
  const allFiles = [];
  for (const dir of directoriesToScan) {
    scanDirectory(path.join(process.cwd(), dir), allFiles);
  }

  const urlsToCheck = new Map();

  for (const file of allFiles) {
    const content = fs.readFileSync(file, 'utf8');
    let match;
    while ((match = urlRegex.exec(content)) !== null) {
      let url = match[1];
      // Clean up URL if it has trailing characters
      url = url.replace(/["'\)]+$/, '');
      if (!urlsToCheck.has(url)) {
        urlsToCheck.set(url, []);
      }
      urlsToCheck.get(url).push(file);
    }
  }

  console.log(`Found ${urlsToCheck.size} unique Unsplash URLs.`);

  for (const [url, files] of urlsToCheck.entries()) {
    const isOk = await checkUrl(url);
    if (!isOk) {
      console.log(`❌ BROKEN: ${url}`);
      console.log(`   Found in: ${files.map(f => path.relative(process.cwd(), f)).join(', ')}`);
    } else {
      console.log(`✅ OK: ${url}`);
    }
  }
}

main();
