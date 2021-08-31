let workHtml = `<section id="display1" class="displayed">
            <article class="work" id="item-1">
                <div class="work-photo">
                    <a href="https://my-fav-games.herokuapp.com/" target="_blank" rel="noopener noreferrer" class="nonClick">
                        <div class="content" style="background-image: url('MyGames.png');">
                        </div>
                    </a>
                </div>
                <div class="work-sum">
                    <h3>My Games</h3>
                    <p class="body-text">A web app that allows users to search for and save their favorite video games and receive reccommendations of similar video games.
                    This project showcases my skills in Python/ Flask/ PostgreSQL/ CSS/ HTML.</p>
                    <ul>
                        <li>live- <a href="https://my-fav-games.herokuapp.com/" target="_blank" class="nonClick" rel="noopener noreferrer">Find some Reccommendations</a>
                        </li>
                        <li>repo- <a href="https://github.com/nasjones/my_games" target="_blank" rel="noopener noreferrer"
                                class="nonClick">Check out the files</a>
                        </li>
                    </ul>
                </div>
            </article>
            <hr>
            <article class="work" id="item-2">
                <div class="work-photo">
                    <a href="https://quizbowl-opal.vercel.app/" target="_blank" rel="noopener noreferrer" class="nonClick">
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
                        <li>live- <a href="https://quizbowl-opal.vercel.app/" target="_blank" class="nonClick" rel="noopener noreferrer">Create a
                                quiz</a>
                        </li>
                        <li>repo- <a href="https://github.com/nasjones/quiz-maker-app" target="_blank" rel="noopener noreferrer"
                                class="nonClick">Check out the files</a>
                        </li>
                    </ul>
                </div>
            </article>
            <hr>
            <article class="work" id="item-3">
                <div class="work-photo">
                    <a href="https://nasjones.github.io/Crudhub/" target="_blank" rel="noopener noreferrer" class="nonClick">
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
                        <li>live- <a href="https://nasjones.github.io/Crudhub/" target="_blank" rel="noopener noreferrer" class="nonClick">Use
                                Crudhub</a>
                        </li>
                        <li>repo- <a href="https://github.com/nasjones/Crudhub" target="_blank" rel="noopener noreferrer" class="nonClick">Check
                                out
                                the files</a>
                        </li>
                    </ul>
                </div>
            </article>
            <hr>
            <article class="work" id="item-4">
                <div class="work-photo">
                    <a href="https://showtunes.vercel.app/" target="_blank" rel="noopener noreferrer" class="nonClick">
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
                        <li>live- <a href="https://showtunes.vercel.app/" target="_blank" rel="noopener noreferrer" class="nonClick">Use
                                Showtunes</a>
                        </li>
                        <li>repo- <a href="https://github.com/nasjones/playlist-client" target="_blank" rel="noopener noreferrer"
                                class="nonClick">Check out
                                the files</a>
                        </li>
                    </ul>
                </div>
            </article>
        </section>`;

let bioHtml = `<section id="display2" class="displayed">
            <div class="bioWrap">
            <img src='mePic.jpg' id='mePic'>
            <p id="bio" >I was born and raised in Long Island New York. From as 
            far back as I can remember I
            have always been in front of a computer screen trying to 
            figure out how to tweak something online or find a way
            to solve a problem. I'm passionate about programming as it 
            allows for free expression and problem solving.
            </p>
            </div>
        </section>`;

let resHtml = `<section id="display3" class="displayed">
            <h2><a href="./Nassir_Jones_Resume.pdf" download>Download my full resume.</a></h2>
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
                    <li>Java</li>
                    <li>Python</li>
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
                    <li>RESTful APIs</li>
                    <li>Unit testing</li>
                    <li>Data structures</li>
                </ul>
            </div>
            <div class="resWrap">
                <h3>Education</h3>
                <h4>Springboard 2021</h4>
                <span class="ital">Software Engineering track</span>
                <br/>
                <ul class="listWrap">
                    <li>Python
                    </li>
                    <li>Flask</li>
                </ul>
                
                <h4>Thinkful 2019-2020</h4>
                <span class="ital">Full Stack Flex:</span>
                <br/>
                <ul class="listWrap">
                    <li>PERN Stack
                    </li>
                    <li>Accesible Programming</li>
                </ul>

                <h4>Nassau Community College 2017-2019</h4>
                <span class="ital">Associate Degree in Computer Science:</span>
                <br/>
                <ul class="listWrap">
                    <li>Mobile-app development</li>
                    <li>Java programming</li>
                </ul>
            </div>
        </section>`;

let allHtml = `<section id="display1" class="displayed">
            <span class="orangeText"><h2>My Work</h2></span>
            <article class="work" id="item-1">
                <div class="work-photo">
                    <a href="https://my-fav-games.herokuapp.com/" target="_blank" rel="noopener noreferrer" class="nonClick">
                        <div class="content" style="background-image: url('MyGames.png');">
                        </div>
                    </a>
                </div>
                <div class="work-sum">
                    <h3>My Games</h3>
                    <p class="body-text">A web app that allows users to search for and save their favorite video games and receive reccommendations of similar video games.
                    This project showcases my skills in Python/ Flask/ PostgreSQL/ CSS/ HTML.</p>
                    <ul>
                        <li>live- <a href="https://my-fav-games.herokuapp.com/" target="_blank" class="nonClick" rel="noopener noreferrer">Find some Reccommendations</a>
                        </li>
                        <li>repo- <a href="https://github.com/nasjones/my_games" target="_blank" rel="noopener noreferrer"
                                class="nonClick">Check out the files</a>
                        </li>
                    </ul>
                </div>
            </article>
            <hr>
            <article class="work" id="item-2">
                <div class="work-photo">
                    <a href="https://quizbowl-opal.vercel.app/" target="_blank" rel="noopener noreferrer" class="nonClick">
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
                        <li>live- <a href="https://quizbowl-opal.vercel.app/" target="_blank" rel="noopener noreferrer"class="nonClick">Create a
                                quiz</a>
                        </li>
                        <li>repo- <a href="https://github.com/nasjones/quiz-maker-app" target="_blank" rel="noopener noreferrer"
                                class="nonClick">Check out the files</a>
                        </li>
                    </ul>
                </div>
            </article>
            <hr>
            <article class="work" id="item-3">
                <div class="work-photo">
                    <a href="https://nasjones.github.io/Crudhub/" target="_blank" rel="noopener noreferrer" class="nonClick">
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
                        <li>live- <a href="https://nasjones.github.io/Crudhub/" target="_blank" rel="noopener noreferrer" class="nonClick">Use
                                Crudhub</a>
                        </li>
                        <li>repo- <a href="https://github.com/nasjones/Crudhub" target="_blank" rel="noopener noreferrer" class="nonClick">Check
                                out
                                the files</a>
                        </li>
                    </ul>
                </div>
            </article>
            <hr>
            <article class="work" id="item-4">
                <div class="work-photo">
                    <a href="https://showtunes.vercel.app/" target="_blank" rel="noopener noreferrer" class="nonClick">
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
                        <li>live- <a href="https://showtunes.vercel.app/" target="_blank" rel="noopener noreferrer" class="nonClick">Use
                                Showtunes</a>
                        </li>
                        <li>repo- <a href="https://github.com/nasjones/playlist-client" target="_blank" rel="noopener noreferrer"
                                class="nonClick">Check out the files</a>
                        </li>
                    </ul>
                </div>
            </article>
        </section>
        <hr />
        <section id="display2" class="displayed">
            <span class="orangeText"><h2>About Me</h2></span>
            <div class="bioWrap">
            <img src='mePic.jpg' id='mePic'>
            <p id="bio">I was born and raised in Long Island New York. From as 
                far back as I can remember I
                have always been in front of a computer screen trying to 
                figure out how to tweak something online or find a way
                to solve a problem. I'm passionate about programming as it 
                allows for free expression and problem solving. 
            </p>
            </div>
        </section>
        <hr />
        <section id="display3" class="displayed">
            <span class="orangeText"><h2>Resume</h2></span>
            <h3><a href="./Nassir_Jones_Resume.pdf" download>Download my full resume.</a></h3>
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
                        <li>Java</li>
                        <li>Python</li>
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
                        <li>RESTful APIs</li>
                        <li>Unit testing</li>
                        <li>Data structures</li>
                    </ul>
            </div>
            <div class="resWrap">
                <h3>Education</h3>
                <h4>Springboard 2021</h4>
                <span class="ital">Software Engineering track</span>
                <br/>
                <ul class="listWrap">
                    <li>Python
                    </li>
                    <li>Flask</li>
                </ul>
                
                <h4>Thinkful 2019-2020</h4>
                <span class="ital">Full Stack Flex:</span>
                <br/>
                <ul class="listWrap">
                    <li>PERN Stack
                    </li>
                    <li>Accesible Programming</li>
                </ul>

                <h4>Nassau Community College 2017-2019</h4>
                <span class="ital">Associates in Computer Science</span>
                <br/>
                <ul class="listWrap">
                    <li>Mobile-app development</li>
                    <li>C</li>
                    <li>Java</li>
                    <li>Data Structures</li>
                </ul>
            </div>
        </section>
        <hr />`;
