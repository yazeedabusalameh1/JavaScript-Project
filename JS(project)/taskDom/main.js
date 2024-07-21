// let data=["home","produvt"];
// let fheader=document.createElement(`header`);
// fheader.className="website-head";
// let headerUl=document.createElement(`ul`);
// let headerLi=document.createElement(`li`);
// let headerLiList=document.createTextNode("Elzero","Home","About","Service","Contant");
// headerLi.appendChild(headerLiList);
// headerUl.appendChild(headerLi);
// fheader.appendChild(headerUl);
// console.log(fheader);
// document.body.appendChild(fheader);
document.body.style.cssText = "margin: 0px; background-color: rgb(236, 236, 236); font-family:Tahoma,Arial;";
let hed=document.createElement(`header`);
hed.style.cssText="display:flex; padding:20px; background-color:rgb(255,255,255);justify-content:space-between;align-items:center;";
hed.classList.add("website-head");
document.body.appendChild(hed);
///////create logo/////////
let logo=document.createElement("div");
logo.classList.add("logo");
logo.style.cssText="font-weight:bold;color:rgb(35,169,110);font-size:30px;";
logo.innerHTML="Elzero";
hed.appendChild(logo);
/////ul///////////
let ul=document.createElement(`ul`);
let listEl=["Home","About","Service","Contact"];
for(let i=0;i<listEl.length;i++){
    let li=document.createElement(`li`);
    li.style.cssText="margin:5px;color:#227225;font-weight:bold;font-size:15px" ;
    li.innerHTML=listEl[i];
    ul.appendChild(li);
}
ul.classList.add("contant");
ul.style.cssText="padding:0px:margin:0px;display:flex;list-style:none;"
hed.appendChild(ul);
////body/////
let contant=document.createElement(`div`);
document.body.appendChild(contant);
contant.classList.add("contant");
contant.style.cssText="display:flex;padding:20px;flex-wrap;justify-content:center;gap:20px;box-sizing:border-box; width:100%";
////prouduct///
for(let i=0;i<15;i++){
let product=document.createElement(`div`);
product.classList.add("product");
product.style.cssText="padding:20px;background-color:rgb(255,255,255);border:1px solid rgb(221,221,221);width:calc(100%  / 3); box-sizing: border-box; text-align: center; color: rgb(136, 136, 136); border-radius: 6px";

let span=document.createElement("span");
span.style.cssText="font-size:40px;color:black;font-weight:normal;display:block;margin-bottom:10px;margin-top:10px;";
span.textContent=i+1;
product.appendChild(span);
product.append("Product");
contant.appendChild(product);
}


//////////foter//////////
let foot = document.createElement('footer');
foot.classList.add("footer");
foot.style.cssText = "background-color: rgb(35,169,110); font-size: 26px; text-align: center; padding: 20px; color: rgb(255,255,255);";
foot.append("Copyright 2021");
document.body.appendChild(foot)