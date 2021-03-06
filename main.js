// WEBSITE

function main() {
// Fades in banner Pic over 5 seconds
  $('.bannerBox').hide();
  $('.bannerBox').fadeIn(5000);

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

  $('#registryBtn').on('click', function() {
    $('html, body').animate({
      scrollTop:
    ($('#giftsHeader').offset().top)
  }, 1);
  });

  $('#activitiesBtn').on('click', function() {
    $('html, body').animate({
      scrollTop:
    ($('#activitiesHeader').offset().top)
  }, 1);
  });
}

// Checks that the file has fully loaded before running main function
$(document).ready(main);
