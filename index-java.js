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

function textOut() {
    $('#stage').on('swipeleft', e => {
        $(e.currentTarget).children().animate({
            left: '-150%'
        }, 500);
        setTimeout(stageUpdate, 800);

    });
}

function stageUpdate() {
    let staged = $('#stage').find('.displayed').attr('id');
    console.log(staged);
    if (staged == 'display1') {
        $('#stage').html(workHtml);
        $('#stage').find('.displayed').css('left', '150%');
        $('.displayed').animate({
            left: '0%'
        }, 500);
    }
    else if (staged == 'display2') {
        $('#stage').html(moreHtml);
        $('#stage').find('.displayed').css('left', '150%');
        $('.displayed').animate({
            left: '0%'
        }, 500);
    }
    else {
        $('#stage').html(bioHtml);
        $('#stage').find('.displayed').css('left', '150%'), 500;
        $('.displayed').animate({
            left: '0%'
        }, 500);
    }

}

// $('.body-text').click(function () {

//     $('.displayed').animate({
//         left: '-100%'
//     }, 500, function () {
//         $('#stage').html(`<section id="display2" class="displayed">
//             <article class="work" id="item-1">
//                 <h3>My personal FullMetal quiz</h3>
//                 <a href="https://nasjones.github.io/quiz-app/" target="_blank">
//                     <img class="work-photo" src="quiz-app-cap.png" alt="quiz-app photo">
//                 </a>
//                 <p class="body-text">This is a quiz that I designed based on the tv-show FullMetal Alchemist. I designed
//                     the quiz so that
//                     the questions and choices for the questions appear in a random order so that the quiz isn't the same
//                     every
//                     time.
//                     This project showcases my skills in Javascript/Jquery/CSS/HTML.</p>
//                 <ul>
//                     <li>live- <a href="https://nasjones.github.io/quiz-app/" target="_blank">Take the quiz!</a>
//                     </li>
//                     <li>repo- <a href="https://github.com/nasjones/quiz-app" target="_blank">Checkout the files.</a>
//                     </li>
//                 </ul>
//             </article>
//         </section>`);
//         $('.displayed').css('left', '150%');
//         // $('.displayed').appendTo('#stage');
//     });

//     $('.displayed').animate({
//         left: '0%'
//     }, 500);
// });

$(textOut);