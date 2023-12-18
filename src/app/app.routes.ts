import {Routes} from "@angular/router";
import {AuthComponent} from "./auth/auth.component";
import {HomeComponent} from "./home/home.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {AdminGuard} from "./auth/admin.guard";

export const routes: Routes = [
  {
    path: 'auth', component: AuthComponent,
  },
  {
    path: 'home', component: HomeComponent,
  },
  {
    path: 'dashboard', component: DashboardComponent, canActivate: [AdminGuard]
  },
  {
    path: '', redirectTo: 'home', pathMatch: 'full',
  }
];
