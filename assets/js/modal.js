/*
portfolio_2
- Steve Barry -
Javascript file for handling display of modal screen
Modal js taken from w3schools*/

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var canx = document.getElementById("canx");

// When the user clicks the "Begin"  button, open the modal 

var gitLink = "https://nbs5000.github.io/";
var linkFrame = document.getElementById("modalView");
var linkTitle = document.getElementById("modalTitle");
var linkAbout = document.getElementById("modalAbout");
var requestUrl = 'https://api.github.com/repos/nbs5000/';
var repoLink = "https://github.com/NBS5000/";

var dateBtn = document.getElementById("img_dateNight");
dateBtn.addEventListener("click",function(){
    var type = "dateNight";
    var link = gitLink + type;
    linkFrame.src = link;
    linkTitle.innerHTML = "The Weather";
    getInfo(type);
});
var weatherBtn = document.getElementById("img_weather");
weatherBtn.addEventListener("click",function(){
    var type = "weather";
    var link = gitLink + type;
    linkFrame.src = link;
    linkTitle.innerHTML = "The Weather";
    getInfo(type);
});
var passwordBtn = document.getElementById("img_password");
passwordBtn.addEventListener("click",function(){
    var type = "passwordGenerator";
    var link = gitLink + type;
    linkFrame.src = link;
    linkTitle.innerHTML = "Password Generator";
    getInfo(type);
});
var schedulerBtn = document.getElementById("img_scheduler");
schedulerBtn.addEventListener("click",function(){
    var type = "scheduler";
    var link = gitLink + type;
    linkFrame.src = link;
    linkTitle.innerHTML = "Scheduler";
    getInfo(type);
});
var quizBtn = document.getElementById("img_quiz");
quizBtn.addEventListener("click",function(){
    var type = "quizTime";
    var link = gitLink + type;
    linkFrame.src = link;
    linkTitle.innerHTML = "Quiz Time!";
    getInfo(type);
});

function getInfo(repoName){

    var url = requestUrl + repoName;
    fetch(url)
    .then(
        res => res.json(),
    )
    .then(function(res){

        var about = res.description;
        var page = res.homepage;
        var git = res.html_url;
        if(!about || !page){
            setTimeout(function(){},1000);
        }
        if(!page){
            page = gitLink + repoName;
        }
        linkAbout.innerHTML = about;
        linkFrame.src = page;

        document.getElementById("visit").value = repoName;
        document.getElementById("git").value = repoName;
        
        modal.style.display = "block";
    })
    .catch(function (error) {
        alert('About did not work: ' + error);
    });
    
}
function visitPage(){
    var goto = document.getElementById("visit").value;
    var link = gitLink + goto + "/index.html";
    window.open(link, '_blank').focus();
}
function visitGit(){
    var goto = document.getElementById("visit").value;
    var link = repoLink + goto;
    window.open(link, '_blank').focus();
}

// When the user clicks the "Cancel" button, close the modal and clear fields

var canxBtn = document.getElementById("canx");
canxBtn.addEventListener("click",function(){
    linkAbout.innerHTML = "";
    linkTitle.innerHTML = "";
    document.getElementById("visit").value = "";
    document.getElementById("git").value = "";
    linkFrame.src = "";
    modal.style.display = "none";
});

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}