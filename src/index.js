var chai = document.querySelector("#chai");
var roton = document.querySelector("#roton");
var result = document.querySelector("#result");

roton.addEventListener("keypress", function () {
  var match = chai.value.indexOf(roton.value);
  if (match === -1) {
    result.innerHTML = `The value
    <span class='value'> ${roton.value} </span>
     was not found`;
  } else {
    result.innerHTML = `The value
    <span class='value'></span>
    was found at
    <span class='value'> ${match} </span>`;
  }
});
