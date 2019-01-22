// Number of points needed to win.
var goal = 0;
// Total attempts left.
var crystals = 0;
// Win Counter.
var wins = 0;
// Loss Counter.
var losses = 0;
//Point Counter
var points = 0;

var gamefinished = false;

$(document).ready(function () {

    // For loop populates #Gems div with images and assigns them values.
    function GameStart() {

        
    for (i = 0; i < 4; i++) {

        var pic = $(document.createElement('img'))
        pic.attr("src", "./assets/images/Gem1.png")
        pic.attr("id", i)
        pic.attr("value", Math.floor(Math.random()*5))
        pic.addClass("col-lg-3")
        $("#Gems").append(pic)
        console.log("This is the", i, "Pic")
        goal = Math.floor(Math.random()*20)
        console.log(pic.attr("value"))
         
         };

    $("#goal").html(goal)
    };

       

    


    GameStart()
    
    $("#points").html(points)
    $("#goal").html(goal)
    $("#wins").html(wins)
    $("#losses").html(losses)

  
      
        
    


    $("#Gems").on("click", "img", function () {
        var pointvalue = $(this).attr("value");
        pointvalue = parseInt(pointvalue)
        points = points + pointvalue;
        $("#points").html(points)
   
        if (points === goal) {

            wins = wins + 1;
            $("#wins").html(wins)
            points = 0;
            $("#points").html(points)
            $("#Gems").html("")
            GameStart()
    
        }
    
        else if (points > goal) {
            losses = losses + 1;
            $("#losses").html(losses)
            points = 0;
            $("#points").html(points)
            $("#Gems").html("")
            GameStart()
    
        }
    
    
    
    
    
    
    
    
    });
        
       

 
});
    

    

