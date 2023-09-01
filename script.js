let btn=document.getElementById("short");
btn.addEventListener("click",short);
btn.addEventListener("click",displayShow);
let newURL = document.getElementById("shorturl");
let coptButton = document.getElementById("copy");



// function defination

                                                                        // timeclock
setInterval(t2(),1000);
function t2(){
    document.querySelector(".t").textContent=(new Date().toLocaleTimeString());
};
                                                                        // urlshortning
async function short(){
    let longURL = document.getElementById("longurl").value;
    let shortURL = document.getElementById("shorturl");

    const result = await fetch(`https://api.shrtco.de/v2/shorten?url=${longURL}`);
    const data = await result.json();

    shortURL.value = data.result.short_link2;
    

};
function displayShow() {
    document.getElementById("short-url").style.visibility = "visible";
 };
                                                                            // copying url
coptButton.onclick = ()=>{
    newURL.select();

    window.navigator.clipboard.writeText(newURL.value);
};




// fuctioncalling
setInterval(t2,1000);
