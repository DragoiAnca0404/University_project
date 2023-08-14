import { Component, OnInit } from '@angular/core';
import { DisplayCoursesService } from 'src/app/shared/services/display-courses.service';
import { NgToastService } from 'ng-angular-popup';
import { UntypedFormControl, FormGroup, FormControl } from '@angular/forms'
import { PagingConfig } from 'src/app/models/paging-config';

@Component({
  selector: 'app-grades-subject-table',
  templateUrl: './grades-subject-table.component.html',
  styleUrls: ['./grades-subject-table.component.scss']
})
export class GradesSubjectTableComponent implements PagingConfig {
  users: any;
  message: any;
  bioSection: any;
  username: any;

  title = 'ngx-paging-sample';

  currentPage: number = 1;
  itemsPerPage: number = 5;
  totalItems: number = 0;

  tableSize: number[] = [5, 10, 15, 20];

  pagingConfig: PagingConfig = {} as PagingConfig;
  constructor(private shared: DisplayCoursesService, private toast: NgToastService) {
    this.getAllGrades();

    this.pagingConfig = {
      itemsPerPage: this.itemsPerPage,
      currentPage: this.currentPage,
      totalItems: this.totalItems
    }
    var params = {
      denumire_materie: this.message = this.shared.getMessage(),
    };

    this.bioSection = new FormGroup({
      id_user: new UntypedFormControl(),
      grade: new UntypedFormControl(''),
      denumire_materie: new FormControl(this.message)
    });
    this.username = localStorage.getItem('username');

    this.shared.displayGradesStudent(params, this.username).subscribe(data => {
      console.log("data", data);
      this.users = data
    })

   }
 

  ngOnInit(): void {
  }

  getAllGrades() {
    var params = {
      denumire_materie: this.message = this.shared.getMessage()
    };
    this.username = localStorage.getItem('username');

    this.shared.displayGradesStudent(params, this.username).subscribe(data => {
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

}
