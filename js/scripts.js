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

    $(".mob-burger").click(function() {
        $(".sidebar").addClass("sidebar--show")
        $("body").append(`<div class="sidebar-backdrop"></div>`)
        $("body").addClass("body--fixed")

        $(".sidebar-backdrop").click(function() {
            closeSidebar()
        })
    })

    $(".sidebar__close").click(function() {
        closeSidebar()
    })

    function closeSidebar() {
        $(".sidebar-backdrop").remove()
        $(".sidebar").removeClass("sidebar--show")
        $("body").removeClass("body--fixed")
    }
});