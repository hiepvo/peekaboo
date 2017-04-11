/**
 * Created by hiepvo on 3/29/17.
 */
(function(){
  var init        = {};
  var text       = document.querySelector('.evo_c-peekaboo__text');
  text.addEventListener('mouseleave', reveal, false);


  function reveal(el){
    if(this.tagName.toLowerCase() === 'div'){
      var span = document.querySelector('.evo_c-peekaboo__text' + '>span');
      span.style.transitionDelay = '0.65s';
      setTimeout(function(){
        span.style.transitionDelay = '0s';
      }, 100);
    }
  }
  /*-------------------------------*/

  window.init = init;

})
(window);

