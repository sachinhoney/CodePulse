import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators,FormsModule } from '@angular/forms';
import { AddCategoryRequest } from '../models/add-category-request.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-category',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './add-category.component.html',
  styleUrl: './add-category.component.css'
})
export class AddCategoryComponent {
   categoryForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.categoryForm = this.fb.group({
      name: ['', Validators.required],
      urlHandle: ['', Validators.required]
    });
  }
onSubmit(): void {
    if (this.categoryForm.valid) {
      console.log('Category submitted:', this.categoryForm.value);
      this.categoryForm.reset();
    } else {
      console.warn('Form is invalid');
    }
  }
}
