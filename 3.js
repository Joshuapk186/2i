// https://cdnjs.cloudflare.com/ajax/libs/hls.js/0.6.0/hls.min.js
if (Hls.isSupported()) {
  var video = document.getElementsByTagName('video')[0];
  //var video = document.getElementById('video');
  var src = video.src;
  //alert(src)
  var hls = new Hls();
  hls.loadSource(src);
  hls.attachMedia(video);
  hls.on(Hls.Events.MANIFEST_PARSED, function() {
  // Uncaught (in promise) DOMException: play() failed because the user didn't interact with the document first.
    // video.play();
  })

  /************** VIDEO 2 *********************/

  var video2 = document.getElementById('video2');
  var hls2 = new Hls();
  hls2.loadSource('//nmxlive.akamaized.net/hls/live/529965/Live_1/index.m3u8');
  hls2.attachMedia(video2);
  /*   hls2.on(Hls.Events.MANIFEST_PARSED, function() {
      //video2.play();
    }); */
}

/*
function playVid() {
  video.play();
}

var someLink = document.getElementById('playbutton');
setTimeout(function() {
  simulateClick(someLink);
  console.log(someLink)
}, 3000);
*/
/**
 * Simulate a click event.
 * @public
 * @param {Element} elem  the element to simulate a click on
 */
 /*
var simulateClick = function(elem) {
  // Create our event (with options)
  var evt = new MouseEvent('click', {
    bubbles: true,
    cancelable: true,
    view: window
  });
  // If cancelled, don't dispatch our event
  var canceled = !elem.dispatchEvent(evt);
};
*/


/*
if(Hls.isSupported()) {
  var video = document.getElementById('video');
  var hls = new Hls();
  hls.loadSource('https://video-dev.github.io/streams/x36xhzz/x36xhzz.m3u8');
  hls.attachMedia(video);
  hls.on(Hls.Events.MANIFEST_PARSED,function() {
    video.play();
  });
}
// hls.js is not supported on platforms that do not have Media Source Extensions (MSE) enabled.
// When the browser has built-in HLS support (check using `canPlayType`), we can provide an HLS manifest (i.e. .m3u8 URL) directly to the video element throught the `src` property.
// This is using the built-in support of the plain video element, without using hls.js.
else if (video.canPlayType('application/vnd.apple.mpegurl')) {
  video.src = 'https://video-dev.github.io/streams/x36xhzz/x36xhzz.m3u8';
  video.addEventListener('canplay',function() {
    video.play();
  });
}
*/
