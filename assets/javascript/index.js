/* load particle config */
particlesJS(
  "particles-js",

  {
    particles: {
      number: {
        value: 50,
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
        image: [
          {
            src: "assets/images/particles/bubbleSheetA.png",
            width: 100,
            height: 100,
            anim: {
              enable: true,
              speed: 6,
              frameWidth: 64,
              totalFrames: 16,
            },
          },
          {
            src: "assets/images/particles/bubbleSheetC.png",
            width: 100,
            height: 100,
            anim: {
              enable: true,
              speed: 10,
              frameWidth: 64,
              totalFrames: 12,
            },
          },
        ],
      },
      opacity: {
        value: 0.1,
        random: false,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.1,
          sync: false,
        },
      },
      size: {
        value: 28,
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
        speed: 1,
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
          enable: true,
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
          particles_nb: 3,
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
    "100% designed webapp layout and user interface",
    "developed dynamic HTML using the Handlebars.js",
    "started with bootstrap css framework but integrated custom styling for complete unique look",
    "developed and implemented interaction logic between the model, view and controller",
    "assisted in server-side API logic",
    "assisted with sequelize/mysql Schema and controller on backend server",
    "heavily assisted with troubleshooting of team issues and bugs",
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
    "Designed webapp HTML layout and user interface",
    "Utilized bootstrap framework along with custom CSS",
    "Developed client-side logic to fetch server side db-less data",
    "Configured express server routing to serve static files and update data",
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
    "Designed layout, typography, and logo element for cohesive sleek look",
    "Lead front end team in developing webapp html and css",
    "implented jQuery logic to handle and render dynamic data",
    "assisted with client-side logic to fetch API request",
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
    "React Single-Page Application",
    "Implement React Router for conditional rendering of components",
    "Created React components utilizing React lifecycle methods.",
    "React State logic with query and display books based on Googlebooks API searches and CRUD database request",
    "Created and configured Moongoose/MongoDB Schema and controller on backend server",
    "Configure and deployed fullstack MERN application",
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
      "assets/images/coming-soon2.png",
      "assets/images/coming-soon2.png",
      "assets/images/coming-soon2.png",
    ],
  },
  // Techs used
  ["html", "bootstrap", "javascript"],
  // Bullets
  [
    "Created 80% of App React components",
    "Implemented React Google Maps API",
    "Dynamic Google Maps Components based on location tracking",
    "Backend dependent React component creation with state and hooks logic",
    "All front end routing and communication to backend",
    "Image frontend uploading, server hosting/storage request to cloud",
    "Review and manage project and task",
    "Created 80% of App React components",
    "Implemented React Google Maps API",
    "Dynamic Google Maps Components based on location tracking",
    "Backend dependent React component creation with state and hooks logic",
    "All front end routing and communication to backend",
    "Image frontend uploading, server hosting/storage request to cloud",
    "Review and manage project and task",
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
function ajax(method, url, data, success, error) {
  var xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200) {
      success(xhr.response, xhr.responseType);
    } else {
      error(xhr.status, xhr.response, xhr.responseType);
    }
  };
  xhr.send(data);
}

function validateForm(type) {
  console.log(type);
  //Validation results
  let result = {
    isValid: true,
    msg: [],
  };

  var name = $(`#${type}-name`).val();
  console.log(name);
  if (name === "") {
    result.msg.push("Name cannot be empty");
  }
  var email = $(`#${type}-email`).val();
  console.log(email);
  if (email === "") {
    result.msg.push("Email cannot be empty");
  } else {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(email)) {
      console.log(email);
      result.msg.push("Email format invalid");
    }
  }
  var subject = $(`#${type}-subject`).val();
  if (subject == "") {
    result.msg.push("Subject cannot be empty");
  }
  var message = $(`#${type}-message`).val();
  if (message == "") {
    result.msg.push("Message cannot be empty");
  }
  if (result.msg.length > 0) result.isValid = false;
  return result;
}

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
  var test = $(".carousel-item > img").hieght;
  console.log();
  var name = $(this).data("project");

  let project = allProjectDetails.find((project) => project.name === name);

  //Update modal text content
  $("#detail-name").text(project.name);
  $("#detail-role").html(project.roles);

  // Create Bullet Cards
  project.bullets.forEach((text) => {
    $("#detail-duties").append(
      $(
        `<div class='card card-duties'><div class='card-body'>${text}</div></div>`
      )
    );
  });
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
  $("#detail-duties").empty();
  $(".carousel-inner").each(function () {
    $(this).find("img").attr("src", "");
  });
  $(".modal-dialog").removeClass("modal-md").addClass("modal-xl");
}

function handleContactForm($type) {
  //validate form data
  let validate = validateForm($type);
  if (!validate.isValid) {
    var alertmsg = "";
    validate.msg.forEach((msg) => (alertmsg += `${msg}\n`));
    //TO DO: Replace with alerts
    //alert(alertmsg);
    $("#my-toast").toast("show");
    return;
  }

  var form = document.getElementById(`${$type}-contact-form`);
  var data = new FormData(form);
  ajax(
    form.method,
    form.action,
    data,
    function () {
      // success
      form.reset();
      if ($type === "modal") {
        $("#contactFormModal").modal("hide");
      }
      //toast success alert
      $("#my-toast").toast("show");
    },
    function () {
      // error
      alert("error");
    }
  );
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

$(".btn-contact").on("click", function (e) {
  e.preventDefault();
  handleContactForm($(this).data("formtype"));
});

$(window).resize(function () {});

//#endregion
