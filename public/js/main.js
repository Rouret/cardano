const socket = io();
const BASE = "anoCard"
socket.on(`${BASE}.full`, function(msg) {
   alert("The room is full")
});

socket.on(`${BASE}.connected`, function(msg) {
    console.log(msg)
 });