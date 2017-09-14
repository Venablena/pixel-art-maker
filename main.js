// document.addEventListener("DOMContentLoaded", function (){
console.log("Sanity check");

let color = "";
document.querySelectorAll('.circle').forEach(function(pen){
  pen.addEventListener('click', function(){
    color = this.id
  })
});

let squares = document.querySelectorAll('.square').forEach(function(pixel){
  pixel.addEventListener('click', function(){
    if(pixel.style.backgroundColor != color){
      pixel.style.backgroundColor = color
    }else{
      pixel.style.backgroundColor = "white"
    }
  })
})

//color.toString ?!

//   for (let i = 0; i < squares.length; i++) {
//     let pixel = squares[i]
//
//     pixel.addEventListener('click', function(){
//       if(pixel.style.backgroundColor === "white"){
//         pixel.style.backgroundColor="red"
//       }else{
//         pixel.style.backgroundColor="white"
//       }
//     })
// }
// })
