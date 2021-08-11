const url = "https://script.google.com/macros/s/AKfycbzZe824lIxa-hNsO71xoFfq5qXbFaDKhHZeACrQgLMCjU_EjvY/exec";

var loginText = document.getElementById("tLogin");
var tableText = document.getElementById("tTable");
var orderText = document.getElementById("tOrder");
//var kommText = document.getElementById("tKomm");

function testGS(){
    var userInfo = {
            login: loginText.value,
            table: tableText.value,
            order: orderText.value,
            tdate: new Date().toLocaleDateString(),
            //komm: kommText.value,
    };

    // fetch(url, {
    //     method: 'POST',
    //     //mode: 'no-cors', // no-cors, *cors, same-origin
    //     cache: 'no-cache',
    //     headers: {
    //         'Content-Type':'application/json'
    //     },
    //     redirect: 'follow',
    //     body: JSON.stringify(userInfo)
    //   })
    //   .then((res) => res.text())
    //   .then((res) => console.log(res));
    fetch(url, {
        method: 'POST',
        headers: {"Content-Type": 'text/plain;charset=utf-8'},
        body: JSON.stringify(userInfo)
      })
      .then((res) => res.text())
      .then((res) => console.log(res));
      console.log(userInfo);
}           

document.getElementById("del").addEventListener("click", testGS);

/*inputElement.addEventListener('keypress', function(event) {
    if (event.which === 13) {
         var i = parseInt(this.id.charAt(this.id.length-1));
         console.log(i);
         if(i<=numberOfPlayers){
            document.getElementById('name-input-' + (i + 1)).focus();
         }
    }
});*/
