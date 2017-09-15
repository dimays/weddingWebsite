// WEBSITE

function main() {
// Fades in banner Pic over 5 seconds
  $('#bannerPic').hide();
  $('#bannerPic').fadeIn(5000);

// When a button is clicked, scroll immediately to the top of the associated element
  $('#storyBtn').on('click', function() {
    $('html, body').animate({
      scrollTop:
    ($('#storyHeader').offset().top)
  }, 1);
  });

  $('#detailsBtn').on('click', function() {
    $('html, body').animate({
      scrollTop:
    ($('#detailsHeader').offset().top)
  }, 1);
  });

  $('#accomodationsBtn').on('click', function() {
    $('html, body').animate({
      scrollTop:
    ($('#accomodationsHeader').offset().top)
  }, 1);
  });

  $('#rsvpBtn').on('click', function() {
    $('html, body').animate({
      scrollTop:
    ($('#rsvpHeader').offset().top)
  }, 1);
  });

  $('#giftsBtn').on('click', function() {
    $('html, body').animate({
      scrollTop:
    ($('#giftsHeader').offset().top)
  }, 1);
  });
}

// Checks that the file has fully loaded before running main function
$(document).ready(main);

