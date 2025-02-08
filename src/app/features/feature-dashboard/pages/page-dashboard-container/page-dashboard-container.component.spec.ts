import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDashboardContainerComponent } from './page-dashboard-container.component';

describe('PageDashboardContainerComponent', () => {
  let component: PageDashboardContainerComponent;
  let fixture: ComponentFixture<PageDashboardContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageDashboardContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageDashboardContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
