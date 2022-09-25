function appear() {
    document.getElementById("tech_text").style.visibility="hidden";
    document.getElementById("tech").style.width="100px";
    document.getElementById("tech").style.height="100px";
    document.getElementById("tech").style.visibility="visible";
    document.getElementById("tech2").style.width="100px";
    document.getElementById("tech2").style.height="100px";
    document.getElementById("tech2").style.visibility="visible";
    document.getElementById("tech3").style.width="100px";
    document.getElementById("tech3").style.height="100px";
    document.getElementById("tech3").style.visibility="visible";
    document.getElementById("tech_skills").style.height="300px";
    document.getElementById("tech_skills").style.zIndex="22";
}

function fade() {
    document.getElementById("tech_text").style.visibility="visible";
    document.getElementById("tech").style.width="0px";
    document.getElementById("tech").style.height="0px";
    document.getElementById("tech").style.visibility="hidden";
    document.getElementById("tech2").style.width="0px";
    document.getElementById("tech2").style.height="0px";
    document.getElementById("tech2").style.visibility="hidden";
    document.getElementById("tech3").style.width="0px";
    document.getElementById("tech3").style.height="0px";
    document.getElementById("tech3").style.visibility="hidden";
    document.getElementById("tech_skills").style.height="200px";
}

function tp() {
    document.getElementById("abt").style.fontSize="25px";
    document.getElementById("abt").style.color="#505050";
    document.getElementById("abt").style.visibility="visible";
    document.getElementById("abt_me").style.visibility="hidden";
    document.getElementById("about_me").style.height="300px";
    document.getElementById("abt").style.width="900px";
    document.getElementById("about_me").style.justifyContent="flex-end";
}

function dissappear() {
    document.getElementById("abt").style.fontSize="0px";
    document.getElementById("abt").style.width="0px";
    document.getElementById("abt").style.visibility="hidden";
    document.getElementById("abt_me").style.visibility="visible";
    document.getElementById("about_me").style.height="200px";
    document.getElementById("about_me").style.justifyContent="center";
}