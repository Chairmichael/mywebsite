$(".wiggle").bind("webkitAnimationEnd mozAnimationEnd animationend", function () {
  $(this).removeClass("wiggle-hover")
})
let entered = false;
$(".wiggle").hover(function () {
  if (!entered) {
    $(this).addClass("wiggle-hover");
  }
  entered = !entered;
  console.log("Hovered")
})