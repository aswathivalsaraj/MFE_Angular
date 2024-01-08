import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { App2DashboardComponent } from './app2-dashboard/app2-dashboard.component';


const routes: Routes = [{ path:"", component: App2DashboardComponent}]
@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ]
})
export class App2HomeModule { }
