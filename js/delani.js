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
$(document).ready(function () { //hover effect for portfolio images
	$(".view2").hover(function () {
		$(".name2").show();
	}, function () {
		$(".name2").hide();
	});
});
$(document).ready(function () { //hover effect for portfolio images
	$(".view3").hover(function () {
		$(".name3").show();
	}, function () {
		$(".name3").hide();
	});
});
$(document).ready(function () { //hover effect for portfolio images
	$(".view4").hover(function () {
		$(".name4").show();
	}, function () {
		$(".name4").hide();
	});
});
$(document).ready(function () { //hover effect for portfolio images
	$(".view5").hover(function () {
		$(".name5").show();
	}, function () {
		$(".name5").hide();
	});
});
$(document).ready(function () { //hover effect for portfolio images
	$(".view6").hover(function () {
		$(".name6").show();
	}, function () {
		$(".name6").hide();
	});
});
$(document).ready(function () { //hover effect for portfolio images
	$(".view7").hover(function () {
		$(".name7").show();
	}, function () {
		$(".name7").hide();
	});
});
$(document).ready(function () { //hover effect for portfolio images
	$(".view8").hover(function () {
		$(".name8").show();
	}, function () {
		$(".name8").hide();
	});
});