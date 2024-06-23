const arr=[]
async function getData(){
    const result= await fetch("https://makemytrip-backend-w2d2.onrender.com/cities")
    const data = await result.json();
    console.log(data);
    data.forEach((data)=>{
        arr.push(data)
    });
    renderUI(data);
}
console.log(arr)
getData();

async function search(){
    const input = document.querySelector(".hero-search").value
    const newdata = arr.filter((data)=>{
        return data.city.toLowerCase().includes(input.toLowerCase());
    })

    renderUI(newdata)
}

const container_card= document.getElementById("container2")

function renderUI(data){
    console.log(data)
    const cities=data;
    container_card.innerHTML="";

    cities.forEach(city => {
        const card= document.createElement('div')
        card.className='card2';
        card.innerHTML= `
        <img src =${city.image}>
        <h3>${city.city}</h3>
        <p>${city.description}</p>`;

        container_card.appendChild(card);
    });
}