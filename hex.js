let btn = document.getElementById('btn');
btn.addEventListener('click', function(){
    let randomNumber =  hexCode();
    console.log(randomNumber);
    document.body.style.backgroundColor = randomNumber;
    document.getElementById("color_code").innerText = randomNumber;
});

function hexCode(){
    let result = '#';
    let alphanum = "0123456789abcdef";
    for (let i = 0; i < 6; i++) {
        // selecting a random number from alphanum
        result += alphanum.charAt(Math.floor(Math.random() * alphanum.length));
    }
    return result;
}
