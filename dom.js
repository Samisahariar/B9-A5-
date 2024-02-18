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
                    alert("You cannt buy not more than 4 tickets")
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
    showingtheleftseat(40 - ticketsbooked.length)
}
function showingthebookednumber(ticketsbooked){
    const numberstoshow = document.querySelector('#totalseat')
    numberstoshow.innerText = ticketsbooked.length
}

function calculatingtotal(number){
    const total = document.querySelector('#total-price')
    total.innerText = number * 550
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
        document.querySelector('#inpu-section').classList.add('hidden')
    }else if( coupanvalue === "COUPLE20"){
        const total = parseInt(document.querySelector('#total-price').innerText)
        let grandtotal = total - (total * 0.15)
        grandtotalelement.innerText = grandtotal
        document.querySelector('#inpu-section').classList.add('hidden')
    }

})