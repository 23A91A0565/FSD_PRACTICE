var MyCards=[
{
    Image:"http://127.0.0.1:5501/WEB_APPLICATION/classes/JACASCRIPT/webimage.png",
    Price:1200,
    Brand:"Adidas"
},
{
    Image:"http://127.0.0.1:5501/WEB_APPLICATION/classes/JACASCRIPT/webimage.png",
    Price:1400,
    Brand:"Puma"
},
{
    Image:"http://127.0.0.1:5501/WEB_APPLICATION/classes/JACASCRIPT/webimage.png",
    Price:1900,
    Brand:"Zudio"
},
{
    Image:"http://127.0.0.1:5501/WEB_APPLICATION/classes/JACASCRIPT/webimage.png",
    Price:1000,
    Brand:"Adidas"
},
{
    Image:"http://127.0.0.1:5501/WEB_APPLICATION/classes/JACASCRIPT/webimage.png",
    Price:1200,
    Brand:"Phani"
},
{
    Image:"http://127.0.0.1:5501/WEB_APPLICATION/classes/JACASCRIPT/webimage.png",
    Price:1200,
    Brand:"Kumar"
},
{
    Image:"http://127.0.0.1:5501/WEB_APPLICATION/classes/JACASCRIPT/webimage.png",
    Price:1200,
    Brand:"Durga"
},
{
    Image:"http://127.0.0.1:5501/WEB_APPLICATION/classes/JACASCRIPT/webimage.png",
    Price:1970,
    Brand:"Phani Kumar"
}
]

var card=MyCards.map((ele)=>{
    return (` <div class="card">
                <div class="image">
                    <img src=${ele.Image} />
                </div>
                <div class="content">
                    <div class="price">Price : ${ele.Price}</div>
                    <div class="brand">Brand : ${ele.Brand}</div>
                </div>
        </div> `)
});
card=card.join(" ");
var parent=document.getElementsByClassName("parent_card")[0];
parent.innerHTML=card;

