import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DisplayCoursesService } from 'src/app/shared/services/display-courses.service';

@Component({
  selector: 'app-add-form-grade',
  templateUrl: './add-form-grade.component.html',
  styleUrls: ['./add-form-grade.component.scss']
})
export class AddFormGradeComponent implements OnInit {

  /*inspectionList$!: Observable<any[]>;
  statusList$!: Observable<any[]>;
  inspectionTypesList$!: Observable<any[]>;*/
  message:any;
  users:any;

  constructor(private shared:DisplayCoursesService ) {
    const params = {
      denumire_materie: this.message=this.shared.getMessage()
    };

    this.shared.displayGrades(params).subscribe(data=>{
      console.log("data",data);
      this.users=data
    }) 
   }

  @Input() grades:any;
  id: number=0;
  name:string="";
  surname:string="";
  grade:number;

  ngOnInit(): void {
    this.id = this.grades.id;
    this.name = this.grades.name;
    this.surname = this.grades.surname;
    this.grade = this.grades.grade;
  }

}
