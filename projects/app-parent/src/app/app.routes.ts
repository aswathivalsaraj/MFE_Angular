import { Routes } from '@angular/router';
import { AdminHomeComponent } from './component/admin-home/admin-home.component';
export const routes: Routes = [
    {
        path:"",  component:AdminHomeComponent
    },
    {
        path:"app1", loadChildren: ()=>import("appOne/module").then((c)=>c.App1HomeModule)
    },
    {
        path:"app2", loadChildren: ()=>import("appTwo/module").then((c)=>c.App2HomeModule)
    },
    {
        path:"app3", loadChildren: ()=>import("appThree/module").then((c)=>c.App3HomeModule)
    }
];
