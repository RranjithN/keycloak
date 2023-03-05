import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isUserlogged:any;
  constructor(private keycloakService: KeycloakService) { }

  ngOnInit(){
    this.keycloakService.isLoggedIn().then(res => {
      console.log(res,'reess');
      this.isUserlogged = res;
    })
  }
  
  register(){
    this.keycloakService.register();
  }
  Signin(){
    this.keycloakService.login();
  }

  logout(): void {
    this.keycloakService.logout('http://localhost:4200');
  }

}
