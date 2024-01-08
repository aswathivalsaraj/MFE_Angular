import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-home',
  standalone: true,
  imports: [],
  templateUrl: './admin-home.component.html',
  styleUrl: './admin-home.component.scss'
})
export class AdminHomeComponent {
  constructor(private router: Router){

  }
  public navigateTo(routePath: any): void{
    console.log("Path from parent: ", routePath, typeof(routePath))
    this.router.navigateByUrl(routePath)
  }
}
