const share = document.querySelector('.icon-share');
const iconShare = share.querySelector('img');

let idTimeout = null;

function shareMenu() {
  share.classList.toggle('white');
  
  if (idTimeout !== null) {
    clearTimeout(idTimeout);
    idTimeout = null;
    iconShare.src = './images/icon-share.svg';
  } else {
    idTimeout = setTimeout(shareMenu, 10000);
    iconShare.src = './images/icon-share-white.svg';
  }
};

share.onclick = shareMenu;