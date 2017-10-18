

<!-- TODO !!!
 For the hexagons I want to have three hexagons in the center of the page such that they don't touch sides
I will add the dropshadow in gimp, it will be fine..
-->
<!--<div class="traincar-car traincar-active" data-car-id='0' id="car-0">-->
<div class="traincar-car" data-car-id='0' id="car-0" style="top: -100%">
    <?php include "hexagons.php" ?>
</div>

<div class="traincar-car" data-car-id='1' id="car-1" style="top: -100%">
<!--second car-->
    <div class="card">
        <div class="content-block">
            <div class="cycleWords">
                I enjoy <span id="enjoyRotation">problem solving.</span>
            </div>
            <div class="hidden" id="wii">
                (I am my family's reigning champion)
            </div>
            <div class="cycleWords">
                I have been <span id="beenRotation">a developer.</span>
            </div>
        </div>
    </div>

    <div class="backgroundRight"></div>

</div>


<!--<div class="traincar-car" data-car-id='2' id="car-2" style="top: -100%">-->
<div class="traincar-car traincar-active" data-car-id='2' id="car-2">

    <!-- Card selection -->
    <div class="card infoCardTitleContainer">
        <div class="infoCardTitle text-center" id="card-0">
            <div class="parentCenter">
                <div class="childCenter text-center">
                    <img class="mainImage" src="assets/img/work/iconectLogo.png">
                </div>
            </div>
        </div>
        <div class="infoCardTitle" id="card-1">
            <div class="thirdsRow row text-center">
                <div class="col-xs-4">
                    <div class="parentCenter">
                        <div class="childCenter">
                            <img src="assets/img/work/developersFoundationLogo.png">
                        </div>
                    </div>
                </div>
                <div class="col-xs-4">
                    <div class="parentCenter">
                        <div class="childCenter">
                            <img src="assets/img/work/lccLogo.png">
                        </div>
                    </div>
                </div>
                <div class="col-xs-4">
                    <div class="parentCenter">
                        <div class="childCenter">
                            <img src="assets/img/work/westernLogo.svg">
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <div class="infoCardTitle" id="card-2"></div>
        <div class="infoCardTitle" id="card-3"></div>
        <div class="infoCardTitle" id="card-4"></div>
    </div>

    <!-- Scrolling cards -->
    <div class="infoCard hidden info1" data-card-id='0' id="infoCard-0">
        <div class="row text-center">
            <img class="mainImage" src="assets/img/work/xeraLogo.png">
        </div>

        <div class="row">
            <div class="context">London, Ontario. 2017</div><br>

            Participated in a scrum agile development lifecycle developing the <a href="//www.iconect.com/products/xera/" target="_blank">Xera eDiscovery product.</a><br><br>

            <b>Quality Assurance</b><br>
            I learned the ins and outs of the product by testing and creating bug and feature tickets.<br><br>

            <b>Automated Testing</b><br>
            Developed unit tests using Jest + Enzyme for the entire React front end of the product. Explored automated UI testing using TestCafe.<br><br>
            <a href="//medium.com/@paulanthonysalvatore/jest-my-summer-approaching-various-problems-with-jest-enzyme-fc1ad992aece" target="_blank">You can read about my hurdles and solutions here.</a><br><br>

            Some numbers from my work: <br><br>
            <div class="row">
                <div class="col-xs-4 text-center"><b>71</b> test suites</div>
                <div class="col-xs-4 text-center"><b>470</b> snapshots</div>
                <div class="col-xs-4 text-center"><b>753</b> individual tests</div>
            </div><br>

            <b>Developer</b><br>
            Coded solutions for bugs and features accordingly to assigned tickets.<br>

            <hr style="width: 100%; border: solid 1px">

            <b>Professional Skills Developed:</b><br>
            - Organization, through scrum agile + ticket based development<br>
            - Communication, through constant dialogue between quality assurance and development<br>
            - Teamwork<br><br>

            <b>Technical Skills Acquired:</b><br>
            - Jest + Enzyme unit testing<br>
            - TestCafe UI testing<br>
            - Typescript<br>
            - React
        </div>

    </div>

    <div class="infoCard hidden" data-card-id='1' id="infoCard-1">

        <h3 class="text-center">Developers' Foundation(TODO LINK)</h3>
        <div class="context">London, Ontario. 2016 - 2017</div><br>
        Worked with non-profit clients delivering high-quality web solutions.<br><br>

        Project highlight: Western Chapter, Blank Bootstrap, Dolly<br><br>

        <b>Skills Developed:</b><br>
        - Design, worked alongside our designer to meet clients' needs<br>
        - Teamwork, participated in pair-programming<br>
        - Full stack web development<br>
        - Communication, through direct contact with clients and members of team<br>




        <h3 class="text-center">London Children's Connection(TODO LINK)</h3>
        <div class="context">London, Ontario. 2016 - 2017</div><br>

        Performed the role of IT support as well as pioneered their social media program (link to facebook)

        <b>Skills Developed:</b><br>
        - Consumer relations, through content management
        - hardware troubleshooting
        - communication, effectively explaining technical details in laymans terms

        <h3 class="text-center">Western University</h3>
        <div class="context">London, Ontario. 2015 - 2016</div><br>
        Worked in a biochemistry lab under the direction of <a href="//junoplab.wordpress.com/" target="_blank">Dr. Murray Junop.</a><br>
        Researched methods of in vivo DNA repair using the Deinoccocus radiodurans bacterium.

        <b>Skills Developed:</b><br>
        - Communication, displayed and explained complex data<br>
        - Solving complex problems, worked in novel areas of interest<br>
        - Planning and recording keeping, essential for successful research<br>

    </div>

    <div class="infoCard hidden" data-card-id='2' id="infoCard-2">
        <div class="infoCardTitle text-center" id="card-0">
            <div class="parentCenter">
                <div class="childCenter text-center">
                    <img class="mainImage" src="assets/img/work/metrognomeApp.png">
                </div>
            </div>
        </div>

        <b>Metrognome</b> is an application for musicians looking to speed up!<br><br>

        After being frustrated by metrognomes that didn't have a feature to gradually increase speed I created one myself<br>

        <b>Skills Developed:</b><br>
        - Java + JFrame<br>
        - Multithreading<br>
        - Audio file management<br>


        <div class="infoCardTitle text-center" id="card-0">
            <div class="parentCenter">
                <div class="childCenter text-center">
                    <img class="mainImage" src="assets/img/work/blankBootstrap.png">
                </div>
            </div>
        </div>

        <b>Blank Bootstrap</b> is an open source project developed by Developers' Foundation.<br>
        The project provides a starting point for new developers, giving them the tools to quickly launch a web application using <a href="//heroku.com">Heroku.</a><br><br>

        Blank Bootstrap modularily designed to be able to grow with the organization, using PHP based components to suit a variety of purposes.
    </div>

    <div class="infoCard hidden info3" data-card-id='3' id="infoCard-3">

        <div class="row description-top">
            <a href="//github.com/Developers-Foundation/western-chapter" target="_blank"><h4>Developers' Foundation Western Chapter</h4></a>
            Developed from scratch alongside our designer.<br>
            <div class="smaller">HTML, LESS, PHP, JS, SVG</div>
        </div>
        <div class="row">
            <img src="assets/img/projects/westernChapterApp.png">
        </div>

        <div class="row description">
            <a href="//github.com/psalv/Snake" target="_blank"><h4>Snake</h4></a>
            A 2D snake clone built entirely through JFrame.<br>
            <div class="smaller">Java</div>
        </div>
        <div class="row">
            <img src="assets/img/projects/snakeApp.png">
        </div>

        <div class="row description">
            <a href="//chrome.google.com/webstore/detail/learn-something-see-somet/hjilmolkopjkokfofafnlgbphdfopldo" target="_blank"><h4>Learn Something, See Something</h4></a>
            Chrome extension delivering words, artwork and nature to your tabs.<br>
            <div class="smaller">HTML, CSS, JS</div>
        </div>
        <div class="row">
            <img src="assets/img/projects/lsssApp.png">
        </div>

        <div class="row description">
            <a href="//json-to-q.herokuapp.com/" target="_blank"><h4>JSON-to-Q</h4></a>
            Easily create q cards! Just put them into JSON format first.<br>
            <div class="smaller">HTML, CSS, JS</div>
        </div>
        <div class="row">
            <img src="assets/img/projects/jsonToQApp.png">
        </div>

        <div class="row description">
            <a href="//github.com/psalv/SVG_Hexagonal_Grid" target="_blank"><h4>SVG Hexagons</h4></a>
            A dynamic and modular grid of SVG hexagons.<br>
            <div class="smaller">PHP, JS</div>
        </div>
        <div class="row">
            <img src="assets/img/projects/hexagonApp.png">
        </div>

        <div class="row description">
            <a href="//commitproductivitytimer.herokuapp.com/" target="_blank"><h4>Commit Timer</h4></a>
            No one likes losing work, this will help you to stay on top of commits.<br>
            <div class="smaller">HTML, CSS, JS, MeSpeak</div>
        </div>
        <div class="row">
            <img src="assets/img/projects/commitTimerApp.png">
        </div>

        <div class="row description">
            <h4>A Song!</h4>
            Thank you for checking out my projects, I recorded this for you!<br>
        </div>
        <div class="row">
            <!--            <img src="assets/img/projects/lsssApp.png">-->
        </div>

    </div>

    <div class="backgroundLeft"></div>
    <div class="backgroundRight2"></div>

    <div id="card-tooltip">
        <i class="fa fa-close"></i>
        You can use the up and down arrows to navigate content.
    </div>

</div>

<div class="traincar-car" data-car-id='3' id="car-3" style="top: -100%">
<!--third car-->
    <div class="content-block">
        <div class="text-center">
            Let's connect.
        </div>

        <div class="text-center icons">
            <i class="fa fa-linkedin-square" id="linkedinIcon"></i>
            <i class="fa fa-github-square" id="githubIcon"></i>
            <a href="mailto:paulanthonysalvatore@gmail.com">
                <i class="fa fa-envelope-square" id="mailIcon"></i>
            </a>
            <i class="fa fa-google-plus-square" id="googleIcon"></i>
            <i class="fa fa-fire" id="smokeIcon"></i>
        </div>

        <div class="text-center links">
            <span id="currentLink"></span>
        </div>

    </div>

    <div class="smokeContainer hidden">
        <div class="smoke" id="smoke1"></div>
        <div class="smoke" id="smoke2"></div>
        <div class="smoke" id="smoke3"></div>
    </div>

    <div class="backgroundLeft2"></div>

</div>