$(document).ready(function () {

/**
        this part change the color of the elements on top
    **/
    
    $("h1").mouseenter( function(){
        $(this).addClass("selectedicon");
        
    });
    $("h1").mouseleave( function(){
        $(this).removeClass("selectedicon");
    });
});