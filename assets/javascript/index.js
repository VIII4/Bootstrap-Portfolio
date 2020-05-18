//#region HTML elements

//#endregion

//#region Variables

//#endregion

//#region Objects
function ProjectDetails(name, roles, images, techs, bullets) {
  this.name = name;
  this.roles = roles;
  this.images = images;
  this.techs = techs;
  this.bullets = bullets;
}

var seniorPets = new ProjectDetails(
  // Project Name
  "SeniorPets",
  // Role
  "Frontend Developer",
  // Image file location
  [],
  // Techs used
  ["html", "bootstrap", "mysql", "handlebars"],
  // Bullets
  [
    "CRUD blajaj an lj;k h;hkg ;k ;a ",
    "hgjljhfljhf ljf ljyf  ljf luyf l oyg ",
    "lkugljh gljhf gluyfv",
  ]
);

//#endregion

//#region Functions

function slideBody(target) {
  $("html,body").animate(
    {
      scrollTop: $(target).offset().top,
    },
    "slow"
  );
}

function handleNavLinkClick() {
  event.preventDefault();
  slideBody($(this).data("target"));
}

function handleFilterClick() {
  var filter = $(this).data("filter");

  $(".project-panel").each(function () {
    var tags = $(this).data("tags").split(" ");

    if (filter === "all" || tags.includes(filter)) {
      $(this).show();
    } else {
      $(this).hide();
    }
  });
}

function handleDetailsClick() {
  console.log($(this).data("project"));
  /*
    get info from button, get check all project details for matching name,
    create modal content. Clear modal content on close 
  */
}

function handleCloseModalClick() {
  //Clear modal content
}

//#endregion

//#region Events

$().ready(function () {
  //Nav Link clicked slide to target
  $(".nav-main").click(handleNavLinkClick);
  $(".nav-filter").click(handleFilterClick);
  $(".btn-details").click(handleDetailsClick);
});
//#endregion
