//creare lista email
const emailUserList =["mario.rossi@gmail.com","mario.rossi@outlook.it","mario.rossi@hotmail.it","mario.rossi@yahoo.it","mario.rossi@libero.it","mario.rossi@apple.com"]
console.log(emailUserList)
//chiedere email a utente
let emailUser = prompt ('Inserire email')
console.log(emailUser)

let welcome = document.getElementById('Saluti')
// (ciclo + if)


let checkOk ;

for(let i = 0; i < emailUserList.length; i++){
    let email = emailUserList[i]
    console.log(email)   
    
    if (email === emailUser) {
        checkOk = true;
       
    }else{
        console.log('Error')
    }
}

if ( checkOk === true){
    welcome.innerHTML="Benvenuto";
}else{
    welcome.innerHTML="Error"; 
}


///////dadi

//generare numeri random per il pc
let dicePc = Math.floor(Math.random() * 6) + 1
console.log(dicePc)

//generare numeri random per l'utente
let diceUser = Math.floor(Math.random() * 6) + 1
console.log(diceUser)

//variabile per stampare
let result = document.getElementById('game-results')


//confrontare i numeri, il maggiore vince
if (dicePc < diceUser){
    console.log('User win');

    result.innerHTML= dicePc + " < " + diceUser +" "+"User win";

}else if(dicePc === diceUser){
    console.log('Pareggio');

    result.innerHTML= dicePc + " = " + diceUser +" "+ "Pareggio";
}else{
    console.log('Pc win');

    result.innerHTML= dicePc + " > " + diceUser +" "+ "Pc win";
}
