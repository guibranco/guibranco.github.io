$(".mobile_action").click(function () {
  if (!$(this).hasClass("active")) {
    $(this).addClass("active");
    $(".main_header_nav").animate({ right: "0px" }, 300);
  } else {
    $(this).removeClass("active");
    $(".main_header_nav").animate({ right: "-100%" }, 300);
  }
});

$(".main_header_nav a").click(function () {
  $(".mobile_action").trigger("click");
});

if ($(".anchor").length > 0 && document.URL.indexOf("#") >= 0) {
  const anchor = document.URL.split("#")[1];
  $(".anchor").each(function () {
    if ($(this).attr("id") == anchor) {
      $("html,body").animate({ scrollTop: $(this).offset().top - 50 }, "slow");
    }
  });
}
