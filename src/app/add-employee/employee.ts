export class Employee {
  private readonly Name: string;
  private readonly Salary: number;
  private readonly Designation: string;
  constructor(name: string, sal: number, desg: string) {
    this.Name = name;
    this.Salary = sal;
    this.Designation = desg;
  }
}

