import { Component, OnInit } from '@angular/core';

// ************************* SERVICES ***********************************
import { StudentService } from '../../services/student.service';
// ************************* SERVICES ***********************************

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public student: string;

  public rows = [];
  public columns = [];

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.rows = [];
    this.columns = [{ prop: '_id' }, { prop: 'firstName' }, { prop: 'lastName' }];
  }


  search(){
    // console.log(this.student);

    //Consuming service
    this.studentService.findStudent(this.student).subscribe(
      data => {
        console.log(data)
        this.rows = data;
      }, 
      
      error => {   
        console.log(error)
      });
    //Consuming service
  }

}
