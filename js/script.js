    var allProducts = document.querySelectorAll(".products-container    .product-details    .product-button button")
    var div = document.querySelector("#content")
    var details = document.querySelectorAll("h3")
    var button = document.querySelector("#addToCart")
    var show =  document.querySelector("#show-price")
    var div1 = document.querySelector("#SHOPPING")
    var totalPrice = 0
    ////////////////////////////////////////////////////////////////////// 
    allProducts.forEach(function (item){
        item.onclick = function (){
        totalPrice  +=  +(item.getAttribute("data-price"))
        var parent = item.parentElement.parentElement
        var name = parent.querySelector("h3").textContent
        var img = parent.querySelector("img").src
        var price = item.getAttribute("data-price")
    div.innerHTML += 
"<div  style='display:flex; padding:15px;    border:2px  solid rgba(129, 199, 132, 0.3); border-radius:15px; background-color:white; margin-top:20px;'>"
+ "<img src='" + img + "' style='width:80px; height:80px; margin-right:15px; margin-left:15px; border-radius:15px'>"
+ "<div>"
+ "<p style='margin:0; font-weight:bold; font-size:28px'>" + name + "</p>"
+ "<span style='font-size:22px; line-height:50px;  '>$" + price + "</span>"+ "</div>"
+ "</div>"

        if(div.innerHTML != ""){
            div1.style.display = "block"
            button.style.display = "block"
            button.style.width = "250px"
            button.style.height = "45px"
            button.style.backgroundColor = "rgb(205, 232, 207)"
            button.style.color = "rgb(46 125 50)"
        }
        }
    })
    button.onclick = function () {
        show.innerHTML = "<h2 style='color: #2e7d32; text-align: center; padding: 25px; border-radius: 15px; font-size: 32px; margin: 20px auto; border:2px  solid rgba(129, 199, 132, 0.3);'>Total: $" + totalPrice + "</h2>"  
    }    
