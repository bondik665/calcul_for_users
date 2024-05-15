


document.getElementById('btnProduct').onclick = function(){
  calcCost();
  
};

function calcCost(){
  //вписка пременных
  //выбор из  блока 1 аукцион copart
  var SA = +document.getElementById('selectAukcion').value;

  //выбор из  блока 2 аукцион IAAI
  var SA2 = +document.getElementById('selectAukcion2').value;

   //выбор из  блока 3 
   var SA3 = +document.getElementById('selectAukcion3').value;

  //блок с вводом цены авто
  var PA = +document.getElementById('priceAuto').value;
  


  //наши услуги 400$
  var services = 800;//

  //оформление документов $
  var doci = 800;

  //аукционный сбор
  var auSbor;
 


  
  



  //для 3 -х лет
  var checkbox1 = document.getElementById('checkbox1')
  if(checkbox1.checked){
     
  
  var dvigatel = +document.getElementById('dvigatel').value;

    //утиль сбор
  var util_sbor = +document.getElementById('checkbox1').value;

    console.log(util_sbor,'ch1');

  var tamPosh1 
  var tamPosh2
  var tamozh
     
  if( PA < 8500 ){
    tamPosh1 = PA * 0.54;
    tamPosh2 = dvigatel * 2.5;
    if(tamPosh1 >= tamPosh2){
      
      tamozh = tamPosh1 * 1.1
      
    }
    else{
      tamozh = tamPosh2 * 1.1
    }
    
  }
  
  else if( PA >= 8500 && PA < 16700){
    tamPosh1 = PA * 0.48;
    tamPosh2 = dvigatel * 3.5;
    console.log(1);
    if(tamPosh1 >= tamPosh2){
      tamozh = tamPosh1 * 1.1
    }
    else{
      tamozh = tamPosh2 * 1.1
    }
    
  }
  else if( PA >= 16700 && PA < 42300){
    tamPosh1 = PA * 0.48;
    tamPosh2 = dvigatel * 5.5;
    console.log(2);
    if(tamPosh1 >= tamPosh2){
      tamozh = tamPosh1 * 1.1
    }
    else{
      tamozh = tamPosh2 * 1.1
    }
    
  }
  else if( PA >= 42300 && PA < 84500){
    tamPosh1 = PA * 0.48;
    tamPosh2 = dvigatel * 7.5;
    console.log(3);
    if(tamPosh1 >= tamPosh2){
      tamozh = tamPosh1 * 1.1
    }
    else{
      tamozh = tamPosh2 * 1.1
    }
    
  }
  
  else if( PA >= 84500 && PA < 169000){
    tamPosh1 = PA * 0.48;
    tamPosh2 = dvigatel * 15;
    console.log(4);
    if(tamPosh1 >= tamPosh2){
      tamozh = tamPosh1 * 1.1
    }
    else{
      tamozh = tamPosh2 * 1.1
    }
    
  }
  
  else if( PA >= 169000){
    tamPosh1 = PA * 0.48;
    tamPosh2 = dvigatel * 20;
    console.log(5);
    if(tamPosh1 >= tamPosh2){
      tamozh = tamPosh1 * 1.1
    }
    else{
      tamozh = tamPosh2 * 1.1
    }
    
  }
  }
//для 3-5 лет
var checkbox2 = document.getElementById('checkbox2')

  if(checkbox2.checked){
  var dvigatel = +document.getElementById('dvigatel').value;
  var util_sbor = +document.getElementById('checkbox2').value;
  
 
  var tamozh  
   
      if( dvigatel < 1000 ){
      
          tamozh  = dvigatel * 1.5 * 1.1;
          console.log(1.5)
      }
  
      else if( dvigatel >= 1000 && dvigatel < 1499){
      
          tamozh  = dvigatel * 1.7 * 1.1;
          console.log(1.7)
      }
      else if( dvigatel >= 1500 && dvigatel < 1799){
      
          tamozh  = dvigatel * 2.5 * 1.1;
          console.log(2.5)
      }
      else if( dvigatel >= 1800 && dvigatel < 2299){
      
          tamozh  = dvigatel * 2.7 * 1.1;
          console.log(2.7)
      }
  
      else if( dvigatel >= 2300 && dvigatel < 3001){
      
          tamozh  = dvigatel * 3 * 1.1;
          console.log(3)
      }
  
      else if( dvigatel >= 3000){
      
          tamozh  = dvigatel * 3.6 * 1.1;
          console.log(3.6)
      }
  }

//для более 7 лет
var checkbox3 = document.getElementById('checkbox3')
if(checkbox3.checked){
  var dvigatel = +document.getElementById('dvigatel').value;
  var util_sbor = +document.getElementById('checkbox3').value;
  var tamozh
  

  if( dvigatel < 1000 ){
    
      tamozh  = dvigatel * 3 * 1.1;
      console.log(3)
      
    
  }
  
  else if( dvigatel >= 1000 && dvigatel < 1499){
    
      tamozh  = dvigatel * 3.2 * 1.1;
      console.log(3.2)
      
   
    
  }
  else if( dvigatel >= 1500 && dvigatel < 1799){
    
      tamozh  = dvigatel * 3.5 * 1.1;
      console.log(3.5)
      
   
    
  }
  else if( dvigatel >= 1800 && dvigatel < 2299){
    
      tamozh  = dvigatel * 4.8 * 1.1;
      console.log(4.8)
      
   
    
  }
  
  else if( dvigatel >= 2300 && dvigatel < 3001){
    
      tamozh  = dvigatel * 5 * 1.1;
      console.log(5)
      
   
    
  }
  
  else if( dvigatel >= 3000){
    
      tamozh  = dvigatel * 5.7 * 1.1;
      console.log(6)
      
   
    
  }
}


//sbor AU
if(PA < 14999){

auSbor = PA * 8 / 100
}
if(PA >= 14999  && PA < 29999){

auSbor = PA * 8 / 100 + 100
}
if(PA >= 29999  && PA < 39999){

auSbor = PA * 8 / 100 + 200
}
if(PA >= 39999){

auSbor = PA * 8 / 100 + 300
}

//утиль сбор 





//таможня для электро

var checkbox4 = document.getElementById('checkbox4')
if(checkbox4.checked){
  var tamozh
  tamozh = 0;
}

//для гибрида 
var checkbox5 = document.getElementById('checkbox5')
if(checkbox5.checked){
  var tamozh
  tamozh = 175;
}

//льготная пастоможка
var checkbox6 = document.getElementById('checkbox6')
if(checkbox6.checked){
  var tamozh = tamozh/2
   
}

//доставка литва минск
var checkbox7 = document.getElementById('checkbox7')
if(checkbox7.checked){
  var dostavkaLM = 2500
   dostavka = dostavkaLM
}

else{
 var dostavkaLM = 1;
 dostavka = dostavkaLM
}


//за перевод 
var perevod = (PA + auSbor + dostavka + SA) * 4/100 + 100;
  


  
  
  //вывод суммы
  
  var total = doci + PA + services + tamozh + util_sbor + auSbor + dostavka + perevod;
  var dostavka = SA + SA2 + SA3 + dostavkaLM;
  
   console.log(typeof(total))
   console.log(total,'total')
   console.log(typeof(perevod),'perevod')
   console.log(typeof(SA),'sa')
   console.log(typeof(SA2),'sa2')
   console.log(typeof(SA3),'sa3')
   console.log(typeof(dostavkaLM),'dlm')
   console.log(typeof(doci),'doci')
   console.log(typeof(PA),'price')
   console.log(typeof(services),'serv')
   console.log(typeof(tamozh),'tamozh')
   console.log(typeof(util_sbor),'ut sbor')
   console.log(typeof(auSbor),'au sbor')
   console.log(typeof(dostavka),'dostavka')
  



  //вывод блока.

  document.getElementById('dostavka').innerHTML = dostavka ;
  document.getElementById('auSbor').innerHTML = auSbor;
  document.getElementById('tamozh').innerHTML = tamozh.toFixed(2);
  document.getElementById('util_sbor').innerHTML = util_sbor;
  document.getElementById('services').innerHTML = services;

  document.getElementById('priceProduct').innerHTML = total;
  document.getElementById('infoProduct').style.display = 'block';


   //проверка на пустое знчаение

  if (PA == 0){
      document.getElementById('infoProduct').style.display = 'none';
      alert('Заполните поле цена');
      return;
  }
 
  
};


