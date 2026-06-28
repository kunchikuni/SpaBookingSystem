const fs = require('fs');
const path = require('path');
const convertHTML = require('html-to-jsx');

const dir = path.join('c:', 'Applications', 'beauty_therapy_spa', 'pages');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

files.forEach(file => {
    const content = fs.readFileSync(path.join(dir, file), 'utf8');

    // Extract body content
    const bodyMatch = content.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
    if (!bodyMatch) {
        console.log("No body found for", file);
        return;
    }

    let bodyContent = bodyMatch[1];

    // Remove header and footer tags and their content
    bodyContent = bodyContent.replace(/<header[^>]*>[\s\S]*?<\/header>/ig, '');
    bodyContent = bodyContent.replace(/<footer[^>]*>[\s\S]*?<\/footer>/ig, '');

    // Remove script tags
    bodyContent = bodyContent.replace(/<script[^>]*>[\s\S]*?<\/script>/ig, '');

    let baseName = file.replace('.html', '');

    // Convert HTML to JSX
    let jsxContent = convertHTML(bodyContent);

    // Quick fixes for Next.js Link
    jsxContent = jsxContent.replace(/href="([^"]+)\.html"/g, 'href="/$1"');

    const componentName = baseName.split('_').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('');

    const finalCode = `import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";

export default function ${componentName}() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>${componentName} - Essentials by Tanya</title>
      </Head>
      ${jsxContent}
    </>
  );
}
`;

    // Write new .jsx file
    const jsxFilePath = path.join(dir, baseName + '.jsx');
    fs.writeFileSync(jsxFilePath, finalCode);
    console.log('Created', jsxFilePath);

    fs.unlinkSync(path.join(dir, file)); // delete old html

    // Also delete corresponding .js file if it exists and is not _app.js or index.js
    const jsFilePath = path.join(dir, baseName + '.js');
    if (fs.existsSync(jsFilePath) && baseName !== 'index' && baseName !== '_app') {
        fs.unlinkSync(jsFilePath);
        console.log('Deleted old conflicting .js file', jsFilePath);
    }
});
console.log('Conversion complete');
