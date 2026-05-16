const fs = require('fs');
const path = require('path');

const required = ['index.html', 'assets/styles.css', 'assets/main.js'];

for (const file of required) {
  if (!fs.existsSync(file)) {
    throw new Error(`Missing required file: ${file}`);
  }
}

fs.rmSync('dist', { recursive: true, force: true });
fs.mkdirSync('dist/assets', { recursive: true });
fs.mkdirSync('dist/public/dokumenty', { recursive: true });

fs.copyFileSync('index.html', path.join('dist', 'index.html'));
fs.copyFileSync(path.join('assets', 'styles.css'), path.join('dist/assets', 'styles.css'));
fs.copyFileSync(path.join('assets', 'main.js'), path.join('dist/assets', 'main.js'));

console.log('Static build completed: dist/');
