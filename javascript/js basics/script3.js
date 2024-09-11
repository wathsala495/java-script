//========================
//-----Events-----------
//======================

/*
An HTML event can be something the browser does ,or somthing a user does,

Here are some example of HTML events:
  1.An HTML web page has finished loading
  2.An HTML input field was changed
  3.An HTML button was clicked

  often,when events happen ,you may want to do something.
  javascript lets you execute code when events are detected.

*/
//using Internal Event--
//HTML allows event handler attributes,with javascript code ,
//to be added to HTML ElementInternals.
//<element event='some javascript'>

function btnClick(x){
    alert(x)
}
//--using Event Listeners--
/*

the addEventlistner() method attaches an event handler to an element without ovewriting exixsting event handler.

you can  add many event handlers of the same type to one element,i.e two "click" events.

you can add event listners to any DOM object not only HTML elements.i.e the window objet.
*/ 

//--Intergrated function--

// var button1=document.getElementById('c-btn').addEventListener('click',function(){
//     alert("Button Clicked");
// })

// //--Named Function--
// document.getElementById('c-btn').addEventListener('mouseout',txtChange)

// function txtChange(){
//     alert("Mouse Out")
//      document.getElementById('hdt').textContent="Mouse Out"
// }
// //--parameterized function
// document.getElementById('i-btn').addEventListener('click',
//     function(){
//         changeListBack("hello")
//     }
// )
// function changeListBack(x){
//     document.getElementById('li-item').style.backgroundColor="red";
//     document.getElementById('li-item').firstElementChild.textContent=x

// }
// //---Event Parameter--
// var button2=document.getElementById('e-btn').addEventListener('click',clickbtn);
//         //we can get details of the  event by e
// function clickbtn(e){
//        //target=we can select our element(sample button element)
//   console.log(e)
//   console.log(e.target);
//   console.log(e.target.id);
//   console.log(e.target.className);
//   console.log("ClassList : "+e.target.classList);
//   console.log(e.target.type);
//   console.log(e.type) //type of event(click)
  
//   //display output
//   var output = document.getElementById('output');
//   output.innerHTML = '<h4>Class name:' + e.target.classList[0]+'</h4>'

//   //Clicking position(page ekt sapekshawa click karana thana position eka balagann puluwan)
//   console.log(e.clientX);
//   console.log(e.clientY);
//  //button ekat sapekshawa
//   console.log(e.offsetX);
//   console.log(e.offsetY);

//   //check key press
//   console.log(e.altKey);
//   console.log(e.ctrlKey);
//   console.log(e.shiftkey);


// }

//bubbling
    // document.getElementById('myP1').addEventListener('click',
    //     function(){
    //         alert("yoy clicked the white element")
    //     },false
    // );

    // document.getElementById('myDiv1').addEventListener('click',
    //     function(){
    //         alert("yoy clicked the orange element")
    //     },false
    // );
// capturing

    // document.getElementById('myP2').addEventListener('click',
    //     function(){
    //         alert("yoy clicked the white element")
    //     },true
    // );

    // document.getElementById('myDiv2').addEventListener('click',
    //     function(){
    //         alert("yoy clicked the orange element")
    //     },true
    // );
//--------------------------------
//Remove event listner
    // function myFunc(){
    //     alert("button has clicked")
    // } 
//add event
    // document.getElementById('ev-btn').addEventListener('click',
    //     myFunc
    // )
//remove
    // document.getElementById('rm-btn').addEventListener('click',
    //     function(){
    //         document.getElementById('ev-btn').removeEventListener('click',
    //             myFunc
    //         )
    //         console.log("event is removed") ; 
    //     }
    // )

//Different types of events for mouse

var btn=document.getElementById('t-btn');
// btn.addEventListener('click',typrOfevent);
// btn.addEventListener('dbclick',typrOfevent);
//btn.addEventListener('mousedown',typrOfevent);//click karagena inna wita
//btn.addEventListener('mouseup',typrOfevent);//click karagena idala atharina awasthawa

var box=document.getElementById('box')
//box.addEventListener('mouseenter',typrOfevent);
//box.addEventListener('mouseleave',typrOfevent);

// box.addEventListener('mouseover',typrOfevent);
//box.addEventListener('mouseout',typrOfevent);

box.addEventListener('mousemove',typrOfevent);
function typrOfevent(e){
    console.log("type of Event:"+ e.type);

    document.querySelector('#box h2').textContent='Mouse x:'+ e.offsetX +"|"+'Mouse y:' + e.offsetY;
   // docyment.body.style.backgroundColor ='rgb('+e.offsetX+', '+e.offsetY+', '+ 'e.offsetX+')
}

//different types of events for keyboard

var ketInput=document.querySelector('input[type="text"]');
// ketInput.addEventListener('keydown',typrOfevent2)
// ketInput.addEventListener('keyup',typrOfevent2)
// ketInput.addEventListener('keypress',typrOfevent2)
// ketInput.addEventListener('focus',typrOfevent2)
// ketInput.addEventListener('blur',typrOfevent2)
// ketInput.addEventListener('copy',typrOfevent2)
// ketInput.addEventListener('cut',typrOfevent2)
// ketInput.addEventListener('paste',typrOfevent2)

// function typrOfevent2(e){
//     console.log("Event type:" + e.type);
//     console.log('value:'+ e.target.value);
//     document.getElementById('out').textContent=e.target.value
// }

//select

var select=document.querySelector('select')
select.addEventListener('change',typrOfevent3);
function typrOfevent3(e){
        console.log("Event type:" + e.type);
        console.log("valur:"+e.target.value)
        // var set = e.target.value
        // console.log("valur:"+set)
       // console.log(e.target)
        
    }

    //form

    var form =document.querySelector('form');
    form.addEventListener('submit',typrOfevent4)

    function typrOfevent4(e){
        e.preventDefault()//browser eka refresh wena eka nawaththanawa
  console.log("Event Type:"+e.type)
    }

