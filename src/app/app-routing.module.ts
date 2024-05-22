import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
import {AgencySidebarComponent} from "./agency-sidebar/agency-sidebar.component";
import {ClientHomeComponent} from "./client-home/client-home.component";
import {AdminHomeComponent} from "./admin-home/admin-home.component";

const routes: Routes = [



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
    {path: 'paiement/recapitulatif', component: PaiementRecapitulatifComponent,},
    {path: 'agency-home', component: AgencySidebarComponent,},
  { path: 'client-home', component: ClientHomeComponent,},
  { path: 'admin-home', component: AdminHomeComponent,},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
