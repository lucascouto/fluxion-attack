var count = 0;
setInterval(function(){
  count++;
  document.getElementById('reconnect').innerHTML = "Reconectando." + new Array(count % 4).join('.');
}, 200);