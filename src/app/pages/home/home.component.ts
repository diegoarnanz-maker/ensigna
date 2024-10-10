import { Component } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { ProductComponent } from "../../components/product/product.component";
import { Product, Products } from '../../../types';
import { CommonModule } from '@angular/common';
import { SalesComponent } from "../../components/sales/sales.component";
import { InfoComponent } from '../../components/info/info.component';
import { BannerComponent } from '../../components/banner/banner.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ProductComponent, 
    CommonModule, 
    SalesComponent,
    InfoComponent,
    BannerComponent,
    RouterLink
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'] 
})
export class HomeComponent {
  products: Product[] = [];
  sales: Product[] = [];

  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    // Llamada a la API para obtener productos
    this.loadProducts(1, 8);
    
    // Llamada a la API para obtener productos en oferta
    this.loadSales(1, 3);
  }

  private loadProducts(page: number, limit: number) {
    this.productsService.getProducts('https://fakestoreapi.com/products', { page, perPage: limit })
      .subscribe((response: Products) => {
        this.products = response.items;
        console.log('Products:', this.products); // Debug: Verifica los productos
      }, error => {
        console.error('Error fetching products:', error);
      });
  }

  private loadSales(page: number, limit: number) {
    this.productsService.getSales('https://fakestoreapi.com/products', { page, perPage: limit })
      .subscribe((response: Products) => {
        this.sales = response.items;
        console.log('Sales:', this.sales); // Debug: Verifica las ventas
      }, error => {
        console.error('Error fetching sales:', error);
      });
  }

}
