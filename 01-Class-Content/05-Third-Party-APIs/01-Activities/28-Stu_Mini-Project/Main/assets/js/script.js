// save reference to important DOM elements
var timeDisplayEl = $('#time-display');
var projectDisplayEl = $('#project-display');
var projectFormEl = $('#project-form');
var projectNameInputEl = $('#project-name-input');
var projectTypeInputEl = $('#project-type-input');
var projectDateInputEl = $('#project-date-input');

// handle displaying the time
function displayTime() {
  var rightNow = dayjs().format('MMM DD, YYYY [at] hh:mm:ss a');
  timeDisplayEl.text(rightNow);
}

// Reads projects from local storage and returns array of project objects.
// Returns an empty array ([]) if there aren't any projects.
function readProjectsFromStorage() {
  var projects = localStorage.getItem('projects');
  if (projects) {
    projects = JSON.parse(projects);
  } else {
    projects = [];
  }
  return projects;
}

// Gets project data from local storage and displays it
function printProjectData() {
  // clear current projects on the page
  projectDisplayEl.empty();

  // get projects from localStorage
  var projects = readProjectsFromStorage();

  // loop through each project and create a row
  for (var i = 0; i < projects.length; i += 1) {
    // if the date of a project is in the past
    var project = projects[i];
    var projectDate = dayjs(project.date);
    var today = dayjs().startOf('day'); // get date/time for start of today

    var rowEl = $('<tr>');
    var nameEL = $('<td>').text(project.name);
    var typeEl = $('<td>').text(project.type);
    var dateEl = $('<td>').text(projectDate.format('MM/DD/YYYY'));
    var deleteEl = $(
      '<td><button class="btn btn-sm btn-delete-project">X</button></td>'
    );

    // add class to row by comparing project date to today's date
    if (projectDate.isBefore(today)) {
      rowEl.addClass('project-late');
    } else if (projectDate.isSame(today)) {
      rowEl.addClass('project-today');
    }

    // append elements to DOM to display them
    rowEl.append(nameEL, typeEl, dateEl, deleteEl);
    projectDisplayEl.append(rowEl);
  }
}

// Removes a project from local storage and prints the project data
function handleDeleteProject() {}

// Adds a project to local storage and prints the project data
function handleProjectFormSubmit(event) {
  event.preventDefault();

  // read user input from the form
  var projectName = projectNameInputEl.val().trim();
  var projectType = projectTypeInputEl.val(); // don't need to trim select input
  var projectDate = projectDateInputEl.val(); // yyyy-mm-dd format
  console.log(projectDate);

  var newProject = {
    name: projectName,
    type: projectType,
    date: projectDate,
  };

  // add project to local storage
  var projects = readProjectsFromStorage();
  projects.push(newProject);
  localStorage.setItem('projects', JSON.stringify(projects));

  // print project data
  printProjectData();
}

projectFormEl.on('submit', handleProjectFormSubmit);

displayTime();
setInterval(displayTime, 1000);

printProjectData();
