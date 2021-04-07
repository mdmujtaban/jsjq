 $(document).ready(function(){
//hide
 	$('#hide').click(function(){
 	
 	$('.lorem').hide("slow");

 });
 	//show
 	$('#show').click(function(){
 	
 	$('.lorem').show("fast");

 });
 	//toggle
 	$('#toggle').click(function(){
 	
 	$('.lorem').toggle("fast");

 });
 	//fadeOut
 	$('#fadeOut').click(function(){
 	
 	$('.lorem').fadeOut(1500);

 });

 	//fadeIN
 	$('#fadeIn').click(function(){
 	
 	$('.lorem').fadeIn(1500);

 });
 	//fadeToggle
 	$('#fadeToggle').click(function(){
 	
 	$('.lorem').fadeToggle(2000);

 });

});

// alert("ASSALAMUALAIKUM")

function textChange(){
	document.getElementById("para").innerHTML="Answer: Minhaz Faisal";}

var img=document.getElementById("img1")
function imageChange(){
	img.src="image/p2.jpg";
}