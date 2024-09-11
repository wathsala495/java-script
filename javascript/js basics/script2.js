//--------------------
//----traversing the DOM----
//-----------------

    var itemList=document.querySelector('#li-item');
    // console.log(itemList)
//--parent Node--
    // console.log(itemList.parentNode);
    // itemList.parentNode.style.backgroundColor='#afafaf'
    // console.log(itemList.parentNode.parentNode)

//parent Element
//most of teh thime similiar ti parentNode
    // console.log(itemList.parentElement);
    // itemList.parentElement.style.backgroundColor="#afafaf";


//---------child Node----
    //console.log(itemList.childNodes)

//--children--
    // console.log(itemList.children);
    // console.log(itemList.children[2]);
    // itemList.children[2].style.backgroundColor="red"

    // //--first child--
//work like child node
    // console.log(itemList.firstChild);

//--first  Element Child--
    // console.log(itemList.firstElementChild)
    // console.log(itemList.firstElementChild.textContent)
    // itemList.firstElementChild.style.backgroundColor ="green";

//lastchild
    // console.log(itemList.lastChild)
    // console.log(itemList.lastChild.textContent);

//--First Element Child
    // console.log(itemList.lastElementChild);
    // itemList.lastElementChild.style.backgroundColor="yellow"
//console.log(itemList.lastChild.textContent);

//--next sibling
//work like childnodes
    // console.log(itemList.nextSibling)

//--Next Ellement Sibling---
//   console.log(itemList.nextElementSibling);
//   itemList.nextElementSibling.style.backgroundColor="red"
 
//--precious sibling--
    // console.log(itemList.previousSibling)

//--precious  Element sibling--
    //console.log(itemList.previousElementSibling);


//====================Create an Element=====================

//---create an Input---

     var input =  document.createElement('input')  ;
     console.log(input);

//add a class
    //  input.className='test'
    // console.log(input);

//add id
    // input.id='testid'
    // console.log(input);

//add an attribut
    // input.setAttribute('type','text');
    // console.log(input)

//create div
    // var newDiv= document.createElement('div');

//Create text node
    // var newText=document.createTextNode('How are You!');

//Add text to div 
    // newDiv.appendChild(newText);
    // console.log(newDiv.textContent)
    // console.log(newDiv)

//--Insert created element to the document--
    // var form=document.querySelector('.contianer form');
    // var button = document.querySelector(' form button');
    // console.log(form)
    // console.log(button)

    // input.style.backgroundColor="yellow";
    // form.insertBefore(input,button)

