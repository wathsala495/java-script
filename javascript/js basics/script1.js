// select & update DOM Element

//Examine the doument object
    console.dir(document)

// --get proprties

//    console.log(document.URL);
//    console.log(document.doctype);

//     console.log(document.head);
//     console.log(document.body);
//     console.log(document.fonts);
//     console.log( document.all);
//     console.log(document.all[20]);
//     console.log(document.forms);
//     console.log(document.forms[0]);
//     console.log(document.links);
//     console.log("title:"+document.title);

//change value
//    document.title="Document object module"
//    console.log(document.title);
//not the best way
    // console.log(document.all);
    // document.all[11].textContent="Shopping Item List";
    // console.log(document.all[11].textContent);

//select element using id
    // console.log(document.getElementById('frmt'))
    // var formTitle=document.getElementById('frmt')
    // console.log(formTitle);

//--textContent,innetText & innerHTML
//innerText-consider about css styles but
//textContent -not consider about css styles
//innerHTML -we can use for add new element and change content of  the element
/*1 .The innerText property return just the text,without spacing and inner element tags.And it cares about styling.
 2.The innerHtml property returns the text,including all spacing and inner element tags.
 3.The textContent propert  returns the text with spacing,but without inner element tags
*/
    // formTitle.textContent ="Add Shopping Items";
    // formTitle.innerText="shopping Items"

    // formTitle.innerHTML="<i>hello</i> Add Item";

    // console.log(formTitle.textContent);
    // console.log(formTitle.innerText);

    // console.log(formTitle.innerHTML);

//--styling--

    // var navigation = document.getElementById('navbar');
    // navigation.style.backgroundColor="red";
    // navigation.style.color ="white"
    // console.log(document.getElementById('hdt').style.color="green")

//Select element uisng class name--
    // var items=document.getElementsByClassName('item');
    // console.log(items);
    // console.log(items[2]);
    // items[2].textContent="hang bag";
    // console.log(items[2]);

//styling
    // items[2].style.fontFamily="serif";
    // items[2].style.backgroundColor="yellow";
//change back color of all the list items--
    // for(i of items){
    //     i.style.backgroundColor="green";
    // }
//Select element uisng Tag name--
    // var li=document.getElementsByTagName('li');
    // console.log(li);
    // console.log(li[0]);
    // li[0].textContent="Book"
    // console.log(li[0]);

    // li[0].style.color="red"
    //li[1].style.color="green"


//--Select element using Query selector--
//the queary selector()  method returns the first element that matches a specified CSS selector(s) in the document
//we can select element using id or class ot tag by this queary selector.but returns only first element

//id
    // var hd=document.querySelector('#navbar');
    // hd.style.border='solid 2px #000'

//tag
    // var input =document.querySelector('input');
    // input.value="Paint"

//class
    // var item = document.querySelector('.item');
    // item.style.backgroundColor='green'

//--mix selector--
    // var it = document.querySelector('div .frm #frmt');
    // console.log(it);
    // it.style.color="yellow";

//---select elements using queary selector all
//The querySelectorAll() method returns all element in the document that matches a specified css selector(s),as a static Nodelist object;

//--ID--
    // var hd=document.querySelectorAll('#hdt');
    // console.log(hd);

//---Tag---
    // var dv=document.querySelectorAll('div');
    // console.log(dv)

//--class--

    // var mx=document.querySelectorAll('.item')
    // console.log(mx);

//mix selector
    // var cl=document.querySelectorAll('.list div li');
    // console.log(cl);
    // console.log(cl[0]);

//Pseudo Classes
//grab all the add last item
    // var odd=document.querySelectorAll('li:nth-child(odd)');
    // var even=document.querySelectorAll('li:nth-child(even)');
    // console.log(odd);
    // console.log(even);

    // for(var i of odd){

    //     i.style.backgroundColor ='yellow'
    // }
    // for(var i of even){

    //     i.style.backgroundColor ='blue'
    // }

