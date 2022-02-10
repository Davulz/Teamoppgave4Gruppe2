//Model

var input = '';
var output = '';
var scrambledAlphabet = ['y','?','a','h','.','6','j','z','u','5','f',' ','æ','x','d','i','e','b','ø','2','s',',','o','l','å','7','!','k','w','m','g','r','v','t','c','q','n','p','3','1','4','8','9','0','´','`','(',')',':']
var alphabet =          ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','æ','ø','å',' ','!','.','?',',','1','2','3','4','5','6','7','8','9','0','(',')','`','´',':']
const morseCodeArray =  [ '.-', '-...', '-.-.', '-..', '.', '..-.', '--.', '....','..', '.---', '-.-', '.-..', '--', '-.', '---', '.--.','--.-', '.-.', '...', '-', '..-', '...-', '.--', '-..-','-.--', '--..', '·−·−', '−−−·', '·−−·−', ' '];
let skjul = 'none';
let skjul2 = 'none'
let vidd = '';
let vidd2 = '';
//View

showApp();
function showApp() {
    document.getElementById('app').innerHTML = /*html*/ `
    <h1>Never gonna morse you up</h1>
    <div class="wrapper">
        <input id="fokuser" oninput="input = this.value" type="text" class="input"/>
        <button class="button" onclick="scramble()">Scramble</button>
        <button class="button2" onclick="unscramble()">Unscramble</button>
        <button class="button3" onclick="morse()">Morsify</button>
        <button class="button4" onclick="reset()">Clear Fields</button>
        <div  id="rickRoll" class="output">${output}</div>
        <div style="display:${skjul};">
        ${vidd}
        </div>
        <div style="display:${skjul2};">
        ${vidd2}
        </div>
    </div>
    `;
    document.getElementById("fokuser").focus(); // Denne er bare for å sette peker i 
}
// Vi valgte å ikke bruke enter-funksjon(onchange) til fordel for fler knapper og fler funksjoner.

//Controller
function scramble() {
    output = '';
    skjul = 'none'
    vidd = ''
    skjul2 = 'none'
    vidd2 = ''
    inputFix = input.toLowerCase();
    for(let i = 0; i < inputFix.length; i++){
        let alphaIndex = alphabet.indexOf(inputFix[i]);
        output += scrambledAlphabet[alphaIndex]
        console.log(scrambledAlphabet[alphaIndex]);
    }
    console.log(output)
    showApp();
}
function unscramble() {
    output = '';
    skjul = 'none'
    vidd = ''
    skjul2 = 'none'
    vidd2 = ''
    inputFix = input.toLowerCase();
    for(let i = 0; i < inputFix.length; i++){
        let alphaIndex = scrambledAlphabet.indexOf(inputFix[i]);
        output += alphabet[alphaIndex]
        
        console.log(alphabet[alphaIndex]);
    }
    console.log(output)
    rickRoll();
    
    showApp();
}
function morse() {
    output = '';
    skjul = 'none'
    vidd = ''
    skjul2 = 'none'
    vidd2 = ''
    inputFix = input.toLowerCase();
    for(let i = 0; i < inputFix.length; i++){
        let alphaIndex = alphabet.indexOf(inputFix[i]);
        output += morseCodeArray[alphaIndex]
        console.log(morseCodeArray[alphaIndex]);
    }
    console.log(output)
    morseRoll();
    showApp();
}

function reset() {
    input = '';
    output = '';
    skjul = 'none'
    vidd = ''
    skjul2 = 'none'
    vidd2 = ''

    showApp();
}
function rickRoll(){
    if (output == 'never gonna give you up' || output == 'never gonna let you down' || output == 'never gonna run around and desert you' || output == 'never gonna make you cry' || output == 'never gonna say goodbye' || output == 'never gonna tell a lie and hurt you' ){
        skjul = "box";
        vidd = '<video class="video" width="720" height="500" controls autoplay><source src="RickRolld.mp4" type="video/mp4"></video>';
        showApp();
    }
}
function morseRoll(){
    if (output == '-.....-..-. --.----.-..- --......-. -.-----..- ..-.--.' || output == '-.....-..-. --.----.-..- .-...- -.-----..- -..---.---.' || output == '-.....-..-. --.----.-..- .-...--. .-.-.---..--.-.. .--.-.. -........-.- -.-----..-' || output == '-.....-..-. --.----.-..- --.--.-. -.-----..- -.-..-.-.--' || output == '-.....-..-. --.----.-..- ....--.-- --.-------..-...-.--.' || output == '-.....-..-. --.----.-..- -..-...-.. .- .-..... .--.-.. ......-.-.- -.-----..-'){
        skjul2 = "box";
        vidd2 = '<video class="video" width="720" height="500" controls autoplay><source src="MorseRoll.mp4" type="video/mp4"></video>';
        showApp();
    }
}
// x.,.bmjdxxymju,.mådsmsi => unscramble