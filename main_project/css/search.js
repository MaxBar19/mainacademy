(function () {

  $('button').on('click', function(e){
    e.preventDefault();

    Search(1);
  });

  $('.page').on('click', function() {

    if($(this).hasClass('disabled')) return;

    var page = parseInt($('#page-counter').val());

    if($(this).hasClass('next')) {
      page++;
    } else {
      page--;
    }

    Search(page);

  })



})();


function Search(page) {

  if($('input[name="s"]').val() == '') return;
  
  $('#page-counter').val(page)

  var url = 'http://www.omdbapi.com/?' + $('form').serialize();

  $('.content').html('');
  $('.pages').addClass('hide');

  $('.current').text(page)

  $.get(url, function(data) {
     getResults(data)
  }).fail(function(data){
    $('.content').html('Try later');
  })
}

function getResults(data) {

    if(data.Response === "False") {
      $('#count').text(0)
      $('.content').html(data.Error);
      return;
    }


    $('#count').text(Math.ceil(data.totalResults/10))

    for(i = 0; i < data.Search.length; i++) {
      var wrap = createItem(data.Search[i].Title, data.Search[i].Year, data.Search[i].Poster);

      $('.content').append($(wrap));

    }

    if (data.totalResults > 10) {
      $('.pages').removeClass('hide')
      statusPagination (data.totalResults);
    }

}

function statusPagination (allResults) {
  var page = parseInt($('#page-counter').val());
  var all = Math.ceil(allResults/10);

  var next = $('.next');
  var prev = $('.prev');

  prev.removeClass('disabled')
  next.removeClass('disabled')

  if(page == 1) {
    prev.addClass('disabled')
  }

  if(page == all) {
    next.addClass('disabled')
  }

}


function createItem (title, year, image) {
  var item = '<div class="wrap">'+
                '<img src="'+image+ '">'+
                '<div class="info">'+
                  '<div>'+ title + '</div>'+
                  '<div>'+ year + '</div>'+
                '</div>'+
              '</div>';

  return item;
}
