import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteRetaurantComponent } from './delete-retaurant.component';

describe('DeleteRetaurantComponent', () => {
  let component: DeleteRetaurantComponent;
  let fixture: ComponentFixture<DeleteRetaurantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteRetaurantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteRetaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
