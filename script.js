$('.q1 img').click(function(){
    $('.a').slideDown("slow");
    $('.q1 .mns').show()
    $(this).hide();
});

$('.q1 .mns').click(function(){
    $('.a').slideUp("slow");
    $('.q1 img').show();
    $(this).hide();
});