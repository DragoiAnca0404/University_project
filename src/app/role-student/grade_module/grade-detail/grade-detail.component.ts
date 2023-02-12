import { Component, OnInit } from '@angular/core';
import { DisplayCoursesService } from 'src/app/shared/services/display-courses.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-grade-detail',
  templateUrl: './grade-detail.component.html',
  styleUrls: ['./grade-detail.component.scss']
})
export class GradeDetailComponent implements OnInit {

user: any;
subjects:any;
username: any;



  constructor(private shared: DisplayCoursesService, private router: Router) {
    const params = {
      username: localStorage.getItem('username'),
    };

    this.user = {
      name: 'Foo Bar',
      title: 'Software Developer',
      address: '1234 Main St, City, State, 100010',
      phone:[
      '123-123-1234',
      '456-456-4567']
    }

    this.shared.displayAllSubjects(params).subscribe(data => {
      console.log("data", data);
      this.subjects = data
    })

   }

  ngOnInit(): void {
  }

  onSelect(item: any) {
    this.router.navigate(['/add-grades', item.denumire_materie]);
    this.shared.setMessage(item.denumire_materie)
  }
}
