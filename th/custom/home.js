let bannerConfigUrl = "./config/banners/data.json";

jQuery.getJSON(bannerConfigUrl, function (data) {
  // check with current lang
  let items = [];
  let currentLang = "en";
  if (window.location.pathname.indexOf("/th/") > -1) {
    currentLang = "th";
  }
  $.each(data, function (key, rv) {
    let val = rv[currentLang];
    let priBtn = "",
      secBtn = "";
    if (!!val.primaryBtn) {
      priBtn = `<a href="${
        val.primaryBtnLink || "#"
      }" class="theme-btn text-bold style-ten">${val.primaryBtn}</a>`;
    }
    if (!!val.secondaryBtn) {
      secBtn = `<a href="${
        val.secondaryBtnLink || "#"
      }" class="theme-btn text-bold style-eleven">${val.secondaryBtn}</a>`;
    }
    items.push(
      `
        <div class="main-slider-item">
          <div class="image">
          ${rv.imageSrc}
          </div>
          <div class="slider-caption">
            <div class="container">
              <div class="main-slider-content">
                <span class="sub-title">${val.subtitle}</span>
                <h2 class="text-grey">${val.title}</h2>
                <h5>${val.detail}</h5>
                <p>${val.description}</p>
                <div class="slider-btns">
                  ${priBtn}
                  ${secBtn}
                </div>
              </div>
            </div>
          </div>
        </div>
      `
    );
  });
  if (jQuery("#home .main-slider-wrap")) {
    jQuery("#home .main-slider-wrap").empty().append(items);
  }
});

let newsConfigUrl = "./config/news/data.json";
jQuery.getJSON(newsConfigUrl, function (data) {
  // check with current lang
  let items = [];
  let currentLang = "en";
  let readMoreButton = "Read More";
  if (window.location.pathname.indexOf("/th/") > -1) {
    currentLang = "th";
    readMoreButton = "อ่านเพิ่มเติม";
  }
  $.each(data, function (key, rv) {
    let val = rv[currentLang];
    let priBtn = "";

    if (!!val.link) {
      priBtn = `<a href="${
        val.link || "#"
      }" class="primary-link">${readMoreButton} <i class="fas fa-chevron-right"></i></a>`;
    }
    items.push(
      `
        <div class="news-slider-wrapper">
          <div class="news-slider-item">
            <div class="image" style="background-image: url('${rv.imageSrc}')">
            </div>
            <div class="slider-caption">
              <div class="container">
                <div class="main-slider-content news-slider-content">
                  <span class="sub-title">${val.date}</span>
                  <p class="title">${val.title}</p>
                  ${priBtn}
                </div>
              </div>
            </div>
          </div>
        </div>
      `
    );
  });
  if (jQuery(".news-slider-wrap")) {
    jQuery(".news-slider-wrap").empty().append(items);
    jQuery(".news-slider-wrap").slick({
      infinite: true,
      dots: true,
      arrows: true,
      prevArrow: $(".news-prev"),
      nextArrow: $(".news-next"),
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 1280,
          settings: {
            centerMode: false,
            variableWidth: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            dots: true,
            arrows: false,
          },
        },
        {
          breakpoint: 768,
          settings: {
            centerMode: false,
            variableWidth: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            arrows: false,
            autoplay: true,
          },
        }
      ],
    });
  }
});

// why us
let whyusConfigUrl = "./config/whyus/data.json";
jQuery.getJSON(whyusConfigUrl, function (data) {
  // check with current lang
  let items = [];
  let currentLang = "en";
  if (window.location.pathname.indexOf("/th/") > -1) {
    currentLang = "th";
  }
  $.each(data, function (key, rv) {
    let val = rv[currentLang];
    items.push(
      `<div class="service-item-six">
  <div class="icon d-flex justify-content-center align-items-center">
    <img src="${val.img}" alt="Icon">
  </div>
  <div class="service-content">
    <h6>${val.title}</h6>
    <p>${val.description}</p>
  </div>
</div>
`
    );
  });
  if (jQuery(".whyus-slider-wrap")) {
    jQuery(".whyus-slider-wrap").empty().append(items);
    jQuery(".whyus-slider-wrap").slick({
      infinite: true,
      dots: true,
      arrows: false,
      prevArrow: $(".whyus-prev"),
      nextArrow: $(".whyus-next"),
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 1280,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            dots: true,
            arrows: false,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            arrows: true,
            autoplay: true,
          },
        },
      ],
    });
  }
});

// feature
let featureConfigUrl = "./config/whatwedo/data.json";
jQuery.getJSON(featureConfigUrl, function (data) {
  // check with current lang
  let items = [];
  let currentLang = "en";
  if (window.location.pathname.indexOf("/th/") > -1) {
    currentLang = "th";
  }
  $.each(data, function (key, rv) {
    let val = rv[currentLang];
    items.push(
      `<div>
      <div class="feature-item-three wow fadeInUp delay-0-2s">
        <div class="icon-row">
          <div class="icon">
            <img style="margin-left:15px;" height="88px" width="88px" src="${val.img}" alt="Icon">
          </div>
          <h4 class="title">
          ${val.title}
          </h4>
        </div>
        <p>${val.description}</p>
      </div>
    </div>
`
    );
  });
  if (jQuery(".feature-slider-wrap")) {
    jQuery(".feature-slider-wrap").empty().append(items);
    jQuery(".feature-slider-wrap").slick({
      infinite: true,
      dots: true,
      arrows: false,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 1280,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            dots: true,
            arrows: false,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            arrows: false,
          },
        },
      ],
    });
  }
});
