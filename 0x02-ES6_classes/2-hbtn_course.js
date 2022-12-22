<<<<<<< HEAD
export default class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  get name() {
    return this._name;
  }

  set name(val) {
    if (typeof val !== 'string') { throw new TypeError('Name must be a string'); }
    this._name = val;
  }

  get length() {
    return this._length;
  }

  set length(val) {
    if (typeof val !== 'number') { throw new TypeError('Length must be a number'); }
    this._length = val;
  }

  get students() {
    return this._students;
  }

  set students(val) {
    if (!Array.isArray(val)) { throw new TypeError('Students must be an array'); }
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < val.length; i++) {
      if (typeof val[i] !== 'string') { throw new TypeError('Students must be an array of strings'); }
    }
    this._students = val;
  }
}
=======
export default class HolbertonCourse{
    constructor(name, length, students) {
        if (typeof name !== 'string') {
          throw new TypeError('Name must be a string');
        } else if (typeof length !== 'number') {
          throw new TypeError('Length must be a number');
        } else if (!Array.isArray(students) || !students.every((e) => typeof e === 'string')) {
          throw new TypeError('Students must be an array of strings');
        }
    
        this._name = name;
        this._length = length;
        this._students = students;
      }

      //getters
      get name() {
        return this._name;
      }
    
      get length() {
        return this._length;
      }
    
      get students() {
        return this._students;
      }
    //setters
    set name(name) {
        if (typeof name !== 'string') {
          throw new TypeError('Name must be a string');
        }
        this._name = name;
      }
    
      set length(length) {
        if (typeof length !== 'number') {
          throw new TypeError('Length must be a number');
        }
        this._length = length;
      }
    
      set students(students) {
        if (!Array.isArray(students) || !students.every((e) => typeof e === 'string')) {
          throw new TypeError('Students must be an array of strings');
        }
        this._students = students;
      }
}
>>>>>>> 04cc9869c06be16a96863a8ec74783d69ecfdaa3
