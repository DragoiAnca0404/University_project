import { Component, OnInit } from '@angular/core';
import { DisplayCoursesService } from 'src/app/shared/services/display-courses.service';

@Component({
  selector: 'app-display-grades',
  templateUrl: './display-grades.component.html',
  styleUrls: ['./display-grades.component.scss']
})
export class DisplayGradesComponent implements OnInit {
message:any
users:any

  constructor(private shared:DisplayCoursesService ) {
    const params = {
      denumire_materie: this.message=this.shared.getMessage()
    };

    this.shared.displayGrades(params).subscribe(data=>{
      console.log("data",data);
      this.users=data
    }) 
   }

  ngOnInit(): void {
    this.message=this.shared.getMessage()
  }

  modalTitle:string = '';
  activateAddEditInspectionComponent:boolean = false;
  inspection:any;

getAllGrades(){
  const params = {
    denumire_materie: this.message=this.shared.getMessage()
  };

  this.shared.displayGrades(params).subscribe(data=>{
    console.log("data",data);
    this.users=data
  })
}

  modalAdd() {
    this.inspection = {
      id:0,
      name:null,
      surname:null,
      grade:null
    }
    this.modalTitle = "Add New Grades";
    this.activateAddEditInspectionComponent = true;
  }

  deleteGrade(id:any){
    this.shared.deleteGrade(id).subscribe(id=>{
      console.log("id",id);
      this.users=id
    }) 
  }
  deleteGradeForm(id:any){
    this.shared.deleteGrade(id)
    .subscribe({
      next:(res)=>{
        alert("Grade Deleted Succesfully");
        this.getAllGrades();
      },
        error:()=>{
          alert("Error while deleting this grade.")
        }
    })
  }
}