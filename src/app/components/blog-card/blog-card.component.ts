import { Component, Input } from '@angular/core';
import { BlogPost } from '../../../types';
import { RouterLink } from '@angular/router';
import { ModalComponent } from "../modal/modal.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blog-card',
  standalone: true,
  imports: [
    RouterLink,
    ModalComponent,
    CommonModule
],
  templateUrl: './blog-card.component.html',
  styleUrl: './blog-card.component.scss'
})
export class BlogCardComponent {
  isModalOpen: boolean = false;

  @Input() post!: BlogPost;

  openModal() {
    console.log('open modal');
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }
  
}
