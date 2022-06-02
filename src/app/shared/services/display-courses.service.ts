import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DisplayCoursesService {
  message:string;

  constructor(private httpClient: HttpClient) { }

  defaultBeUrl: string = environment.backendUrl;

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
    return this.httpClient.get(`${this.defaultBeUrl}/GradesDisplay`,{params: requestParams});

  }

  addGrades(params: any): Observable<any> {
    return this.httpClient.post(`${this.defaultBeUrl}/AddGrade`,params);
  }
  

}
