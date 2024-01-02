const input = document.getElementsByTagName("input")[0]
const h2 = document.getElementById("deneme")
const hak = document.getElementsByTagName("p")[1]
const buton = document.getElementsByTagName("button")[0]
let haksayi = 5
input.addEventListener("input",function(){
  input.value = input.value.toUpperCase()
})

const kelimeler = ["armut","elma","kiraz","kivi","portakal"]
const randomkelimeler = Math.floor(Math.random() * kelimeler.length)
const randomkelime = kelimeler[randomkelimeler]
console.log(randomkelime);

for(let i = 0;i<randomkelime.length;i++){
  console.log(i);
  h2.innerHTML += "<span> _ </span>"
}
//armut
if(randomkelime == "armut"){
  const ipucuspan = document.getElementsByTagName("span")[3]
  ipucuspan.textContent = " U "
  buton.onclick = function(){
    if(input.value == "A"){
      const spans = document.getElementsByTagName("span")[0]
      spans.textContent = "A "
    }
    else if(input.value == "R"){
      const spans = document.getElementsByTagName("span")[1]
      spans.textContent = " R "
    }
    else if(input.value == "M"){
      const spans = document.getElementsByTagName("span")[2]
      spans.textContent = " M "
    }
    else if(input.value == "U"){
      const spans = document.getElementsByTagName("span")[3]
      spans.textContent = " U "
    }
    else if(input.value == "T"){
      const spans = document.getElementsByTagName("span")[4]
      spans.textContent = " T"
    }
    else if(input.value != "A" || input.value != "R" || input.value != "M" || input.value !="U" || input.value != "T"){
      haksayi--
      hak.textContent = "hak: "+haksayi
    }
    input.value = ""
  }
}

//elma
if(randomkelime == "elma"){
  const ipucuspan = document.getElementsByTagName("span")[0]
  ipucuspan.textContent = " E "
  buton.onclick = function(){
    if(input.value == "E"){
      const spans = document.getElementsByTagName("span")[0]
      spans.textContent = "E "
    }
    else if(input.value == "L"){
      const spans = document.getElementsByTagName("span")[1]
      spans.textContent = " L "
    }
    else if(input.value == "M"){
      const spans = document.getElementsByTagName("span")[2]
      spans.textContent = " M "
    }
    else if(input.value == "A"){
      const spans = document.getElementsByTagName("span")[3]
      spans.textContent = " A "
    }
    else if(input.value != "E" || input.value != "L" || input.value != "M" || input.value != "A"){
      haksayi--
      hak.textContent = "hak: "+haksayi
    }
    input.value = ""
  }
}

//kivi
if(randomkelime == "kivi"){
  const ipucuspan = document.getElementsByTagName("span")[2]
  ipucuspan.textContent = " V "
  buton.onclick = function(){
    if(input.value == "K"){
      const spans = document.getElementsByTagName("span")[0]
      spans.textContent = "K "
    }
    else if(input.value == "I"){
      const spans = document.getElementsByTagName("span")[1]
      spans.textContent = " I "
      const spans1 = document.getElementsByTagName("span")[3]
      spans1.textContent = " I "
    }
    else if(input.value == "V"){
      const spans = document.getElementsByTagName("span")[2]
      spans.textContent = " V "
    }
    else if(input.value != "K" || input.value != "I" || input.value != "V" || input.value != "I"){
      haksayi--
      hak.textContent = "hak: "+haksayi
    }
    input.value = ""
  }
}

//kiraz
if(randomkelime == "kiraz"){
  const ipucuspan = document.getElementsByTagName("span")[2]
  ipucuspan.textContent = " R "
  buton.onclick = function(){
    if(input.value == "K"){
      const spans = document.getElementsByTagName("span")[0]
      spans.textContent = "K "
    }
    else if(input.value == "I"){
      const spans = document.getElementsByTagName("span")[1]
      spans.textContent = " I "
    }
    else if(input.value == "R"){
      const spans = document.getElementsByTagName("span")[2]
      spans.textContent = " R "
    }
    else if(input.value == "A"){
      const spans = document.getElementsByTagName("span")[3]
      spans.textContent = " A "
    }
    else if(input.value == "Z"){
      const spans = document.getElementsByTagName("span")[4]
      spans.textContent = " Z"
    }
    else if(input.value != "K" || input.value != "I" || input.value != "R" || input.value !="A" || input.value != "Z"){
      haksayi--
      hak.textContent = "hak: "+haksayi
    }
    input.value = ""
  }
}

if(randomkelime == "portakal"){
  const ipucuspan = document.getElementsByTagName("span")[3]
  ipucuspan.textContent = " T "
  const spans = document.getElementsByTagName("span")[4]
  const spans1 = document.getElementsByTagName("span")[6]
  spans1.textContent = " A "
  spans.textContent = " A "
  buton.onclick = function(){
    if(input.value == "P"){
      const spans = document.getElementsByTagName("span")[0]
      spans.textContent = "P "
    }
    else if(input.value == "O"){
      const spans = document.getElementsByTagName("span")[1]
      spans.textContent = " O "
    }
    else if(input.value == "R"){
      const spans = document.getElementsByTagName("span")[2]
      spans.textContent = " R "
    }
    else if(input.value == "T"){
      const spans = document.getElementsByTagName("span")[3]
      spans.textContent = " T "
    }
    else if(input.value == "A"){
      const spans = document.getElementsByTagName("span")[4]
      const spans1 = document.getElementsByTagName("span")[6]
      spans1.textContent = " A "
      spans.textContent = " A "
    }
    else if(input.value == "K"){
      const spans = document.getElementsByTagName("span")[5]
      spans.textContent = " K "
    }
    else if(input.value == "L"){
      const spans = document.getElementsByTagName("span")[7]
      spans.textContent = " L "
    }
    else if(input.value != "P" || input.value != "O" || input.value != "R" || input.value != "T" || input.value != "A" || input.value != "K" || input.value != "A" || input.value != "L"){
      haksayi--
      hak.textContent = "hak: "+haksayi
    }
    input.value = ""
  }
}

const interval = setInterval(function(){
   if(randomkelime == "armut" && h2.innerHTML == "<span>A </span><span> R </span><span> M </span><span> U </span><span> T</span>"){
    clearInterval(interval)
    alert("Tebrikler! tahmin ettiğim kelimeyi buldun!")
    window.location.reload()
  }
  if(randomkelime == "elma" && h2.innerHTML == "<span>E </span><span> L </span><span> M </span><span> A </span>"){
    clearInterval(interval)
    alert("Tebrikler! tahmin ettiğim kelimeyi buldun!")
    window.location.reload()
  }
  if(randomkelime == "kivi" && h2.innerHTML == "<span>K </span><span> I </span><span> V </span><span> I </span>"){
    clearInterval(interval)
    alert("Tebrikler! tahmin ettiğim kelimeyi buldun!")
    window.location.reload()
  }
  if(randomkelime == "kiraz" && h2.innerHTML == "<span>K </span><span> I </span><span> R </span><span> A </span><span> Z</span>"){
    clearInterval(interval)
    alert("Tebrikler! tahmin ettiğim kelimeyi buldun!")
    window.location.reload()
  }
  if(randomkelime == "portakal" &&  h2.innerHTML == "<span>P </span><span> O </span><span> R </span><span> T </span><span> A </span><span> K </span><span> A </span><span> L </span>"){
    clearInterval(interval)
    alert("Tebrikler! tahmin ettiğim kelimeyi buldun!")
    window.location.reload()
  }
  if(haksayi == 0){
    alert("hakkın bitti! tahmin ettiğim kelime: "+randomkelime)
    window.location.reload()
    clearInterval(interval)
  }
})
