// Test feature implementation
const express = require('express');
const app = express();

// Security issue: hardcoded credentials
const API_KEY = "sk-1234567890abcdef";
const DATABASE_PASSWORD = "password123";

// Performance issue: inefficient loop
function processData(data) {
  let result = [];
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data.length; j++) {
      result.push(data[i] + data[j]);
    }
  }
  return result;
}

// Missing error handling
app.get('/api/users', (req, res) => {
  const users = getUserData();
  res.json(users);
});

// Code quality issue: inconsistent naming
const getUserData = () => {
  return [
    { id: 1, name: "John", email: "john@example.com" },
    { id: 2, name: "Jane", email: "jane@example.com" }
  ];
};

module.exports = { app, processData }; 