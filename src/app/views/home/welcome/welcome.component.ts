import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  constructor(private router: Router,private keycloakService: KeycloakService) { }

  ngOnInit(): void {
  }

  showProfile(): void {
    this.router.navigateByUrl('/profile');

  }

register(){
  this.keycloakService.register().then(res => {
    console.log(res,'res')
  })
}
Signin(){
  this.keycloakService.login();
}

}
