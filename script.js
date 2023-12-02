let A, NUM

function openDiv(q, a, img, num) {
    forceCloseDiv();
    $(a).slideDown("slow");
    A = a;
    NUM = num;
    console.log(NUM)
    $(q).hide();
    $(img).show();
}

function closeDiv(q, a, img) {
    $(a).slideUp("slow");
    $(q).hide();
    $(img).show();
}

function forceCloseDiv() {
    $(A).slideUp("slow");
    $('.mns'+NUM).hide();
    $('.pls'+NUM).show();
}