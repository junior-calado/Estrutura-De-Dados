import { Request, Response } from 'express';
import Product, { Product as ProductModel } from '../Models/Product';

class ProductController {
    public async addProduct(req: Request, res: Response): Promise<void> {
        try {
            const { name, price, quantity } = req.body;
            const product: ProductModel = new Product({ name, price, quantity });
            await product.save();
            res.status(201).json(product);
        } catch (error) {
            res.status(400).send(error);
        }
    }

    public async deleteProduct(req: Request, res: Response): Promise<void> {
        try {
            const product = await Product.findByIdAndDelete(req.params.id);
            if (!product) {
                res.status(404).send();
            } else {
                res.send(product);
            }
        } catch (error) {
            res.status(500).send(error);
        }
    }

    public async getProduct(req: Request, res: Response): Promise<void> {
        try {
            const product = await Product.findById(req.params.id);
            if (!product) {
                res.status(404).send();
            } else {
                res.send(product);
            }
        } catch (error) {
            res.status(500).send(error);
        }
    }
}

export default new ProductController();

