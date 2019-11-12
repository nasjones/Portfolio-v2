function hamMenu() {
    var x = document.getElementById("nav-text");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function textOut() {
    if ($(window).width() < 500) {
        $('#stage').on('swipeleft', e => {
            $(e.currentTarget).children().animate({
                left: '-150%'
            }, 500);
            setTimeout(stageUpdate, 800);

        });
    }
    else {
        $('#stage').on('click', e => {
            if ($(e.target).is('a')) {
            }
            else if ($(e.target).is('img')) {
            }
            else {
                $(e.currentTarget).children().animate({
                    left: '-150%'
                }, 500);
                setTimeout(stageUpdate, 800);
            }
        });

    }
}

function stageUpdate() {
    let staged = $('#stage').find('.displayed').attr('id');
    if (staged == 'display1') {
        $('#stage').html(bioHtml);
        $('#stage').find('.displayed').css('left', '150%');
        $('.displayed').animate({
            left: '0%'
        }, 500);
        $("#workRad").attr("checked", true);
    }
    else if (staged == 'display2') {
        $('#stage').html(moreHtml);
        $('#stage').find('.displayed').css('left', '150%');
        $('.displayed').animate({
            left: '0%'
        }, 500);
        $("#moreRad").attr("checked", true);
    }
    else {
        $('#stage').html(workHtml);
        $('#stage').find('.displayed').css('left', '150%');
        $('.displayed').animate({
            left: '0%'
        }, 500);
        $("#bioRad").attr("checked", true);
    }

}


$("input[type='radio']").click(function () {
    if ($(window).width() < 500) {
        hamMenu();
    }
    var radioId = $("input[name='display']:checked").attr('id');
    if (radioId == 'workRad') {
        $('#bioRad').removeAttr("disabled");
        $('#moreRad').removeAttr("disabled");
        $('#workRad').attr("disabled", "true");
        $('#stage').children().animate({
            left: '-150%'
        }, 500); setTimeout(function () {
            $('#stage').html(workHtml);
            $('#stage').find('.displayed').css('left', '150%');
            $('.displayed').animate({
                left: '0%'
            }, 500);
        }, 800);
    }
    else if (radioId == 'moreRad') {
        $('#bioRad').removeAttr("disabled");
        $('#moreRad').attr("disabled", "true");
        $('#workRad').removeAttr("disabled");
        $('#stage').children().animate({
            left: '-150%'
        }, 500); setTimeout(function () {
            $('#stage').html(moreHtml);
            $('#stage').find('.displayed').css('left', '150%');
            $('.displayed').animate({
                left: '0%'
            }, 500);
        }, 800);
    }
    else {
        $('#bioRad').attr("disabled", "true");
        $('#moreRad').removeAttr("disabled");
        $('#workRad').removeAttr("disabled");
        $('#stage').children().animate({
            left: '-150%'
        }, 500); setTimeout(function () {
            $('#stage').html(bioHtml);
            $('#stage').find('.displayed').css('left', '150%');
            $('.displayed').animate({
                left: '0%'
            }, 500);
        }, 800);
    }
});

$("#closeAlert").click(function () {
    $("#swipeAlert").remove();
});
$(textOut);