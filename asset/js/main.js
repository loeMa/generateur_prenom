let btn = document.getElementById("btn");
let pickName=  document.getElementById("name");

const url = "https://opendata.paris.fr/api/records/1.0/search/?dataset=liste_des_prenoms&q=&facet=sexe&facet=annee&facet=prenoms";

btn.addEventListener('click', askName);


function askName(){ 
    let number1 = Math.floor(Math.random()*100);
    let number2 = Math.floor(Math.random()*100);
    fetch(url)
        .then(function(res){
            if (res.ok) {
                return res.json();
            }
        })
        .then(function(value){
            let firstCut= value.facet_groups[2].facets[number1].name.length/2;
            let secondCut= value.facet_groups[2].facets[number2].name.length/2;
            let firstName = value.facet_groups[2].facets[number1].name;
            let secondName = value.facet_groups[2].facets[number2].name;
            pickName.innerText= (firstName.substr(0, firstCut))+ (secondName.substr(secondCut)) ;
            console.log(firstName, secondName);
        })
        .catch(function(err){
            console.log(err);
        })
}   