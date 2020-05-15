//#region Variables

//#endregion

//#region Objects
//Slide body to target

//#endregion

//#region Functions

function handleNavLinkClick(button) {
  event.preventDefault();
  slideBody($(this).data("target"));
}

function slideBody(target) {
  $("html,body").animate(
    {
      scrollTop: $(target).offset().top,
    },
    "slow"
  );
}

//#endregion

//#region Events
//Slide body to target
$().ready(function () {
  //Nav Link clicked slide to target
  $(".nav-link").click(handleNavLinkClick);
});
//#endregion
