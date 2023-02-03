//creare lista email
const emailUserList =["mario.rossi@gmail.com","mario.rossi@outlook.it","mario.rossi@hotmail.it","mario.rossi@yahoo.it","mario.rossi@libero.it","mario.rossi@apple.com"]
console.log(emailUserList)
//chiedere email a utente
let emailUser = prompt ('Inserire email')
console.log(emailUser)


// (ciclo + if)
for(let i = 0; i < emailUserList.length; i++){
    let email = emailUserList[i]
    console.log(email)
    let welcome = document.getElementById('Saluti')
    
    if (email === emailUser) {
        let checkOk = (email === emailUser);
        
        console.log(checkOk) 
        if (checkOk){
            welcome.innerHTML="Benvenuto"
        }else{
            welcome.innerHTML="Error"
        }
    }else{
        console.log('Error')
        //let checkKo = (email !== emailUser);
        //if(checkKo){
        //    welcome.innerHTML="Error"
        //}
    }
}