import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  name:any;
  surname:any;
  role:any;
  constructor(private router : Router) { }

  ngOnInit(): void {
    this.name = localStorage.getItem('name');
    this.surname = localStorage.getItem('surname');
    this.role = localStorage.getItem('role');
  }

  logout(){
    localStorage.removeItem('jwt');
    this.router.navigate(['/login']);
  }
}
