import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './shared/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'University';
  
  constructor(
    public authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.routeToMainPage();
  }

  routeToMainPage():void {
    this.router.navigateByUrl('/main-page');
  }
}
