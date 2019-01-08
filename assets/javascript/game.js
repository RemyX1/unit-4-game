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

$(document).ready(function () {

    // For loop populates #Gems div with images and assigns them values.

    for (i = 0; i < 4; i++) {

        var Pic = $(document.createElement('img'))
        Pic.attr("src", "./assets/images/Gem1.png")
        Pic.attr("id", i)
        Pic.attr("value", Math.floor(Math.random()*50))
        Pic.addClass("col-lg-3")
        $("#Gems").append(Pic)
        console.log("This is the", i, "Pic")
        console.log(Pic)
        

    };
    
    
  $("#points").append(points)
  
    //Click event that allows for gameplay.

    $("img").on("click", function () {
        console.log("HI")
        console.log(this.val)

    });

    
    

});