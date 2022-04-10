$(document).ready(function() {

    $(".sidebar").mCustomScrollbar()

    $(".sidebar__item-show").click(function() {
        $(this).parents(".sidebar__item").toggleClass("sidebar__item--open")
        $(this).siblings(".sidebar__item-hidden").slideToggle()
    })


    $(".sidebar").mouseover(function() {
        $(this).removeClass("sidebar--collapsed")
    })

    $(".sidebar").mouseout(function() {
        if (!$(this).hasClass("sidebar--disabled")) {
            $(this).addClass("sidebar--collapsed")
        }
    })

    $(".sidebar__collapse").click(function() {
        $(".sidebar").toggleClass("sidebar--disabled")
        $(this).toggleClass("sidebar__collapse--active")
    })
});