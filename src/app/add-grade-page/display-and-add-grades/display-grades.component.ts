import { Component } from '@angular/core';
import { DisplayCoursesService } from 'src/app/shared/services/display-courses.service';
import { NgToastService } from 'ng-angular-popup';
import { UntypedFormControl, FormGroup, FormControl } from '@angular/forms'
import { HttpErrorResponse } from '@angular/common/http';
import { PagingConfig } from 'src/app/models/paging-config';

@Component({
  selector: 'app-display-grades',
  templateUrl: './display-grades.component.html',
  styleUrls: ['./display-grades.component.scss']
})

export class DisplayGradesComponent implements PagingConfig {
  message: any;
  users: any;
  isPopupOpened = true;
  displayUsers: any;
  bioSection: any;
  formValue!: FormGroup;

  btnUpdateShow: boolean = false;
  btnSaveShow: boolean = true;

  modalTitle: string = '';
  activateAddEditInspectionComponent: boolean = false;
  inspection: any;
  value: any

  title = 'ngx-paging-sample';

  currentPage: number = 1;
  itemsPerPage: number = 5;
  totalItems: number = 0;

  tableSize: number[] = [5, 10, 15, 20];
  //grades = new Array<Grades>();

  pagingConfig: PagingConfig = {} as PagingConfig;

  constructor(private shared: DisplayCoursesService, private toast: NgToastService) {
    this.getAllGrades();

    this.pagingConfig = {
      itemsPerPage: this.itemsPerPage,
      currentPage: this.currentPage,
      totalItems: this.totalItems
    }

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
  }

  getAllGrades() {
    var params = {
      denumire_materie: this.message = this.shared.getMessage()
    };

    this.shared.displayGrades(params).subscribe(data => {
      console.log("data", data);
      this.users = data
      this.pagingConfig.totalItems = data.length;
    })
  }

  onTableDataChange(event: any) {
    this.pagingConfig.currentPage = event;
    this.getAllGrades();
  }
  onTableSizeChange(event: any): void {
    this.pagingConfig.itemsPerPage = event.target.value;
    this.pagingConfig.currentPage = 1;
    this.getAllGrades();
  }

  setValueSubject() {
    this.bioSection.get("denumire_materie").setValue(this.message);
  };

  get grade() {
    return this.bioSection.get('grade');
  }

  get id_user() {
    return this.bioSection.get('id_user');
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
    //this.UpdateShowBtn();
    this.SaveShowBtn();
  }


  EditStudent(data: any) {
    this.activateAddEditInspectionComponent = true;
    this.formValue.controls['denumire_materie'].setValue(data.denumire_materie);
    this.formValue.controls['name'].setValue(data.name);
    this.formValue.controls['surname'].setValue(data.surname);
    this.formValue.controls['grade'].setValue(data.grade);
    this.formValue.controls['id_grade'].setValue(data.id_grade);
    this.UpdateShowBtn();
  }

  UpdateStudent() {
    this.inspection = {
      id: 0,
      name: null,
      surname: null,
      grade: null,
    }
    this.modalTitle = "Update New Grades";
    this.activateAddEditInspectionComponent = true;
    this.SaveShowBtn();

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

  UpdateShowBtn() {
    this.btnUpdateShow = true;
    this.btnSaveShow = false;
  }

  SaveShowBtn() {
    this.btnUpdateShow = false;
    this.btnSaveShow = true;
  }
}