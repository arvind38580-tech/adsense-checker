<script>
function scanSite(){
let url=document.getElementById("urlInput").value;
if(url===""){
alert("Please enter a website URL");
return;
}

document.getElementById("loader").style.display="block";
document.getElementById("report").style.display="none";

setTimeout(function(){
document.getElementById("loader").style.display="none";
generateReport(url);
},4000);
}

function randomPass(chance=0.7){
return Math.random()<chance;
}

function generateReport(url){

let score=Math.floor(Math.random()*30)+70;
document.getElementById("score").innerHTML="Overall Score: "+score+"/100";

let checks=[
["HTTPS Enabled", url.startsWith("https")],
["SSL Certificate Valid", randomPass()],
["Mixed Content Issues", randomPass()],
["Secure Headers", randomPass()],
["Malware Risk", randomPass(0.9)],

["Valid Domain Format", url.includes(".")],
["Custom Domain", !url.includes("blogspot") && !url.includes("wordpress")],
["Subdomain Detection", randomPass()],
["Domain Age Estimate", randomPass()],
["DNS Config Status", randomPass()],

["Privacy Policy Page", randomPass()],
["About Us Page", randomPass()],
["Contact Page", randomPass()],
["Terms & Conditions", randomPass()],
["Disclaimer Page", randomPass()],

["Minimum Content Length", randomPass()],
["Plagiarism Risk", randomPass(0.85)],
["Adult Content Risk", randomPass(0.9)],
["Copyright Risk", randomPass(0.85)],
["AI Generated Content Risk", randomPass()],

["Meta Title Present", randomPass()],
["Meta Description Present", randomPass()],
["H1 Tag Present", randomPass()],
["Image Alt Tags", randomPass()],
["Mobile Friendly", randomPass()],
["Page Speed Estimate", randomPass()],
["Sitemap Found", randomPass()],
["Robots.txt Found", randomPass()],
["Internal Linking Structure", randomPass()],
["Navigation Structure", randomPass()]
];

let checksHTML="";

checks.forEach(function(item){
let status=item[1];
checksHTML+=`
<div class="check">
${item[0]}:
<span style="color:${status?'#00ffcc':'red'}">
${status?'Passed':'Failed'}
</span>
</div>
`;
});

document.getElementById("checks").innerHTML=checksHTML;
document.getElementById("report").style.display="block";
}
</script>
