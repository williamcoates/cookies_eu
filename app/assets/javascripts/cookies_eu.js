//= require jquery.cookie

installCookies = function () {
  $('.cookies-eu-ok').click(function(e){
    e.preventDefault()
    $.cookie('cookie_eu_consented', 'true', { path: '/', expires: 365 })
    $('.cookies-eu').remove()
  })
}

$(document).ready(installCookies)
$(document).on("page:load", installCookies)
