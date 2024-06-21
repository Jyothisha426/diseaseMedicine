const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  if (req.url === '/' && req.method === 'GET') {
    fs.readFile(path.join(__dirname, 'public', 'index.html'), 'utf8', (err, content) => {
      if (err) {
        console.error(err);
        res.writeHead(500);
        res.end('Server Error');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(content);
      }
    });
  } else if (req.url === '/styles.css' && req.method === 'GET') {
    fs.readFile(path.join(__dirname, 'public', 'styles.css'), 'utf8', (err, content) => {
      if (err) {
        console.error(err);
        res.writeHead(500);
        res.end('Server Error');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/css' });
        res.end(content);
      }
    });
  } else if (req.url === '/scripts.js' && req.method === 'GET') {
    fs.readFile(path.join(__dirname, 'public', 'scripts.js'), 'utf8', (err, content) => {
      if (err) {
        console.error(err);
        res.writeHead(500);
        res.end('Server Error');
      } else {
        res.writeHead(200, { 'Content-Type': 'application/javascript' });
        res.end(content);
      }
    });
  } else if (req.url === '/get_diseases' && req.method === 'POST') {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });
    req.on('end', () => {
      const { age, symptoms } = JSON.parse(body);

      // Mock logic to find matching diseases based on age and symptoms
      const diseasesData = require('./data.json'); // Assuming data.json exists with diseases data
      const matchedDiseases = diseasesData.filter(disease => {
        return (
          disease.age_of_onset === 'All ages' ||
          (disease.age_of_onset.startsWith('Typically') && parseInt(disease.age_of_onset.split(' ')[1]) <= age) ||
          (parseInt(disease.age_of_onset.split(' ')[2]) <= age)
        ) && disease.symptoms.some(s => symptoms.includes(s));
      });

      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(matchedDiseases));
    });
  } else {
    res.writeHead(404);
    res.end('Not Found');
  }
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
