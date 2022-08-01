class Controller {  

    static setup () { 
  
      var electorate;
      electorate = new Election('New Zealand Election', 2020) 
  
      return electorate 
  
    } 
  
  }
  
  // var electorate 

  // function go () { 
  
  //   electorate = Controller.setup() 
  
  //   document.body.style.fontFamily = 'Arial Black' 
  
  //   document.getElementById('divTitle').innerHTML =  
  
  //     '<h1>' + electorate +'</h1>'  
  
  
  //   console.log(electorate) 
  
  // } 
  
  // window.onload = go 