var picNextBtn = document.querySelector(".pic .next");
var picPrevBtn = document.querySelector(".pic .previous");

var img = document.querySelector(".pic img");
var i=2;
var totalPic=2;
var imgSrc = "images/"+i+".jpg";

// pic Next button click event//
picNextBtn.addEventListener("click",function(){
    i+=1;
    if(i>totalPic){
        img.setAttribute("src","images/1.jpg");
        i=1;
    }else{
        img.setAttribute("src","images/"+i+".jpg");
    }
});


// pic Previous button click event//
picPrevBtn.addEventListener("click",function(){
    i-=1;
    if(i<1){
        img.setAttribute("src","images/"+totalPic+".jpg");
        i=totalPic;
    }else{
        img.setAttribute("src","images/"+i+".jpg");
    }
});



$(".nav_a").on("click",function(){
    $(".nav_a").removeClass("bold");
    $(this).addClass("bold");
    var hash=this.hash;
    $("html").animate({ scrollTop: $(hash).offset().top},900);
});

