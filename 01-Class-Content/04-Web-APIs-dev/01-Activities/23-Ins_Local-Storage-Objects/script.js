var name = document.getElementById("names")
var grade = document.getElementById("grades")
var comment = document.getElementById("msg")
var saveButton = document.querySelector("#save")

saveButton.addEventListener("click", function(event) {
event.preventDefault();

var studentGrade = {
  name: name.value,
  grade: grade.value,
  comment: comment.value.trim()
}
localStorage.setItem("studentGrade", JSON.stringify(studentGrade));
});
