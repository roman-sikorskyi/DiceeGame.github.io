document.addEventListener('DOMContentLoaded', function() {
    const randomNumber1 = Math.floor(Math.random() * 6) + 1; 
    console.log(randomNumber1);
    document.getElementsByClassName('img1')[0].setAttribute("src", `images/dice${randomNumber1}.png`);
    
    const randomNumber2 = Math.floor(Math.random() * 6) + 1;
    console.log(randomNumber2);
    document.getElementsByClassName('img2')[0].setAttribute("src", `images/dice${randomNumber2}.png`);

    const header = document.querySelector('h1');

    if (randomNumber1 > randomNumber2) {
        header.textContent = "Player 1 Wins!";
    } else if (randomNumber2 > randomNumber1) {
        header.textContent = "Player 2 Wins!";
    } else {
        header.textContent = "It's a Draw!";
    }
});
