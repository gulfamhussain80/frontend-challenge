
var repositories_description_div = document.createElement('div');
respositories_description_main_heading = document.createElement('h2');
respositories_description_main_heading.innerText = "Repositories Description";
repositories_description_div.appendChild(respositories_description_main_heading);

fetch('https://api.github.com/search/repositories?q=climate%20change&per_page=3')
.then(response => response.json())
.then(data => {
  
    data.items.forEach(function(repo){
    let repoNameElement = document.createElement('h3');
    let repoDescriptionElement = document.createElement('p');
    repoNameElement.innerText=repo.full_name;
    repoDescriptionElement.innerText=repo.description;
    repositories_description_div.appendChild(repoNameElement);
    repositories_description_div.appendChild(repoDescriptionElement);
});
})
.catch(error => console.error(error));


repositories_description_div.style.setProperty('display','none');

var sectionElement = document.querySelector(
    'section'
);
var sectionHeaderElement = sectionElement.firstChild.cloneNode(true);
sectionElement.removeChild(sectionElement.firstChild);
var budgetToBeatButtonValue = sectionElement.querySelector('p.makeStyles-btb-27');
var headerAndButtonDiv = document.createElement('div');
var buttonElement = document.createElement('button');
var pelem = document.createElement('p');
pelem.id='dummy-id';
pelem.style.setProperty('display','none');
pelem.innerText = "Climate change dummy information";
buttonElement.setHTML(
    `<div style="display:flex;flex-direction:row;justify-content:space-between;"><img src="./images/android-chrome-192x192.png" style="widht:20px;height:20px;margin-top:20px;"> 
    <h3>Budget-To-Beat: ${budgetToBeatButtonValue.innerText}</h3>`
);

var buttonAndDescriptionDiv = document.createElement('div');
buttonAndDescriptionDiv.style.cssText = `display:flex;
                            flex-direction:column`;
buttonAndDescriptionDiv.appendChild(buttonElement);
buttonAndDescriptionDiv.appendChild(pelem);
buttonElement.addEventListener(
    'mouseover',()=>{
        buttonElement.style.setProperty('background-color','#344D67');
        pelem.style.setProperty('display','block');
        repositories_description_div.style.setProperty('display','block');
    }
);
buttonElement.addEventListener(
    'mouseleave',()=>{
        buttonElement.style.setProperty('background-color','#1C315E');
        pelem.style.setProperty('display','none');
        repositories_description_div.style.setProperty('display','none');
    }
);
buttonElement.style.cssText = `background-color: #1C315E; 
                        border: none;
                        color: white;
                        padding: 0px 8px 0px 8px;
                        margin-top:15px;
                        text-align: center;
                        text-decoration: none;
                        display: inline-block;
                        font-size: 16px;
                        width:240px;
                        border-radius:4px;
                        cursor: pointer;
                        transition-duration: 0.4s;`;

headerAndButtonDiv.style.setProperty('display','flex');
headerAndButtonDiv.style.setProperty('flex-direction','row');
headerAndButtonDiv.style.setProperty('justify-content','space-between');
headerAndButtonDiv.setAttribute('id','manipulated-row');
headerAndButtonDiv.appendChild(sectionHeaderElement);
headerAndButtonDiv.appendChild(buttonAndDescriptionDiv);

sectionElement.insertBefore(headerAndButtonDiv,sectionElement.firstChild);
sectionElement.insertBefore(repositories_description_div,sectionElement.children[1]);

