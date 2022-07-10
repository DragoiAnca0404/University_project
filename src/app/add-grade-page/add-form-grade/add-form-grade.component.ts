import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms'
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
  displayUsers:any;
  bioSection:any
  
  constructor(public shared:DisplayCoursesService ) {
    const params = {
      denumire_materie: this.denumire_materie=this.shared.getMessage()
    };
    
    this.bioSection = new FormGroup({
      id_user: new FormControl(),
      grade: new FormControl(''),
      denumire_materie: new FormControl(this.denumire_materie)
    });
   

    this.shared.displayGrades(params).subscribe(items=>{
      console.log("items",items);
      this.users=items
    }) 

    this.shared.displayStudents(params).subscribe(data=>{
      console.log("data",data);
      this.displayUsers=data
    }) 
   }

  ngOnInit(): void {

  }
 /*callingFunction() {
    console.log(this.bioSection.value);
   }*/

 callingFunction() {
    this.shared.addGrades(this.bioSection.value)
    .subscribe(
        (data) => {
           console.log('Form submitted successfully');
        },
        (error: HttpErrorResponse) => {
            console.log(error);
        }
    );
  }

}


