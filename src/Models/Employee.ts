import { Department } from "./Department";
import { Skills } from "./Skills";

export interface Employee
{
    Eid:number;
    Ename:string;
    Salary:number;
    DOj:Date;
    Dept:Department;
    Skill:Skills[];
}