class HolbertonCourse {
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = [];

    // Verify and set students only if it's an array
    if (Array.isArray(students)) {
      this._students = students;
    } else {
      console.error('Error: Students should be an array.');
    }
  }

  // Getter and setter for name
  get name() {
    return this._name;
  }

  set name(value) {
    if (typeof value === 'string') {
      this._name = value;
    } else {
      console.error('Error: Name should be a string.');
    }
  }

  // Getter and setter for length
  get length() {
    return this._length;
  }

  set length(value) {
    if (typeof value === 'number') {
      this._length = value;
    } else {
      console.error('Error: Length should be a number.');
    }
  }

  // Getter and setter for students
  get students() {
    return this._students;
  }

  set students(value) {
    if (Array.isArray(value)) {
      this._students = value;
    } else {
      console.error('Error: Students should be an array.');
    }
  }
}

export default HolbertonCourse;
