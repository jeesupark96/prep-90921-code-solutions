var person = {
  firstName: "Jeesu",
  lastName: "Park",
  hobby: "basketball",
};
console.log(person);
var fullName = (person.firstName + " " + person.lastName);
console.log("The person's name is: " + fullName + ".")
person.job = "coder";
console.log("The person's current job is: " + person.job + ".");
person.previousJob = "pastor";
console.log("The person's previous job is: " +person.previousJob + ".");
console.log(person);
