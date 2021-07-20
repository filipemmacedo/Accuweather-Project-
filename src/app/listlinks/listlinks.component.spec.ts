import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListlinksComponent } from './listlinks.component';

describe('ListlinksComponent', () => {
  let component: ListlinksComponent;
  let fixture: ComponentFixture<ListlinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListlinksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListlinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
