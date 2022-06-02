import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DisplayCoursesService } from 'src/app/shared/services/display-courses.service';

@Component({
  selector: 'app-add-form-grade',
  templateUrl: './add-form-grade.component.html',
  styleUrls: ['./add-form-grade.component.scss']
})
export class AddFormGradeComponent implements OnInit {

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

  addItem() {
    const val = {
      denumire_materie: this.message=this.shared.getMessage(),
      id_user:this.id,
      grade:this.grade,
    };
    this.shared.addGrades(val).subscribe(res => {
      alert(res.toString());
      console.log("res",res);
      this.users=res
    })
  
  }


  ngOnInit(): void {
    this.id = this.grades.id;
    this.name = this.grades.name;
    this.surname = this.grades.surname;
    this.grade = this.grades.grade;
  }

}


