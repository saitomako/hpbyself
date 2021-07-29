<script>
$(function(){
  $('.toggle_title').click(function(){
    var clicks = $(this).data('clicks');
    $(this).toggleClass('selected');
    $(this).next().slideToggle();
    if (clicks) {
    } else {
      var top = $(this).offset().top;
      $('html,body').animate({scrollTop:top},500);
    }
    $(this).data("clicks", !clicks);
  });
});
</script>
