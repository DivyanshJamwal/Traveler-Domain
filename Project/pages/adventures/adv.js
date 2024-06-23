//Extract city from URL

const currenturl = window.location.href;

const url = new URL(currenturl)

const query = new URLSearchParams(url.search)

const city = query.get("city")

console.log(city)

//Call City name using API

const apiEndpoint = 

const container = document.createElement("container")

container.appendChild(card)