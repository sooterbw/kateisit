var $grid = $('.grid').isotope({
  itemSelector: '.grid-item',
  percentPosition: true,
  masonry: {
    // use outer width of grid-sizer for columnWidth
    columnWidth: '.grid-sizer'
  }
});
 
 // filter items on button click
  $('.filter-group').on( 'click', '.nav-link', function() {
    var filterValue = $(this).attr('data-filter');
    $('.grid').isotope({ filter: filterValue });
  });

// layout Isotope after each image loads
$grid.imagesLoaded().progress( function() {
  $grid.isotope('layout');
});  