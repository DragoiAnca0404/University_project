import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private httpClient: HttpClient
  ) { }

  defaultBeUrl: string = environment.backendUrl;
  private UserRole    = new BehaviorSubject<any>(localStorage.getItem('role'));


  isUserAuthenticated(): boolean {
    const token = localStorage.getItem('jwt');
    return !!token;
  }

  authenticate(params: any): Observable<any> {
    let requestParams = new HttpParams();
    requestParams = requestParams.append('username', params.username);
    
    return this.httpClient.post(`${this.defaultBeUrl}/login`,{'password':params.password}, {params: requestParams, observe: 'response'});
  }

  displayDetails(params: any): Observable<any> {

    let requestParams = new HttpParams();
    requestParams = requestParams.append('username', params.username);


    return this.httpClient.get(`${this.defaultBeUrl}/UserDisplay`,{params: requestParams});

  }

  get currentUserRole() 
  {
      return this.UserRole.asObservable();
  }
  
}
