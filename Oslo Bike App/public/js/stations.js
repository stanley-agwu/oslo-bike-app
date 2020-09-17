setStation()

async function setStation(){
  let lat, lon;
  const data= {lat, lon};
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
      const options={
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({data})
      }
      const response = await fetch('/location', options);
      const json = await response.json();
      console.log(json);

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
}


