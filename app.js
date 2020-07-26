// here i have get ol by html

var list = document.getElementById("list");
console.log(list);


function addTodo() {

    //  here i am creating an li element for ul thats i have created by html

    var inputtext = document.getElementById("inputtext");
    console.log(inputtext);
    var li = document.createElement('li');
    console.log(li);
    var liText = document.createTextNode(inputtext.value);
    console.log(liText);
    li.appendChild(liText);

    // here i have add class in li for style
    li.className = "borderpurple"

    // now li is ready so we have get ul element and insert li element in it  bu append child as we know

    list.appendChild(li);

    // here i will empty input text  

    inputtext.value = "";

// here i have created a div

    var divs = document.createElement('div');
    li.appendChild(divs);


    // now i am creating delete button

    var delbtn = document.createElement('button');
    var delbtntext = document.createTextNode("DELETE ITEM");

    delbtn.appendChild(delbtntext);
    console.log(delbtn);
    
    //here i have add class in delebtn for style

    delbtn.className = "btn btn-success"


    //now delete button is ready i am inserting delete button in li

    // li.appendChild(delbtn); ye phele kya tha kam phr styling change ki to update kya kam
    divs.appendChild(delbtn);

    //now i want to set attribute onclick on delete button

    delbtn.setAttribute("onclick", "deleoneitem(this)");



    // now i am creating Edit button

    var editBtn = document.createElement('button');
    var editbtntext = document.createTextNode("EDIT ITEM");

    editBtn.appendChild(editbtntext);
    console.log(editBtn)

    //here i have add class in editBtn for style

    editBtn.className = "btn btn-dark"

    //now delete button is ready i am inserting delete button in li

    // li.appendChild(editBtn); ye phele kya tha kam phr styling change ki to update kya kam

    divs.appendChild(editBtn);


     //now i want to set attribute onclick on delete button

     editBtn.setAttribute("onclick", "editoneitem(this)");




}

//here i am creating a functionality of delete ALL item Button


function deleteAllFun() {

    var deleteALL = document.getElementById('list')

    //or
    // list.innerHTML = ""; ye phele kya tha kam phr styling change ki to update kya kam

    deleteALL.innerHTML = "";

}




// here i am creating functionality of deleteoneitem,  we can deleteoneitem with two methods 




//no 1

// function deleoneitem(){

//     var li = document.getElementById("list");
//     li.innerHTML = "";

// }

//no 2

function deleoneitem(e) {

    // e.parentNode.remove(); ye phele kya tha kam phr styling change ki to update kya kam
    e.parentNode.parentNode.remove();

}



//here i am creating functionality of editoneitem


function editoneitem(e){

// var text = e.parentNode.childNodes[0].nodeValue;    ye phele kya tha kam phr styling change ki to update kya kam
// var p = prompt("EDIT ONE ITEM",text);
// e.parentNode.childNodes[0].nodeValue = p;

// or

// var text = e.parentNode.firstChild.nodeValue;
// var p = prompt("EDIT ONE ITEM",text);
// e.parentNode.firstChild.nodeValue = p


var text = e.parentNode.parentNode.childNodes[0].nodeValue;
var p = prompt("EDIT ONE ITEM",text);
e.parentNode.parentNode.childNodes[0].nodeValue = p;



// console.log(e.parentNode.childNodes[0]);

}








