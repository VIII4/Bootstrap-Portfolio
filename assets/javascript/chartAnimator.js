/*
script to animate horizontal charts(loading bars), when on screen.

*/

var chartData = {
  designer: [
    { skill: "Web Design", value: "85" },
    { skill: "Game Design", value: "80" },
    { skill: "VR/AR Design", value: "70" },
    { skill: "3D Modeling", value: "55" },
    { skill: "Graphic Design", value: "50" },
    { skill: "Motion Graphics", value: "35" },
    { skill: "3D Animation", value: "30" },
  ],
  developer: [
    { skill: "Unity3D", value: "95" },
    { skill: "Javascript", value: "80" },
    { skill: "WebGL/WebXR (Babylon.js)", value: "75" },
    { skill: "React", value: "5" },
    { skill: "Node.js", value: "55" },
    { skill: "MySQL", value: "35" },
    { skill: "Electron", value: "5" },
  ],
};

//#region Functions
//:Helper: animate single chart row after delay
// function animateRow(i, $progressRow) {
//   setTimeout(function () {
//     $progressBars = $progressRow.find($(".progress-bar"));
//     $progressBars.each(function () {
//       var target = $(this).data("target");
//       $(this).css("width", target);
//     });
//   }, 200 * i);
// }

//:Helper: animate single chart row after delay
function animateRow(i, $progressRow) {
  setTimeout(function () {
    $progressBars = $progressRow.find($(".progress-bar"));
    $progressBars.each(function () {
      var value;
      var skill;
      //check class, assign value
      if ($(this).hasClass("designer-chart")) {
        value = chartData.designer[i].value;
        skill = chartData.designer[i].skill;
      } //
      else if ($(this).hasClass("developer-chart")) {
        value = chartData.developer[i].value;
        skill = chartData.developer[i].skill;
      } //
      else {
        return;
      }

      if ($(this).data("target") === "neg") {
        value = String(100 - value);
      } //
      else {
        $(this).text(value + "%");
      }

      $(this).css("width", value + "%");
    });
  }, 200 * i);
}

//Call to animate all Charts
function animateCharts() {
  $skillRows = $(".skill-row");
  $skillRows.each(function (index) {
    animateRow(index, $(this));
  });
}

//Call To set chart names @ page load
function setChartNames() {
  $(".skill-row").each(function (i) {
    $("#designer-title-" + i).text(chartData.designer[i].skill);
    $("#developer-title-" + i).text(chartData.developer[i].skill);
  });
}

//Call to check trigger location
var triggerFinder = function () {
  var element = document.querySelector(".trigger");
  var position = element.getBoundingClientRect();

  // checking whether fully visible
  if (position.top >= 0 && position.bottom <= window.innerHeight) {
    console.log("Element is fully visible in screen");
  }

  // checking for partial visibility
  if (position.top < window.innerHeight && position.bottom >= 0) {
    animateCharts();
  }
};
//#endregion

//Events
// $(function () {
//   triggerFinder();
// });

window.addEventListener("scroll", function () {
  triggerFinder();
});
