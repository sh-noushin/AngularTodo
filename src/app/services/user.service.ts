import { Injectable } from '@angular/core';
import { User } from '../models/user-model';
import { HttpClient } from '@angular/common/http';
import { UserResponse } from '../models/user-response';
import { Observable, Subject } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class UserService {

  public formData = new User();
  constructor(private http: HttpClient) { }

  readonly APIUrl = 'https://localhost:5001';


  getUserist(filterText: string, skipCount: number, maxResultCount: number, sorting: string): Observable<UserResponse> {
    var t: any = "";
    t = localStorage.getItem('token');
    return this.http.get<UserResponse>(this.APIUrl + '/Users?FilterText=' + filterText + '&SkipCount=' +
      skipCount + '&MaxReasultCount=' + maxResultCount + '&Sorting=' + sorting

      // {
      //     headers: {
      //         'Token': t
      //     }
      //   }

    );
    // .s
    // pipe(
    //    map((data: CategoryResponse) => {
    //      return data;
    //    }), catchError( error => {
    //      return throwError( 'Something went wrong!' );
    //    })
    // )
  }





  addCategory(user: User) {

    return this.http.post(this.APIUrl + '/Users', user,
      { responseType: 'text' });
  }
  deleteUser(id: number) {
    return this.http.delete(this.APIUrl + '/Users/' + id, { responseType: 'text' });
  }

  updateUser(user: User) {
    this.http.put(this.APIUrl + '/Users/' + user.id, user, { responseType: 'text' }).subscribe(res => {


    });

  }
  private _listeners = new Subject<any>();
  listen(): Observable<any> {
    return this._listeners.asObservable();

  }

  filter(filterBy: string) {
    this._listeners.next(filterBy);
  }
}

