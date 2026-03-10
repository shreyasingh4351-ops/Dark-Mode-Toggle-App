const btn = document.getElementById("toggleBtn")


const savedTheme = localStorage.getItem("theme")

if(savedTheme === "dark"){
document.body.classList.add("dark")
}

btn.addEventListener("click", () => {

document.body.classList.toggle("dark")

if(document.body.classList.contains("dark")){
localStorage.setItem("theme","dark")
}else{
localStorage.setItem("theme","light")
}

})
