//var name=prompt("Enter your name :");
//alert("Welcome to my portfolio "+name);

//document.querySelector(".heading p").style.color="blue";
/*function highlight(){
    document.querySelector(".heading p").style.zoom="2";
    document.querySelector(".heading p").style.color="red";
}
function highlight2(){
    document.querySelector(".heading p").style.zoom="1.5";
    document.querySelector(".heading p").style.color="white";
}

document.querySelector(".heading p").addEventListener("mouseover",highlight);
document.querySelector(".heading p").addEventListener("mouseout",highlight2);
*/
var heading=document.querySelector(".heading p");
heading.addEventListener("mouseover",function(){
    heading.style.color="yellow";
    heading.style.transform="scale(1.02)";
    heading.style.transition = "background-color 0.3s ease";
});
heading.addEventListener("mouseout",function(){
    heading.style.color="";
    heading.style.transform="";
});
//document.querySelector(".heading img").style.filter="hue-rotate(90deg)";
var headingImg=document.querySelector(".heading img");
headingImg.addEventListener("mouseover",function(){
    headingImg.style.filter="hue-rotate(90deg)";
    headingImg.style.transform="scale(1.1)";
});
headingImg.addEventListener("mouseout",function(){
    headingImg.style.filter="";
    headingImg.style.transform="";
});

//updation in our home button 
var upperbut=document.querySelector(".home1");
upperbut.addEventListener("mouseover",function(){
    upperbut.style.color="green";
    upperbut.style.zoom="1.05";
});
upperbut.addEventListener("mouseout",function(){
    upperbut.style.color="";
    upperbut.style.zoom="";
});

//updation with our about button
var upperbut2=document.querySelector(".about");
upperbut2.addEventListener("mouseover",function(){
    upperbut2.style.color="green";
    upperbut2.style.zoom="1.05";
});
upperbut2.addEventListener("mouseout",function(){
    upperbut2.style.color="";
    upperbut2.style.zoom="";
});

//updation with our contact me button 
var upperbut3=document.querySelector(".contact");
upperbut3.addEventListener("mouseover",function(){
    upperbut3.style.color="green";
    upperbut3.style.zoom="1.05";
});
upperbut3.addEventListener("mouseout",function(){
    upperbut3.style.color="";
    upperbut3.style.zoom="";
});

var upperbut4=document.querySelector(".resume");
upperbut4.addEventListener("mouseover",function(){
    upperbut4.style.color="green";
    upperbut4.style.zoom="1.05";
});
upperbut4.addEventListener("mouseout",function(){
    upperbut4.style.color="";
    upperbut4.style.zoom="";
});


var myName=document.querySelector(".header h1 span");
myName.addEventListener("mouseover",() => {
    myName.style.color="green";
});
myName.addEventListener("mouseout",() => {
    myName.style.color="";
}); 

var social1=document.querySelector(".link");
social1.addEventListener("mouseover",function(){
    social1.style.filter="hue-rotate(90deg)";
    social1.style.zoom=1.025;
});
social1.addEventListener("mouseout",function(){
    social1.style.filter="";
    social1.style.zoom="";
});

var social2=document.querySelector(".resu");
social2.addEventListener("mouseover",function(){
    social2.style.filter="hue-rotate(90deg)";
    social2.style.zoom="1.025";
});
social2.addEventListener("mouseout",function(){
    social2.style.filter="";
    social2.style.zoom="";
});

var social3=document.querySelector(".leet");
social3.addEventListener("mouseover",function(){
    social3.style.filter="hue-rotate(90deg)";
    social3.style.zoom="1.025";
});
social3.addEventListener("mouseout",function(){
    social3.style.filter="";
    social3.style.zoom="";
});

var social4=document.querySelector(".git");
social4.addEventListener("mouseover",function(){
    social4.style.filter="hue-rotate(90deg)";
    social4.style.zoom="1.025";
});
social4.addEventListener("mouseout",function(){
    social4.style.filter="";
    social4.style.zoom="";
});
var social6=document.querySelector(".icons h2");
var social5=document.querySelector(".email");
social5.addEventListener("mouseover",function(){
    social6.style.display="block";
    social5.style.filter="hue-rotate(90deg)";
    social5.style.zoom="1.025";
});
social5.addEventListener("mouseout",function(){
    social5.style.filter="";
    social6.style.display="none";
    social5.style.zoom="";
});
var menubar0=document.querySelector(".menutab a");
var menubar=document.querySelector(".menu");
menubar.addEventListener("click",function(){
    document.querySelector(".menutab a").style.display="block";
});