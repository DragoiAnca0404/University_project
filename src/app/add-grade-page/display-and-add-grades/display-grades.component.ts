import { Component, OnInit } from '@angular/core';
import { DisplayCoursesService } from 'src/app/shared/services/display-courses.service';
import { NgToastService } from 'ng-angular-popup';
import { UntypedFormGroup, UntypedFormControl, FormGroup, Validators, FormControl } from '@angular/forms'
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-display-grades',
  templateUrl: './display-grades.component.html',
  styleUrls: ['./display-grades.component.scss']
})

export class DisplayGradesComponent implements OnInit {
  message: any;
  users: any;
  isPopupOpened = true;
  displayUsers: any;
  bioSection: any

  


  constructor(private shared: DisplayCoursesService, private toast: NgToastService) {
    var params = {
      denumire_materie: this.message = this.shared.getMessage()
    };

    this.bioSection = new FormGroup({
      id_user: new UntypedFormControl(),
      grade: new UntypedFormControl(''),
      denumire_materie: new FormControl(this.message)
    });

    this.shared.displayGrades(params).subscribe(data => {
      console.log("data", data);
      this.users = data
    })

    this.shared.displayStudents(params).subscribe(data => {
      console.log("data", data);
      this.displayUsers = data
    })
  }

  ngOnInit(): void {
    //this.message = this.shared.getMessage();
   // this.bioSection = new FormGroup({
     // grade:new FormControl('', [Validators.max(10), Validators.min(1), Validators.required])
     // })
  }

  modalTitle: string = '';
  activateAddEditInspectionComponent: boolean = false;
  inspection: any;
  value:any

  getAllGrades() {
    var params = {
      denumire_materie: this.message = this.shared.getMessage()
    };

    this.shared.displayGrades(params).subscribe(data => {
      console.log("data", data);
      this.users = data
    })
  }

  setCountry() {
    this.bioSection.get("denumire_materie").setValue(this.message);
  };

  get grade (){
    return this.bioSection.get('grade');
  }

  get denumire_materie(): any {
    return this.bioSection.get('denumire_materie');
  }

  modalAdd() {
    this.inspection = {
      id: 0,
      name: null,
      surname: null,
      grade: null,
    }
    this.modalTitle = "Add New Grades";
    this.activateAddEditInspectionComponent = true;
  }

  updateData() {
    this.inspection = {
      id: 0,
      name: null,
      surname: null,
      grade: null,
    }
    this.modalTitle = "Add New Grades";
    this.activateAddEditInspectionComponent = true;
  }

  deleteGrade(id: any) {
    this.shared.deleteGrade(id).subscribe(id => {
      console.log("id", id);
      this.users = id
    })
  }

  callingFunction() {
    this.shared.addGrades(this.bioSection.value)
      .subscribe(
        (data) => {
          //console.log('Form submitted successfully');
          alert('Form submitted successfully');
          this.toast.success({ detail: "ERROR", summary: 'Form submitted successfully', sticky: true });
          let ref = document.getElementById('cancel');
          ref?.click();
          this.getAllGrades();
          this.bioSection.reset();
        },
        (error: HttpErrorResponse) => {
          this.toast.error({ detail: "ERROR", summary: 'Error while deleting this grade.', sticky: true });
        }
      );
  }

  deleteGradeForm(id: any) {
    this.shared.deleteGrade(id)
      .subscribe({
        next: (res) => {
          this.toast.success({ detail: "ERROR", summary: 'Record deleted successfully!', sticky: true });
          //alert("Grade Deleted Succesfully");
          this.getAllGrades();
        },
        error: () => {
          this.toast.error({ detail: "ERROR", summary: 'Error while deleting this grade.', sticky: true });
        }
      })
  }
}