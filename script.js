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

function showDetails(event) {

    switch (event) {
        case document.getElementById("judge1"):
            document.getElementById("judge_name").innerText = "Judge 1";
            break;
        case document.getElementById("judge2"):
            document.getElementById("judge_name").innerText = "Judge 2";
            break;
        case document.getElementById("judge3"):
            document.getElementById("judge_name").innerText = "Judge 3";
            break;
        case document.getElementById("judge4"):
            document.getElementById("judge_name").innerText = "Judge 4";
            break;
    }
}