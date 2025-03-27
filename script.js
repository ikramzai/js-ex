function weather(degree, unit = "C") {
  if (unit === "C") {
    if (degree > 30) {
      return "Hot";
    } else if (degree > 20) {
      return "Warm";
    } else if (degree > 10) {
      return "Mild";
    } else if (degree > 0) {
      return "Cold";
    } else {
      return "Freezing";
    }
  } else if (unit === "F") {
    if (degree > 86) {
      return "Hot";
    } else if (degree > 68) {
      return "Warm";
    } else if (degree > 50) {
      return "Mild";
    } else if (degree > 32) {
      return "Cold";
    } else {
      return "Freezing";
    }
  }
}
console.log(weather(10, 'F'));
