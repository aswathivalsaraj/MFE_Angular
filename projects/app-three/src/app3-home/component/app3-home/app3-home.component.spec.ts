import { ComponentFixture, TestBed } from '@angular/core/testing';

import { App3HomeComponent } from './app3-home.component';

describe('App3HomeComponent', () => {
  let component: App3HomeComponent;
  let fixture: ComponentFixture<App3HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App3HomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(App3HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
