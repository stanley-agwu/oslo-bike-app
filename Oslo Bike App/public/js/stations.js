
setStation()
async function setStation(){

  const mymap = L.map('bikeMap').setView([59.911491, 10.757933], 15);
  const attribution =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
  //const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
  const tileUrl =
  'https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png';
  const tiles = L.tileLayer(tileUrl, { attribution });
  tiles.addTo(mymap);

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

  let lat, lon, my_marker;
  const button = document.querySelector('.checkIn');
  button.addEventListener('click', async event => {
    if ('geolocation' in navigator) {
      try{
          console.log('geolocation available');
          navigator.geolocation.getCurrentPosition(async position => {
          lat = position.coords.latitude;
          lon = position.coords.longitude;
          console.log(lat, lon);
          if (lat && lon){
            const mymap = L.map('my_bikeMap').setView([lat, lon], 11);
            const attribution =
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
            //const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
            const tileUrl =
            'https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png';
            const tiles = L.tileLayer(tileUrl, { attribution });
            tiles.addTo(mymap);

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
            my_marker = L.marker([lat, lon]).addTo(mymap);
            const circle = L.circle([lat, lon], {
                                                color: 'red',
                                                fillColor: '#f03',
                                                fillOpacity: 0.5,
                                                radius: 2000
                                            }).addTo(mymap);
            my_marker.bindPopup("<b>Hello!</b><br>You are Here.").openPopup();
          }
        })
      } catch (error){
        console.error(error)
      }
    } else {
      console.log('geolocation not available');
    }

  })
  const searchButton=document.querySelector('form');
  const searchInput=document.querySelector('input');
  searchButton.addEventListener('submit', async (event) => {
      event.preventDefault()
      //console.log(searchInput.value)
    }
  )

}
