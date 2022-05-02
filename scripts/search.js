// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
import navbar from "../components/navbar.js"

let navbar_div=document.getElementById("navbar")
navbar_div.innerHTML=navbar()

const id=JSON.parse(localStorage.getItem("id"))
console.log(id)

const showNews = async () =>{

    try{
        const code=id
        let res=await fetch(`https://masai-mock-api.herokuapp.com/news/top-headlines?country=${code}`)
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
const append = (data,result) =>{

    console.log(data)
    data.forEach(({title,urlToImage,author,content,description})=>{

        
        let div=document.createElement("div")
        div.setAttribute("class","news")
        div.addEventListener("click",function(){
            let news=[{
                title,
                urlToImage,
                content,
                description
            }]
            addData(news)
            // localStorage.setItem("news",JSON.stringify(data))
        })


        let source=document.createElement("h3")
        source.innerText=`Author: ${author}`

        let titleName=document.createElement("h3")
        titleName.innerText=title

        let img=document.createElement("img")
        img.src=urlToImage

        div.append(source,titleName,img)

        result.append(div)
    })
}

function addData(news){
    window.location.href="news.html"
   localStorage.setItem("news",JSON.stringify(news))
}