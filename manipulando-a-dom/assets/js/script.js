const DARK_MODE = 'dark-mode';
const BTN = document.getElementById('mode-selector');
const TITULO = document.getElementById('page-title');
const PAGINA = document.getElementsByTagName('body')[0];
const FINAL_PAGINA = document.getElementsByTagName('footer')[0];


let mudarClasse = () => {
    PAGINA.classList.toggle(DARK_MODE);
    BTN.classList.toggle(DARK_MODE);
    TITULO.classList.toggle(DARK_MODE);
    FINAL_PAGINA.classList.toggle(DARK_MODE);

};
let mudarTextos = () => {
    const LIGHT = "Light Mode";
    const DARK = "Dark Mode";
    if(PAGINA.classList.contains(DARK_MODE)){
        BTN.innerHTML = LIGHT;
        TITULO.innerHTML =`| ${DARK}  ON |`;
        return;
    }
    BTN.innerHTML = DARK;
    TITULO.innerHTML =  `| ${LIGHT}  ON |`;
}
let mudarModoTela = () => {

    mudarClasse();
    mudarTextos();

};


BTN.addEventListener('click', mudarModoTela);