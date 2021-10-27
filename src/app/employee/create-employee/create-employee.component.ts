
import { EmployeeService } from 'src/app/service/employee.service';
import { Employee } from 'src/app/model/employee.model';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { FormGroup}  from '@angular/forms';



@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  employee: Employee = new Employee();
  submitted = false;
  form = new FormGroup({
    
  })

  constructor(private employeeService: EmployeeService,
    private router: Router) { }

  ngOnInit() {

  }


  onSubmit() {
    this.submitted = true;
    this.employeeService.createEmployee(this.employee)
    .subscribe(data => console.log(data), error => console.log(error));
    this.employee = new Employee();
    this.router.navigate(['/employees']);
  }

 
}

 

  


  
    
  
  


