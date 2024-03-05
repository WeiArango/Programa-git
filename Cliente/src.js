
/* Sección para mostrar ubicación de usuario en mapa */
function showCurrentPositionUser(map, marker) {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        ({ coords: { latitude, longitude } }) => {
          const coords = {
            lat: latitude,
            lng: longitude,
          };
          map.setCenter(coords);
          map.setZoom(15);
          marker.setPosition(coords);
          console.log(coords);
        },
        () => {
          alert("No permitiste mostrar tu ubicación");
        }
      );
    } else {
      alert("Actualiza el navegador");
    }
  }
  
  function iniciarMap() {
    const argCoords = { lat: 3.42573, lng: -72.57182 };
    const map = new google.maps.Map(mapDiv, {
      center: argCoords,
      zoom: 5,
    });
    const marker = new google.maps.Marker({
      position: argCoords,
      map,
    });
  
    btnlocation.addEventListener(`click`, () => {
      showCurrentPositionUser(map, marker);
    });
  }

