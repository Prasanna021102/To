const express = require('express');
const cors = require('cors');
const app = express();
// ... other code

// Enable CORS for all routes
app.use(cors());

// ... rest of your code


// Store tasks in an in-memory array (for demonstration purposes)
let tasks = [];

// Endpoint to get all tasks
app.get('/tasks', (req, res) => {
  res.json(tasks);
});

// Endpoint to add a task
app.post('/tasks', (req, res) => {
  const task = req.body.task;
  if (task.trim() !== '') {
    tasks.push(task);
    res.status(201).send('Task added successfully');
  } else {
    res.status(400).send('Task cannot be empty');
  }
});

const PORT = 3000; // You can use any port you prefer
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
