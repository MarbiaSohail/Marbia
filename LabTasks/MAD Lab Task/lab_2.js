// Activity #01: 

// const round = (...args) => {
//     const arr = [];
//     args.forEach((element, index) => {
//       arr[index] = Math.round(element);
//     });
//     return arr;
//   };
  
//   console.log(round(1.2, 4.3, 7.7));
  
   
// Activity #02:
// floor=(...args)=>{ 
//     arr=[] 
//     args.forEach((element,index)=>{ 
//     arr[index]=Math.floor(element); 
//     }) 
//     return arr;}
//     genericOpertaions=(operation,...args)=>{ 
//      if(operation==='round'){ 
//      return round(...args); 
//      }
//      else if(operation==='abs'){ 
//      return abs(...args) }
//      else if(operation==='ceil'){
//      return ceil(...args) }
//      else if(operation==='floor'){
//      return floor(...args) }
//      else{ 
//      return "Invalid Operation" 
//     }
//     }
//     console.log(genericOpertaions('floor',1.3,2.4,3.6,4.2,5.5));   


// LAB ACTIVITY #01:
// STUDENT MANAGEMENT SYSTEM

function Person(name="null", age=0, gender="Unknown") {
    this.name = name;
    this.age = age;
    this.gender = gender;
}

function Student(name, age, gender, studentId= "Unknown", courses=[]) {
    Person.call(this, name, age, gender);
    this.studentId = studentId;
    this.courses = courses;
}

function Employee(name, age, gender, department="Unknown", designation="Unknown", salary=0) {
    Person.call(this, name, age, gender);
    this.department = department;
    this.designation = designation;
    this.salary = salary;
}

function Teacher(name, age, gender, department, designation, salary, subject="Unknown") {
    Employee.call(this, name, age, gender, department, designation, salary);
    this.subject = subject;
}

function Staff(name, age, gender, department, designation, salary, role="Unknown"){
    Employee.call(this, name, age, gender, department, designation, salary);
    this.role = role;
}

function Courses(courseName) {
    this.courseName = courseName;
}

let student1 = new Student("Marbia", 21, "Female", "sp21-bse-17", "MAD");
let student2 = new Student("Ramza", 20, "Female", "sp21-bse-024", "ECA");

let teacher = new Teacher("Kamran", 38, "Male", "CS", "Professor", 100000, "MAD")
let teacher2 = new Teacher("Shehzad", 50, "Male", "CS", "Professor", 100000, "ItDS" )

let staff = new Staff("Raza", 40, "Male", "EE", "Staff", 50000, "any")
let staff2 = new Staff("Sara", 45, "Female", "Management", "staff", 35000, "any")

// DISPLAYING INFORMATION

console.log("   INFORMATION OF STUDENTS: ")
console.log("Student1: ",student1);
console.log("Student2: ",student2);
console.log("   INFORMATION OF TEACHERS: ")
console.log(teacher);
console.log(teacher2);
console.log("   INFORMATION OF STAFF: ")
console.log(staff);
console.log(staff2)


// LAB ACTIVITY #02:

// BASE CLASS:
class Employee {
    constructor(name = "", dept = "general") {
        this.name = name;
        this.dept = dept;
    }
}

class Manager extends Employee {
    constructor(name = "", dept = "general", reports = []) {
        super(name, dept);
        this.reports = reports;
    }
}

class WorkerBee extends Employee {
    constructor(name = "", dept = "general", projects = []) {
        super(name, dept);
        this.projects = projects;
    }
}

class SalesPerson extends WorkerBee {
    constructor(name = "", dept = "sales", projects = [], quota = 100) {
        super(name, dept, projects);
        this.quota = quota;
    }
}

class Engineer extends WorkerBee {
    constructor(name = "", dept = "engineering", projects = [], machine = "") {
        super(name, dept, projects);
        this.machine = machine;
    }
}

