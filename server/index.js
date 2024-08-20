const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  if (username === 'user' && password === 'password') {
    res.json({ success: true });
  } else {
    res.json({ success: false });
  }
});

app.post('/api/shortest-path', (req, res) => {
  const { source, via, destination } = req.body;
  // Mock shortest path calculation
  res.json({
    path: [source, via, destination],
    directions: 'Mock directions here...'
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
