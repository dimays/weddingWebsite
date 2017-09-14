// WEBSITE

function main() {
// Fades in banner Pic over 4 seconds
  $('.bannerPic').hide();
  $('.bannerPic').fadeIn(4000);

// When a button is clicked, scroll to the top of the associated element over 0.8 seconds
  $('#storyBtn').on('click', function() {
    $('html, body').animate({
      scrollTop:
    ($('#storyHeader').offset().top)
  }, 800);
  });

  $('#detailsBtn').on('click', function() {
    $('html, body').animate({
      scrollTop:
    ($('#detailsHeader').offset().top)
  }, 800);
  });

  $('#accomodationsBtn').on('click', function() {
    $('html, body').animate({
      scrollTop:
    ($('#accomodationsHeader').offset().top)
  }, 800);
  });

  $('#rsvpBtn').on('click', function() {
    $('html, body').animate({
      scrollTop:
    ($('#rsvpHeader').offset().top)
  }, 800);
  });

  $('#giftsBtn').on('click', function() {
    $('html, body').animate({
      scrollTop:
    ($('#giftsHeader').offset().top)
  }, 800);
  });
}

// Checks that the file has fully loaded before running main function
$(document).ready(main);
