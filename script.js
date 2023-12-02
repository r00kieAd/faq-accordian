$('.q1 img').click(function(){
    $('.a1').slideDown("slow");
    $('.q1 .mns').show()
    $(this).hide();
});

$('.q1 .mns').click(function(){
    $('.a1').slideUp("slow");
    $('.q1 img').show();
    $(this).hide();
});