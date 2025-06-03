const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');
let errors = [];
const trimmed = html.trim();
if (!/^<!DOCTYPE html>/i.test(trimmed)) {
  errors.push('Missing or incorrect DOCTYPE.');
}
if (!/<html[^>]*>/i.test(html)) {
  errors.push('Missing opening <html> tag.');
}
if (!/<\/html>\s*$/i.test(trimmed)) {
  errors.push('Missing closing </html> tag.');
}
if (!/<head>[\s\S]*<\/head>/i.test(html)) {
  errors.push('Missing <head>...</head> section.');
}
if (errors.length) {
  console.error('Validation errors found:');
  for (const err of errors) {
    console.error('- ' + err);
  }
  process.exit(1);
} else {
  console.log('index.html passed basic validation.');
}
