import fs from 'node:fs/promises';
await fs.rm('dist',{recursive:true,force:true});
await fs.mkdir('dist',{recursive:true});
for (const file of ['index.html','styles.css','app.js','favicon.svg','apple-touch-icon.svg']) await fs.copyFile(file,`dist/${file}`);
await fs.cp('assets','dist/assets',{recursive:true});
console.log('Panko: sitio preparado en dist/');
