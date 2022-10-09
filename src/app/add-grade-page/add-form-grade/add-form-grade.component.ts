import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup,UntypedFormControl } from '@angular/forms'
import { DisplayCoursesService } from 'src/app/shared/services/display-courses.service';
import { NgToastService } from 'ng-angular-popup';

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

  constructor(public shared:DisplayCoursesService, private toast: NgToastService  ) {
    const params = {
      denumire_materie: this.denumire_materie=this.shared.getMessage()
    };

    this.bioSection = new UntypedFormGroup({
      id_user: new UntypedFormControl(),
      grade: new UntypedFormControl(''),
      denumire_materie: new UntypedFormControl(this.denumire_materie)
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

  getAllGrades(){
    const params = {
      denumire_materie: this.denumire_materie=this.shared.getMessage()
    };

    this.shared.displayGrades(params).subscribe(data=>{
      console.log("data",data);
      this.users=data
    })
  }

 /*callingFunction() {
    console.log(this.bioSection.value);
   }*/

 callingFunction() {
    this.shared.addGrades(this.bioSection.value)
    .subscribe(
        (data) => {
           //console.log('Form submitted successfully');
           alert('Form submitted successfully');
           this.toast.success({detail:"ERROR",summary:'Form submitted successfully',sticky:true});
           let ref = document.getElementById('cancel');
           ref?.click();
           //this.bioSection.reset();
           this.getAllGrades();
        },
        (error: HttpErrorResponse) => {
          this.toast.error({detail:"ERROR",summary:'Error while deleting this grade.',sticky:true});
        }
    );
  }
}