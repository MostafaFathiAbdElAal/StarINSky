"use strict"
//^ ====> Close sidebar and animation h2 and p 
$("#closeSideBar").on("click", function () {
    const currentPositionLeft = $(".Sidebar").outerWidth()
    console.log(currentPositionLeft);
    $(".Sidebar > div").animate({ width: -currentPositionLeft }, 1000)
    $(".Sidebar p:last-of-type").animate({ marginLeft: "1rem" })
    $("#Home h1,h1 + p").animate({ marginLeft: "0%" })
})
//^ Open sidebar and return position h2 and p 
$(".Sidebar p:last-of-type").on("click", function () {
    $(".Sidebar > div").animate({ width: "25%" }, 500)
    $(".Sidebar p:last-of-type").animate({ marginLeft: "26%" })
    $("#Home h1,h1 + p").animate({ marginLeft: "25%" })

})
//^ Open down and close up on all singers
$(".allSingers div").on("click", function () {
    $("#" + $(this).attr("id") + " + p").slideToggle()

})
//^ Remaining character in textarea and add attrabute max-length  
$(" #Contact form textarea").on("input", function () {
    const remainingCharacter = 100
    $("#Contact form textarea").attr("maxlength", `${remainingCharacter}`)
    $("#Contact form p span").html(`${remainingCharacter - $("textarea").val().length >= 0 ? (`${remainingCharacter - $("textarea").val().length}`) : 0}`)

})
//^ Scroll animation and Class active on <a> in sidebar 
$(`#Home ul a`).on("click",function () {
    $(`#Home ul a`).removeClass(`active`)
    const positionPage = $(this).attr("href")
    const positionTop = $(positionPage).offset().top
    $(this).addClass(`active`)
    $("html,body").animate({ scrollTop: positionTop }, 2000);
}) 
const positionHome = $(`#Home`).offset().top
const positionDuration = $(`#Duration`).offset().top
const positionDetails = $(`#Details`).offset().top
const positionContact = $(`#Contact`).offset().top
$(window).on("scroll",function() {
    if ($(window).scrollTop() < positionDuration) {
        $(`#Home ul li:nth-child(1) a`).addClass(`active`)
    }else{
        $(`#Home ul li:nth-child(1) a`).removeClass(`active`)
    }
    if ($(window).scrollTop() < positionDetails && positionDuration < $(window).scrollTop()) {
        $(`#Home ul li:nth-child(2) a`).addClass(`active`)
    }else{
        $(`#Home ul li:nth-child(2) a`).removeClass(`active`)
    }
    if ($(window).scrollTop() < positionContact && positionDetails < $(window).scrollTop()) {
        $(`#Home ul li:nth-child(3) a`).addClass(`active`)
    }else{
        $(`#Home ul li:nth-child(3) a`).removeClass(`active`)
    }
    if ($(window).scrollTop() > positionContact && positionContact < $(window).scrollTop()) {
        $(`#Home ul li:nth-child(4) a`).addClass(`active`)
    }else{
        $(`#Home ul li:nth-child(4) a`).removeClass(`active`)
    }
})
//^ Time countdown for party  
let timeParty = new Date("2024-12-12T00:00:00Z");
function time() {
    let timeNow = new Date();
    let countDownTime = timeParty - timeNow;
    if (countDownTime <= 0) {
        clearInterval(liveTime)
        $('#Details div div:nth-child(1) span').text(`Finished`);
        $('#Details div div:nth-child(2) span').text(`Finished`);
        $('#Details div div:nth-child(3) span').text(`Finished`);
        $('#Details div div:nth-child(4) span').text(`Finished`);
    }
    let days = Math.floor(countDownTime / (1000 * 60 * 60 * 24));
    let hours = Math.floor((countDownTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((countDownTime % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((countDownTime % (1000 * 60)) / 1000);
    $('#Details div div:nth-child(1) span').text(days + ' D');
    $('#Details div div:nth-child(2) span').text(hours + ' H');
    $('#Details div div:nth-child(3) span').text(minutes + ' M');
    $('#Details div div:nth-child(4) span').text(seconds + ' S');
}
let liveTime = setInterval(() => {
    time()
}, 1000);