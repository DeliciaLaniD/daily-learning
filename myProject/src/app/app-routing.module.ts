import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { ReactiveFormComponent } from './pages/reactive-form/reactive-form.component';


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent
  },
  {
    path: 'editor',
    component: ReactiveFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
