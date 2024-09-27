// send email
// Initialize EmailJS
(function() {
    emailjs.init("olxGDmwFJDsHLYxS4"); 
})();


document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); 

    // Send the email
    emailjs.sendForm('service_f3p2ygo', 'template_b51de3q', this)
        .then(function() {
            document.getElementById("contact-form").reset(); 
            alert('Email sent successfully!');
        }, function(error) {
            document.getElementById("contact-form").reset(); 
            alert('Failed to send email: ' + JSON.stringify(error));
        });

    const modal = document.getElementById('myModal');
    modal.style.display = 'none';
});


document.getElementById('view-all-btn').addEventListener('click', function() {
    if(this.innerHTML == "View All")
    {
        const hiddenCards = document.querySelectorAll('.hidden');
        hiddenCards.forEach(card => {
            card.classList.remove('hidden');
            card.classList.add('visible');
        });
        this.innerHTML = "Close";
    }

    else{
        const cards = document.querySelectorAll('.visible');
        cards.forEach(card => {
        card.classList.add('hidden');
    });

    this.innerHTML = "View All";
    }
});


        const modal = document.getElementById('myModal');
        const openButton = document.getElementById('get-in-touch-btn');
        const closeButton = document.getElementById('closeDialog');

        openButton.onclick = () => {
            modal.style.display = 'block';
        };

        closeButton.onclick = () => {
            modal.style.display = 'none';
        };

        window.onclick = (event) => {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        };

        document.getElementById('confirm').onclick = () => {
            alert('Confirmed!');
            modal.style.display = 'none';
        };