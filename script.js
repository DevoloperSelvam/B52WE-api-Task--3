function getUselessfacts() {
    
    fetch('https://uselessfacts.jsph.pl/api/v2/facts/random')
       
        .then(response => response.json())
      
        .then(data => {
            document.getElementById('uselessfacts').textContent = data.text;
        })
      
        .catch(error => {
            console.error(error);
            document.getElementById('uselessfacts').textContent = 'Sorry, something went wrong.';
        });
}
function refreshData() {
    getUselessfacts();
}

window.onload = refreshData;

document.getElementById('refresh-button').addEventListener('click', refreshData);