var windows={};function windowClose(a){$("div#win_"+a).remove();$("body").css("cursor","default")}function windowReduce(a){var b=$("div#win_ctnt_"+a);"none"==b.css("display")?$("a#ctred_"+a).text("-"):$("a#ctred_"+a).text("o");$(b).slideToggle();$("div#win_cl_"+a).slideToggle()}function windowRaise(a){for(w in windows)void 0!==windows[w]&&windows[w].css("z-index","1");a.css("z-index","2")}function windowHide(a){void 0!==windows[a]&&windows[a].hide()}
function windowToggle(a){void 0!==windows[a]&&(windows[a].slideToggle(),"none"!=windows[a].css("display")&&windowRaise(windows[a]))}function windowShow(a){void 0!==windows[a]&&("none"==windows[a].css("display")?windowToggle(a):windowRaise(windows[a]))}
function windowUI(a,b){var d,g,e,f;a.css("position","absolute");a.on("mousedown",function(c){windowRaise(a)});b.on("mousedown",function(c){c.preventDefault();var b=a.offset();e=$("body").width()-a.width()-10;$("body").height();a.height();d=c.pageX-b.left;g=c.pageY-b.top;f=!0;windowRaise(a)});$(document).on("mousemove",function(c){c.preventDefault();if(f){var b=c.pageX-d;c=c.pageY-g;0>b&&(b=0);0>c&&(c=0);b>e&&(b=e);a.css("transform","translate("+b+"px,"+c+"px)")}});$(window).on("mouseup",function(a){f=
!1});b.on("mouseenter",function(a){b.css("background-color","#c6881d");$("body").css("cursor","move")});b.on("mouseleave",function(a){b.css("background-color","#e8a634");$("body").css("cursor","default")})}
$(function(){var a=["message","about","markets_help","network_help"],b=.2*$("body").height();for(w in a){var d=$("div#"+a[w]);windowUI(d,$("div#winbar_"+a[w]));windows[a[w]]=d;d.css("transform","translate(200px,"+b+"px)")}$("a#ct_message").on("click",function(a){a.preventDefault();windowToggle("message")});$("a#ct_about").on("click",function(a){a.preventDefault();windowToggle("about")});$("a#ct_markets_help").on("click",function(a){a.preventDefault();windowToggle("markets_help")});$("a#ct_network_help").on("click",
function(a){a.preventDefault();windowToggle("network_help")})});