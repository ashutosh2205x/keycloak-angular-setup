import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './components/main-page/main-page.component';
import { ProtectedRouteComponent } from './components/protected-route/protected-route.component';
import { authGuard } from './guards/auth.guard';
import { UnprotectedRouteComponent } from './components/unprotected-route/unprotected-route.component';
import { LogoutScreenComponent } from './components/logout-screen/logout-screen.component';
import { NotFoundComponent } from './components/not-found/not-found.component';


export enum AppRoutes {
  Main = '',
  Protected = 'protected',
  Unprotected = 'unprotected',
  Logout = 'logout',
  NotFound = '404',
}
export const routes: Routes = [
  {
    path: AppRoutes.Main,
    pathMatch: 'full',
    component: MainPageComponent,
  },
  {
    path: AppRoutes.Protected,
    canActivate: [authGuard],
    component: ProtectedRouteComponent,
  },
  {
    path: AppRoutes.Unprotected,
    component: UnprotectedRouteComponent,
  },
  {
    path: AppRoutes.Logout,
    component: LogoutScreenComponent,
  },
  {
    path: AppRoutes.NotFound,
    component: NotFoundComponent,
  },
  {
    path: '**',
    redirectTo: AppRoutes.NotFound,
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
