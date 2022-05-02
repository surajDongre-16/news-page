const searchNews = async (query) =>{

    try{

        const code=query

        let res=await fetch(`https://masai-mock-api.herokuapp.com/news?q=${code}`)
        let data=await res.json()
        // console.log(data.articles)
        return data
    }catch(err){
        console.log("Error thrown by API:",err)
    }


}
// searchNews()

const append = (data,result) =>{

    
    data.forEach(({title,urlToImage,author})=>{

        let div=document.createElement("div")
        div.setAttribute("class","news")
        div.addEventListener("click",function(){
            let news=[{
                title,
                urlToImage,
                author
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
    window.location.href="search.html"
   localStorage.setItem("news",JSON.stringify(news))
}

export {searchNews,append}