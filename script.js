function scanSite(){
let url=document.getElementById("url").value;

if(!url.startsWith("http")){
alert("Enter full URL including https://");
return;
}

document.getElementById("loading").style.display="block";
document.getElementById("report").style.display="none";

setTimeout(function(){

let score=0;
let result="";

if(url.startsWith("https")){
score+=25;
result+="✔ HTTPS Enabled<br>";
}else{
result+="✘ Not Secure<br>";
}

if(url.includes(".")){
score+=25;
result+="✔ Valid Domain<br>";
}

if(!url.includes("blogspot")){
score+=25;
result+="✔ Custom Domain<br>";
}else{
result+="⚠ Free Subdomain Detected<br>";
}

score+=25;

let color="red";
if(score>75) color="green";
else if(score>40) color="orange";

document.getElementById("loading").style.display="none";
document.getElementById("report").style.display="block";

document.getElementById("score").innerHTML=
`Score: <span style="color:${color}">${score}/100</span>`;

document.getElementById("details").innerHTML=result;

},2000);
}
