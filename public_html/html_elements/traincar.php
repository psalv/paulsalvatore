

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
    <div class="infoCard hidden" data-card-id='0' id="infoCard-0">
        <img src="assets/img/XERAlogo_web_463x170.png">
    </div>

    <div class="infoCard hidden" data-card-id='1' id="infoCard-1"></div>
    <div class="infoCard hidden" data-card-id='2' id="infoCard-2"></div>
    <div class="infoCard hidden" data-card-id='3' id="infoCard-3"></div>
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