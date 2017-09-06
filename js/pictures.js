$(document).ready(function () {

/**
        this part takes off/on the opacity from the pictures
    **/
    $(".pics").mouseenter( function(){
        $(this).addClass("selectedpic");
        
    });
    $(".pics").mouseleave( function(){
        $(this).removeClass("selectedpic");
    });
    
    
});