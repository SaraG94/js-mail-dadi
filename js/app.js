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
