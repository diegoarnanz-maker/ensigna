import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-work',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule 
  ],
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent {
  form: FormGroup; 
  images = [
    { 
      title: 'PEOPLE', 
      img: 'assets/img-work/1.jpg', 
      alt: 'Description 1', 
      text: 'Operating in an ever evolving global market, the company hires its employees with an international approach, respecting and evaluating diversity in its social and cultural widest concept.' 
    },
    { 
      title: 'CAREER PATHS', 
      img: 'assets/img-work/2.jpg', 
      alt: 'Description 2', 
      text: 'Career Paths are an individual’s journey towards self-expression. Working at the Ensigna Group means to develop and experiment one’s skills through the creative interaction between people and the fruitful contamination of ideas.' 
    },
    { 
      title: 'REMUNERATION AND RETENTION POLICY', 
      img: 'assets/img-work/3.jpg', 
      alt: 'Description 3', 
      text: 'People are a fundamental component of the success of our Group. In the selection phase, we look for profiles with unique characteristics and skills, such as preparation, curiosity, entrepreneurial spirit, adaptability to new situations and changes, creativity and proactivity.' 
    },
    { 
      title: 'ENSIGNA GROUP ACADEMY', 
      img: 'assets/img-work/4.jpg', 
      alt: 'Description 4', 
      text: 'Our company is founded on a multiplicity of knowledge and techniques in constant evolution, rooted in a wealth of skills consolidated over time.' 
    },
    { 
      title: 'MEET THE ENSIGNA GROUP', 
      img: 'assets/img-work/5.jpg', 
      alt: 'Description 5', 
      text: 'The Ensigna Group is synonymous with innovation, transformation, and independence. With an heritage of more than one hundred years, the company is committed to promote a business culture oriented towards sustainability.' 
    },
    { 
      title: 'SEA BEYOND', 
      img: 'assets/img-work/6.jpg', 
      alt: 'Description 6', 
      text: 'SEA BEYOND is a project by Ensigna Group conducted in partnership with the Intergovernmental Oceanographic Commission of UNESCO (UNESCO-IOC) since 2019 to raise awareness of sustainability and ocean preservation.' 
    },
  ];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      mobile: ['', [Validators.required, Validators.pattern('^[0-9]{9}$')]], 
      cv: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.form.valid) {
      console.log(this.form.value);
      Swal.fire({
        title: 'Success!',
        text: 'Your application has been submitted.',
        icon: 'success',
        confirmButtonText: 'OK'
      });
      this.resetForm();
    }
  }

  resetForm() {
    this.form.reset();
  }
}
