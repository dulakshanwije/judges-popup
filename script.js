jQuery(document).ready(function ($) {
    //open popup
    $('.team_member_holder').on('click', function (event) {
        event.preventDefault();
        $('.popup').addClass('is-visible');
    });

    //close popup
    $('.popup').on('click', function (event) {
        if ($(event.target).is('.popup-close') || $(event.target).is('.popup')) {
            event.preventDefault();
            $(this).removeClass('is-visible');
        }
    });
    //close popup when clicking the esc keyboard button
    $(document).keyup(function (event) {
        if (event.which == '27') {
            $('.popup').removeClass('is-visible');
        }
    });
});


function setDetails(name,title1,title2,desc,url){
    document.getElementById("judge_name").innerText = name;
    document.getElementById("judge_title1").innerText = title1;
    document.getElementById("judge_title2").innerText = title2;
    document.getElementById("judge_desc").innerText = desc;
    document.getElementById("judge_url").src = document.getElementById(url).src;
}

function showDetails(event) {

    switch (event) {
        case document.getElementById("judge1"):
            var desc = "Judge 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
            setDetails("Judge 1 name", "Professor", "WUSL", desc, "judgeImg1");
            break;
        case document.getElementById("judge2"):
            var desc = "Judge 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
            setDetails("Judge 2 name", "2 - Professor", "2WUSL", desc, "judgeImg2");
            break;
        case document.getElementById("judge3"):
            var desc = "Judge 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
            setDetails("Judge 3 name", "3Professor", "3WUSL", desc, "judgeImg3");
            break;
        case document.getElementById("judge4"):
            var desc = "Judge 4 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
            setDetails("Judge 4 name", "4Professor", "4WUSL", desc, "judgeImg4");
            break;
    }
}