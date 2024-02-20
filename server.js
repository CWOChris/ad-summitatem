const express = require('express');
const noteRoutes = require('./routes/noteRoutes');
const htmlRoutes = require('./routes/htmlRoutes');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/ad-summitatem/api/notes', noteRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`);
});