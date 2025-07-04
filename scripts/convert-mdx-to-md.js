#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function convertMdxToMd(directory) {
  const files = fs.readdirSync(directory);
  
  files.forEach(file => {
    const filePath = path.join(directory, file);
    const stats = fs.statSync(filePath);
    
    if (stats.isDirectory()) {
      convertMdxToMd(filePath);
    } else if (file.endsWith('.mdx')) {
      const content = fs.readFileSync(filePath, 'utf8');
      const newFilePath = filePath.replace('.mdx', '.md');
      
      // Convert MDX content to MD (remove any JSX if present)
      const mdContent = content.replace(/<[^>]*>/g, ''); // Remove any JSX tags
      
      fs.writeFileSync(newFilePath, mdContent);
      fs.unlinkSync(filePath); // Delete the original .mdx file
      
      console.log(`Converted ${file} to ${file.replace('.mdx', '.md')}`);
    }
  });
}

function main() {
  console.log('🔄 Converting .mdx files to .md files...\n');
  
  const vehiclesDir = path.join(__dirname, '../src/content/vehicles');
  const locationsDir = path.join(__dirname, '../src/content/locations');
  
  if (fs.existsSync(vehiclesDir)) {
    console.log('Converting vehicle files...');
    convertMdxToMd(vehiclesDir);
  }
  
  if (fs.existsSync(locationsDir)) {
    console.log('Converting location files...');
    convertMdxToMd(locationsDir);
  }
  
  console.log('\n✅ Conversion complete!');
  console.log('All .mdx files have been converted to .md files.');
  console.log('Astro should now recognize your content collections.');
}

main().catch(console.error); 