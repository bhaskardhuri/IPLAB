const express = require('express');
const fs = require('fs');
const app = express();

app.use(express.text({ type: 'application/xml' })); // read XML body as text
app.use(express.static(__dirname));                  // serves index.html

// GET: send the XML file
app.get('/students', (req, res) => {
  res.type('application/xml').send(fs.readFileSync('students.xml', 'utf8'));
});

// POST: receive one <student> XML and add it to the file
app.post('/students', (req, res) => {
  let xml = fs.readFileSync('students.xml', 'utf8');
  xml = xml.replace('</students>', req.body + '\n</students>');
  fs.writeFileSync('students.xml', xml);
  res.send('Saved');
});

app.listen(3000, () => console.log('http://localhost:3000'));