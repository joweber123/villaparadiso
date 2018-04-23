function initMap() {
  var address = 'VILLA PARADISO Via N. Sauro, 172 Borgio Verezzi Italy';
  var map = new google.maps.Map(document.getElementById('map'), {
       zoom: 13
  });
  var geocoder = new google.maps.Geocoder();
  geocoder.geocode({
      'address': address
  },
  function(results, status) {
    if(status == google.maps.GeocoderStatus.OK) {
      new google.maps.Marker({
        position: results[0].geometry.location,
        map: map
      });
      map.setCenter(results[0].geometry.location);
    }
  });
}
