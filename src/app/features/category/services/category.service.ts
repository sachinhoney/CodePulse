import { Injectable } from '@angular/core';
import { AddCategoryRequest } from '../models/add-category-request.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  addCategory(model: AddCategoryRequest): Observable<void> {
    // Here you would typically make an HTTP request to your backend API
    // For demonstration purposes, we'll just log the model to the console
    return this.http.post<void>('https://api.example.com/categories', model);
  }
}
