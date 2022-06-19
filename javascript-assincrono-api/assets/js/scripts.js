const BASE_URL = 'https://api.thecatapi.com/v1/images/search';
const BTN = document.getElementById('changeCat');
const CAT_IMG = document.getElementById('cat');


let getCats = async () => {
    try {
        let data = await fetch(BASE_URL);
        const json = await data.json();
        console.log(json)
        return json[0].url;
    } catch (e) {
        console.log(e.message);
    }
};


let loadImg = async () => {
    CAT_IMG.src = await getCats();
};

loadImg();