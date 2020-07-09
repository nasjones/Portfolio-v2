let workHtml = `<section id="display1" class="displayed">
            <span class="orangeText"><h2>My Work</h2></span>
            <article class="work" id="item-1">
                <div class="work-photo">
                    <a href="https://quizbowl-opal.vercel.app/" target="_blank" class="nonClick">
                        <div class="content" style="background-image: url('quizbowl.png');">
                        </div>
                    </a>
                </div>
                <div class="work-sum">
                    <h3>QuizBowl</h3>
                    <p class="body-text">A web app that allows users to create quizzes about whatever they want and make
                        these quizzes public or private where they are only accessible by the unique link provided. This
                        project showcases my skills in Javascript/ CSS/ HTML/ React/ Node/ PostgreSQL.</p>
                    <ul>
                        <li>live- <a href="https://quizbowl-opal.vercel.app/" target="_blank" class="nonClick">Create a
                                quiz</a>
                        </li>
                        <li>repo- <a href="https://github.com/nasjones/quiz-maker-app" target="_blank"
                                class="nonClick">Check
                                out
                                the
                                files</a>
                        </li>
                    </ul>
                </div>
            </article>
            <hr>
            <article class="work evenWork" id="item-2">
                <div class="work-photo">
                    <a href="https://nasjones.github.io/Crudhub/" target="_blank" class="nonClick">
                        <div class="content" style="background-image: url('Crudhub.png');">
                        </div>
                    </a>
                </div>
                <div class="work-sum">
                    <h3>Crudhub</h3>
                    <p class="body-text">A web app that takes a user's food inquiry and returns matching recipes and
                        restaurants within half a mile of them using the Edamam API and Google
                        Places API. This project showcases my skills in Javascript/ Jquery/ CSS/ HTML.</p>
                    <ul class="workLinks">
                        <li>live- <a href="https://nasjones.github.io/Crudhub/" target="_blank" class="nonClick">Use
                                Crudhub</a>
                        </li>
                        <li>repo- <a href="https://github.com/nasjones/Crudhub" target="_blank" class="nonClick">Check
                                out
                                the files</a>
                        </li>
                    </ul>
                </div>
            </article>
            <hr>
            <article class="work" id="item-3">
                <div class="work-photo">
                    <a href="https://showtunes-app.now.sh/" target="_blank" class="nonClick">
                        <div class="content" style="background-image: url('Showtunes.png');">
                        </div>
                    </a>
                </div>

                <div class="work-sum">
                    <h3>Showtunes</h3>
                    <p class="body-text">This web app allows users to create playlists and discover new music. Users
                        choose a genre and input their ideal playlist length and the app makes a call to the Spotify API
                        and creates a playlist! This project showcases my skills in
                        Javascript/ CSS/ HTML/ React/ Node/ PostgreSQL.</p>
                    <ul class="workLinks">
                        <li>live- <a href="https://showtunes-app.now.sh/" target="_blank" class="nonClick">Use
                                Showtunes</a>
                        </li>
                        <li>repo- <a href="https://github.com/nasjones/playlist-client" target="_blank"
                                class="nonClick">Check out
                                the files</a>
                        </li>
                    </ul>
                </div>
            </article>
        </section>`

let bioHtml = ` <section id="display2" class="displayed">
            <span class="orangeText"><h2>About Me</h2></span>
            <img src='mePic.jpg' id='mePic'>
            <p id="bio" class="body-text">I was born and raised in Long Island New York. From as far back as I can remember I have always been in front of a computer screen. trying to figure out how to tweak something online or find a way to solve some problem of mine. I have been passionate about programming for years now, as it allows for free expression that incorporates problem solving. Web development was the perfect area of programming to explore this passion.
            </p>
        </section>`

let resHtml = `<section id="display3" class="displayed">
          <span class="orangeText"><h2>Resume</h2></span>
            <div class="resWrap">
                <h3>Skills</h3>
                <h4>Front-end</h4>
                <ul class="listWrap">
                    <li>JavaScript ES6</li>
                    <li>React</li>
                    <li>React Hooks</li>
                    <li>Redux</li>
                    <li>Express</li>
                    <li>jQuery</li>
                    <li>HTML5</li>
                    <li>CSS3</li>
                </ul>
                <h4>Back-end</h4>
                <ul class="listWrap">
                    <li>Node.js</li>
                    <li>MongoDB</li>
                    <li>PostgreSQL</li>
                </ul>
                <h4>Other technologies</h4>
                <ul class="listWrap">
                    <li>C</li>
                    <li>Java</li>
                    <li>Assembly</li>
                    <li>NPM</li>
                    <li>Mocha</li>
                    <li>Chai</li>
                    <li>Jasmine</li>
                    <li>Karma</li>
                    <li>Webpack</li>
                    <li>Browserify</li>
                    <li>Git</li>
                    <li>GitHub</li>
                    <li>Heroku</li>
                    <li>Enzyme</li>
                </ul>
                <h4>Additional Skills</h4>
                <ul class="listWrap">
                    <li>RESTful APIs</li>
                    <li>Unit testing</li>
                    <li>Data structures</li>
                </ul>
            </div>
            <div class="resWrap">
                <h3>Education</h3>
                <h4>Thinkful 2019-2020</h4>
                <span class="ital">Full Stack Flex</span>
                <ul class="listWrap">
                    <li>This program has given me industry best practices in a hands on 6 month web development course.
                    </li>
                </ul>

                <h4>Nassau Community College 2017-2019</h4>
                <span class="ital">Associates in Computer Science</span>
                <ul class="listWrap">
                    <li>Mobile-app development</li>
                    <li>C programming</li>
                    <li>Java programming</li>
                    <li>Assembly</li>
                </ul>
            </div>
        </section>`

let allHtml = `  <section id="display1" class="displayed">
            <span class="orangeText"><h2>My Work</h2></span>
            <article class="work" id="item-1">
                <div class="work-photo">
                    <a href="https://quizbowl-opal.vercel.app/" target="_blank" class="nonClick">
                        <div class="content" style="background-image: url('quizbowl.png');">
                        </div>
                    </a>
                </div>
                <div class="work-sum">
                    <h3>QuizBowl</h3>
                    <p class="body-text">A web app that allows users to create quizzes about whatever they want and make
                        these quizzes public or private where they are only accessible by the unique link provided. This
                        project showcases my skills in Javascript/ CSS/ HTML/ React/ Node/ PostgreSQL.</p>
                    <ul>
                        <li>live- <a href="https://quizbowl-opal.vercel.app/" target="_blank" class="nonClick">Create a
                                quiz</a>
                        </li>
                        <li>repo- <a href="https://github.com/nasjones/quiz-maker-app" target="_blank"
                                class="nonClick">Check
                                out
                                the
                                files</a>
                        </li>
                    </ul>
                </div>
            </article>
            <hr>
            <article class="work evenWork" id="item-2">
                <div class="work-photo">
                    <a href="https://nasjones.github.io/Crudhub/" target="_blank" class="nonClick">
                        <div class="content" style="background-image: url('Crudhub.png');">
                        </div>
                    </a>
                </div>
                <div class="work-sum">
                    <h3>Crudhub</h3>
                    <p class="body-text">A web app that takes a user's food inquiry and returns matching recipes and
                        restaurants within half a mile of them using the Edamam API and Google
                        Places API. This project showcases my skills in Javascript/ Jquery/ CSS/ HTML.</p>
                    <ul class="workLinks">
                        <li>live- <a href="https://nasjones.github.io/Crudhub/" target="_blank" class="nonClick">Use
                                Crudhub</a>
                        </li>
                        <li>repo- <a href="https://github.com/nasjones/Crudhub" target="_blank" class="nonClick">Check
                                out
                                the files</a>
                        </li>
                    </ul>
                </div>
            </article>
            <hr>
            <article class="work" id="item-3">
                <div class="work-photo">
                    <a href="https://showtunes-app.now.sh/" target="_blank" class="nonClick">
                        <div class="content" style="background-image: url('Showtunes.png');">
                        </div>
                    </a>
                </div>

                <div class="work-sum">
                    <h3>Showtunes</h3>
                    <p class="body-text">This web app allows users to create playlists and discover new music. Users
                        choose a genre and input their ideal playlist length and the app makes a call to the Spotify API
                        and creates a playlist! This project showcases my skills in
                        Javascript/ CSS/ HTML/ React/ Node/ PostgreSQL.</p>
                    <ul class="workLinks">
                        <li>live- <a href="https://showtunes-app.now.sh/" target="_blank" class="nonClick">Use
                                Showtunes</a>
                        </li>
                        <li>repo- <a href="https://github.com/nasjones/playlist-client" target="_blank"
                                class="nonClick">Check
                                out
                                the files</a>
                        </li>
                    </ul>
                </div>
            </article>
        </section>
        <hr />
        <section id="display2" class="displayed">
            <span class="orangeText"><h2>About Me</h2></span>
            <img src='mePic.jpg' id='mePic'>
            <p id="bio" class="body-text">I was born and raised in Long Island New York. From as far back as I can
                remember I
                have always been in front of a computer screen. trying to figure out how to tweak something online or
                find a way
                to solve some problem of mine. I have been passionate about programming for years now, as it allows for
                free
                expression that incorporates problem solving. Web development was the perfect area of programming to
                explore
                this passion.
            </p>
        </section>
        <hr />
        <section id="display3" class="displayed">
            <span class="orangeText"><h2>Resume</h2></span>
            <div class="resWrap">
                <h3>Skills</h3>
                <h4>Front-end</h4>
                <ul class="listWrap">
                    <li>JavaScript ES6</li>
                    <li>React</li>
                    <li>React Hooks</li>
                    <li>Redux</li>
                    <li>Express</li>
                    <li>jQuery</li>
                    <li>HTML5</li>
                    <li>CSS3</li>
                </ul>
                <h4>Back-end</h4>
                <ul class="listWrap">
                    <li>Node.js</li>
                    <li>MongoDB</li>
                    <li>PostgreSQL</li>
                </ul>
                <h4>Other technologies</h4>
                <ul class="listWrap">
                    <li>C</li>
                    <li>Java</li>
                    <li>Assembly</li>
                    <li>NPM</li>
                    <li>Mocha</li>
                    <li>Chai</li>
                    <li>Jasmine</li>
                    <li>Karma</li>
                    <li>Webpack</li>
                    <li>Browserify</li>
                    <li>Git</li>
                    <li>GitHub</li>
                    <li>Heroku</li>
                    <li>Enzyme</li>
                </ul>
                <h4>Additional Skills</h4>
                <ul class="listWrap">
                    <li>RESTful APIs</li>
                    <li>Unit testing</li>
                    <li>Data structures</li>
                </ul>
            </div>
            <div class="resWrap">
                <h3>Education</h3>
                <h4>Thinkful 2019-2020</h4>
                <span class="ital">Full Stack Flex</span>
                <ul class="listWrap">
                    <li>This program has given me industry best practices in a hands on 6 month web development course.
                    </li>
                </ul>

                <h4>Nassau Community College 2017-2019</h4>
                <span class="ital">Associates in Computer Science</span>
                <ul class="listWrap">
                    <li>Mobile-app development</li>
                    <li>C programming</li>
                    <li>Java programming</li>
                    <li>Assembly</li>
                </ul>
            </div>
        </section>
        <hr />`