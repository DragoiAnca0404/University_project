import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DisplayGrade } from './display-grade.model';

@Injectable({
  providedIn: 'root'
})
export class DisplayCoursesService {
  message:string;
  formData: DisplayGrade= {
    id_user: 0,
    denumire_materie : "",
    grade : 0
  };

  constructor(private httpClient: HttpClient) { }

  defaultBeUrl: string = environment.backendUrl;

  addGrades(data: any): Observable<any> {
    return this.httpClient.post(`${this.defaultBeUrl}/add`, data, { responseType: 'text' });
  }

  updateGrades(data:any, id:number): Observable<any> {
    //return this.httpClient.put(`${this.defaultBeUrl}/api/UpdateGrade/`+ id,data, data, { responseType: 'text' });
    return this.httpClient.put(`${this.defaultBeUrl}/UpdateGrade/`+ id, data);
  }

  displayCourses(params: any): Observable<any> {
    let requestParams = new HttpParams();
    requestParams = requestParams.append('username', params.username);
    return this.httpClient.get(`${this.defaultBeUrl}/CoursesDisplay`,{params: requestParams});
  }

  setMessage(data:any){
    this.message=data
  }
  
  getMessage(){
    return this.message
  }

  displayGrades(params: any): Observable<any> {
    let requestParams = new HttpParams();
    requestParams = requestParams.append('denumire_materie', params.denumire_materie);
    return this.httpClient.get(`${this.defaultBeUrl}/GradesDisplay/ViewGradesTeacher`,{params: requestParams});
  }

  displayStudents(params: any): Observable<any> {
    let requestParams = new HttpParams();
    requestParams = requestParams.append('denumire_materie', params.denumire_materie);
    return this.httpClient.get(`${this.defaultBeUrl}/DisplayStudents`,{params: requestParams});
  }

  displayIdSubject(params: any): Observable<any> {

    let requestParams = new HttpParams();
    requestParams = requestParams.append('denumire_materie', params);
    return this.httpClient.get(`${this.defaultBeUrl}/DisplayIdSubject`,{params: requestParams});
 }

 displayAllSubjects(params: any): Observable<any> {

  let requestParams = new HttpParams();
  requestParams = requestParams.append('username', params.username);
  return this.httpClient.get(`${this.defaultBeUrl}/GradesDisplay/ViewSubjects`,{params: requestParams});
}

displayAllGradesOneSubject(params: any): Observable<any> {

  let requestParams = new HttpParams();
  requestParams = requestParams.append('username', params.username);
  return this.httpClient.get(`${this.defaultBeUrl}/GradesDisplay/ViewSubjects`,{params: requestParams});
}

  deleteGrade(params:any): Observable<any>{
    let requestParams = new HttpParams();
    requestParams = requestParams.append('id', params);
    return this.httpClient.delete(`${this.defaultBeUrl}/DeleteGradeStudent`,{params: requestParams});
  }
}