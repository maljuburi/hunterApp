document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {

  $(".flash #on").on('click', function(){
  $("#on").hide();
  $("#off").show();
  window.plugins.flashlight.switchOff();
  });
  $(".flash #off").on('click', function(){
  $("#on").show();
  $("#off").hide();
  window.plugins.flashlight.switchOn();
  });
  
}

function redirect(page){
  window.location.href = page;

}
