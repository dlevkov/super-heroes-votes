import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SelectsSideComponent } from './selects-side/selects-side.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'select-side', component: SelectsSideComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
