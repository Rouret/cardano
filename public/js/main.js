const socket = io();
const BASE = "anoCard"

$(function() {
    var INDEX = 0; 
    $("#chat-submit").click(function(e) {
      e.preventDefault();
      var msg = $("#chat-input").val(); 
      if(msg.trim() == ''){
        return false;
      }
      socket.emit("sendMessage", msg);
      generate_message(msg, 'self');
    })
    
    function generate_message(msg, type) {
      INDEX++;
      var str="";
      str += "<div id='cm-msg-"+INDEX+"' class=\"chat-msg "+type+"\">";
      str += "          <span class=\"msg-avatar\">";
      str += "            <img src=\"https:\/\/image.crisp.im\/avatar\/operator\/196af8cc-f6ad-4ef7-afd1-c45d5231387c\/240\/?1483361727745\">";
      str += "          <\/span>";
      str += "          <div class=\"cm-msg-text\">";
      str += msg;
      str += "          <\/div>";
      str += "        <\/div>";
      $(".chat-logs").append(str);
      $("#cm-msg-"+INDEX).hide().fadeIn(300);
      if(type == 'self'){
       $("#chat-input").val(''); 
      }    
      $(".chat-logs").stop().animate({ scrollTop: $(".chat-logs")[0].scrollHeight}, 1000);    
    }  
    
    $(document).delegate(".chat-btn", "click", function() {
      var value = $(this).attr("chat-value");
      var name = $(this).html();
      $("#chat-input").attr("disabled", false);
      generate_message(name, 'self');
    })
    
    $("#chat-circle").click(function() {    
      $("#chat-circle").toggle('scale');
      $(".chat-box").toggle('scale');
    })
    
    $(".chat-box-toggle").click(function() {
      $("#chat-circle").toggle('scale');
      $(".chat-box").toggle('scale');
    })
    
  })

socket.on(`${BASE}.full`, function(msg) {
   alert("The room is full")
});

socket.on(`${BASE}.connected`, function(msg) {
    console.log(msg)
 });


 socket.on(`${BASE}.message`, function(msg) {
    console.log(msg)
    generate_message(msg.message,"user")
    
 });
