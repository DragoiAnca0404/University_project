import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  isPasswordHidded: boolean = true;
  showError:boolean;


  constructor(
    public authService: AuthService,
    public router: Router
  ) { }

  ngOnInit(): void {
  }

  changePasswordVisibility(): void {
    this.isPasswordHidded = !this.isPasswordHidded;
  }

  login(): void {
    const params = {
      username: this.username,
      password: this.password
    };

    this.authService.authenticate(params).subscribe(resp => {
      localStorage.setItem('jwt', resp.body.token);
      localStorage.setItem('name', resp.body.name);
      localStorage.setItem('surname', resp.body.surname);
      localStorage.setItem('role', resp.body.role);
      localStorage.setItem('username',resp.body.username)
      this.router.navigateByUrl('/main-page');
    },
    error =>{
      this.showError = true;
    });
  }
}
