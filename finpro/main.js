// /*აქ გავაკეთე რეინჯ ინპუთი და იწერება მნიშვნელობები შესაბამის ინფუთში*/
var inp2 = document.querySelector(".inp2")
var inp11 = document.querySelector(".inp12")
var inputLeft = document.getElementById("input-left");
var inputRight = document.getElementById("input-right");
var thumbLeft = document.querySelector(".slider > .thumb.left");
var thumbRight = document.querySelector(".slider > .thumb.right");
var range = document.querySelector(".slider > .range");
var categories = [
    {
        name: "უძრავი ქონება",
        id: 1
    },
    {
        name: "ბიზნესი",
        id: 2
    },
    {
        name: "მედია",
        id: 3
    }
]
var domainList = [
    {
        domainName: "example1",
        domainExtension: ".ge",
        price: 16000,
        categories: [1, 2]
    },
    {
        domainName: "example2",
        domainExtension: ".com.ge",
        price: 25000,
        categories: [2, 3]
    },
    {
        domainName: "example3",
        domainExtension: ".edu.ge",
        price: 5000,
        categories: [2]
    },
    {
        domainName: "example4",
        domainExtension: ".ge",
        price: 3000,
        categories: [3]
    },
    {
        domainName: "example5",
        domainExtension: ".org.ge",
        price: 2000,
        categories: [1, 3]
    }
]
var tmp1=`
<div class="category_and_range_mother">   
        <div class="category_and_range">
            <div class="cancel">
                <span class="sp17">ფილტრი</span>
                <div class="cancel_div"> 
                <img src="icon/cancel.svg" alt="" class="cancelphoto" style="width: 12px;height: 12px;">
            </div>
            </div>  
            <div class="category_child">
                <input type="text" class="inp1" placeholder="სახელით ძიება">
                <div class="price">ფასი</div>
                <div class="twoinp">
                    <input type="text" class="inp2">
                    <img src="icon/" alt="">
                    <input type="text" class="inp2 inp12">
                </div>
                <!-- <div class="inprangediv">  -->
                <div class="middle">
                    <div class="multi-range-slider">
                        <input type="range" id="input-left" min="0" max="50000" value="25">
                        <input type="range" id="input-right" min="0" max="50000" value="50000">
                        <div class="slider">
                            <div class="track"></div>
                            <div class="range"></div>
                            <div class="thumb left">
                                <div class="tumb_left_child"></div>
                                <div class="tumb_left_schild"></div>
                            </div>
                            <div class="thumb right">
                                <div class="tumb_right_child"></div>
                                <div class="tumb_right_schild"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- </div> -->
            </div>
            <div class="category_child">
                <div class="price1">სიმბოლოების რაოდენობა</div>
                <div class="twoinp">
                    <input type="text" class="inp21">
                    <img src="icon/" alt="">
                    <input type="text" class="inp111 inp33">
                </div>
                <div class="middle">
                    <div class="multi-range-slider">
                        <input type="range" id="input-left1" min="0" max="26" value="1">
                        <input type="range" id="input-right1" min="0" max="26" value="26">
                        <div class="slider1">
                            <div class="track1"></div>
                            <div class="range1"></div>
                            <div class="thumb1 left1">
                                <div class="tumb_left_child"></div>
                                <div class="tumb_left_schild"></div>
                            </div>
                            <div class="thumb1 right1">
                                <div class="tumb_right_child"></div>
                                <div class="tumb_right_schild"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="category_child categories">
                <ul> <span class="sp9">კატეგორიები</span>
                    <li class="licheck"><input type="checkbox" value="ბიზნესი" class="check fnt"><span class="sp18">ბიზნესი</span></li>
                    <li class="licheck"><input type="checkbox" class="fnt" value="უძრავი ქონება"><span class="sp18">უძრავი ქონება</span></li>
                    <li class="licheck"><input type="checkbox" class="fnt" value="ავტო"><span class="sp18">ავტო</span></li>
                    <li class="licheck"><input type="checkbox" class="fnt" value="მედიცინა"><span class="sp18">მედიცინა</span></li>
                    <li class="licheck"><input type="checkbox" class="fnt" value="ტექნოლოგიები"><span class="sp18">ტექნოლოგიები</span></li>
                    <li class="licheck"><input type="checkbox" class="fnt" value="თამაშები"><span class="sp18">თამაშები</span></li>
                    <li class="licheck"><input type="checkbox" class="fnt" value="გართობადადასვენება"><span class="sp18">გართობა და დასვენება</span></li>
                    <li class="licheck"><input type="checkbox" class="fnt" value="მედია"><span class="sp18">მედია</span></li>
                    <li class="licheck"><input type="checkbox" class="fnt" value="განათლება"><span class="sp18">განათლება</span></li>
                    <li class="licheck"><input type="checkbox" class="fnt" value="კომერცია"><span class="sp18">კომერცია</span></li>
                    <li class="licheck"><input type="checkbox" class="fnt" value="ფინანსები"><span class="sp18">ფინანსები</span></li>
                </ul>
            </div>
            <div class="category_child categories">
                <ul><span class="sp9"> დომენის ზონა</span>
                    <li class="licheck"><input type="checkbox" value=".ge" class="check fnt"><span class="sp18">.ge</span></li>
                    <li class="licheck"><input type="checkbox" class="fnt" value=".com.ge"><span class="sp18">.com.ge</span></li>
                    <li class="licheck"><input type="checkbox" class="fnt" value=".net.ge"><span class="sp18">.net.ge</span></li>
                    <li class="licheck"><input type="checkbox" class="fnt" value=".org.ge"><span class="sp18">.org.ge</span> </li>
                    <li class="licheck"><input type="checkbox" class="fnt" value=".edu.ge"><span class="sp18">.edu.ge</span></li>
                    <li class="licheck"><input type="checkbox" class="fnt" value=".school.ge"><span class="sp18">.school.ge</span></li>
                    <li class="licheck"><input type="checkbox" class="fnt" value="გართობადადასვენება"><span class="sp18">გართობა და დასვენება</span></li>
                    <li class="licheck"><input type="checkbox" class="fnt" value="მედია"><span class="sp18">მედია</span></li>
                    <li class="licheck"><input type="checkbox" class="fnt" value="განათლება"><span class="sp18">განათლება</span></li>
                    <li class="licheck"><input type="checkbox" class="fnt" value="კომერცია"><span class="sp18">კომერცია</span></li>
                    <li class="licheck"><input type="checkbox" class="fnt" value="ფინანსები"><span class="sp18">ფინანსები</span></li>
                </ul>
                <div class="button_search">
                    <button class="but_search">ძიება</button>
            </div>
            </div>
        </div>
        <div class="rightdomains">
        </div>
    </div>
`
function setLeftValue() {
    var _this = inputLeft,
        min = parseInt(_this.min),
        max = parseInt(_this.max);
    _this.value = Math.min(parseInt(_this.value), parseInt(inputRight.value) - 1);
    var percent = ((_this.value - min) / (max - min)) * 100;
    thumbLeft.style.left = percent + "%";
    range.style.left = percent + "%";
}
setLeftValue();
function setRightValue() {
    var _this = inputRight,
        min = parseInt(_this.min),
        max = parseInt(_this.max);
    _this.value = Math.max(parseInt(_this.value), parseInt(inputLeft.value) + 1);
    var percent = ((_this.value - min) / (max - min)) * 100;
    thumbRight.style.right = (100 - percent) + "%";
    range.style.right = (100 - percent) + "%";
}
setRightValue();
 
inputLeft.addEventListener("input", function () {
    inp2.value = inputLeft.value
    console.log(this)
    setLeftValue()
});
//  for(var i of inp2){
 inp2.addEventListener("input", function () {
     inputLeft.value = inp2.value
     setLeftValue()
 })
 //}
inputRight.addEventListener("input", function () {
    inp11.value = inputRight.value
    setRightValue()
});
// for(var i of inp11){
inp11.addEventListener("input", function () {
     inputRight.value = inp11.value
     setRightValue()
 })
//}
//////////////////////////meore
var inp21 = document.querySelector(".inp21")
var inp111 = document.querySelector(".inp111")
var inputLeft1 = document.getElementById("input-left1");
var inputRight1 = document.getElementById("input-right1");
var thumbLeft1 = document.querySelector(".slider1 > .thumb1.left1");
var thumbRight1 = document.querySelector(".slider1 > .thumb1.right1");
var range1 = document.querySelector(".slider1 > .range1");
function setLeftValueV() {
    var _this = inputLeft1,
        min = parseInt(_this.min),
        max = parseInt(_this.max);
    _this.value = Math.min(parseInt(_this.value), parseInt(inputRight1.value) - 1);
    var percent = ((_this.value - min) / (max - min)) * 100;
    thumbLeft1.style.left = percent + "%";
    range1.style.left = percent + "%";
}
setLeftValueV();
function setRightValueV() {
    var _this = inputRight1,
        min = parseInt(_this.min),
        max = parseInt(_this.max);
    _this.value = Math.max(parseInt(_this.value), parseInt(inputLeft1.value) + 1);
    var percent = ((_this.value - min) / (max - min)) * 100;
    thumbRight1.style.right = (100 - percent) + "%";
    range1.style.right = (100 - percent) + "%";
}
setRightValueV();
inputLeft1.addEventListener("input", function () {
    inp21.value = inputLeft1.value
    setLeftValueV()
});
inp21.addEventListener("input", function () {
    inputLeft1.value = inp21.value
    setLeftValueV()
})
inputRight1.addEventListener("input", function () {
    inp111.value = inputRight1.value
    setRightValueV()
});
inp111.addEventListener("input", function () {
    inputRight1.value = inp111.value
    setRightValueV()
})
function tmp(){
    for (var i of domainList) {
        var tmp = `
    <div class="maincard" style="border-radius:0px;">
    <div class="nameandphoto">
    <img src="icon/dropicon.svg" alt="" class="xc">
    <img src="icon/dropiconBord.svg" alt="" class="xc1">
    <span class="name">gijashvili${i.domainExtension}</span>
    </div>
    <div class="sell">
        <div class="spanebi" style="margin-right:16px;">
            <span class="sp22">${i.price}ლ</span>
            
            <span class="sp23">${(i.price/3.04).toFixed()}$</span>
        </div>
        <div class="kalat">
        <span class="sp19">დამატება</span>
        <img src="icon/cart.svg" alt="" class="z">
        </div>
    </div>
    </div> 
    `
        rightdom.innerHTML += tmp
    }
}
var rightdom = document.querySelector(".rightdomains")
var maincard = document.querySelector(".maincard")
tmp()
//sort by price
var priceSort = document.querySelector(".pricesort")
priceSort.addEventListener("click", function () {
    domainList.sort((a, b) => {
        return a.price - b.price
    })
    rightdom.innerHTML = ""
   tmp()
}) 
var burg = document.querySelector(".burg")
var snav = document.querySelector(".snav")
var cancelphoto = document.querySelector(".cancelphoto")
var category_range = document.querySelector(".category_and_range")
var category_range_mother = document.querySelector(".category_and_range_mother")
var category_child = document.querySelector(".category_child")
var middle = document.querySelector(".middle")
var categories1 = document.querySelector(".categories")
category_range_mother.style.display = "none"
burg.addEventListener("click", function () {
     snav.style.display="block" 
      snav.style.position="absolute"
     snav.style.width = "100%" 
     category_range_mother.style.display = "block"
      category_range_mother.style.position = "absolute"
      category_range.style.display = "block"
    category_range.style.position = "absolute" 
})
cancelphoto.addEventListener("click", function () {  
    snav.style.display="none"
    snav.style.position="relative"
    snav.style.width="0%"
    category_range_mother.style.display = "none"
    category_range_mother.style.position = "relative"
    category_range.style.display = "none"
  category_range.style.position = "relative"
  

})
// responsivze searchis gaketeba input.valueti daserchva da rangit modzebna
var inp1_search = document.querySelector(".inp1")
var sitkva = document.querySelector("h1")

function resize(word, count) {
    var tmp = ""
    for (var i = 0; i < count; i++) {
        tmp += word[i]
    }
    return tmp
}
function search() {
    sitkva.innerHTML = ""
     
    for (var i of domainList) { 
        if (resize(i.domainName, inp1_search.value.length) == inp1_search.value) {
            var tmp = `  
            <div class="maincard">
            <div class="nameandphoto">
            <img src="icon/dropicon.svg" alt="" class="xc">
            <img src="icon/dropiconBord.svg" alt="" class="xc1">
            <span class="name">gijashvili${i.domainExtension}</span></div>
            <div class="sell">
             style="margin-left:2px;"
                <span>${i.price}ლ</span>
                
                ()
            </div>
            <div class="kalat">
            <span class="sp19">დამატება</span>
            <img src="icon/cart.svg" alt="" class="z">
            </div>
        </div>
            </div>
             
            </div>  
            `
            snav.style.display = "none"
            rightdom.innerHTML += tmp
             
        }
    }
} 
var but_search = document.querySelector(".but_search")  
but_search.addEventListener("click", function () {  
    for (var i of domainList) { 
        if (inp2.value <= i.price && inp11.value >= i.price) {
            rightdom.innerHTML=""
            console.log(i)
            var tmp = `  
    <div class="maincard" >
    <div class="nameandphoto">
    <img src="icon/dropicon.svg" alt="" class="xc">
    <img src="icon/dropiconBord.svg" alt="" class="xc1">
    <span class="name">gijashvili${i.domainExtension}</span></div>
    <div class="sell">
                 style="margin-left:2px;"
                    <span>${i.price}ლ</span>
                    
                    ()
                </div>
                <div class="kalat">
                <span class="sp19">დამატება</span>
                <img src="icon/cart.svg" alt="" class="z">
                </div>
            </div>
    </div> 
    </div> 
    
    `   
    rightdom.innerHTML+=tmp
        } else{ 
            rightdom.innerHTML="else condition"
        }

    }
        for(var k of domainList){
            if (inp21.value <= k.domainExtension && inp111.value >= k.domainExtension) {
                rightdom.innerHTML=""
 
                var tmp1 = `  
        <div class="maincard" >
        <div class="nameandphoto">
        <img src="icon/dropicon.svg" alt="" class="xc">
        <img src="icon/dropiconBord.svg" alt="" class="xc1">
        <span class="name">gijashvili${k.domainExtension}</span></div>
        <div class="sell">
                     style="margin-left:2px;"
                        <span>${k.price}ლ</span>
                        
                        ()
                    </div>
                    <div class="kalat">
                    <span class="sp19">დამატება</span>
                    <img src="icon/cart.svg" alt="" class="z">
                    </div>
                </div>
        </div> 
        </div> 
        
        `   
        rightdom.innerHTML+=tmp1
            }
        }
    category_range_mother.style.background = "#FAFAFB"
    search()
    snav.style.display="none"
    snav.style.position="relative"
    snav.style.width="0%"
    category_range_mother.style.display = "none"
    category_range_mother.style.position = "relative"
    category_range.style.display = "none"
  category_range.style.position = "relative"
})
var but_search1=document.querySelector(".but_search1")
but_search1.addEventListener("click",function(){
    for (var i of domainList) { 
        if (inp2.value <= i.price && inp11.value >= i.price) { 
            console.log(i)
            var tmp = `  
    <div class="maincard" >
    <div class="nameandphoto">
    <img src="icon/dropicon.svg" alt="" class="xc">
    <img src="icon/dropiconBord.svg" alt="" class="xc1">
    <span class="name">gijashvili${i.domainExtension}</span></div>
    <div class="sell">
                 style="margin-left:2px;"
                    <span>${i.price}ლ</span>
                    
                    ()
                </div>
                <div class="kalat">
                <span class="sp19">დამატება</span>
                <img src="icon/cart.svg" alt="" class="z">
                </div>
            </div>
    </div> 
    </div> 
    
    `   
    rightdom.innerHTML=tmp
        } else{ 
            rightdom.innerHTML="else condition"
        }
    }
    category_range_mother.style.background = "#FAFAFB"
    search()
})
var shopcount = document.querySelector(".shopcount")
var kalat = document.querySelectorAll(".kalat") 
for (var i of kalat) {
     
    i.addEventListener("click", function(){ 
            var counter = 0
        counter++
        console.log(counter)
        if(counter<=1){ 
        shopcount.style.display = "block"
        shopcount.innerHTML = counter
        this.style.width = "120px"
        this.style.height = "36px"
        this.innerHTML = `<img src="icon/agree.svg"> <span style="color:#696974;">კალათაშია</span>`
        this.style.background = "#F5F5F8"
        }
    })
} 

 

// idebit msgavsi sakmianobis daserchva gasascorebelia kide 
// but_search.addEventListener("click", function () {
    var fnt = document.querySelectorAll(".fnt")
    for (var i of fnt) { 
        var c=0
        i.addEventListener("click", function () {
             
            if(this.checked==true){ 
                c++
            console.log(c)
                for (var p of categories) {
                if (this.value == p.name) {
                    for (var q of domainList) {
                        for (var k of q.categories) {
                            if (p.id == k) {
                                var tmp = `  
                                <div class="maincard">
                                <div class="nameandphoto">
                                <img src="icon/dropicon.svg" alt="" class="xc">
                                <img src="icon/dropiconBord.svg" alt="" class="xc1">
                                <span class="name">gijashvili${q.domainExtension}</span></div>
                                <div class="sell">
                                     style="margin-left:2px;"
                                        <span>${q.price}ლ</span>
                                        
                                        
                                        ()
                                    </div>
                                    <div class="kalat">
                                    <span class="sp19">დამატება</span>
                                    <img src="icon/cart.svg" alt="" class="z">
                                    </div>
                                </div>
                                </div> 
                                </div> 
                                
                                ` 
                                        rightdom.innerHTML += tmp 
                            }
                        }
                    }
                }
            }
        }
        })
    } 
    snav.style.display = "none"
// })

