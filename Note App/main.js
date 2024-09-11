// variable

var form= document.getElementById('add-frm');
var ntitle = document.getElementById('n-title');
var nbody = document.getElementById('n-body');
 var tableDiv = document.getElementById('tbl-div');
var items=document.getElementById('items');
var search=document.getElementById('srch');

nodeCount=0;
newNote='';
isUpdate=false;
console.log(form);
var record ='';
var note='';
var body='';


window.onload=updateTable;
//-event----
form.addEventListener('submit',addNote);
//for search
search.addEventListener('keyup',searchNote)
//Delete item
items.addEventListener('click',removeNote);
//for view and Update
items.addEventListener('click',viewUpdateNote);
 //updateTable
function updateTable(){
    if(nodeCount>0){
tableDiv.style.display='';
items.appendChild(newNote);

        console.log("items:"+items)
    }
    else{
        tableDiv.style.display='none';
        
        
    }

}

//add note
function addNote(e){
    e.preventDefault();
   // console.log("hello");

   if(ntitle.value==''|| nbody.value==''){
    alert("please fill fields")
   }
   else{

   var tr =document.createElement('tr');
   tr.className='item';

   var td1=document.createElement('td');
   td1.appendChild(document.createTextNode(ntitle.value));
    var span = document.createElement('span');
    span.className='note-body';
    span.appendChild(document.createTextNode(nbody.value));

    td1.appendChild(span);

    console.log(td1)


    var td2=document.createElement('td');
    td2.className='btcellv'
    var btn1=document.createElement('button')
    btn1.appendChild(document.createTextNode('view'));
    btn1.setAttribute('id','vw');
    td2.appendChild(btn1);

    console.log(td2)

    var td3=document.createElement('td')
     td3.className='btcelld'
    var btn2=document.createElement('button');
    btn2.appendChild(document.createTextNode('Delete'));
    btn1.setAttribute('id','del');
    td3.appendChild(btn2);
    console.log(td3)
    
    //add all tds to tr
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    console.log(tr)

    nodeCount++

    newNote=tr

    updateTable()
   }
    



// var td2=document.createElement('td');
// var span1=document.createElement('span');
// span1.appendChild(document.createTextNode(ntitle.value));
// td2.appendChild(span1)
//  var span2=document.createElement('span');
//  span2.appendChild(document.createTextNode(nbody.value));
//  td2.appendChild(span2);

//  console.log(td2)




}
function searchNote(e){
    //text to lower case
    var searchText = e.target.value.toLowerCase()
    console.log(searchText);

    var list =items.getElementsByClassName('item');
    console.log(list);
    //convert to an array

    var listArr=Array.from(list);
    console.log(listArr);
    listArr.forEach(function(item){
        var noteTitle = item.firstChild.textContent;
        //match 
        if(noteTitle.toLowerCase().indexOf(searchText)!=-1){
            item.style.display='';
        }
        else{
            item.style.display='none'
        }
    })
    
}

function removeNote(e){
    var id= e.target;
    console.log(id);

    if(e.target.id='del'){
        if(confirm('Are you sure')){
            var tr= e.target.parentElement.parentElement;
            items.removeChild(tr);
          //Upadate table
          nodeCount--;
          if(nodeCount===0){
            updateTable();
          }  
        }
    }
}
function viewUpdateNote(e){
    if(e.target.id='vw'){
        //get the element values & update input fields;
        record=e.target.parentElement.parentElement;
        note = reocrd.firstChild;
        ntitle.value=note.firstChild.textContent;
        nbody.value=note.lastChild.textContent;
        isUpdate=true;


    }
}

// 1:13



