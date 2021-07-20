import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarArticleComponent } from './sidebar-article.component';

describe('SidebarArticleComponent', () => {
  let component: SidebarArticleComponent;
  let fixture: ComponentFixture<SidebarArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarArticleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
