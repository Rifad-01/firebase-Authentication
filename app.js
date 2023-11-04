const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const indexRoutes = require('./routes');

app.use('/api', indexRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
