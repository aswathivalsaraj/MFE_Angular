import { ComponentFixture, TestBed } from '@angular/core/testing';

import { App2DashboardComponent } from './app2-dashboard.component';

describe('App2DashboardComponent', () => {
  let component: App2DashboardComponent;
  let fixture: ComponentFixture<App2DashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App2DashboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(App2DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
