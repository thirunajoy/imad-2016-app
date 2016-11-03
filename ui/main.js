console.log('Loaded!');
$('.social').mouseenter( function() {
  $( this ).animate({
    'margin-top': '-10px'
  }, 100,  function () {
   $( this ).animate({
    'margin-top': '0px'
    });
  });
});

$('.profile-pic').mouseenter ( function() {
  $(this).animate ( {
      'margin' : '8px',
      'width': '60px',
      'height': '60px' 
  }, 300, function () {
    $(this).animate ( {
      'margin' : '0px',
      'width': '75px',
      'height': '75px' 
    });
  });
});