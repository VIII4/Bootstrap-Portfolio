//#region HTML elements

//#endregion

//#region Variables
var allProjectDetails = [];
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
  {
    desktop: [
      "assets/images/coming-soon.jpg",
      "assets/images/coming-soon.jpg",
      "assets/images/coming-soon.jpg",
    ],
    mobile: [
      "assets/images/coming-soon-mob.jpg",
      "assets/images/coming-soon-mob.jpg",
      "assets/images/coming-soon-mob.jpg",
    ],
  },
  // Techs used
  ["html", "bootstrap", "mysql", "handlebars"],
  // Bullets
  [
    "CRUD blajaj an lj;k h;hkg ;k ;a ",
    "hgjljhfljhf ljf ljyf  ljf luyf l oyg ",
    "lkugljh gljhf gluyfv",
  ]
);

allProjectDetails.push(seniorPets);

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
  //check screen size adjust for mobile
  var name = $(this).data("project");

  allProjectDetails.forEach(function (project) {
    if (name === project.name) {
      //Update modal text content
      $("#detail-name").text(project.name);
      $("#detail-role").html("Role: " + project.roles);
      // TO DO: generate bullets

      //Create Tech Icons
      for (var i = 0; i < project.techs.length; i++) {
        console.log(project.techs[i]);
        var icon =
          project.techs[i] === "html"
            ? "fab fa-html5"
            : project.techs[i] === "bootstrap"
            ? "fab fa-bootstrap"
            : project.techs[i] === "javascript"
            ? "fab fa-js-square"
            : project.techs[i] === "mysql"
            ? "icon-mysql"
            : project.techs[i] === "handlebars"
            ? "icon-handlebars-alt"
            : project.techs[i] === "sequelize"
            ? "icon-sequelize-alt"
            : project.techs[i] === "heroku"
            ? "icon-heroku"
            : project.techs[i] === "express"
            ? "icon-express"
            : "";
        icon = icon + " fa-2x text-dark mr-2";

        var $i = $("<i>").addClass(icon);
        $("#detail-tech").append($i);
      }

      var imgs;
      //Adjust images and modal for screen
      if (window.screen.width <= 400) {
        //adjust modal to md
        $(".modal-dialog").removeClass("modal-xl").addClass("modal-md");
        imgs = project.images.mobile;
      } else {
        imgs = project.images.desktop;
      }

      //Load Images
      for (var i = 0; i < imgs.length; i++) {
        $("#carousel-img-" + i).attr("src", imgs[i]);
      }

      $("#details-modal").modal("show");
      return;
    }

    //TO DO: enable modal
  });
}

function handleCloseModalClick() {
  //Clear modal content
  $("#detail-name").empty();
  $("#detail-role").empty();
  $("#detail-tech").empty();
  $(".carousel-inner").each(function () {
    $(this).find("img").attr("src", "");
  });
  $(".modal-dialog").removeClass("modal-md").addClass("modal-xl");

  //Close modal
  $("#details-modal").modal("hide");
}

//#endregion

//#region Events

$().ready(function () {
  //Nav Link clicked slide to target
  $(".nav-main").click(handleNavLinkClick);
  $(".nav-filter").click(handleFilterClick);
  $(".btn-details").click(handleDetailsClick);
  $(".btn-close").click(handleCloseModalClick);
});
//#endregion
