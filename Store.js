let bioHtml = `<article id="display2" class="displayed">
            <h2>About Me</h2>
            <p id="bio" class="body-text">I was born and raised in Long Island New York. I’m a web developer/foodie who’s passion for development came from my love of
                critical thinking and problem-solving. This is the perfect field to indulge my self in something I love to do. When I'm
                not playing with some algorithm on my computer I'm playing video games, eating with friends, or reading.
                My favorite genre is Science-fiction I hope to be apart of the development that brings forth the future I love reading about.
            </p>
        </article>`;

let workHtml = `<article id="display1" class="displayed">
        <h2>My Work</h2>
        <section class="work" id="item-1">
            <h3>FullMetal quiz</h3>
            <a href="https://nasjones.github.io/quiz-app/" target="_blank" class="nonClick">
            <div class="content" id="quiz" style="background-image: url('quiz-app-cap.png');">
            </div>
            </a>
            <p class="body-text">This is a quiz that I designed based on the tv-show FullMetal Alchemist. 
            I designed the quiz so that the questions and choices for the questions appear in a random order so that the quiz isn't the same every time.
            This project showcases my skills in Javascript/Jquery/CSS/HTML.</p>
            <ul>
                <li>live- <a href="https://nasjones.github.io/quiz-app/" target="_blank" class="nonClick">Take the quiz!</a>
                </li>
                <li>repo- <a href="https://github.com/nasjones/quiz-app" target="_blank" class="nonClick">Checkout the files.</a>
                </li>
             </ul>
        </section>
        <hr>
            <section class="work" id="item-2">
                <h3>Crudhub</h3>

                <div class="content" id="quiz" style="background-image: url('Crudhub.png');">
                </div>

                <p class="body-text">This is a webapp that takes the users food inquiry and returns recipes as well as restaurants that offer that food within half a mile of them, using the Edamam api and Google Places api. This project showcases my skills in Javascript/Jquery/CSS/HTML.</p>
                <ul class="workLinks">
                    <li>live- <a href="https://nasjones.github.io/Crudhub/" target="_blank" class="nonClick">Use
                            Crudhub.</a>
                    </li>
                    <li>repo- <a href="https://github.com/nasjones/Crudhub" target="_blank" class="nonClick">Checkout
                            the files.</a>
                    </li>
                </ul>
            </section>
            <hr>
            <section class="work" id="item-3">
                <h3>Showtunes</h3>
                <a href="https://showtunes-app.now.sh/" target="_blank" class="nonClick">
                    <div class="content" id="quiz" style="background-image: url('Showtunes.png');">
                    </div>
                </a>
                <p class="body-text">This app allows users to submit a genre and runtime the app then takes this and
                    makes a call to the Spotify api and
                    creates a playlist with songs whose total runtime is approximately the same length as specified.
                    This project showcases my skills in
                    Javascript/CSS/HTML/React/Node/PostgreSQL.</p>
                <ul class="workLinks">
                    <li>live- <a href="https://showtunes-app.now.sh/" target="_blank" class="nonClick">Use
                            Showtunes.</a>
                    </li>
                    <li>repo- <a href="https://github.com/nasjones/playlist-client" target="_blank"
                            class="nonClick">Checkout
                            the files.</a>
                    </li>
                </ul>
            </section>
    </article>`;

let moreHtml = `<article id="display3" class="displayed">
            <h2>A few of my favorite things:</h2>
            <ul>
                <h3>My favorite restaurant</h3>
                <div class="content" style="background-image: url('lukes-lobster.jpeg');">
                    <div class="overlay">
                        <li>
                            <h4>Lukes-Lobster</h4>
                            <p>The best seafood rolls in New York!</p>
                        </li>
                    </div>
                </div>
                <div class="mobile-description"><p>The best seafood rolls in New York!</p></div>
                <hr>
                <h3>My favorite video game</h3>
                <div class="content" style="background-image: url('KH.jpg');">
                    <div class="overlay">
                        <li>
                            <h4>Kingdom-Hearts</h4>
                            <p>The greatest video game of all time!</p>
                        </li>
                    </div>
                </div>
                <div class="mobile-description"><p>The greatest video game of all time!</p></div>
                <hr>
                <h3>My favorite Book</h3>
                <div class="content" style="background-image: url('POG.jpg');">
                    <div class="overlay">
                        <li>
                            <h4>Player Of Games</h4>
                            <p>An incredible novel by Iain M. Banks with an intricate and beautiful story.</p>
                        </li>
                    </div>
                </div>
                <div class="mobile-description"><p>An incredible novel by Iain M. Banks with an intricate and beautiful story.</p></div>
                <hr>
                <h3>My favorite show</h3>
                <div class="content" style="background-image: url('Stein.jpg');">
                    <div class="overlay">
                        <li>
                            <h4>Steins;Gate</h4>
                            <p>An amazing story with beautiful art, a wonderful story, and great characters.</p>
                        </li>
                    </div>
                </div>
                <div class="mobile-description"><p>An amazing story with beautiful art, a wonderful story, and great characters.</p></div>
            </ul>

        </article>`