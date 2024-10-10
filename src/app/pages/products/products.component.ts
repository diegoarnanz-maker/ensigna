import { Component, OnInit } from '@angular/core';
import { ProductComponent } from "../../components/product/product.component";
import { Product, Products } from '../../../types';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ProductComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit{
  products: Product[] = [];

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.loadProducts();
  }

  private loadProducts() {
    this.productsService.getProducts('https://fakestoreapi.com/products', { page: 1, perPage: 20 }) 
      .subscribe((response: Products) => {
        this.products = response.items;
        console.log('All Products:', this.products);
      }, error => {
        console.error('Error fetching products:', error);
      });
  }

}
