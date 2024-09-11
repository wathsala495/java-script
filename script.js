// var apiKey='8617356565c24fcabcc59880fadc2390';

// const blogContainer = document.getElementById("blog-container");

// async function fetchRandonNews(){
//     try{
//         const apiURL = `https://newsapi.org/v2/top-headlines?country=us&pageSize=10&apiKey=${apiKey}`;
//         const response = await fetch(apiURL);
//         const data =await response.json(); 
//         return data.articles;
//     }catch(error){
//        console.error("Error fetching random news",error)
//        return []
//     }
// }
// function displayBlogs(articles){
//     blogContainer.innerHTML=""
//     articles.forEach((articles)=>{
//          const blogCard=document.createElement("div")

//     })
// }

// async ()=>{
//     try{
//         const articles =await fetchRandonNews();
//         console.log(articles);
//     }catch(error){
//         console.error("Error fetching random news",error);
//     }
// };

const apiKey = '8617356565c24fcabcc59880fadc2390';
const apiURL = `https://newsapi.org/v2/top-headlines?country=us&pageSize=10&apiKey=${apiKey}`;

fetch(apiURL)
.then(response=>{
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();  
})
//.then(data => {
//     const img=document.createElement("img")
//     img.src =data.urlToImage
//     const cardTitle = document.getElementById('card-title');
//     const cardDescription = document.getElementById('card-description');

//     // Update DOM elements with data from API
//     cardTitle.textContent = data.title;
//     //console.log("title:"+ JSON.stringify(cardTitle.textContent))
//     cardDescription.textContent = data.description;
//     const jsonData = JSON.stringify(data);
//    //console.log("data:"+jsonData);

// console.log('Recent Users:', data);
    
 // })
 //.then(res=>console.log(result))
 .then(res=>{
    const data=res.articles;
    // const img =document.createElement("img")
    // img.src=data.urlToImage
    const cardTitle = document.getElementById('card-title');
    cardTitle.textContent = data.title;
 })
  .catch(error => {
    console.error('Error fetching data:', error);
  })