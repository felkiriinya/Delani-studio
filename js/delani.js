//toggling between the image and description

$(document).ready(function(){
    $(".design").click(function(){
        $(".wedo1").toggle();
        $(".info1").toggle();
    });
    $(".development").click(function(){
        $(".wedo2").toggle();
        $(".info2").toggle();
    });
    $(".product").click(function(){
        $(".wedo3").toggle();
        $(".info3").toggle();
    });
});