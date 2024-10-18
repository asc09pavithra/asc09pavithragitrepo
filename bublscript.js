document.getElementById('onBulb').addEventListener('click', function() {
    this.style.display = 'none'; // Hide the On bulb
});

document.getElementById('offBulb').addEventListener('click', function() {
    const newBulb = document.createElement('div');
    newBulb.classList.add('bulb', 'off-bulb');
    newBulb.style.backgroundColor = 'gray';
    document.getElementById('bulbs-container').appendChild(newBulb);
});