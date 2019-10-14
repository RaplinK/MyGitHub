//init GitHub Class
const github = new Github;
//Init UI class
const ui = new UI;

loadEventListeners();

function loadEventListeners(){
    document.addEventListener('DOMContentLoaded', getProfile);
}

function getProfile(){
    console.log("loaded");
    const gitHub = new Github;
    console.log(gitHub);
    gitHub.getUser('RaplinK')
    .then(data=>{
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
    
    });
}
    