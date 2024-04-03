document.getElementById('roll-btn').addEventListener('click', function() {
  var dice = document.getElementById('dice');
  var randomNumber = Math.floor(Math.random() * 6) + 1;
  dice.style.backgroundImage = "url('dice img/" + randomNumber + ".png')"; // Change background image based on rolled number
});
