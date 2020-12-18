$("#hide").hide()
$("#logo").click(function(){
    $("#hide").toggle(3000)
    $("#hide").hide(5000)
})
    $("#shop").hide()
    $("#bt").click(function(){
      var instement = JSON.parse(localStorage.getItem('ins'))
      $("#shop").empty()
      for(var i = 0 ; i < instement.length ; i++){
        $("#shop").append( '<li><button id="al"><h5 id="iso">' + instement[i] + '</h5></button></li>')
       }

      $("#shop").toggle()
    })        
var instement = [{
  src : "https://www.noizikidz.com/12597-large_nzk3/guitare-electrique-type-s-noire.jpg" , 
  name : "Guitar" 
},
{
  src : "https://bentleymusic.com/wp-content/uploads/2020/07/TAMAIES1465-BOW-1-400x400.jpg"  , 
  name : "drum" 
},
{
  src : "https://www.cdiscount.com/pdt2/8/5/4/1/700x700/yam4957812593854/rw/clavier-61-touches-yamaha-np12b.jpg"  , 
  name : "piano" 
}]

         for(var i = 0 ; i < instement.length ; i++){
          $("#buttonimage").append('<img style="cursor: pointer;"onclick="addtochariot(' + 'instement[' + i +'].name'+')" src=' + instement[i].src + ' width="100" height="100">' + '<h5>' + instement[i].name + '</h5>')
         }

             var myIndex = 0;
function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}
  x[myIndex-1].style.display = "block";
  setTimeout(carousel, 2000); // Change image every 2 seconds
}
carousel();
function check(){
  localStorage.getItem("ins")
  console.log(localStorage.getItem("ins"))
}

var ins = []
function addtochariot(src){
  ins.push(src)
  localStorage.setItem("ins" , JSON.stringify(ins))
console.log(src)
}









var modal = document.getElementById('#hide');
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
