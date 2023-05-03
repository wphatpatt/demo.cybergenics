// Init header / footer
jQuery('#main-header').load('./header.html');
jQuery('#main-footer').load('./footer.html');
jQuery(document).ready(function () {
  jQuery.getScript('./assets/js/script.js');
  setTimeout(() => {
    $('.preloader').delay(200).fadeOut(500);
  }, 200)
});

function changeLanguage(lang) {
  let url = window.location.href;
  if (url.indexOf('/th/') > -1) {
    // change lang th -> en
    // if (url.indexOf('.html') > -1) {
    //   // from /th/ -> /
      
    // } else {
    //   // index
    // }
    // url = url.replace('/th/', '/');

    if(url.includes('news')){
      url = url.replace('/th/', '/');
    }else{
      url = url.replace('/th/', '/');
    }
  } else {
    // change lang en -> th
    if (url.indexOf('.html') > -1) {
      // split html and
      let origin = window.location.origin;
      let pathname = window.location.pathname;
      // url = origin + '/th' + pathname;

      if(url.includes('news')){
        url = origin + '/th/?news';
      }else{
        url = origin + '/th' + pathname;
      }
    } else {
      // index
      if(url.includes('news')){
        url = 'th/?news';
      }else{
        url = url + 'th/'
      }
    }
  }
  window.location = url;
}