$(document).ready(function(){
    $('.header-slider').slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 1000,
        arrows : false,
    });
});

$(document).ready(function(){
    $(".fa-search").click(function(){
      $(".contur, .inputer").toggleClass("active");
      $("input[type='search']").focus();
    });
});
  
  let make_button_active = function()
{
 
  let siblings =($(this).siblings());

  siblings.each(function (index)
    {
      $(this).removeClass('actived');
    }
  )

  $(this).addClass('actived');
}


$(document).ready(
  function()
  {
    $(".nav-item").click(make_button_active);
  }  
)

 $(document).ready(function(){
    $("#menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});

