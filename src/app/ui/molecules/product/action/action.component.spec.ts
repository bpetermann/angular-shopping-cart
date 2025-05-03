import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentRef } from '@angular/core';
import { ActionComponent } from './action.component';

describe('ActionComponent', () => {
  let component: ActionComponent;
  let componentRef: ComponentRef<ActionComponent>;
  let fixture: ComponentFixture<ActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ActionComponent);
    component = fixture.componentInstance;
    componentRef = fixture.componentRef;
    componentRef.setInput('product', {
      id: '1',
      name: 'Test Product',
      description: 'A test item',
      price: 99.99,
    });
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
