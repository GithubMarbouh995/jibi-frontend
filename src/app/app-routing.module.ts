import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PostListComponent} from "./posts/post-list/post-list.component";
import {AuthGuard} from "./auth/auth-guard";
import {PostCreateComponent} from "./posts/post-create/post-create.component";
import {LoginComponent} from "./auth/login/login.component";
import {SignupComponent} from "./auth/signup/signup.component";
import {DashboardComponent} from "./dashboard-component/dashboard.component";
import {TestComponent} from "./test-component/test.component";
import {HelpComponent} from "./help/help.component";

const routes: Routes = [

  { path: 'list', component: PostListComponent, canActivate: [AuthGuard] },

  /**
   * Guarded route, before its activation system checks if
   * the user is logged in via authGuard route guard.
   */
  { path: 'create', component: PostCreateComponent, canActivate: [AuthGuard] },

  /**
   * Defining path as 'sth/:postId' we are defing dynamic part of URL from which data should be taken
   *  */
  { path: 'edit/:postId', component: PostCreateComponent, canActivate: [AuthGuard] },

  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: '', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'test', component: TestComponent },
  { path: 'help', component: HelpComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '/' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
