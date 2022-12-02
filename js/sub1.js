$(document).ready(function () {
  $("#sliderbox li:first-child").click(function () {
    $("#sale_img")
      .attr("src", "Portfolio_1/sub_page_img/sand_1.jpg")
      .hide()
      .fadeIn(500);
  });

  $("#sliderbox li:nth-child(2)").click(function () {
    $("#sale_img")
      .attr("src", "Portfolio_1/sub_page_img/sand_2.jpg")
      .hide()
      .fadeIn(500);
  });
  $("#sliderbox li:nth-child(3)").click(function () {
    $("#sale_img")
      .attr("src", "Portfolio_1/sub_page_img/sand_3.jpg")
      .hide()
      .fadeIn(500);
  });
  $("#sliderbox li:nth-child(4)").click(function () {
    $("#sale_img")
      .attr("src", "Portfolio_1/sub_page_img/sand_4.jpg")
      .hide() //fadein()효과를 보여주기 위해 숨김처리
      .fadeIn(); //fadeIn()
  });

  // 사이드 이미지 클릭 시 sale이미지(큰사진)의 src를
  // 해당이미지로 변경하여 보여지게하는 코드

  $(".aaa").click(function () {
    $(".aaa").css("border", "none");
    $(this).css("border", "3px solid lightgray");
  });
  // 이미지 클릭 시 테두리 추가 코드
});
