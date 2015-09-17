var ctr=1;
$.fn.invertElement = function() {
  var prop = 'color';

  if (!this.css(prop)) return;

  var color = new RGBColor(this.css(prop));
  if (color.ok) {
    this.css(prop, 'rgb(' + (255 - color.r) + ',' + (255 - color.g) + ',' + (255 - color.b) + ')');
  }
};

$(document).ready(function() {
  
   $('.Button').click(function() {
    if(ctr%2===0){
    $(this).animate({
       });
  }
    if(ctr%2===1){
    $(this).animate({
       });
  }
  ctr=ctr+1;
   }); 

$('.Button').mouseover(function(){
    $(this).find(".ImgButton").invertElement();
}).mouseleave(function(){
    $(this).find(".ImgButton").invertElement();
});



});