function showModal(e) {
  e.preventDefault();
  new bootstrap.Modal('#modal', {
    keyboard: false,
  }).show();
}

const locations = {
  brussels: { lat: 50.852949, lng: 4.353136 },
  ghent: { lat: 51.040234, lng: 3.7335545 },
  antwerp: { lat: 51.218119, lng: 4.421486 },
  rotterdam: { lat: 51.922774, lng: 4.468339 },
};

function initMap() {
  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 8,
    center: { lat: 51.4061333, lng: 4.0523954 },
    mapTypeControl: false,
    streetViewControl: false,
  });

  Object.entries(locations).forEach(([id, position]) => {
    new google.maps.Marker({
      position,
      map,
    });

    locations[id].open = () => {
      map.zoom = 16;
      map.panTo(position);
    };
  });
}

window.initMap = initMap;
