// Define Teacher interface
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  readonly location: string;
  [key: string]: any; // Allows adding any additional attribute
}

// Define Directors interface extending Teacher
interface Directors extends Teacher {
  numberOfReports: number;
}

// Define PrintTeacherFunction interface for printTeacher function
interface PrintTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Define printTeacher function
const printTeacher: PrintTeacherFunction = (firstName, lastName) => {
  const firstInitial = firstName.charAt(0).toUpperCase();
  const fullName = `${firstInitial}. ${lastName}`;
  return fullName;
};

// Test the function
console.log(printTeacher("John", "Doe")); // Output: J. Doe

// Define interface for StudentClass constructor
interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClass;
}

// Define interface for StudentClass
interface StudentClass {
  workOnHomework(): string;
  displayName(): string;
}

// Define StudentClass
class StudentClassImpl implements StudentClass {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

// Test the StudentClass
const student = new StudentClassImpl("Alice", "Smith");
console.log(student.workOnHomework()); // Output: Currently working
console.log(student.displayName()); // Output: Alice
