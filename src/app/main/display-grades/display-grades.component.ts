import { Component, OnInit } from '@angular/core';
import { DisplayCoursesService } from 'src/app/shared/services/display-courses.service';

@Component({
  selector: 'app-display-grades',
  templateUrl: './display-grades.component.html',
  styleUrls: ['./display-grades.component.scss']
})
export class DisplayGradesComponent implements OnInit {
message:any
users:any

  constructor(private shared:DisplayCoursesService ) {
    const params = {
      username: this.message=this.shared.getMessage()

    };


    this.shared.displayGrades(params).subscribe(data=>{
      console.log("data",data);
      this.users=data
    }) 

   }


  ngOnInit(): void {
    this.message=this.shared.getMessage()
  }
}
