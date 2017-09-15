// document.addEventListener("DOMContentLoaded", function (){
console.log("Sanity check");

let color = "";
document.querySelectorAll('.circle').forEach(function(pen){
  pen.addEventListener('click', function(){
    let selected = this.className.includes("selected")
    if (selected === false) {
      this.className += ' selected'
      color = this.id
    }else{
      this.className ='circle'
      color = ""
    }
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
