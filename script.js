// ====== Firebase Setup ======
const firebaseConfig = {
    apiKey: "TU_API_KEY",
    authDomain: "TU_PROYECTO.firebaseapp.com",
    projectId: "TU_PROYECTO",
    appId: "TU_APP_ID"
};
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// ====== Elementos ======
const startBtn = document.getElementById('start-btn');
const welcomeScreen = document.getElementById('welcome-screen');
const loginScreen = document.getElementById('login-screen');
const mainScreen = document.getElementById('main-screen');
const googleLoginBtn = document.getElementById('google-login-btn');
const languageSelect = document.getElementById('language-select');
const pixelAnimation = document.getElementById('pixel-animation');
const pixelArtArea = document.getElementById('pixel-art-area');

// ====== Lenguajes +99 ======
const languages = [
    "Python","JavaScript","C++","Java","Ruby","Go","Rust","Kotlin","Swift","PHP",
    "TypeScript","Dart","Scala","Haskell","C#","Objective-C","Perl","Lua","R","Elixir",
    "Clojure","F#","Erlang","Julia","Visual Basic","MATLAB","Groovy","COBOL","Shell",
    "SQL","HTML","CSS","Assembly","Prolog","OCaml","Pascal","Fortran","Bash","SAS",
    "Ada","LabVIEW","Smalltalk","Scheme","Delphi","Awk","VHDL","Verilog","Crystal",
    "Nim","ReasonML","Elm","Solidity","Hack","D","ActionScript","PowerShell","ABAP",
    "Logo","Forth","Modula-2","Algol","Simula","ML","Racket","Scratch","Tcl","APL",
    "Icon","Q#","Zig","Mercury","Rebol","Eiffel","OCaml","Sed","GDScript","Vala",
    "Ballerina","KornShell","PostScript","XQuery","XSLT","Idris","Pony","Red","Factor",
    "Hackett","Nix","Coq","Agda","PureScript","J","SPARK","BQN","Chapel","NCL",
    "Max/MSP","VBScript","Monkey","LiveCode","Turing","QBasic","Gosu"
];

// ====== Funciones de pantalla ======
function showScreen(screen){
    welcomeScreen.classList.add('hidden');
    loginScreen.classList.add('hidden');
    mainScreen.classList.add('hidden');
    screen.classList.remove('hidden');
}

// ====== Botón empezar ======
startBtn.addEventListener('click', () => {
    showScreen(loginScreen);
});

// ====== Login con Google ======
googleLoginBtn.addEventListener('click', () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider)
        .then(result => {
            showScreen(mainScreen);
            loadLanguages();
        })
        .catch(error => alert("Error de login: "+error.message));
});

// ====== Cargar lenguajes ======
function loadLanguages(){
    languageSelect.innerHTML = '<option value="">-- Elige un lenguaje --</option>';
    languages.forEach(lang => {
        const option = document.createElement('option');
        option.value = lang;
        option.textContent = lang;
        languageSelect.appendChild(option);
    });
}

// ====== Mantener sesión ======
auth.onAuthStateChanged(user => {
    if(user){
        showScreen(mainScreen);
        loadLanguages();
    }
});

// ====== Animación Pixel Art ======
function createPixelBlocks(){
    for(let i=0;i<30;i++){
        const block = document.createElement('div');
        block.classList.add('pixel-block');
        block.style.backgroundColor = `hsl(${Math.random()*360},100%,50%)`;
        block.style.left = Math.random()*180 + 'px';
        block.style.top = Math.random()*180 + 'px';
        block.style.animationDuration = (2+Math.random()*2)+'s';
        pixelAnimation.appendChild(block);
    }
}
createPixelBlocks();

// ====== Pixel art area ejemplo ======
function createPixelTiles(){
    for(let i=0;i<15*15;i++){
        const tile = document.createElement('div');
        tile.classList.add('pixel-tile');
        pixelArtArea.appendChild(tile);
    }
}
createPixelTiles();
