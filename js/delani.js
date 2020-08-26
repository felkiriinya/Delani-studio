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

//hover effect for portfolio images

// $(document).ready(function(){
//     $(".project1").hover(function(){
//         $(".project").show();
//     })

// })
$(document).ready(function () { //hover effect for portfolio images
	$(".view1").hover(function () {
		$(".name1").show();
	}, function () {
		$(".name1").hide();
	});
});