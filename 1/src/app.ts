import express from 'express';
import mongoose from 'mongoose';
import productRoutes from './Routes/productRoutes';

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/inventory', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('Connected to MongoDB'))
    .catch(error => console.error('MongoDB connection error:', error));


const app = express();

app.use(express.json());

// Routes
app.use('/product', productRoutes);

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));
