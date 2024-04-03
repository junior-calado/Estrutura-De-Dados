import express from 'express';
import ProductController from '../Controllers/ProductController';

const router = express.Router();

router.post('/', ProductController.addProduct);
router.delete('/:id', ProductController.deleteProduct);
router.get('/:id', ProductController.getProduct);

export default router;
