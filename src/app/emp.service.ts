import { Injectable } from '@angular/core';
import { Department } from 'src/Models/Department';
import { Employee } from 'src/Models/Employee';
import { Skills } from 'src/Models/Skills';

@Injectable({
  providedIn: 'root'
})
export class EmpService {
  Depts:Department[]=[
    {DeptID:1,DeptName:"EEE"},
    {DeptID:2,DeptName:"ECE"},
    {DeptID:3,DeptName:"CSE"},
    {DeptID:4,DeptName:"IT"}
  ]
  SKills:Skills[]=[
    {SkillID:1,SkillName:"Java",SkillCredits:3},
    {SkillID:2,SkillName:"Python",SkillCredits:3},
    {SkillID:3,SkillName:"C++",SkillCredits:4},
    {SkillID:4,SkillName:"C",SkillCredits:6},
    {SkillID:5,SkillName:"SQL",SkillCredits:9}
  ]
  e:Employee={Eid:190,Ename:"Neha",Salary:45000,DOj: new Date("04/05/2023"),Dept:{DeptID:3001,DeptName:"EEE"},
  Skill:[{SkillID:11,SkillName:"Java",SkillCredits:2},{SkillID:21,SkillName:"Python",SkillCredits:3}]};
  emp:Employee[] = [
    {Eid:100,Ename:"Neha",Salary:45000,DOj: new Date("04/05/2023"),
    Dept:{DeptID:1,DeptName:"EEE"},
    Skill:[{SkillID:11,SkillName:"Java",SkillCredits:2},{SkillID:21,SkillName:"Python",SkillCredits:3}]},
    {Eid:10,Ename:"Jammy",Salary:55000,DOj: new Date("08/05/2023"),
    Dept:{DeptID:2,DeptName:"ECE"},
    Skill:[{SkillID:11,SkillName:"Java",SkillCredits:2},{SkillID:21,SkillName:"Python",SkillCredits:3},{SkillID:19,SkillName:"JS",SkillCredits:3}]},
    {Eid:1,Ename:"Jimmy",Salary:65000,DOj: new Date("04/09/2023"),
    Dept:{DeptID:3,DeptName:"CSE"},
    Skill:[{SkillID:11,SkillName:"Java",SkillCredits:2},{SkillID:41,SkillName:".Net",SkillCredits:3}]}
  ]
  constructor(){}
  getAllEmployees():any{
    return this.emp;
  }
  AddEmployee(e:Employee){
    this.emp.push(e);
  }
  getAllDepartments(){
    return this.Depts;
  }
  getAllSkills(){
    return this.SKills;
  }

}
