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
