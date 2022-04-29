import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoekenlijstComponent } from './boekenlijst/boekenlijst.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'boekenlijst', component: BoekenlijstComponent},
  { path: 'logout', component: LogoutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}