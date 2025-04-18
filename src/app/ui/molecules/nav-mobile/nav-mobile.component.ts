import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-nav-mobile',
  imports: [],
  templateUrl: './nav-mobile.component.html',
  styleUrl: './nav-mobile.component.scss',
})
export class NavMobileComponent {
  isMenuOpen = signal(false);

  categories: { id: number; name: string }[] = [
    {
      id: 1,
      name: 'shoes',
    },
    {
      id: 2,
      name: 'bags',
    },
  ];

  activeCategory = signal<{ id: number; name: string }>(this.categories[0]);

  onSelectCategory(itemId: number) {
    this.activeCategory.set(this.categories.find(({ id }) => id === itemId)!);
  }

  toggleMenu() {
    this.isMenuOpen.update((prev) => !prev);
  }
}
