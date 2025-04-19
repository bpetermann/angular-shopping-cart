import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  Category,
  PRODUCT_CATEGORIES,
} from '../../../core/models/category.model';
import { NavMobileComponent } from './nav-mobile.component';

describe('NavMobileComponent', () => {
  let component: NavMobileComponent;
  let fixture: ComponentFixture<NavMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavMobileComponent],
      providers: [
        {
          provide: PRODUCT_CATEGORIES,
          useValue: ['shoes', 'bags'] as Category[],
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(NavMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
