import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SublinksComponent } from './sublinks.component';

describe('SublinksComponent', () => {
  let component: SublinksComponent;
  let fixture: ComponentFixture<SublinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SublinksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SublinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
