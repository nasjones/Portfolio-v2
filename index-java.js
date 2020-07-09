let closed
let allDisplay = false;
let switchDisplay = false;

function landing() {

    if (window.innerWidth > 768) {
        $('#stage').html(workHtml);
        allDisplay = false;
        switchDisplay = true;
    }
    else {
        $('#stage').html(allHtml);
        allDisplay = true;
        switchDisplay = false;

    }

}

function closeAlert() {
    $("#menuAlert").remove();
    $stickyEl = $('#myNav')
    elTop = $stickyEl.offset().top;
    closed = true
}

$("input[type='radio']").click(function () {
    var radioId = $("input[name='navRad']:checked").attr('id');

    if (radioId == 'workRad') {
        $('#stage').html(workHtml);
    }
    else if (radioId == 'resRad') {
        $('#stage').html(resHtml);
    }
    else {
        $('#stage').html(bioHtml);
    }
});

$(window).on("resize", function () {
    if (($(window).width() <= 768) && (allDisplay == false)) {
        $('#stage').html(allHtml);
        allDisplay = true;
        switchDisplay = false;
    }
    else if (($(window).width() > 768) && (switchDisplay == false)) {
        $('#stage').html(workHtml);
        console.log($('#workRad'));
        allDisplay = false;
        switchDisplay = true;
    }

});

landing();