function validate(event) {
  // To write custom validation logic to validate the longitude and latitude
  // values. The latitude value must be a number between -90 and 90; the
  // longitude value must be a number between -180 and 180. If either/both are
  // invalid, show the appropriate error message in the form, and stop the
  // form from being submitted. If both values are valid, allow the form to be
  // submitted.  
  const form = document.querySelector("form");

  let lat = parseFloat(form.latitude.value);
  let long = parseFloat(form.longitude.value);

  const latSpan = document.querySelector("#lat label span");
  latSpan.innerText = "*";

  const longSpan = document.querySelector("#long label span");
  longSpan.innerText = "*";

  if (
    !isNaN(lat) &&
    lat <= 90 &&
    lat >= -90 &&
    !isNaN(long) &&
    long <= 180 &&
    long >= -180
  ) {
    return true;
  }
  if (isNaN(lat) || lat > 90 || lat < -90) {
    latSpan.innerText = "* must be a valid Latitude (-90 to 90)";
  }
  if (isNaN(long) || long > 180 || long < -180) {
    longSpan.innerText = "* must be a valid Longitude (-180 to 180)";
  }

  event.preventDefault();
  return false;
}

// Wait for the window to load, then set up the submit event handler for the form.
window.onload = function () {
  const form = document.querySelector("form");
  form.onsubmit = validate;

  //form.onsubmit = validate(form.latitude.value)
};
