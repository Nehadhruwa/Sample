import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooktickComponent } from './booktick.component';

describe('BooktickComponent', () => {
  let component: BooktickComponent;
  let fixture: ComponentFixture<BooktickComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BooktickComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BooktickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
