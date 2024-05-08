// Node.js Express server
const express = require('express');
const app = express();
let serverCount = 0; // This should be kept in sync with actual server count
let usersWithPremium = {}; // This should be kept in sync with actual premium info

app.get('/api/botinfo', (req, res) => {
  res.json({
    serverCount: serverCount,
    usersWithPremium: usersWithPremium,
  });
});

// Populate serverCount and usersWithPremium according to your data here

app.listen(3000, () => console.log('Server running'));
