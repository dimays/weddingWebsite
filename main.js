function main() {
  $('.bannerPic').hide();
  $('.bannerPic').fadeIn(6000);

  $('#storyBtn').on('click', function() {
    $('html, body').animate({
      scrollTop:
    ($('#story').offset().top)
  }, 600);
  });

  $('#detailsBtn').on('click', function() {
    $('html, body').animate({
      scrollTop:
    ($('#details').offset().top)
  }, 600);
  });

  $('#accomodationsBtn').on('click', function() {
    $('html, body').animate({
      scrollTop:
    ($('#accomodations').offset().top)
  }, 600);
  });

  $('#rsvpBtn').on('click', function() {
    $('html, body').animate({
      scrollTop:
    ($('#rsvp').offset().top)
  }, 600);
  });

  $('#giftsBtn').on('click', function() {
    $('html, body').animate({
      scrollTop:
    ($('#gifts').offset().top)
  }, 600);
  });
}

$(document).ready(main);
