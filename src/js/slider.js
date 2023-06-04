let slider = $(".slider");
let images = $('ul.sliderSmallImg > li > img');
let sliderPicture = $(".people-say__slider-img > img");
let sliderContent = $(".people-say__slider-content");

images.on("click", function(event) {
  let elemClick = $(event.target).parent("li");
  $(".sliderSmallImg > li.active").removeClass("active");

  if (!elemClick.length) {
    elemClick = $(event.target).parent("li");
    elemClick.addClass("active");
  } else {
    elemClick.addClass("active");
  }

  sliderPicture.attr("src", $(".sliderSmallImg > li.active").find("img").attr("src"));
  updateSliderContent();
});

$("#prev").on("click", function() {
  let activeImg = $(".sliderSmallImg > li.active");

  if (activeImg.is(":first-child")) {
    activeImg.removeClass("active");
    $(".sliderSmallImg > li:last-child").addClass("active");
  } else {
    activeImg.removeClass("active").prev().addClass("active");
  }

  sliderPicture.attr("src", $(".sliderSmallImg > li.active").find("img").attr("src"));
  updateSliderContent();
});

$("#next").on("click", function() {
  let activeImg = $(".sliderSmallImg > li.active");

  if (activeImg.is(":last-child")) {
    activeImg.removeClass("active");
    $(".sliderSmallImg > li:first-child").addClass("active");
  } else {
    activeImg.removeClass("active").next().addClass("active");
  }

  sliderPicture.attr("src", $(".sliderSmallImg > li.active").find("img").attr("src"));
  updateSliderContent();
});

function updateSliderContent() {
  let activeImg = $(".sliderSmallImg > li.active");
  let name, text;

  switch (activeImg.attr("id")) {
    case "sliderSmallImg1":
      name = "Hasan Ali";
      text = "Integer dignissim, augue tempus ultricies luctus, quam dui laoreet sem, non dictum odio nisi quis massa. Morbi pulvinar odio eget aliquam facilisis. Tempus ultricies luctus, quam dui laoreet sem, non dictum odio nisi quis massa. Morbi pulvinar odio eget aliquam facilisis.";
      break;
    case "sliderSmallImg2":
      name = "Lily Mavy";
      text = "Fusce efficitur, justo et dapibus consectetur, ipsum urna pharetra libero, vel molestie tellus risus vel erat. Curabitur id enim gravida, luctus nunc quis, fringilla velit. In et nisl sed velit lobortis placerat.";
      break;
    case "sliderSmallImg3":
      name = "Nastya Scotty";
      text = "Mauris malesuada ultrices risus, a luctus lorem iaculis vel. Suspendisse finibus dolor a lorem mollis, quis tincidunt arcu euismod. Curabitur sed urna purus. Quisque eu nulla metus.Aliquam erat volutpat. Nulla a massa varius, faucibus justo vel, gravida enim.";
      break;
    case "sliderSmallImg4":
      name = "Alisa Kosss";
      text = "Aliquam erat volutpat. Sed id hendrerit ipsum, at bibendum nisl. Curabitur rutrum leo vitae lacus auctor, vel commodo nisi accumsan. Aenean mattis ipsum at dolor euismod, ac suscipit orci facilisis.";
      break;
    case "sliderSmallImg5":
      name = "Freddy Merckury";
      text = "Vivamus venenatis consequat felis, vel consectetur velit lacinia nec. Nulla non luctus nisl. Nunc vel odio id dolor tempor interdum eget sit amet tortor. Praesent malesuada risus ut suscipit lacinia.";
      break;
    case "sliderSmallImg6":
      name = "Elvira Sexy";
      text = "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam vitae mi sed augue tincidunt consectetur. Aenean suscipit, lacus quis blandit venenatis, odio orci blandit mi, eu laoreet metus lacus sed elit.";
      break;
  }

  sliderContent.find("h6").text(name);
  sliderContent.find("p").text(text);
}
