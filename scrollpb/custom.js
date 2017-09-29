$(window).load(function(){
	console.log("%cStop!","font: 3em roboto; color: #dd4814;")
	console.log("%cThis is a browser feature intended for developers.","font: 1.5em roboto; color: #grey;")
  $(window).scroll(function() {
    var wintop = $(window).scrollTop();
    var docheight = $('#maincontent').height();
    var winheight = $(window).height();
    var totalScroll = (wintop/(docheight-winheight))*100;
    console.log("total scroll " + totalScroll);
    $(".KW_progressBar").css("width",totalScroll+"%");
  });

});