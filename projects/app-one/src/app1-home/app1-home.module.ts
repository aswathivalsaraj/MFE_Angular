import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule, Routes } from '@angular/router';
import { AppHomeComponent } from './app-home/app-home.component';
const routes: Routes = [{ path:"", component: AppHomeComponent}]

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ]
})
export class App1HomeModule { }
