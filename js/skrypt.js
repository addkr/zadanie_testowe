
$(document).ready(function () {
    /**
      this value "i" is needed to change the pics in the slider
    **/
    var i = 0
    /**
        the function to change the pics with the slider
    **/
    slidepics()
        
    
    /**
        the buttons to switch the pictures 
    **/
    $("#slide0").click( function(){  
        setsliderbutton()
        i=0
        animate()        
    })
    $("#slide1").click( function(){  
        setsliderbutton()
        i=1
        animate()
    });
    $("#slide2").click( function(){
        setsliderbutton()
        i=2
        animate()
    })
    
    /** 
         function to set a visible slider and to set the animation interval
    **/
    function slidepics(){
        //change the color of the active slider button  
        setsliderbutton()
         $("#slide"+i+"").addClass("selectedbutton")
        animate()
        i++       
        if(i>2){
        i = 0
        }
        window.setTimeout(function() { slidepics() }, 6000)      
        
    }
    
    /**
        configuration for changing pictures
    **/
    function setcombination(){
        var j = i+3; var m = i+6; var n = i+9;
        $("#pic1").attr("src", "pics/"+i+".jpg")
        $("#pic2").attr("src", "pics/"+j+".jpg")
        $("#pic3").attr("src", "pics/"+m+".jpg")
        $("#pic4").attr("src", "pics/"+n+".jpg")
    }
    
    /**
        function to animate changing pictures 
    **/
    function animate(){
        $( ".pics" ).fadeToggle( "slow", function() {
        
        setcombination()
   
        })
        $(".pics").fadeToggle(true)
    }
    
    function setsliderbutton(){
        if(i==0&&i==2){
            $("#slide"+i+"").addClass("selectedbutton")
        }
        else if(i!==1&&i!==0){
            $("#slide1").addClass("selectedbutton")
        }
        else if(i==2){
            $("#slide2").addClass("selectedbutton")
        }
    } 
})
    

    


