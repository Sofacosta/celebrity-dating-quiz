$(document).ready(function () {
  // $("form#formOne").submit(function (event) {
  const color = $("input:radio[name=color]:checked").val();
  // const activity = $("input:radio2[name=activity]:checked").val();
  // const food = $("input:radio3[name=food]:checked").val();

  if (color === red) {
    $("#spongeBob").show();
  } else {
    $("#shakira").show();
  }
  // event.preventDefault();
  // });
});
