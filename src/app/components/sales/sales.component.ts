import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RatingModule } from 'primeng/rating';
import { Product } from '../../../types';

@Component({
  selector: 'app-sales',
  standalone: true,
  imports: [
    RatingModule,
    FormsModule
  ],
  templateUrl: './sales.component.html',
  styleUrl: './sales.component.scss'
})
export class SalesComponent {

  @Input() product!: Product;
  @Output() productOut: EventEmitter<Product> = new EventEmitter<Product>();

}
