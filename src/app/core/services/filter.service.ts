import { Injectable, signal } from '@angular/core';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  category = signal<Category>('shoes');
  searchTerm = signal('');

  selectCategory(category: Category) {
    this.category.set(category);
  }

  setSearchTerm(value: string) {
    this.searchTerm.set(value);
  }
}
