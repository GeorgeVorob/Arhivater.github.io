function test(quest, value) {
    if (quest == 4 || quest == 5 || quest == 6){
        if (array[quest] == undefined){
            array[quest] = String(value);
            console.log(value);
        }
        else{
            array[quest] += String(value);
            console.log(value);
        }
    }
    else{
        array[quest] = String(value);
        console.log(value);
    }
};

function checkArray(){
    for (let i = 0; i < array.length; i++){
        console.log((i+1) + ") " + array[i]);
    }
};

function resetAnswer(quest) {
    array[quest] = undefined;
};
let array = new Array(10);
let trueArray = ['1', '4', '2', '3', '123', '14', '15', '6', 'Иллидану', 'Анубарак'];

function disable(){
 var uncheck=document.getElementsByTagName('input');
 for(var i=0;i<uncheck.length;i++) {
  if(uncheck[i].type=='checkbox') {
   uncheck[i].disabled = true;
  }
 }
   
 for(var i=0;i<uncheck.length;i++) {
  if(uncheck[i].type=='radio') {
   uncheck[i].disabled = true;
  }
 }   
    
 for(var i=0;i<uncheck.length;i++) {
  if(uncheck[i].type=='text') {
   uncheck[i].disabled = true;
  }
 }

};

function uncheck(){
 var uncheck=document.getElementsByTagName('input');
 for(var i=0;i<uncheck.length;i++) {
  if(uncheck[i].type=='checkbox')  {
   uncheck[i].checked=false;
   uncheck[i].disabled = false;
  }
 }
    
 for(var i=0;i<uncheck.length;i++) {
  if(uncheck[i].type=='radio') {
   uncheck[i].checked=false;
   uncheck[i].disabled = false;
  }
 }
   
for(var i=0;i<uncheck.length;i++) {
  if(uncheck[i].type=='text') {
   uncheck[i].disabled = false;
   uncheck[i].value = "";
  }
 }   
   this.style.backgroundColor = "red";
 
};

function checkTrue(){
    let t = 0;
    for (let i = 0; i < array.length; i++) {
        if ((i == 4 || i == 5 || i == 6) && (array[i] != undefined)){
            let arrayMore = array[i].split('');
            let arrayMoreTrue = trueArray[i].split('');
            let x = 0;
            for (let i = 0; i < arrayMore.length; i++) {
                for (let j = 0; j < arrayMoreTrue.length; j++) {
                    if (arrayMore[i] == arrayMoreTrue[j]){
                        x++;
                        break;
                    }
                }
            }
            if (x == trueArray[i].length) {
                t++;
                document.forms[i].style.background = "green";
            }
            
        }
        else {
            if (array[i] == trueArray[i]){
                t++;
                document.forms[i].style.background = "green";
            }
            else {
            document.forms[i].style.background = "red";
            }
        }

    }
    document.getElementById('place-for-result').innerHTML='Ваш резульат: ' + t + ' правильных ответов';
};
