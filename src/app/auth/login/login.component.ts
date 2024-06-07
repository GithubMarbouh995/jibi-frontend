import {Component} from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AgentService } from 'src/app/service/agent.service';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/service/authentication.service';
// import { AuthService } from '../auth.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  isLoading = false;
  password: string='';
  email: string='';
  constructor(
    private agentService: AgentService,
    private route: ActivatedRoute,
    private router: Router,
    private authenticateService: AuthenticationService
  ) {}
  onLogin(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.isLoading = true;
    // this.authService.login(form.value.email, form.value.password);
  }
  valider(){
    this.agentService.agentInfosVerification(this.email, this.password).subscribe(
      (response) => {
        console.log(response);
        if(response){
          console.log('login success');
          localStorage.setItem('email',this.email);
          this.router.navigate(['change_password']);
        } else {
          console.log('login failed');
          alert('login failed');
        }
      },
      (error) => {
        console.log('error');
      }
    );
  }
  // valider(){
  //   this.authenticateService.authenticate({email: this.email,password: this.password}).subscribe({
  //     next: (response) => {
  //       console.log(response);
  //       if(response){
  //         console.log('login success');
  //         localStorage.setItem('email',this.email);
  //         this.router.navigate(['change_password']);
  //       } else {
  //         console.log('login failed');
  //         alert('login failed');
  //       }
  //     },
  //     error: (error) => {
  //       console.log('error');
  //     }
  //   });
  //   }
  }
