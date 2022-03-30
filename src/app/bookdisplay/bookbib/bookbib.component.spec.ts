import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookbibComponent } from './bookbib.component';

describe('BookbibComponent', () => {
  let component: BookbibComponent;
  let fixture: ComponentFixture<BookbibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookbibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookbibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
