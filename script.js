const removeAd = () => {

    const pathName = window.location.pathname;
    if (pathName.startsWith('/arquivo')) {
        const banner = document.getElementsByClassName('limitation-blocked')[0];
        if (banner) banner.parentNode.removeChild(banner);
    }
}

const removeFakepage2 = () => {

    const pathName = window.location.pathname;
    if (pathName.startsWith('/arquivo')) {
        const fakepage2 = document.getElementsByClassName('short-preview-version')[0];
        if (fakepage2) fakepage2.parentNode.removeChild(fakepage2);
    }
}

const removeFakepage = () => {

    const pathName = window.location.pathname;
    if (pathName.startsWith('/arquivo')) {
        const fakepage = document.getElementsByClassName('mv-content-limitation-fake-page')[0];
        if (fakepage) fakepage.classList.remove('mv-content-limitation-fake-page','short-preview-version');
    }
}
const removeAd2 = () => {

    const pathName = window.location.pathname;
    if (pathName.startsWith('/arquivo')) {
        const ad2 = document.getElementsByClassName('hidden-content')[0];
        if (ad2) ad2.classList.remove('hidden-content');
    }
}

const removeAd3 = () => {
    const drip = document.createElement('style');
    drip.textContent = ('.page-content {filter: blur(0px)!important}');
    document.head.appendChild(drip);
}

function removeTudo() {
    removeAd();
    removeFakepage();
    removeAd2();
    removeAd3();
    removeFakepage2();
}

function onloadfunction() {
    console.log("Script executado com sucesso");
    removeTudo();
}

document.addEventListener("DOMContentLoaded", setTimeout(() => { onloadfunction() }, 8000));