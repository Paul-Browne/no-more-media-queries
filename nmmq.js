

// IIFE

!function(){

  // Debounced resize function

  function debouncedResize(a,b){
    return window.addEventListener("resize",function(){
      clearTimeout(b),
      b = setTimeout(a,200)
    }),a
  }
  
  debouncedResize(function(){

    // variables and what-not

    var html = document.documentElement;
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;
    var landscape_portrait = " landscape";
    var screenType = "";
    
    // pretty self-explanitory, if window width is less than height variable becomes "portrait"

    if(windowWidth < windowHeight) {
      landscape_portrait = " portrait";
    }

    // kind of a mobile first approach, add another class name when breakpoint is reached
    // a more accurate naming convention would be something like tablet-and-up but, meh
    
    if(windowWidth > 640) {
      screenType = " tablet";
      if(windowWidth > 1040){
        screenType += " laptop";
        if(windowWidth > 1440){
          screenType += " desktop";
        }
      }
    }

    // replace all the added class names on resize, then re-add the appropriate ones.
    
    html.className = html.className.replace(/(?:^|\s)(tablet|laptop|desktop|portrait|landscape)(?!\S)/g,"") + screenType + landscape_portrait;

  })()
  
}();