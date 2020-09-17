
const mymap = L.map('bikeMap').setView([59.911491, 10.757933], 15);
const attribution =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
//const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const tileUrl =
  'https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png';
const tiles = L.tileLayer(tileUrl, { attribution });
tiles.addTo(mymap);

setStation()
async function setStation(){
  const info_response = await fetch('/info');
  const info_data = await info_response.json();

  const status_response = await fetch('/status');
  const status_data = await status_response.json();

  for (let item=0; item<info_data.length; item++){

    const marker = L.marker([info_data[item].lat, info_data[item].lon]).addTo(mymap);

    let text = `The Bike station ${info_data[item].name}, located at ${info_data[item].address} 
      currently has ${status_data[item].num_bikes_available} bikes availables 
      and ${status_data[item].num_docks_available} free spots to dock.`;

    marker.bindPopup(text);
  }


  let lat, lon;
  const button = document.querySelector('.checkIn');
  button.addEventListener('click', async event => {
    if ('geolocation' in navigator) {
      console.log('geolocation available');
      navigator.geolocation.getCurrentPosition(async position => {
      lat = position.coords.latitude;
      lon = position.coords.longitude;
      console.log(lat, lon);
      document.getElementById('latitude').textContent = lat.toFixed(2);
      document.getElementById('longitude').textContent = lon.toFixed(2);

      })

      const form = document.querySelector('form');
      const search = document.querySelector('input');

      form.addEventListener('submit', event => {
        event.preventDefault()
        console.log(search.value)
      })

    } else {
      console.log('geolocation not available');
    }

  })
  console.log(new Date())
}

setInterval(setStation, 60000)

