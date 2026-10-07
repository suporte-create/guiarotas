const fs = require('fs');
const content = fs.readFileSync('script.js', 'utf8');
const match = content.match(/const ROUTES_DATA = \[([\s\S]*?)\];/);

if (match) {
  const routesText = match[1];
  const regex = /\{([^}]+)\}/g;
  let match2;
  
  let csv = 'ID_da_Rota;Nome_da_Rota;Tipo;Link_Google_Drive\n';
  
  while ((match2 = regex.exec(routesText)) !== null) {
    const block = match2[1];
    
    // Safely extract properties
    const idMatch = block.match(/id:\s*'([^']+)'/);
    const titleMatch = block.match(/title:\s*'([^']+)'/);
    const typeMatch = block.match(/type:\s*'([^']+)'/);
    const urlMatch = block.match(/driveUrl:\s*'([^']+)'/);
    
    if (idMatch && titleMatch && typeMatch && urlMatch) {
      const id = idMatch[1];
      const title = titleMatch[1];
      const type = typeMatch[1];
      const url = urlMatch[1];
      
      csv += `${id};${title};${type};${url}\n`;
    }
  }
  
  // Write CSV with BOM for Excel compatibility
  fs.writeFileSync('rotas_mapeamento.csv', '\uFEFF' + csv, 'utf8');
  console.log('CSV file generated successfully!');
} else {
  console.log('Failed to parse ROUTES_DATA');
}
