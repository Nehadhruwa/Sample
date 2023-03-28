import { Component } from '@angular/core';
import { Department } from 'src/Models/Department';
import { Employee } from 'src/Models/Employee';
import { Skills } from 'src/Models/Skills';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-emp-add',
  templateUrl: './emp-add.component.html',
  styleUrls: ['./emp-add.component.css']
})
export class EmpAddComponent {
e:Employee={Eid:100,Ename:"Neha",Salary:45000,DOj: new Date("04/05/2023"),Dept:{DeptID:1,DeptName:"EEE",},
Skill:[{SkillID:2212,SkillName:"Java",SkillCredits:4}]};
emps:Employee[];
depts:Department[];
deptID:number;
Skills:Skills[];
SkillIDs:number[];
constructor(private empservice:EmpService){
this.emps=empservice.getAllEmployees();
this.depts=empservice.getAllDepartments();
this.Skills=empservice.getAllSkills();
}
AddNew():void{
  this.e.Dept=this.depts[this.deptID-1];
  this.SkillIDs.forEach(element=>{this.e.Skill.push(this.Skills[element-1])});
  this.empservice.AddEmployee(this.e);
}

}
