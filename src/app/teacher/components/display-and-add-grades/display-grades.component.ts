import { Component } from '@angular/core';
import { DisplayCoursesService } from 'src/app/shared/services/display-courses.service';
import { NgToastService } from 'ng-angular-popup';
import { UntypedFormControl, FormGroup, FormControl } from '@angular/forms'
import { HttpErrorResponse } from '@angular/common/http';
import { PagingConfig } from 'src/app/models/paging-config';
import { StudentModel } from 'src/app/models/student-model.model';
import { DatePipe } from '@angular/common';


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
  studentobj: StudentModel = new StudentModel;
  posts:any;
  currentDate = new Date();




  btnUpdateShow: boolean = false;
  btnSaveShow: boolean = true;

  modalTitle: string = '';
  activateAddEditInspectionComponent: boolean = false;
  //inspection: any;
  value: any

  title = 'ngx-paging-sample';

  currentPage: number = 1;
  itemsPerPage: number = 5;
  totalItems: number = 0;

  inspection: any = {  // Asigurați-vă că obiectul "inspection" este declarat în cadrul clasei componentei
    id: 0,
    name: null,
    surname: null,
    grade: null,
  };

  tableSize: number[] = [5, 10, 15, 20];

  pagingConfig: PagingConfig = {} as PagingConfig;
  constructor(private shared: DisplayCoursesService, public datepipe: DatePipe,private datePipe: DatePipe, private toast: NgToastService) {
    this.getAllGrades();
    this.currentDate=new Date();
    const latest_date =this.datepipe.transform(this.currentDate, 'dd-MM-yyyy');
    console.log(latest_date);

    this.shared.displayIdSubject(this.message).subscribe(data => {
      console.log("data", data);
      this.posts = data
    })

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
      denumire_materie: new FormControl(this.message),
      data_nota: new FormControl(latest_date),
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

  get data_nota(): any {
    return this.bioSection.get('data_nota');
  }

  /*modalAdd() {
    this.inspection = {
      id: 0,
      name: null,
      surname: null,
      grade: null,
    }
    this.modalTitle = "Add New Grades";
    this.activateAddEditInspectionComponent = true;
    this.SaveShowBtn();
  }*/

  modalAdd() {
    this.clearFields();
   // this.bioSection.reset();
    this.bioSection.controls['grade'].reset();
    this.bioSection.controls['id_user'].reset();
    this.modalTitle = "Add New Grades";
    this.activateAddEditInspectionComponent = true;
    this.SaveShowBtn();

  }
  
  clearFields() {
    this.inspection = {
      id: 0,
      name: null,
      surname: null,
      grade: null,
    };
  }
  
  onEdit(data: any) {
    this.modalTitle = "Edit Grade";
    this.UpdateShowBtn();

    this.studentobj.id_Calificativ = data.id_grade;
    this.bioSection.controls['grade'].setValue(data.grade);
    this.bioSection.controls['id_user'].setValue(data.id_user);
  }

  UpdateStudent() {
    this.studentobj.id_materie =  this.posts.id_materie;
    this.studentobj.id_student = this.bioSection.value.id_user;
    this.studentobj.nota = this.bioSection.value.grade;
    this.studentobj.denumire_materie = this.bioSection.value.denumire_materie;
    this.studentobj.CurrentDateGrade = this.bioSection.value.data_nota;

    this.shared.updateGrades(this.studentobj, this.studentobj.id_Calificativ).subscribe(res => {
      alert("Data Updated");
      this.getAllGrades();
      let ref = document.getElementById('cancel');
      ref?.click();
     // this.UpdateShowBtn();
    })
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
          this.getAllGrades();
          alert('Form submitted successfully');
          this.toast.success({ detail: "ERROR", summary: 'Form submitted successfully', sticky: true });
          let ref = document.getElementById('cancel');
          ref?.click();
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