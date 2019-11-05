function hamMenu() {
    var x = document.getElementById("nav-text");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

// function transition() {
//     var display = document.getElementById("animate");
//     var pos = 0;
//     var id = setInterval(frame, 5);
//     function frame() {
//         if (pos == 350) {
//             clearInterval(id);
//         } else {
//             pos++;
//             elem.style.top = pos + "px";
//             elem.style.left = pos + "px";
//         }
//     }
// }

// $(document).ready(
// function update() {
//     console.log("it has tried");
//     $(".nav-link").click(function () {
//         $("#aboutMe").animate({ left: '250px' });
//     });
// };

// $(begin)

$('.body-text').click(function () {

    $('.displayed').animate({
        left: '-100%'
    }, 500, function () {
        $('.displayed').css('left', '150%');
        $('.displayed').appendTo('#stage');
    });

    $('.displayed').next().animate({
        left: '0%'
    }, 500);
});