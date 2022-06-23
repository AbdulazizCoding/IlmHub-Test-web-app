/**
 * Глобальные скрипты
 **/
$(function() {
    'use strict';

    /**
     * Инициализация плагинов:
     **/


    $('select').styler();

    $(".fb__open").fancybox({});

    $("a[href$='.jpg'], a[href$='.jpeg'], a[href$='.JPG'], a[href$='.png'],a[href$='.gif']").attr('rel', 'gallery').fancybox({
        'padding': 0,
        'transitionIn' : 'none',
        'transitionOut' : 'none',
        arrows: 1,
        helpers : {
            title: null,
            overlay : {
                css : {
                    'background' : 'rgba(0, 0, 0, 0.6)'
                }
            }
        },
    });


    $('.body').on("click touchstart", ".g__spoiler", function(){
        $(this).toggleClass("active").next().slideToggle();
    });

});


//Очистка поля поиска, вызов мобильного блока поиска по клику на иконку и закрытие

$(document).ready(function() {

    $("a.search__submit__mobile").on("click touchstart", function() {
        $('.search__mobile__form').toggle();
        $('.search__mobile').focus();
        return false;
    });

    $(".search__clear-mobile").on("click touchstart", function() {
        $('form input[type="text"]').val('');
    });

    $("a.search__submit__mobile").on("click touchstart", function() {
        $(this).toggleClass("click");
    })

});

// Закрывать поиск по клику вне области

$(document).mouseup(function (e) {
    var container = $(".search__mobile__form");
    var container_mob = $(".search__submit__mobile");
    if (container.has(e.target).length === 0 &&
        container_mob.has(e.target).length === 0 && e.target!=container_mob[0]
        ){
        container.hide();
        $("a.search__submit__mobile").removeClass("click");
    }
});
