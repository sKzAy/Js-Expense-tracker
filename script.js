let btn1 = document.querySelector(".btn1")

let place = document.querySelector("#InputName")
let date = document.querySelector("#InputDate")
let amount = document.querySelector("#InputAmount")

btn1.addEventListener("click", ()=>{
    let placeVal = place.value
    if (placeVal === ""){
        alert("Please enter the place where you spent the money")
    }
    let dateVal = date.value
    if (dateVal === ""){
        alert("Please enter the date")
    }
    let amountVal = amount.value
    if (amountVal === ""){
        alert("Please enter the amount of money spent")
    }
    let tbdy = document.querySelector(".body")
    let tr = document.createElement('tr')
     tr.innerHTML = `<td>${placeVal}</td>
        <td>${dateVal}</td>
        <td>${amountVal}</td>`
    tbdy.appendChild(tr)

    amount.value =""
    date.value = ""
    place.value = ""
 
})    








        
        
