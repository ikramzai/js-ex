function weather() {
  let degree = document.getElementById('input').value ;
    if (degree > 30) {
     document.getElementById("demo").innerHTML = "Hot 🔥";
    } else if (degree > 20) {
      document.getElementById("demo").innerHTML = "Warm 🌞";
    } else if (degree > 10) {
      document.getElementById("demo").innerHTML = "Mild 😶‍🌫️";
    } else if (degree > 0) {
      document.getElementById("demo").innerHTML = "Cold 🥶";
    } 
   else if (degree < -1) {
    document.getElementById("demo").innerHTML = "Freezing 🧊";
    }
  else {
      document.getElementById("demo").innerHTML = "";
    }
  }

  const numbers = [40, 100, 1, 5, 25, 10];
   numbers.sort(function(a, b){return a - b});
   

   var alphabetic = ["B", "O", "A", "M" , "K"];   
   alphabetic.sort();

   console.log(alphabetic)