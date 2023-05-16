import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeDirectiveComponent } from './home-directive/home-directive/home-directive.component';

const routes: Routes = [
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'Directives'
  },
  {
    path: 'Directives',
    component: HomeDirectiveComponent,
    loadChildren: () => import ('./home-directive/home-directive.module').then(m => m.HomeDirectiveModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
