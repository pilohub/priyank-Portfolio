import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const srcGsapDir = path.join(__dirname, 'src', 'gsap');
const nodeModulesGsapDir = path.join(__dirname, 'node_modules', 'gsap');

if (!fs.existsSync(srcGsapDir)) {
    fs.mkdirSync(srcGsapDir, { recursive: true });
}

const plugins = ['SplitText.js', 'ScrollSmoother.js', 'SplitText.d.ts', 'ScrollSmoother.d.ts'];

plugins.forEach(plugin => {
    let srcPath = path.join(nodeModulesGsapDir, plugin);
    if (plugin.endsWith('.d.ts')) {
        srcPath = path.join(nodeModulesGsapDir, 'types', plugin.replace('.js', '.d.ts').toLowerCase().replace('splittext', 'split-text').replace('scrollsmoother', 'scroll-smoother'));
    }
    
    const destPath = path.join(srcGsapDir, plugin);
    
    if (fs.existsSync(srcPath)) {
        fs.copyFileSync(srcPath, destPath);
        console.log(`Copied ${plugin} to src/gsap/`);
    } else {
        console.log(`Could not find ${plugin} at ${srcPath}`);
    }
});

console.log("Next steps:");
console.log("1. Change imports from 'gsap/SplitText' to '../gsap/SplitText'");
console.log("2. Change imports from 'gsap/ScrollSmoother' to '../gsap/ScrollSmoother'");
