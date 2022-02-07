const container = document.querySelector(".container");

for (let i = 0; i < 100; i++) {

   const square = document.createElement("div");
   square.classList.add("square");

   if ((i+1) % 5 === 0 && (i+1) % 3 === 0) {
      square.classList.add("fizzbuzz");
      square.append("fizzbuzz");
   } else if ((i+1) % 5 === 0) {
      square.classList.add("buzz");
      square.append("buzz");
   } else if ((i+1) % 3 === 0) {
      square.classList.add("fizz");
      square.append("fizz");
   } else {
      square.append(i+1);
   }

   container.append(square);
}