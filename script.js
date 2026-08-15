const bookButtons = document.querySelectorAll('.book-btn');
const vehicleSelect = document.getElementById('vehicleSelect');

bookButtons.forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        const vehicleName = this.getAttribute('data-vehicle');
        vehicleSelect.value = vehicleName;
        document.getElementById('booking').scrollIntoView({ behavior: 'smooth' });
    });
});

const bookingForm = document.getElementById('bookingForm');
const formMessage = document.getElementById('formMessage');

bookingForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const pickupDateStr = document.getElementById('pickupDate').value;
    const returnDateStr = document.getElementById('returnDate').value;
    
    const pickupDate = new Date(pickupDateStr);
    const returnDate = new Date(returnDateStr);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    formMessage.style.display = 'block';
    
    if (pickupDate < today) {
        formMessage.className = 'error';
        formMessage.textContent = 'Pick-up date cannot be in the past.';
        return;
    }

    if (returnDate < pickupDate) {
        formMessage.className = 'error';
        formMessage.textContent = 'Return date cannot be earlier than pick-up date.';
        return;
    }

    formMessage.className = 'success';
    formMessage.textContent = 'Booking request submitted successfully! We will contact you shortly.';
    bookingForm.reset();
});
