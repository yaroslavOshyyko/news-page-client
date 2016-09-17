import {Routes, RouterModule} from '@angular/router';
import {HomePageComponent} from "./homePageComponent/home-page.component";
import {AdminLoginComponent} from "./adminLoginComponent/admin-login.component";

const appRoutes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'admin',
    component: AdminLoginComponent
  },
  {
    path: '**',
    redirectTo: '/',
    pathMatch: 'full'
  }

];

export const routing = RouterModule.forRoot(appRoutes);