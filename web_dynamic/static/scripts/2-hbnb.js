$(document).ready(function() {
    const url = 'http://......./api/v1/status/';
    $.get(url, function (res) {
      if (res.status === 'OK') {
        $('#api_status').addClass('available');
        console.log(res)
      } else {
        $('#api_status').removeClass('available');
      }
    });

  let amenity_check = [];
  $('input:checkbox').on('change', function(){
    const id = $(this).data('id');
    const name = $(this).data('name');
    if($(this).is(':checked')){
      amenity_check[id] = name;
    } else {
      delete amenity_check[id];
    }
    $('.amenities h4').text(Object.values(amenity_check).join(', '));
  });
});
