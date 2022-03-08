function newelement(){
    fetch("https://api.tvmaze.com/search/shows?q=girls").then(response =>{
        if(!response.ok){
            throw Error (Error)
        }
        return response.json()
    }).then(data => {
        const collection=data.map(a =>{
            return `<div class="obj text-break"><p>
            SCORE : ${a.score} <br> 
            URL : ${a.show.url} <br>
            NAME : ${a.show.name} <br>
            TYPE : ${a.show.type} <br>
            LANGUAGE : ${a.show.language} <br>
            GENRES : ${a.show.genres} <br>
            NETWORK : ${a.network} <br>
            </P></div>`
        }).join("")
        document.querySelector("#values")
        .insertAdjacentHTML('afterbegin',collection)
    }).catch (error => {
        console.log(error)
    })
}
newelement()