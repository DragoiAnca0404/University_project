import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DisplayCoursesService } from 'src/app/shared/services/display-courses.service';

@Component({
  selector: 'app-add-grades',
  templateUrl: './add-grades.component.html',
  styleUrls: ['./add-grades.component.scss']
})
export class AddGradesComponent implements OnInit {
  courses:any;
  username:any;

   constructor(
    public coursesService: DisplayCoursesService, private router: Router
  ) { 
    const params = {
      username:localStorage.getItem('username'),
    };

    this.coursesService.displayCourses(params).subscribe(data=>{
      console.log("data",data);
      this.courses=data
    }) 
  
  }
  
  //$event will hold value and other reference.
//data(data: string) {
 // this.router.navigate(['/users/edit/',item.]);}

  ngOnInit(): void {
    this.username = localStorage.getItem('username');
  }
  onSelect(item:any){
    this.router.navigate(['/add-grades',item.denumire_materie]);
    this.coursesService.setMessage(item.denumire_materie)
  }
}
