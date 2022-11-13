function submitFormAndDisplayFootprint(){
    var typeOfFood = document.forms["foodForm"]["foodType"].value;
    var quantity = document.forms["foodForm"]["quantity"].value;

    var footprint = calculateFootprint(typeOfFood, quantity);

    addNewHTML(footprint.toFixed(1));
}

//function takes foodtype and quantity as parameters, calculates
//footprint and returns it
function calculateFootprint(foodtype, quantity){
    var footprint;
    switch(foodtype){
        case("chicken"):
            footprint = 6.9 * quantity;
            break;
        case("fish"):
            footprint = 6.1 * quantity; 
            break;
        case("pork"):
            footprint = 12.1 * quantity;
            break;
        case("turkey"):
            footprint = 10.9 * quantity;
            break;
        case("beef"):
            footprint = 27.0 * quantity;
            break;
        case("eggs"):
            footprint = 4.8 * quantity;
            break;
        case("rice"):
            footprint = 2.7 * quantity;
            break;
        case("noodlespasta"):
            footprint = 1.24 * quantity;
            break;
        case("beanstofu"):
            footprint = 2.0 * quantity;
            break;
        case("vege"):
            footprint = 2.0 * quantity;
            break;
        case("fruits"):
            footprint = 1.1 * quantity;
            break;
        case("lentils"):
            footprint = 0.9 * quantity;
            break;
        case("nuts"):
            footprint = 2.3 * quantity;
            break;
        case("potatoes"):
            footprint = 2.9 * quantity;
            break;
        case("cheese"):
            footprint = 13.5 * quantity;
            break;
        case("pitatortilla"):
            footprint = 3.9 * quantity;
            break;
        case("bread"):
            footprint = 0.84 * quantity;
            break;
    }
    return(footprint);
}

function addNewHTML(t){
    var tag = document.createElement("p");
    var text = document.createTextNode("Your food carbon footprint is: " + t + " CO2kg");
    tag.appendChild(text);
    var element = document.getElementById("new");
    element.innerHTML = "";
    element.appendChild(tag);
}