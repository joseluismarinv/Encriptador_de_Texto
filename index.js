//! Variables
let encrypt_decrypt = false;

const sectionImg = document.querySelector('#toogleText');
const sectionText = document.querySelector('#text-encrypt-decrypt');
const error = document.querySelector('.notification-msg');
sectionText.style.display = 'none';

const botonEncrypt = document.querySelector('#encrypt');
const botonDecrypt = document.querySelector('#decrypt');
const botonCopy = document.querySelector('#copy');

const key = {
    a: 'ai',
    e:'enter',
    i:'imes',
    o:'ober',
    u:'ufat',
}


//? Encriptación

const encrypt = (text) => {
    return text.replace(/[aeiou]/g, (letters)=>{
        return key[letters]
    })
}

//* Desencriptación

const decrypt = (text) => {
    return text.replace(/ai/g, 'a').replace(/enter/g,'e').replace(/imes/g,'i').replace(/ober/g,'o').replace(/ufat/g,'u')
}

//! Texto de encriptación/desencriptación

const showText = () => {
    const input = document.querySelector('#text-input');
    let text = input.value;

    if(!text.trim()){
        sectionImg.style.display = 'hidden';
        sectionText.style.display = 'none';
        error.className = 'highlight-notification';
    } else{
        text = text.trim();
        text = text.toLowerCase();
        text = text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
          
        
        sectionImg.style.display = 'none';
        sectionText.style.display = 'block';
    
        const textShow = document.querySelector('#textShow');
        if(encrypt_decrypt){
            textShow.innerHTML = encrypt(text);
        } else {
            textShow.innerHTML = decrypt(text);
        }
    }
}

const textEncrypt = () => {
    encrypt_decrypt = true;
    showText();
}

const textDecrypt = () => {
    encrypt_decrypt = false;
    showText();
}

//* Copiar texto

const copyText = () => {
    let texto = document.getElementById("textShow").value;

    if (texto.trim() === "") {
    return;
    }

    navigator.clipboard.writeText(texto)
    .then(() => {
      console.log("Texto copiado al portapapeles");
    })
    .catch((error) => {
      console.error("Error al copiar el texto: ", error);
    });
}





//? Eventos
botonEncrypt.addEventListener('click', textEncrypt);
botonDecrypt.addEventListener('click', textDecrypt);
botonCopy.addEventListener('click', copyText);

