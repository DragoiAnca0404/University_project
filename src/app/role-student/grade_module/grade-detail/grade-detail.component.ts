import { Component, OnInit } from '@angular/core';
import { DisplayCoursesService } from 'src/app/shared/services/display-courses.service';

@Component({
  selector: 'app-grade-detail',
  templateUrl: './grade-detail.component.html',
  styleUrls: ['./grade-detail.component.scss']
})
export class GradeDetailComponent implements OnInit {

user: any;

  constructor() {

    this.user = {
      name: 'Foo Bar',
      title: 'Software Developer',
      address: '1234 Main St, City, State, 100010',
      phone:[
      '123-123-1234',
      '456-456-4567']
    }

   }

  ngOnInit(): void {
  }
}
