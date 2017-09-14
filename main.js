// document.addEventListener("DOMContentLoaded", function (){
  console.log("Sanity check");

  let squares = document.getElementsByClassName('square')
    for (let i = 0; i < squares.length; i++) {
      let pixel = squares[i]

      pixel.addEventListener('click', function(){
        if(pixel.style.backgroundColor === "white"){
          pixel.style.backgroundColor="red"
        }else{
          pixel.style.backgroundColor="white"
        }
      })

    let brushes = document.querySelector('.circle')
    brushes.addEventListener("click",function (brush){
      brush.forEach(console.log("color check!"))
    })
  }
// })
