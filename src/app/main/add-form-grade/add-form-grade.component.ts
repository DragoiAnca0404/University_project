import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { DisplayCoursesService } from 'src/app/shared/services/display-courses.service';
@Component({
  selector: 'app-add-form-grade',
  templateUrl: './add-form-grade.component.html',
  styleUrls: ['./add-form-grade.component.scss']
})
export class AddFormGradeComponent implements OnInit {
  id_user: number;
  grade:number;
  grades:any;
  denumire_materie:any;
  users:any;

  constructor(public shared:DisplayCoursesService ) {
    const params = {
      denumire_materie: this.denumire_materie=this.shared.getMessage()
    };
    shared.formData.denumire_materie
   

    this.shared.displayGrades(params).subscribe(data=>{
      console.log("data",data);
      this.users=data
    }) 
   }

  ngOnInit(): void {

  }

  addItem(form: NgForm) {
    this.shared.addGrades().subscribe(
      res => {
        console.log(res);
      }
    )
  }
}


