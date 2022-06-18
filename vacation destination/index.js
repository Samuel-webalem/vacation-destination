var detailsform = document.querySelector('#destnation_detail');

detailsform.addEventListener('submit', handleformsubmit);

function handleformsubmit(event){
    event.preventDefault();
    var destname = event.target.elements["name"].value;
    var destlocation = event.target.elements["location"].value;
    var destphoto = event.target.elements["image"].value;
    var destdiscription = event.target.elements["discription"].value;
   
    for (var i = 0; i < detailsform.length; i++) {
     detailsform.elements[i].value = "";
      
    }
    var destcard = creatcard(destname,destlocation,destphoto,destdiscription)
    document.querySelector('#destination_container').appendChild(destcard)
}


function creatcard(name,location,photo,discription) {
    var sami = document.querySelector('#destination_container');
     
    var card = document.createElement("div");
    card.className = 'card';

    var img =document.createElement('img');
    img.setAttribute('alt', name);

    var constantphotourl = 'pic.png';
    if(photo.length === 0)
    {
        img.setAttribute('src',constantphotourl);
    }
    else{
        img.setAttribute('src', photo)
    }
    card.appendChild(img)

    var cardbody = document.createElement("div");
    cardbody.className = "card-min";

    var placename = document.createElement("h3");
    placename.innerText=name;
    cardbody.appendChild(placename);

    var placelocaiton = document.createElement("h4");
    placelocaiton.innerText=location;
    cardbody.appendChild(placelocaiton);
    

    if (discription.length!==0) {
    var placediscription = document.createElement("p");
    placediscription.className="placediscription";
    placediscription.innerText=discription;
    cardbody.appendChild(placediscription)
    }
    else{
        placediscription.innerText="";
    }

    var carddelete = document.createElement("button");
    carddelete.innerText="REMOVE";

    carddelete.addEventListener("click",removedestination);
    cardbody.appendChild(carddelete);

    card.appendChild(cardbody);
    return card;
}
function removedestination(event) {
    var card =event.target.parentElement.parentElement;
    card.remove();
}