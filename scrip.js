console.log('Js file is working');

const container = document.querySelector('.container');
const set = document.querySelectorAll('.row.set:not(.occupied)');

const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

let ticketPrice = +movieSelect.value;
console.log(ticketPrice);


//Update total and Count
function updateSelectedCount(){
    const selectedSeats = document.querySelectorAll('.row .set.selected');
    //Copt the selected sets inti arr
    //Map through array map() => return array
    const setsIndex = [...selectedSeats].map(set => [...set].indexOf(set));
    
    console.log(setsIndex);

    const selectedSeatsCount = selectedSeats.length;
    count.innerText = selectedSeatsCount;
    total.innerText = selectedSeatsCount * ticketPrice;
}

//Movie Select Event
movieSelect.addEventListener('change', e =>{
    ticketPrice = e.target.value;
    updateSelectedCount();
})

//Set Click Event
container.addEventListener('click', e =>{
    if (e.target.classList.contains('set') && !e.target.classList.contains('occupied')) {
        
        e.target.classList.toggle('selected');
        updateSelectedCount();
    }
});