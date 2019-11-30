$(document).ready(function () {
    var $grid = $('.filter__block-wrap').isotope({
        itemSelector: '.filter__block',
        layoutMode: 'masonry',
    });

    $('.filter-example-list').on('click', 'li', function () {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
    });
});

