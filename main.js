 var numSecreto = parseInt(Math.random()*1001 + 1);
 
 while(chute != numSecreto){
    var numchutes=0;
    var chute = prompt("Digite um número entre 0 e 1000");
    if(chute == numSecreto){
        alert('Acertou! ')
     }else if(chute > numSecreto){
          
        alert('O chute foi maior que o número secreto, tente novamente ');
     }else if(chute < numSecreto){
         
        alert('O chute foi menor que o número secreto, tente novamente ' );
     }
   
 }
 

