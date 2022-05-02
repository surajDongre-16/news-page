// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

//https://masai-mock-api.herokuapp.com/news/top-headlines?country=${code}

import navbar from "../components/navbar.js"

let navbar_div=document.getElementById("navbar")
navbar_div.innerHTML=navbar()


import {searchNews,append} from "./fetch.js"

let enter = (e)=>{
    if(e.key == 'Enter'){
        // window.location.href="search.html"
        let query=document.getElementById("search_input").value

        searchNews(query).then((data)=>{
            // console.log(data)
            let result=document.getElementById("results")
            result.innerHTML=null
            append(data.articles,result)
        })
    }
}

document.getElementById("search_input").addEventListener("keydown",enter)


let sidebar=document.getElementById("sidebar").children

function countrySearch(){
    console.log(this.id)
    localStorage.setItem("id",JSON.stringify(this.id))
    
}


for(let el of sidebar){
    el.addEventListener("click",countrySearch)
    // console.log(el)
}


const showNews = async () =>{

    try{

        let res=await fetch(`https://masai-mock-api.herokuapp.com/news/top-headlines?country=in`)
        let data=await res.json()
        // console.log(data.articles)
        let result=document.getElementById("results")
        result.innerHTML=null
        append(data.articles,result)
    }catch(err){
        console.log("Error thrown by API:",err)
    }


}
showNews()
