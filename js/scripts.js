$(document).ready(function() {
  var orientation = prompt("G for gay S for straight").toUpperCase();
  var gender = prompt("M for male F for female").toUpperCase();

  if (gender === "M" && orientation === "S"){
    $("#ridley").show();
  } else if (gender === "M" && orientation === "G") {
    $("#quinto").show();
  } else if (gender === "F" && orientation === "G") {
    $("#degeneres").show();
  } else if (gender === "F" && orientation === "S") {
    $("#clooney").show();
  }
});
