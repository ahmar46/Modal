// Get the Modal Element
let modal = document.getElementById('simpleModal');
// Get open modal button
let modalBtn = document.getElementById('modalBtn');
// Get close button
let closeBtn = document.getElementsByClassName('closeBtn')[0];

// Listen for open click
modalBtn.addEventListener('click',   openModal);

// Listen for close click
closeBtn.addEventListener('click',   closeModal);

//Listen for outside click
window.addEventListener('click', outsideCLick);

// Function to open Modal
function openModal() {
    modal.style.display = 'block';
}

// Function to close Modal
function closeModal() {
    modal.style.display = 'none';
}

// Function to close Modal if outside Click
function outsideCLick(e) {
    if (e.target == modal) {
        modal.style.display = 'none';   
    }
}