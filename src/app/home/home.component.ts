import { Component, OnInit } from '@angular/core';

// ************************* SERVICES ***********************************
import { StudentService } from '../../services/student.service';
// ************************* SERVICES ***********************************

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  public rows = [];
  public columns = [];

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.getStudents();
    this.rows = [];
    this.columns = [{ prop: '_id' }, { prop: 'firstName' }, { prop: 'lastName' }];
  }


  getStudents(){

    //Consuming service
    this.studentService.getStudents().subscribe(
      data => {

        this.rows = data


      }, 
      
      error => {   
        console.log(error)
      });
    //Consuming service
  }


}
