function select_actor(){
   var actor = document.getElementById("actors").value
   console.log(actor)

   var img = document.getElementById("img")

   img.src = "img/" + actor + ".png"
}

function get_name(){
    var get_name = document.getElementById("actors").value

    document.getElementById("tagP").innerHTML = actors
}