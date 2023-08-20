const btn=document.querySelector("button")
let ul=document.querySelector("ul")
btn.addEventListener("click",fe)

async function fe()
{
    const responce=await fetch(` https://jsonplaceholder.typicode.com/posts`)
    let arr=await responce.json()
    for(let i=0;i<arr.length;i++)
    {
        let l1=document.createElement("li")
        let la1=document.createElement("label")
        let l2=document.createElement("li")
        let la2=document.createElement("label")
        let l3=document.createElement("li")
        let la3=document.createElement("label")
        let l4=document.createElement("li")
        let la4=document.createElement("label")

        la1.innerHTML=arr[i].userId 
        l1.innerHTML="User ID:"
        ul.appendChild(l1)
        ul.appendChild(la1)
        


        la2.innerHTML=arr[i].id 
        l2.innerHTML="ID:"
        ul.appendChild(l2)
        ul.appendChild(la2)


        la3.innerHTML=arr[i].title 
        l3.innerHTML="Title:"
        ul.appendChild(l3)
        ul.appendChild(la3)
        


        la4.innerHTML=arr[i].body
        l4.innerHTML="Body:"
        ul.appendChild(l4)
        ul.appendChild(la4)


        let b=document.createElement("hr")
        ul.appendChild(b)
    }
}