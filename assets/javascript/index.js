/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */

particlesJS(
  "particles-js",

  {
    particles: {
      number: {
        value: 25,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: "#ffffff",
      },
      shape: {
        type: "image",
        stroke: {
          width: 0,
          color: "#000000",
        },
        polygon: {
          nb_sides: 5,
        },
        image: {
          src: "assets/images/particles/bubbleSheet.png",
          width: 100,
          height: 100,
          anim: {
            enable: true,
            speed: 3,
            frameWidth: 64,
            totalFrames: 16,
          },
        },
      },
      opacity: {
        value: 0.8,
        random: false,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.1,
          sync: false,
        },
      },
      size: {
        value: 30,
        random: true,
        anim: {
          enable: false,
          speed: 40,
          size_min: 0.1,
          sync: false,
        },
      },
      line_linked: {
        enable: false,
        distance: 150,
        color: "#ffffff",
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 5,
        direction: "top",
        random: true,
        straight: false,
        out_mode: "out",
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200,
        },
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "repulse",
        },
        onclick: {
          enable: false,
          mode: "push",
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 400,
          line_linked: {
            opacity: 1,
          },
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 10,
        },
        repulse: {
          distance: 100,
        },
        push: {
          particles_nb: 4,
        },
        remove: {
          particles_nb: 2,
        },
      },
    },
    retina_detect: true,
    config_demo: {
      hide_card: false,
      background_color: "#000000",
      background_image: "",
      background_position: "50% 50%",
      background_repeat: "no-repeat",
      background_size: "cover",
    },
  }
);

//#region HTML elements

//#endregion

//#region Variables
var allProjectDetails = [];
var headerHieght;
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
  "Senior Pets",
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

var loveBug = new ProjectDetails(
  // Project Name
  "LoveBug",
  // Role
  "Full Stack Developer",
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
  ["html", "bootstrap", "mysql", "express"],
  // Bullets
  [
    "CRUD blajaj an lj;k h;hkg ;k ;a ",
    "hgjljhfljhf ljf ljyf  ljf luyf l oyg ",
    "lkugljh gljhf gluyfv",
  ]
);

var trek = new ProjectDetails(
  // Project Name
  "Trek",
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
  ["html", "bootstrap", "javascript"],
  // Bullets
  [
    "CRUD blajaj an lj;k h;hkg ;k ;a ",
    "hgjljhfljhf ljf ljyf  ljf luyf l oyg ",
    "lkugljh gljhf gluyfv",
  ]
);

var clickyGame = new ProjectDetails(
  // Project Name
  "Smashy Clicky Game",
  // Role
  "React Developer",
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
  ["html", "bootstrap", "javascript"],
  // Bullets
  [
    "CRUD blajaj an lj;k h;hkg ;k ;a ",
    "hgjljhfljhf ljf ljyf  ljf luyf l oyg ",
    "lkugljh gljhf gluyfv",
  ]
);

var googleBooks = new ProjectDetails(
  // Project Name
  "Google Books",
  // Role
  "MERN Full Stack Developer",
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
  ["html", "bootstrap", "javascript"],
  // Bullets
  [
    "CRUD blajaj an lj;k h;hkg ;k ;a ",
    "hgjljhfljhf ljf ljyf  ljf luyf l oyg ",
    "lkugljh gljhf gluyfv",
  ]
);

var caren = new ProjectDetails(
  // Project Name
  "Care'n",
  // Role
  "MERN Full Stack Developer",
  // Image file location
  {
    desktop: [
      "assets/images/coming-soon2.png",
      "assets/images/coming-soon2.png",
      "assets/images/coming-soon2.png",
    ],
    mobile: [
      "assets/images/coming-soon-mob.jpg",
      "assets/images/coming-soon-mob.jpg",
      "assets/images/coming-soon-mob.jpg",
    ],
  },
  // Techs used
  ["html", "bootstrap", "javascript"],
  // Bullets
  [
    "CRUD blajaj an lj;k h;hkg ;k ;a ",
    "hgjljhfljhf ljf ljyf  ljf luyf l oyg ",
    "lkugljh gljhf gluyfv",
  ]
);

allProjectDetails.push(
  seniorPets,
  loveBug,
  trek,
  clickyGame,
  googleBooks,
  caren
);

//#endregion

//#region Functions

function slideBody(target) {
  console.log(headerHieght);
  $("html,body").animate(
    {
      scrollTop: $(target).offset().top - (headerHieght + 5),
    },
    "slow"
  );
}

function handleNavLinkClick() {
  event.preventDefault();
  slideBody($(this).data("target"));
  if (!$("button.navbar-toggler").hasClass("collapsed")) {
    $("button.navbar-toggler")
      .addClass("collapsed")
      .attr("aria-expanded", "false");
    $(".navbar-collapse").removeClass("show");
  }
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
  $("#filtered-by").text(filter.toUpperCase() + " PROJECTS");
}

function handleDetailsClick() {
  //check screen size adjust for mobile(window.screen.width....)
  var name = $(this).data("project");

  let project = allProjectDetails.find((project) => project.name === name);
  console.log(project);
  console.log(window.screen.width);

  //Update modal text content
  $("#detail-name").text(project.name);
  $("#detail-role").html("Role: " + project.roles);
  // TO DO: generate bullets

  //Create Tech Icons
  for (var i = 0; i < project.techs.length; i++) {
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
    icon = icon + " fa-3x text-dark mr-3";

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
}

function handleModalCloseEvent() {
  //Clear modal content
  $("#detail-name").empty();
  $("#detail-role").empty();
  $("#detail-tech").empty();
  $(".carousel-inner").each(function () {
    $(this).find("img").attr("src", "");
  });
  $(".modal-dialog").removeClass("modal-md").addClass("modal-xl");
}

//#endregion

//#region Events

$().ready(function () {
  headerHieght = $("#fixedHeader").height();
  //Nav Link clicked slide to target
  $(".nav-main").click(handleNavLinkClick);
  $(".nav-filter").click(handleFilterClick);
  $(".btn-details").click(handleDetailsClick);
  $(".btn-close").click(function () {
    $("#details-modal").modal("hide");
  });
  setChartNames();
  triggerFinder();
});

$("#details-modal").on("hidden.bs.modal", function (e) {
  handleModalCloseEvent();
});

//#endregion
