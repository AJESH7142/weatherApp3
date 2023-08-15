let today = new Date()

let currentDate = document.getElementById("date")

let options = {
   weekday:"short",
   day:"numeric",
   month:"long"
}
currentDate.innerHTML = today.toLocaleDateString("en-US", options)
currentDate.style.color = "white"
document.getElementById("butn").addEventListener("mouseover", ()=>{
   document.getElementById("icon").classList.add("fa-bounce")
})

document.getElementById("mainNav").addEventListener("mouseover", ()=>{
   document.getElementById("wid").classList.add("fa-flip")
})
document.getElementById("mainNav").addEventListener("mouseout", ()=>{
   document.getElementById("wid").classList.remove("fa-flip")
})
document.getElementById("butn").addEventListener("mouseout", ()=>{
   document.getElementById("icon").classList.remove("fa-bounce")
})

document.getElementById("butn").addEventListener("click",()=>{
   let search = searchBox.value;

   fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=68b0b5f0db57621f8d1e51cddcf907aa&units=metric`).then(res=>res.json()).then(data=>weatherData(data)).catch(error=>alert("cannot fetch weather data"))
})


function weatherData(data){
   let con = data.sys.country
   country.innerHTML = `${con}`
   country.style.color = "white"

   let hum = data.main.humidity
   humidity.innerHTML = `${hum}`
   humidity.style.color = "white"

   let wnd = data.wind.speed
   wind.innerHTML = `${wnd} mbps`
   wind.style.color = "white"

   let prsr = data.main.pressure
   pressure.innerHTML = `${prsr} pa`
   pressure.style.color = "white"

   let img1 = data.weather[0].icon
   let imgdta = `<img src="https://openweathermap.org/img/w/${img1}.png" style= "height:100px;">`
   iconData.innerHTML = imgdta

   let tmp = data.main.temp
   mainTemp.innerHTML = `${tmp}&deg;C`
   mainTemp.style.color = "white"

   let fe = data.main.feels_like
   feel.innerHTML = `feels like ${fe}`
   feel.style.color = "white"

   let desc = data.weather[0].description
   des.innerHTML = `${desc}`
   des.style.color = "white"
}

