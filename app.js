function prayersTime(latitude, longitude) {
    fetch('http://api.aladhan.com/v1/calendar?latitude=' + latitude + '&longitude=' + longitude + '&method=2').then(response => response.json()).then(function(response) {
        let date = new Date();
        let today = date.getDate() - 1;
        console.log(today);
        console.log(response.data[today].timings);
    });
}

function index() {
    let app = document.getElementById('app');
    let h3 = document.createElement('h3');
    h3.innerHTML = 'Prayers Time';

    app.appendChild(h3);

    userLocation();
}

function userLocation() {
    if (!navigator.geolocation) {
        alert('Geolocation tidak didukung di dalam browser Anda. Silakan gunakan browser lain!');
    } else {
        navigator.geolocation.getCurrentPosition(success, error);
    }


}

function success(position) {
    prayersTime(position.coords.latitude, position.coords.longitude);
}

function error() {
    alert('Posisi tidak tersedia!');
}

index();