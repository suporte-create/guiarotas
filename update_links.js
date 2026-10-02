const fs = require('fs');

// Read CSV
const csvContent = fs.readFileSync('rotas_mapeamento.csv', 'utf8');
const lines = csvContent.split('\n');

const linkMap = {};
for (const line of lines) {
  if (!line.trim()) continue;
  const parts = line.split(';');
  if (parts.length >= 4 && parts[0] !== 'ID_da_Rota') {
    const id = parts[0];
    const url = parts[3].trim();
    linkMap[id] = url;
  }
}

// Read script.js
let scriptContent = fs.readFileSync('script.js', 'utf8');

// Replace URLs using regex
scriptContent = scriptContent.replace(/(\{.*?id:\s*'([^']+)'[\s\S]*?driveUrl:\s*')([^']+)('[\s\S]*?\})/g, (match, prefix, id, oldUrl, suffix) => {
  if (linkMap[id]) {
    return prefix + linkMap[id] + suffix;
  }
  return match;
});

// Write back to script.js
fs.writeFileSync('script.js', scriptContent, 'utf8');
console.log('Links atualizados com sucesso no script.js!');
