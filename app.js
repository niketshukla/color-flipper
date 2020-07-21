var simple = ["green", "red", "rgba(133,122,200)", "#f15025"];

var btn = document.getElementById('btn');

btn.addEventListener('click', function(){
    var smBackColor = simple[Math.floor(Math.random() * simple.length)];
    console.log(smBackColor);
    document.body.style.backgroundColor = smBackColor;
    document.getElementById("color_code").innerText = smBackColor;
});
