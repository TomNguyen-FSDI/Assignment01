const salon={
    name:"The Fashion Pet",
    address:{
        street:"Av. University",
        number:"192-k"
    },
    hours:{
        open:"8:00 am",
        close:"5:00 pm"
    },
    pets:[
        {name:"Scooby",age:50,breed:"Dane",gender:"Male",owner:"Shaggy",phone:"555-555-5555"},
        {name:"scrappy",age:40,breed:"Dane",gender:"Male",owner:"Shaggy",phone:"555-555-5555"},
        {name:"Speedy",age:60,breed:"Mixed",gender:"Male",owner:"Bugs",phone:"444-444-4444"},
        {name:"Snoopy",age:47,breed:"Beagle",gender:"Male",owner:"Charlie Brown",phone:"123-123-1234"},
        {name:"Pluto",age:50,breed:"Bloodhound",gender:"Male",owner:"Mickey Mouse",phone:"321-321-4321"}
    ]
}

/*
    name, age, breed, gender, service, owners name, contact phone
*/
document.getElementById("footer-text").innerHTML=`
<p> ${salon.name} </p>
<p> ${salon.address.street}, ${salon.address.number} </p>
<p> It opens from ${salon.hours.open} to ${salon.hours.close}</p>
`;


var pet_names="";
function petnames(){
    for(var i=0; i<salon.pets.length ; i++){
        if(i < (salon.pets.length-1) ) {
            pet_names = pet_names + salon.pets[i].name + " , "
        }else{
            pet_names = pet_names + salon.pets[i].name
        }
        
    }
}

petnames();
var temp=`
    <div class="pets">
    <h2>Assignment 01</h2>
    
    <p> How many pets are registered: <b> ${salon.pets.length}</b></p>
    <p> These are the pets name:<b> ${pet_names}</b></p>
    
    <div class="container-pictures">
    <div class="pet-picture-container">
    <img src="img/Scooby.jpg" class="pet-picture" alt="scooby">
    <b class="text-center">Scooby</b>
    </div>
    
    <div class="pet-picture-container">
    <img src="img/Scappy.jpg" class="pet-picture" alt="scappy">
    <b class="text-center">Scrappy</b>
    </div>

    <div class="pet-picture-container">
    <img src="img/Speedy.jpg" class="pet-picture" alt="scappy">
    <b class="text-center">Speedy</b>
    </div>

    <div class="pet-picture-container">
    <img src="img/Snoopy.jpg" class="pet-picture" alt="scappy">
    <b class="text-center">Snoopy</b>
    </div>

    <div class="pet-picture-container">
    <img src="img/Pluto.png" class="pet-picture" alt="scappy">
    <b class="text-center">Pluto</b>
    </div>
    </div>

    </div>
`;
document.getElementById("how-many-pets").innerHTML+=temp;

