// Scroll to given element
export const ScrollTo = (elementId, navbarId) => {
  // Get Elements
  let element = document.getElementById(elementId);
  let navbar = document.getElementById(navbarId);
  // Get target position by subtracting element scroll position from fixed navbar height
  let targetPos = element.scrollHeight;

  if (typeof window !== "undefined") {
    //Scroll to position of element - height of
    window.scrollTo({
      top: targetPos,
      behavior: "smooth",
    });
  }
};

//Call to if element is in view
export const CheckInView = (element, options, callback) => {
  let position = element.getBoundingClientRect();
  const { fullVisibility, infinite } = options;

  if (typeof window !== "undefined") {
    if (fullVisibility) {
      if (position.top >= 0 && position.bottom <= window.innerHeight) {
        // console.log("Element is fully visible in screen");
        callback();
        return;
      }
    } else {
      if (position.top < window.innerHeight && position.bottom >= 0) {
        callback();
        return;
      }
    }
  }
};

// Check if Mobile screen
export const IsMobileCheck = () => {
  if (typeof window !== "undefined") {
    const mql = window.matchMedia("(orientation: portrait)");
    const width =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;

    return width <= 680 || (!mql.matches && width <= 915) ? true : false;
  }
};

export const AnimateCSS = (element, animation, delay) => {
  if (delay) {
    setTimeout(function () {
      element.classList.add("animated", "animate__animated", animation);
    }, delay);
  } else {
    element.classList.add("animated", "animate__animated", animation);
  }
};
