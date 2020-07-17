import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }

  public getStudents() {
    return this.http.get<any>('http://localhost:3001/student')
    .pipe(map(data => {
        return data;
        }));
  }

  public findStudent(request:any) {
    return this.http.get<any>('http://localhost:3001/find/' + request)
    .pipe(map(data => {
        return data;
        }));
  }

}
