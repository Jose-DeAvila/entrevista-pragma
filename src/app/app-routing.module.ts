import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from './guards/auth-guard.guard';
import { DashboardComponent } from './components/templates/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { PagesModule } from './pages/pages.module';
import { MyProductsComponent } from './pages/my-products/my-products.component';
import { TransactionsComponent } from './pages/transactions/transactions.component';
import { ProductsComponent } from './pages/products/products.component';
import { RequestsComponent } from './pages/requests/requests.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuardGuard],
    children: [
      {
        path: '',
        redirectTo: 'my-products',
        pathMatch: 'full'
      },
      {
        path: 'my-products',
        component: MyProductsComponent
      },
      {
        path: 'transactions',
        component: TransactionsComponent
      },
      {
        path: 'products',
        component: ProductsComponent
      },
      {
        path: 'requests',
        component: RequestsComponent
      }
    ]
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    PagesModule
  ],
  exports: [RouterModule],
  providers: [AuthGuardGuard]
})
export class AppRoutingModule {}
