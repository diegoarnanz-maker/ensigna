import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-info',
  standalone: true,
  imports: [
    RouterModule,
    FormsModule,
    CommonModule
  ],
  templateUrl: './info.component.html',
  styleUrl: './info.component.scss'
})
export class InfoComponent {

  email: string = '';
  termsAccepted: boolean = false;
  isEmailValid: boolean = true;
  emailTouched: boolean = false;

  checkEmail() {
    this.isEmailValid = this.email.includes('@');
  }
  onSubmit() {

    if (this.isEmailValid && this.termsAccepted) {
      console.log(`Email submitted: ${this.email}`);
      Swal.fire({
        title: 'Thank you!',
        text: 'You have subscribed successfully.',
        icon: 'success',
        confirmButtonText: 'OK'
      });
      
      this.resetForm();
    }
  }

  resetForm() {
    this.email = '';
    this.termsAccepted = false;
    this.isEmailValid = true;
    this.emailTouched = false;
  }
}
