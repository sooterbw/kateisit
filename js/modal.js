portfolioItems = document.querySelectorAll('.grid-item')
for (i=0; i< portfolioItems.length; i++ ) {
    $('#carousel-'+[i].carousel({
        interval: false,
    }))
}
