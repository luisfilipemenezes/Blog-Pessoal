// https://jsonplaceholder.typicode.com/posts

document.querySelector(".carregar").addEventListener("click", carregar)
document.querySelector(".inserir").addEventListener("click", inserir)


async function inserir(){

    let title = document.querySelector(".tituloDoTexto").value
    let body = document.querySelector(".textArea").value

    document.querySelector(".tituloDoTexto").value = ""
    document.querySelector(".textArea").value = ""

    await fetch("https://jsonplaceholder.typicode.com/posts",
    {
        method:"POST",
        headers:{
            "Content-Type" : "application/json"
        },
        body: JSON.stringify({
            title,
            body,
            userId:2
        })
    })

    carregar()

}


async function carregar(){

    let response =  await fetch("https://jsonplaceholder.typicode.com/posts")

    let json =  await response.json()


    let tamanhoDoJson = Object.keys(json).length


    for(let i = 0;i < tamanhoDoJson;i++){

        let titulo =  json[i].title

        let corpo = json[i].body

        let div = document.querySelector(".textosDaRequisicao")

        let h1 = document.createElement("h1")

        let p = document.createElement("p")

        let hr =  document.createElement("br")

        h1.innerHTML = titulo
        p.innerHTML = corpo

        div.appendChild(h1)
        div.appendChild(hr)
        div.appendChild(p)
        div.appendChild(hr)

    }

    document.querySelector(".OndeFicamOsTextos").style.height = "auto"


    
    

}
