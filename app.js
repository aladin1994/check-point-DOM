const wrapper = document.querySelector(".sliderWrapper")
const menuItems = document.querySelectorAll(".menuItem")



const products = [
    {
      id: 1,
      title: "Air Force",
      price: 119,
      colors: [
        {
          code: "black",
          img: "./img/air.png",
        },
        {
          code: "darkblue",
          img: "./img/air2.png",
        },
      ],
    },
    {
      id: 2,
      title: "Air Jordan",
      price: 149,
      colors: [
        {
          code: "lightgray",
          img: "./img/jordan.png",
        },
        {
          code: "green",
          img: "./img/jordan2.png",
        },
      ],
    },
    {
      id: 3,
      title: "Blazer",
      price: 109,
      colors: [
        {
          code: "lightgray",
          img: "./img/blazer.png",
        },
        {
          code: "green",
          img: "./img/blazer2.png",
        },
      ],
    },
    {
      id: 4,
      title: "Crater",
      price: 129,
      colors: [
        {
          code: "black",
          img: "./img/crater.png",
        },
        {
          code: "lightgray",
          img: "./img/crater2.png",
        },
      ],
    },
    {
      id: 5,
      title: "Hippie",
      price: 99,
      colors: [
        {
          code: "gray",
          img: "./img/hippie.png",
        },
        {
          code: "black",
          img: "./img/hippie2.png",
        },
      ],
    },
  ];

  let choosenProduct = products[0];
  let carteProducts = []
  const currentProductImg = document.querySelector(".productImg");
  const currentProductTitle = document.querySelector(".productTitle");
  const currentProductPrice = document.querySelector(".productPrice");
  const currentProductColors = document.querySelectorAll(".color");
  const currentProductSizes = document.querySelectorAll(".size");
  const addCarte = document.querySelector(".addCarte");
  let sumPrice = 0;
  const qte = document.querySelector(".qte");

  menuItems.forEach((item,index)=>{
    item.addEventListener("click", ()=>{
        //change the current slide
        wrapper.style.transform = `translateX(${-100 * index}vw)`;
        // change the choosen product
        choosenProduct = products[index]

        //change text of current product
        currentProductTitle.textContent = choosenProduct.title;
        currentProductPrice.textContent = "$"+ choosenProduct.price;
        currentProductImg.src = choosenProduct.colors[0].img;
        //assing new colors
        currentProductColors.forEach((color,index)=>{
            color.style.backgroundColor =choosenProduct.colors[index].code;
        })
        

    })
})
//adding carte shope
addCarte.addEventListener("click",()=>{
  sumPrice += choosenProduct.price * qte.innerHTML ;
  for (let i = 0; i < qte.innerHTML; i++) {
    
    carteProducts.push(choosenProduct);
  }
  
  alert(  choosenProduct.title+ " est ajouté\n"+" Totale est: $"+sumPrice +"\n nombre des produits est : "+carteProducts.length);
  
})





currentProductColors.forEach((color,index)=>{
    color.addEventListener("click",()=>{
        currentProductImg.src = choosenProduct.colors[index].img;
    })
})
currentProductSizes.forEach((size,index)=>{
    size.addEventListener("click",()=>{
        currentProductSizes.forEach((size,index)=>{
            size.style.backgroundColor = "white";
            size.style.color = "black";
        })
        size.style.backgroundColor = "black";
        size.style.color = "white";
    })
})

const productBotton = document.querySelector(".productButton");
const payment  =document.querySelector(".payment");
const closePB = document.querySelector(".pb")
const carte = document.querySelector(".carte");
const closeMC =document.querySelector(".mc");
const modifayButton = document.querySelector(".editeCarte");
const carteTable = document.querySelector(".carteTable");
productBotton.addEventListener("click", ()=>{
  payment.style.display ="flex";
})

closePB.addEventListener("click", ()=>{
  payment.style.display ="none";
})
closeMC.addEventListener("click", ()=>{
  carte.style.display ="none";
  
})
let ligneTable ="";
var totalePrice = document.getElementById("totalPrice");
var totaleP = 0;
modifayButton.addEventListener("click", ()=>{
  carte.style.display ="flex";

  for (let i = 0; i < carteProducts.length; i++) {
    ligneTable +="<tr>"
    ligneTable += "<td>"+ carteProducts[i].title+"</td>";
    ligneTable += "<td>"+ carteProducts[i].price+"</td>";
    ligneTable += "<td><button class='btn-supprimer'>Delete</button</td>";
    ligneTable += "</tr>"
    
    totaleP += carteProducts[i].price 
   
    
  }
  
  totalePrice.innerHTML = totaleP;
  carteTable.innerHTML += ligneTable;
  
  const deleteBtns = document.querySelectorAll(".btn-supprimer");
  
  for (let i = 0; i < deleteBtns.length; i++) {
    
    deleteBtns[i].addEventListener("click",()=>{
      totaleP -= carteProducts[i].price;
      totalePrice.innerHTML = totaleP;
      deleteBtns[i].parentElement.parentElement.remove();
      carteProducts.splice(i)
      console.log(carteProducts.length)
    })
    
  }
  

})

const btnPlusQte = document.querySelector(".fa-plus")
const btnMinusQte = document.querySelector(".fa-minus")

btnPlusQte.addEventListener("click", ()=>{
  qte.innerHTML++;
})
btnMinusQte.addEventListener("click",()=>{
  if (qte.innerHTML > 0) {
    qte.innerHTML--;
  }else{
    return 0
  }
})
