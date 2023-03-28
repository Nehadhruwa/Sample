import { Component } from '@angular/core';
import { Employee } from 'src/Models/Employee';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-emplist',
  templateUrl: './emplist.component.html',
  styleUrls: ['./emplist.component.css']
})
export class EmplistComponent {
e:Employee={Eid:121,Ename:"Medusa",Salary:12121210,DOj:new Date("09/02/1898"),Dept:{DeptID:2323,DeptName:"ECE"},
Skill:[{SkillID:2212,SkillName:"Java",SkillCredits:4}]};
emp:Employee[];

constructor(private empservice:EmpService){
 //this.e={Eid:174,Ename:"zes",Salary:12000,DOj:new Date("09/13/1971")};

}
ngOnInit():void{
  this.emp=this.empservice.getAllEmployees();
}
AddNew():void{
  this.empservice.AddEmployee(this.e);
}
}
