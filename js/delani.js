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


$(document).ready(function () { //hover effect for portfolio images1
	$(".view1").hover(function () {
		$(".name1").show();
	}, function () {
		$(".name1").hide();
	});
});
$(document).ready(function () { //hover effect for portfolio images2
	$(".view2").hover(function () {
		$(".name2").show();
	}, function () {
		$(".name2").hide();
	});
});
$(document).ready(function () { //hover effect for portfolio images3
	$(".view3").hover(function () {
		$(".name3").show();
	}, function () {
		$(".name3").hide();
	});
});
$(document).ready(function () { //hover effect for portfolio images4
	$(".view4").hover(function () {
		$(".name4").show();
	}, function () {
		$(".name4").hide();
	});
});
$(document).ready(function () { //hover effect for portfolio images5
	$(".view5").hover(function () {
		$(".name5").show();
	}, function () {
		$(".name5").hide();
	});
});
$(document).ready(function () { //hover effect for portfolio images6
	$(".view6").hover(function () {
		$(".name6").show();
	}, function () {
		$(".name6").hide();
	});
});
$(document).ready(function () { //hover effect for portfolio images7
	$(".view7").hover(function () {
		$(".name7").show();
	}, function () {
		$(".name7").hide();
	});
});
$(document).ready(function () { //hover effect for portfolio images8
	$(".view8").hover(function () {
		$(".name8").show();
	}, function () {
		$(".name8").hide();
	});
});

//Submitting the form

function sendMessage(){
    var name =$("#form1").val();
    var email=$("#form2").val();
    var message=$("#mess").val();
    if (name === "" || email === "") {
		alert("Please fill in all fields!")
	} else {
		alert("Thank you " + name + "! Your message has been received. We shall get back to you shortly.");
        document.getElementById("yourform");
       
	};
};
