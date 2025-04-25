import { ComponentFixture, TestBed } from '@angular/core/testing';

import {
  Category,
  PRODUCT_CATEGORIES,
} from '../../../../core/models/category.model';
import { NavBarComponent } from './nav-bar.component';

describe('NavBarComponent', () => {
  let component: NavBarComponent;
  let fixture: ComponentFixture<NavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavBarComponent],
      providers: [
        {
          provide: PRODUCT_CATEGORIES,
          useValue: ['shoes', 'bags'] as Category[],
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(NavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
