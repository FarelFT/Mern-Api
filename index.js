const express = require('express');
const bodyParser = require('body-parser');

const authRoutes = require('./src/routes/authRoutes');
const blogRoutes = require('./src/routes/blogRoutes');

const app = express();

// Body-Parser
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE,PATCH, OPTIONS'
  );
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

// Routes
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/blog', blogRoutes);

app.use((error, req, res, next) => {
  const status = error.errorStatus || 500;
  const message = error.message;
  const data = error.data;
  res.status(status).json({
    message,
    data,
  });
});

app.listen(3000);
