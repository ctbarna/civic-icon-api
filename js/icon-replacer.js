/**
 * icon-replacer.js
 * @author Chris Barna (chris@unbrain.net)
 **/
var base_url = "";//"http://ctbarna.github.com/civic-icon-api/";
var icon_base = base_url + "img/icons";

var icons = ["24-hour-service", "barking-dog", "bicycle-repair", "boycott",
  "broken-parking-meter", "bully", "cafeteria", "childrens-library",
  "citizen", "detour", "electric-car", "fair-trade", "farm", "flood",
  "food-bank", "fruit-picking", "geolocation", "gluten-free", "graffiti-removal",
  "guerilla-gardening", "gymnasium", "helmet", "human-rights", "locally-grown",
  "locker-room", "main-office", "parking-meter", "peaceful-protest",
  "playground", "pothole", "protest", "report-card", "school-bus",
  "school-counselor", "security-bag-check", "soup-kitchen", "student-pickup-area",
  "subway", "urban-farm", "food-truck"];

(function ($) {
  $.fn.iconReplacer = function (size) {
    if (typeof size === "undefined") size = 30;
    this.each(function () {
      for (var i = 0; i < icons.length; i += 1) {
        var search_string = new RegExp(":"+icons[i]+":", "g")
        $(this).html($(this).html().replace(search_string,
          '<object style="vertical-align:middle" style="overflow:hidden;" class="iconreplacer-icon" width="'+size+'" height="'+size+'" data="' + icon_base + '/' + icons[i] + '.svg" type="image/svg+xml"></object>'));
      }
    });

    return this;
  };
})(jQuery);
