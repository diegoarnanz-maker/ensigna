import { Component, Input } from '@angular/core';
import { BlogPost } from '../../../types';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  @Input() post!: BlogPost;
  @Input() onClose!: () => void;

  isOpen = true; 

  close() {
    this.isOpen = false;
    this.onClose(); 
  }
}
