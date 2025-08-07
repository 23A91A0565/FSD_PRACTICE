var time=parseInt(window.prompt("Enter the seconds you want in stop watch"));
var m=time*1000;
const s=setInterval(function(){
    time=time-1;
    document.getElementsByClassName("minutes")[0].innerHTML=parseInt(time/60);
    document.getElementsByClassName("seconds")[0].innerHTML=time%60;

    /*if(time==0)
    {
        alert("Time up");
        clearInterval(s);
    }*/
},1000)

setTimeout(function(){
    alert("Your Time limit has been Exceeded");
    clearInterval(s);
},m);