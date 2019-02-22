$('div.hideContent').css('display', 'none');

 $('button.ShowMore').on('click', function(){
    var x = $('div.hideContent');
    if (x.css('display') == "none") {
      x.css('display', 'block');
      $('button.ShowMore span').text('SHOW LESS');
    } else {
      x.css('display', 'none');
      $('button.ShowMore span').text('SHOW MORE');
    }
  })