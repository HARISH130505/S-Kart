var full=document.getElementById("full")
var carte =document.getElementById("carte");
var kart =document.querySelector(".kart");
var hide=document.getElementById("hide");
carte.addEventListener("click" ,function(){
    kart.style.display="block";
    full.style.display="none";
    msg1.style.display="none";
    msg2.style.display="none";
    popup.style.display="none";

})
hide.addEventListener("click",function(){
    kart.style.display="none";
    full.style.display="block";
})

function a1(){
    var newdiv = document.createElement("div");
    newdiv.setAttribute("class","c1");
    newdiv.innerHTML=`<img src="pencil.jpg"> <p class="para">Apsara Extra-Dark Pencil<button class="bn" onclick="buy(event)">By now</button><button class="de" onclick="del(event)">Delete</button></p>`
    kart.appendChild(newdiv);
}
function a2(){
    var newdiv = document.createElement("div");
    newdiv.setAttribute("class","c1");
    newdiv.innerHTML=`<img class="eins" src="b-pen.jpg"> <p class="para">Hauser XO Ball-Pen<button class="bn" onclick="buy(event)">By now</button><button class="de" onclick="del(event)">Delete</button></p>`
    kart.appendChild(newdiv);
}
function a3(){
    var newdiv = document.createElement("div");
    newdiv.setAttribute("class","c1");
    newdiv.innerHTML=`<img class="eins" src="g-pen.jpg"> <p class="para">Hauser XO Gel-Pen<button class="bn" onclick="buy(event)">By now</button><button class="de" onclick="del(event)">Delete</button></p>`
    kart.appendChild(newdiv);
}
function a4(){
    var newdiv = document.createElement("div");
    newdiv.setAttribute("class","c1");
    newdiv.innerHTML=`<img class="eins" src="ink-pen.jpg"> <p class="para">Flair Ink-Pen<button class="bn" onclick="buy(event)">By now</button><button class="de" onclick="del(event)">Delete</button></p>`
    kart.appendChild(newdiv);
}
function a5(){
    var newdiv = document.createElement("div");
    newdiv.setAttribute("class","c1");
    newdiv.innerHTML=`<img class="eins" src="rubber.jpg"> <p class="para">Apsara Eraser-Pack of 20<button class="bn" onclick="buy(event)">By now</button><button class="de" onclick="del(event)">Delete</button></p>`
    kart.appendChild(newdiv);
}
function a6(){
    var newdiv = document.createElement("div");
    newdiv.setAttribute("class","c1");
    newdiv.innerHTML=`<img class="eins" src="sharp.jpg"> <p class="para" >Apsara Sharpner-Pack of 10<button class="bn" onclick="buy(event)">By now</button><button class="de" onclick="del(event)">Delete</button></p>`
    kart.appendChild(newdiv);
}
function a7(){
    var newdiv = document.createElement("div");
    newdiv.setAttribute("class","c1");
    newdiv.innerHTML=`<img class="eins" src="scale.jpg"> <p class="para">Natraj Long size scale<button class="bn" onclick="buy(event)">By now</button><button class="de" onclick="del(event)">Delete</button></p>`
    kart.appendChild(newdiv);
}
function a8(){
    var newdiv = document.createElement("div");
    newdiv.setAttribute("class","c1");
    newdiv.innerHTML=`<img class="eins" src="pouch.jpg"> <p class="para">S-Kart 5 Pieces Transparent Pouch<button class="bn" onclick="buy(event)">By now</button><button class="de" onclick="del(event)">Delete</button></p>`
    kart.appendChild(newdiv);
}
function a9(){
    var newdiv = document.createElement("div");
    newdiv.setAttribute("class","c1");
    newdiv.innerHTML=`<img class="eins" src="box.jpg"> <p class="para">Multifunctional Space Lock Pencil Box For Kids<button class="bn" onclick="buy(event)">By now</button><button class="de" onclick="del(event)">Delete</button></p>`
    kart.appendChild(newdiv);
}
function a10(){
    var newdiv = document.createElement("div");
    newdiv.setAttribute("class","c1");
    newdiv.innerHTML=`<img class="eins" src="gm-box.jpg"> <p class="para">Classmate Archimedes Geometry Box<button class="bn" onclick="buy(event)">By now</button><button class="de" onclick="del(event)">Delete</button></p>`
    kart.appendChild(newdiv);
}
function a11(){
    var newdiv = document.createElement("div");
    newdiv.setAttribute("class","c1");
    newdiv.innerHTML=`<img class="eins" src="notebook.jpg"> <p class="para">Classmate Single Line Notebook,120 Pages<button class="bn" onclick="buy(event)">By now</button><button class="de" onclick="del(event)">Delete</button></p>`
    kart.appendChild(newdiv);
}
function a12(){
    var newdiv = document.createElement("div");
    newdiv.setAttribute("class","c1");
    newdiv.innerHTML=`<img class="eins" src="files.jpg"> <p class="para">S-Kart files-Pack of 6<button class="bn" onclick="buy(event)">By now</button><button class="de" onclick="del(event)">Delete</button></p>`
    kart.appendChild(newdiv);
}
function a13(){
    var newdiv = document.createElement("div");
    newdiv.setAttribute("class","c1");
    newdiv.innerHTML=`<img class="eins" src="sketch.jpg"> <p class="para">Faber-Castell Connector Pen Set - Pack of 15<button class="bn" onclick="buy(event)">By now</button><button class="de" onclick="del(event)">Delete</button></p>`
    kart.appendChild(newdiv);
}
function a14(){
    var newdiv = document.createElement("div");
    newdiv.setAttribute("class","c1");
    newdiv.innerHTML=`<img class="eins" src="color pencil.jpg"> <p class="para">DOMS 24 Shades Color Pencils<button class="bn" onclick="buy(event)">By now</button><button class="de" onclick="del(event)">Delete</button></p>`
    kart.appendChild(newdiv);
}
function a15(){
    var newdiv = document.createElement("div");
    newdiv.setAttribute("class","c1");
    newdiv.innerHTML=`<img class="eins" src="crayons.jpg"> <p class="para">Faber-Castell Jumbo Wax Crayons<button class="bn" onclick="buy(event)">By now</button><button class="de" onclick="del(event)">Delete</button></p>`
    kart.appendChild(newdiv);
}
function a16(){
    var newdiv = document.createElement("div");
    newdiv.setAttribute("class","c1");
    newdiv.innerHTML=`<img class="eins" src="paints.jpg"> <p class="para">Doms 12 Shades Poster Colours<button class="bn" onclick="buy(event)">By now</button><button class="de" onclick="del(event)">Delete</button></p>`
    kart.appendChild(newdiv);
}
var msg=document.getElementById("msg");
function buy(event){
    msg1.style.display="block";
    var button = event.target;
    var c1div=button.closest('.c1');
    c1div.remove();
}
function del(event){
    msg2.style.display="block";
    var button = event.target;
    var c1div=button.closest('.c1');
    c1div.remove();  
}
function close1(){
    msg1.style.display="none";
}
function close2(){
    msg2.style.display="none";
}
var popup=document.getElementById("popup");
var user=document.getElementById("user");
user.addEventListener("click",function(){
    popup.style.display="block"
})
var save=document.getElementById("save")
save.addEventListener("click",function(){
    alert("Your Info has been saved Sucessfully");
})
shut.addEventListener("click",function(){
    popup.style.display="none";
})

var find=document.getElementById("find");
find.addEventListener("input",function(){
    var found=find.value.toLowerCase();
    var products=document.querySelectorAll(".st");
    products.forEach(function(st){
        productName=st.querySelector("p").textContent.toLowerCase();
        if(productName.includes(found)){
            st.style.display="block";
        }
        else{
            st.style.display="none";
        }
    })
})