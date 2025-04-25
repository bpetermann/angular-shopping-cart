import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  Category,
  PRODUCT_CATEGORIES,
} from '../../../../core/models/category.model';
import { FilterService } from '../../../../core/services/filter.service';

@Component({
  selector: 'app-nav-mobile',
  imports: [FormsModule],
  templateUrl: './nav-mobile.component.html',
  styleUrl: './nav-mobile.component.scss',
})
export class NavMobileComponent {
  isMenuOpen = signal(false);

  filterService = inject(FilterService);
  categories = inject(PRODUCT_CATEGORIES);
  searchValue = this.filterService.searchTerm;
  activeCategory = this.filterService.category;

  onSelectCategory(category: Category) {
    this.filterService.selectCategory(category);
  }

  setSearchText(value: string) {
    this.filterService.setSearchTerm(value);
  }

  toggleMenu() {
    this.isMenuOpen.update((prev) => !prev);
  }
}
