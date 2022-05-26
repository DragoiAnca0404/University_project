import { Component, OnInit } from '@angular/core';
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
    public coursesService: DisplayCoursesService
  ) { 
    const params = {
      username:localStorage.getItem('username'),
    };

    this.coursesService.displayCourses(params).subscribe(data=>{
      console.log("data",data);
      this.courses=data
    }) 
  
  }
  
  ngOnInit(): void {
    this.username = localStorage.getItem('username');
  }
}
