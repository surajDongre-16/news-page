// Ude Import export (MANDATORY)
import navbar from "../components/navbar.js"

let navbar_div=document.getElementById("navbar")
navbar_div.innerHTML=navbar()

let news= JSON.parse(localStorage.getItem("news"))
console.log(news)

const append = (data) =>{

    data.forEach(({title,urlToImage,content,description})=>{
        
        
        let div=document.createElement("div")
        div.setAttribute("class","news")

        let titleName=document.createElement("h3")
        titleName.innerText=title

        let dis=document.createElement("h4")
        dis.innerText=description
        
        let detail=document.createElement("p")
        detail.innerText=content

        let img=document.createElement("img")
        img.src=urlToImage

        div.append(titleName,img,dis,detail)

        document.getElementById("detailed_news").append(div)
    })
}
append(news)