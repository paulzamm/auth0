import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  
  constructor(public auth: AuthService, private router:Router){}
  
  ngOnInit(): void {
    this.auth.isAuthenticated$.subscribe(isAthenticated => {
      if(isAthenticated){
        this.router.navigate(['/home']);
      }
    })    
  }

  logout(){
    this.auth.logout();
  }

  login(){
    this.auth.loginWithRedirect();
  }
}
