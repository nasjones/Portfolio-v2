let closed
var $window = $(window),
    $stickyEl = $('#myNav'),
    elTop = $stickyEl.offset().top;

function hamMenu() {
    var el = document.getElementById("nav-text");
    if (window.innerWidth >= 500) {
        el.style.display = "grid";
    } else {
        if (el.style.display === "block") {
            el.style.display = "none";
        } else {
            el.style.display = "block";
        }
    }
}

function myScroll(id) {
    if (!closed)
        closeAlert()

    let element = document.getElementById(`display${id}`);
    let offset = document.getElementById("myNav").offsetHeight
    let bodyRect = document.body.getBoundingClientRect().top;
    let elementRect = element.getBoundingClientRect().top;
    let elementPosition = elementRect - bodyRect;
    let offsetPosition = elementPosition - offset;

    if (window.innerWidth < 500) {
        hamMenu()
        offsetPosition + 20
    }

    window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
    });
}

function closeAlert() {
    $("#menuAlert").remove();
    $stickyEl = $('#myNav')
    elTop = $stickyEl.offset().top;
    closed = true
}

$window.scroll(function () {

    $stickyEl.toggleClass('sticky', $window.scrollTop() >= elTop);

    if ($window.scrollTop() >= elTop) {
        $('main').css('margin-top', $stickyEl.height());
    }
    else {
        $('main').css('margin-top', 0);
    }
});
