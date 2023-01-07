function Print() {}

Print.prototype.print = function () {
  console.log(this.name);
};

function Student(name) {
  this.name = name;
}

Student.prototype = Object.create(Print.prototype);

const student = new Student('MD');
student.print();
