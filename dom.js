const seats = document.querySelectorAll('.seat')
let seatbooked = 1
let ticketsbooked = [];
let bookedseatnumber = 0;
for (let index = 0; index < seats.length; index++) {
    let clicknumber = 1;
    const seat = seats[index];
    seat.addEventListener('click', function(){

        clicknumber++;
            if(clicknumber % 2 == 0){
                if(ticketsbooked.length+1 <5){
                    ticketsbooked.push(seat.innerText)
                    seat.classList.remove('bg-[#C4C4C4]')
                    seat.classList.add('bg-[#1DD100]')
                    bookedticketaddingtolist(seat)

                    showingthebookedseatnumber(ticketsbooked)

                }else{
                    alert("You cannt buy more than 4 tickets")
                }

            }else{
                seat.classList.remove('bg-[#1DD100]')
                seat.classList.add('bg-[#C4C4C4]')
                ticketsbooked = removingelement(seat)
                removingbookedlist(seat)
                showingthebookedseatnumber(ticketsbooked)
            }
    })
}



function bookedticketaddingtolist(seat){
        const tickets = document.querySelector('.tickets')
        const ticketdiv = document.createElement('div')
        ticketdiv.classList.add('ticektscontainer')
        const seatname = document.createElement('span')
        seatname.classList.add('seatname')
        seatname.innerText = seat.innerText
        const classname = document.createElement('span')
        classname.classList.add('classname')
        classname.innerText = "Economy class"
        const prize = document.createElement('span')
        prize.classList.add('price')
        prize.innerText = 550
        ticketdiv.appendChild(seatname)
        ticketdiv.appendChild(classname)
        ticketdiv.appendChild(prize)
        tickets.appendChild(ticketdiv)   
    }

function removingbookedlist(seat){
    const bookedseatnames = document.querySelectorAll('.seatname')
    const tickets = document.querySelector('.tickets')
    for(let bookedseat of bookedseatnames){
        if(bookedseat.innerText === seat.innerText){
            tickets.removeChild(bookedseat.parentElement)
        }
    }
    
}

function removingelement(seat){
    let news = [] 
    for(let ticket of ticketsbooked){
        if(seat.innerText === ticket){
            continue
        }else{
            news.push(ticket)
        }
    }
    return news
}
function showingthebookedseatnumber(ticketsbooked){
    const numberstoshow = document.querySelector('#totalseat')
    numberstoshow.innerText = ticketsbooked.length
    if(numberstoshow.innerText === "4"){
        const coupanbutton = document.querySelector('#offer-button')
        coupanbutton.removeAttribute('disabled')
    }else{
        const coupanbutton = document.querySelector('#offer-button')
        coupanbutton.setAttribute('disabled', '')
    }
    calculatingtotal(ticketsbooked.length)
    showingtheleftseat(36 - ticketsbooked.length)
}
function showingthebookednumber(ticketsbooked){
    const numberstoshow = document.querySelector('#totalseat')
    numberstoshow.innerText = ticketsbooked.length
}

function calculatingtotal(number){
    const grandtotalelement = document.querySelector('#grand-total')
    const total = document.querySelector('#total-price')
    total.innerText = number * 550
    grandtotalelement.innerText = number * 550
}
function showingtheleftseat(value){
    const leftseats = document.querySelector('#left-seats')
    leftseats.innerText = value
}


/* coupan-sention */



const coupanbutton = document.querySelector('#offer-button')
coupanbutton.addEventListener('click', function(){
    const grandtotalelement = document.querySelector('#grand-total')
    const coupanvalue = document.querySelector('#coupan-input').value.split(" ").join('').toUpperCase()
    if( coupanvalue === "NEW15"){
        const total = parseInt(document.querySelector('#total-price').innerText)
        let grandtotal = total - (total * 0.2)
        grandtotalelement.innerText = grandtotal
        document.getElementById('discount-price').innerText = total * 0.2
        document.querySelector('#input-setion').classList.add('hidden')
        document.getElementById('discountcontain').classList.remove('hidden')
    }else if( coupanvalue === "COUPLE20"){
        const total = parseInt(document.querySelector('#total-price').innerText)
        let grandtotal = total - (total * 0.15)
        grandtotalelement.innerText = grandtotal
        document.getElementById('discount-price').innerText = total * 0.15
        document.querySelector('#input-setion').classList.add('hidden')
        document.getElementById('discountcontain').classList.remove('hidden')
    }else{
        alert("invalid coupan code")
    }

})

/* next button work */

const nextbutton = document.getElementById('next-button')
nextbutton.addEventListener('click', function(){
    const phonenumber = document.getElementById('phone-number')
    const username = document.getElementById('user-name')
    const array = phonenumber.value.toString().split("")
    if(array.length >= 1 && ticketsbooked.length > 0){
        const main = document.getElementById('main-section')
        const name = document.getElementById('name')
        name.innerText = username.value.toUpperCase()
        main.classList.add('hidden')
        document.getElementById('after').classList.remove('hidden')
    }else{
        alert("you have to purchase minimum 1 ticket and provide valid phonenumber of 1 character or more")
    }
})


const continues = document.getElementById('continue')
continues.addEventListener('click', function(){
    const main = document.getElementById('main-section')
    main.classList.remove('hidden')
    document.getElementById('after').classList.add('hidden')
    document.location.reload()
})
 const phonenumber = document.getElementById('phone-number')
 phonenumber.addEventListener('click', function(){
    const nextbutton = document.getElementById('next-button')
    if(ticketsbooked.length >= 1 ){
        nextbutton.removeAttribute('disabled')
    }
 })
 function addiscountprice(){
    

 }