

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


<!--
TODO !!!
Current plan:

Have horizontal strips (5) running in the white region, each representing a different card-prelude
When you click on these strips, a FULL-SIZE card will appear in the left section, outlining more details
The card will appear by sliding up from the bottom, if there is a card currently there than it will need to slide
up out of sight at the same time.

Cards:
1) iCONECT
2) Developers' Foundation
3) Other work
4) Personal projects
5) hings about me (guitarT

-->

<!--<div class="traincar-car" data-car-id='2' id="car-2" style="top: -100%">-->
<div class="traincar-car traincar-active" data-car-id='2' id="car-2">

    <!-- Card selection -->
    <div class="card infoCardTitleContainer">
        <div class="infoCardTitle text-center" id="card-0">
            <div class="parentCenter">
                <div class="childCenter text-center">
                    <img class="mainImage" src="assets/img/iconectlogo_web_419x92.png">
                </div>
            </div>
        </div>
        <div class="infoCardTitle" id="card-1">
            <div class="thirdsRow row text-center">
                <div class="col-xs-4">
                    <div class="parentCenter">
                        <div class="childCenter">
                            <img src="assets/img/df.png">
                        </div>
                    </div>
                </div>
                <div class="col-xs-4">
                    <div class="parentCenter">
                        <div class="childCenter">
                            <img src="assets/img/lcc.png">
                        </div>
                    </div>
                </div>
                <div class="col-xs-4">
                    <div class="parentCenter">
                        <div class="childCenter">
                            <img src="assets/img/ttl-westernlogo.svg">
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
            <img class="mainImage" src="assets/img/XERAlogo_web_463x170.png">
        </div>

        <div class="row">
            <div class="context">London, Ontario. 2017</div><br>

            Participated in a scrum agile development lifecycle developing the <a href="https://www.iconect.com/products/xera/" target="_blank">Xera eDiscovery product.</a><br><br>

            <b>Quality Assurance</b><br>
            I learned the ins and outs of the product by testing and creating bug and feature tickets.<br><br>

            <b>Automated Testing</b><br>
            Developed unit tests using Jest + Enzyme for the entire React front end of the product. Explored automated UI testing using TestCafe.<br><br>
            <a href="https://medium.com/@paulanthonysalvatore/jest-my-summer-approaching-various-problems-with-jest-enzyme-fc1ad992aece" target="_blank">You can read about my hurdles and solutions here.</a><br><br>

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
        Developers' Foundation<br>
        <div class="context">London, Ontario. 2016 - 2017</div><br>
        Worked with non-profit clients delivering high-quality web solutions.

        Project highlight: Western Chapter, Blank Bootstrap, Dolly

        <b>Skills Developed:</b><br>
        - desing, worked with designer
        - teamwork, pair-programming



        London Children's Connection
        Performed the role of IT support as well as pioneered their social media program (link to facebook)

        <b>Skills Developed:</b><br>
        - Consumer relations, through content management
        - hardware troubleshooting
        - communication, effectively explaining techniocal details in laymans terms

        Western University
        Wroedk in a biochemistry lab under the direction of Dr. Murray Junop (link).
        Researched methods of in vivo DNA repair using Deinococus radiodurans.

        <b>Skills Developed:</b><br>
        - Communication, showing results
        - Solving complex problems, working in novel areas of interest
        - Planning and recording keeping

    </div>

    <div class="infoCard hidden" data-card-id='2' id="infoCard-2">
        Metrognome(img)

        For musicians looking to speed up!

        I couldn't find a godo metrognome that gradually increased pace so this was my solution.

        Set the rate at which you want to increase and play! Has optional recording functionality for when you play something great.

        Technical Skills: Multithreading, audio file management


        Blank Bootstrap (img)

        Open source project developed by Developers' Foundation for new members.
        Gives you everythign you need to launch a web site using Heroku.

        Modularly deisgned to be able to grow with the organization, using PHP based components to suit a varierty of purposes.
    </div>

    <div class="infoCard hidden" data-card-id='3' id="infoCard-3">
        (img screenshot) SNAKE (Java)
        A 2D snake clone built entirely through JFrame
        () HEXAGONS (JS PHP)
        A dynamic and modular grid of SVG hexagons
        () LSSS (HTML CSS JS)
        Chrome extension delivering words, artwork and nature to your tabs
        () JSON-to-Q (HTML CSS JS)
        Easily create q cards! Just put them into JSON format first
        () Commit Timer (HTML CSS JS MeSpeakAPI)
        No one likes losing work, this will help you to stay on top of commits.

    </div>
    <div class="infoCard hidden" data-card-id='4' id="infoCard-4"></div>

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