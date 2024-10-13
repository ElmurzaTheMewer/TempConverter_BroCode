// Temp Conversion Program by Elmurza feat. Bro Code

const temp = document.getElementById("temp");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelcius = document.getElementById("toCelcius");
const gif = document.getElementById("🎁");
const result = document.getElementById("result");
const success = "https://media1.giphy.com/media/eKNrUbDJuFuaQ1A37p/giphy.gif?cid=6c09b952698unrhexd982zwfnrbffb2jsnir67l1lwa73q0x&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=g";
let val;
function convert(){
    if (toFahrenheit.checked){
        val = Number(temp.value);
        val = val * 9 / 5 + 32;
        gif.src = success;
        result.textContent = `${val.toFixed(1)} ℉`;
    }
    else if (toCelcius.checked){
        val = Number(temp.value);
        val = (val - 32) * 5 / 9;
        gif.src = success;
        result.textContent = `${val.toFixed(1)} ℃`;
    }
}