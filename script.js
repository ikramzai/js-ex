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
  
  //  } else if (unit === "F") {
  //   if (degree > 86) {
  //        document.getElementById("demo").innerHTML = "Hot";
  //   } else if (degree > 68) {
  //        document.getElementById("demo").innerHTML = "Warm";
  //   } else if (degree > 50) {
  //        document.getElementById("demo").innerHTML = "Mild";
  //   } else if (degree > 32) {
  //        document.getElementById("demo").innerHTML = "Cold";
  //   } else {
  //        document.getElementById("demo").innerHTML = "Freezing";
  //   }
  // }

