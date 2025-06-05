const express = require('express');
const app = express();
const productsRouter = require('./routes/products');

app.use(express.json());
app.use('/products', productsRouter);

const PORT = process.env.PORT || 3000;
if (process.env.NODE_ENV !== 'test') {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

module.exports = app;