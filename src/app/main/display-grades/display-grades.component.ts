import { Component, OnInit } from '@angular/core';
import { DisplayCoursesService } from 'src/app/shared/services/display-courses.service';

@Component({
  selector: 'app-display-grades',
  templateUrl: './display-grades.component.html',
  styleUrls: ['./display-grades.component.scss']
})
export class DisplayGradesComponent implements OnInit {
message:any
  constructor(private shared:DisplayCoursesService ) { }

  ngOnInit(): void {
    this.message=this.shared.getMessage()
  }

}
