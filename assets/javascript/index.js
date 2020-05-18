//#region HTML elements
var projectPanels = $(".project-panel").toArray();

//#endregion

//#region Variables

//#endregion

//#region Objects

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

  // projectPanels.forEach(panel => {
  //     if(filter === "all")
  //     panel
  // });
}

//#endregion

//#region Events

$().ready(function () {
  //Nav Link clicked slide to target
  $(".nav-main").click(handleNavLinkClick);
  $(".nav-filter").click(handleFilterClick);
});
//#endregion
