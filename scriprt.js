var division = document.createElement('div')
division.innerHTML=`<input type ="text" id="txt">
<button type="button" onClick="brewery()">Search</button>`
document.body.append(division);

async function brewery(){
    let brewery = document.getElementById('txt').value;
    console.log(brewery);

     let result = await fetch("https://api.openbrewerydb.org/v1/breweries")

     let res = await result.json();
     
     console.log(res);

     document.getElementById("brewery").innerText="brewery overall cases: res"

}