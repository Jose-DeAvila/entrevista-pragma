import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { PagesModule } from './pages/pages.module';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    PagesModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
