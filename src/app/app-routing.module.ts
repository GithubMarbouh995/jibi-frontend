import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PostListComponent} from "./posts/post-list/post-list.component";
// import {AuthGuard} from "./auth/auth-guard";
import {PostCreateComponent} from "./posts/post-create/post-create.component";
import {LoginComponent} from "./auth/login/login.component";
import {SignupComponent} from "./auth/signup/signup.component";
import {DashboardComponent} from "./dashboard-component/dashboard.component";
import {TestComponent} from "./test-component/test.component";
import {HelpComponent} from "./help/help.component";
import {CompteClientComponent} from "./compte-client/compte-client.component";
import {BillPaymentComponent} from "./bill-payment/bill-payment.component";
import {HomeComponent} from "./home/home.component";
import {CreateAgencyComponent} from "./create-agency/create-agency.component";
import {PaiementHomeComponent} from "./paiement-home/paiement-home.component";
import {PaimentFormComponent} from "./paiment-form/paiment-form.component";
import {PaiementRecapitulatifComponent} from "./paiement-recapitulatif/paiement-recapitulatif.component";

const routes: Routes = [

  { path: 'list', component: PostListComponent,
    // canActivate: [AuthGuard]
  },

  /**
   * Guarded route, before its activation system checks if
   * the user is logged in via authGuard route guard.
   */
  { path: 'create', component: PostCreateComponent,
    // canActivate: [AuthGuard]
  },

  /**
   * Defining path as 'sth/:postId' we are defing dynamic part of URL from which data should be taken
   *  */
  { path: 'edit/:postId', component: PostCreateComponent,
    // canActivate: [AuthGuard]
  },

  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'dash', component: DashboardComponent,
    // canActivate: [AuthGuard]
  },
  { path: 'test', component: TestComponent },
  { path: 'help', component: HelpComponent,
    // canActivate: [AuthGuard]
  },
  // { path: '**', redirectTo: '/' },
  { path: 'client', component: CompteClientComponent,},
  { path: 'bill', component: BillPaymentComponent,},
  { path: '', component: HomeComponent,
    // canActivate: [AuthGuard]
  },
   { path: 'agency', component: CreateAgencyComponent,},
   { path: 'paiement', component: PaiementHomeComponent,},
    {path: 'paiement/form', component: PaimentFormComponent,},
    {path: 'paiement/recapitulatif', component: PaiementRecapitulatifComponent,}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
