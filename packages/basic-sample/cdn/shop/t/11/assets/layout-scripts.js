/** Shopify CDN: Minification failed

Line 29:2 Transforming const to the configured target environment ("es5") is not supported yet
Line 62:2 Transforming const to the configured target environment ("es5") is not supported yet
Line 63:2 Transforming const to the configured target environment ("es5") is not supported yet
Line 70:4 Transforming const to the configured target environment ("es5") is not supported yet
Line 71:4 Transforming const to the configured target environment ("es5") is not supported yet
Line 78:4 Transforming const to the configured target environment ("es5") is not supported yet
Line 96:6 Transforming const to the configured target environment ("es5") is not supported yet
Line 97:6 Transforming const to the configured target environment ("es5") is not supported yet
Line 98:6 Transforming const to the configured target environment ("es5") is not supported yet
Line 104:4 Transforming const to the configured target environment ("es5") is not supported yet
... and 20 more hidden warnings

**/
$(document).ready(function () {
  navigationHamburger()
  languageSwitching()
  cartDrawerCustomerSupport()
  contactUs()
  switchAffirmMessage()
});

function switchAffirmMessage() {
  const lang = $('html').attr('lang')
  if (lang === 'en') {
    $('.fr_pop').hide()
    $('.pro_info').css('display', 'block')
    $('.img_bann.first_bann').addClass('eng')
    $('.img_bann.sec_bann').addClass('eng')
  } else {
    $('.pro_info').hide()
    $('.fr_pop').css('display', 'block')
    $('.img_bann').addClass('updfr')
    $('.img_bann>.tImHU').css('background', 'rgba(255,137,0,1)')
    $('.img_bann').css('display', 'flex')
    $('.img_bann.first_bann').css('background-image', '')
  }
}


function contactUs() {
  $('#ContactUsSection .live-chat').click(openChatSupport)
}

function cartDrawerCustomerSupport() {
  $("#CartDrawerCustomerSupport .live-chat").click(openChatSupport)
}

function navigationHamburger() {
  $('#hamburger-navigation-button').click(function () {
    $('#hamburger-navigation').toggle()
  })
}

function languageSwitching() {
  // Dont use "https://emma-sleep.ca" because it'll be auto converted to "https://qc.emma-sleep.ca" by shopify on french domain
  const franceUrl = "https://qc.emma-sleep.ca";
  const englishUrl = "https://emma-sleep" + ".ca";

  setTimeout(function() {
    renderLanguageRedirection();
  }, 2000)

  function renderLanguageRedirection() {
    const currentLanguage = $('html').attr('lang');
    const $languageRedirection = $(".language-redirection");
    $languageRedirection.text(currentLanguage === 'en' ? "FRANÇAIS" : "ENGLISH");
    $languageRedirection.attr("href", currentLanguage === 'en' ? franceUrl : englishUrl);
  }

  $('.language-redirection').click(function(e) {
    e.preventDefault()
    const currentLanguage = $('html').attr('lang');
    location.href = currentLanguage === 'en' ? franceUrl : englishUrl;
  })
}
