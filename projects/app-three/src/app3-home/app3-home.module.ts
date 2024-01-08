import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { App3HomeComponent } from './component/app3-home/app3-home.component';

const routes: Routes = [{path: "", component: App3HomeComponent}]

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ]
})
export class App3HomeModule { }
