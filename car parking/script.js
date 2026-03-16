// Wait for page to load
document.addEventListener("DOMContentLoaded", () => {

const slots = document.querySelectorAll(".slot");
const findButton = document.querySelector(".hero .btn");
const contactForm = document.querySelector(".contact form");


// ==============================
// FIND PARKING SLOT
// ==============================

findButton.addEventListener("click", () => {

let availableSlots = [];

slots.forEach(slot => {
if(slot.classList.contains("available")){
availableSlots.push(slot);
}
});

if(availableSlots.length > 0){

let randomSlot =
availableSlots[Math.floor(Math.random()*availableSlots.length)];

randomSlot.scrollIntoView({
behavior:"smooth",
block:"center"
});

randomSlot.style.outline = "4px solid yellow";

setTimeout(()=>{
randomSlot.style.outline = "none";
},3000);

alert("Parking Available: " + randomSlot.innerText);

}else{

alert("Sorry, no parking slots available right now.");

}

});


// ==============================
// SIMULATE LIVE PARKING STATUS
// ==============================

function updateSlots(){

slots.forEach(slot => {

let slotName = slot.innerText.split(" ")[0];

let random = Math.random();

if(random > 0.5){

slot.classList.remove("occupied");
slot.classList.add("available");
slot.innerText = slotName + " Available";

}else{

slot.classList.remove("available");
slot.classList.add("occupied");
slot.innerText = slotName + " Occupied";

}

});

}

// update every 8 seconds
setInterval(updateSlots,8000);


// ==============================
// CONTACT FORM
// ==============================

contactForm.addEventListener("submit", (e)=>{

e.preventDefault();

alert("Thank you! Your message has been sent successfully.");

contactForm.reset();

});


// ==============================
// SMOOTH NAVIGATION
// ==============================

document.querySelectorAll("nav a").forEach(link => {

link.addEventListener("click", function(e){

let target = this.getAttribute("href");

if(target.startsWith("#")){

e.preventDefault();

document.querySelector(target).scrollIntoView({
behavior:"smooth"
});

}

});

});

});