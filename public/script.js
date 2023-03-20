import { initializeApp } from 'firebase/app';
import countapi from 'https://api.countapi.xyz/hit/mmltech.net/visits?callback=liveViews';

const firebaseConfig = {
  apiKey: "AIzaSyBbdj_0ERne5aOqVcBxjJMu9YpnKsfwlJE",
  authDomain: "mml-website-4379.firebaseapp.com",
  databaseURL: "https://mml-website-4379-default-rtdb.firebaseio.com",
  projectId: "mml-website-4379",
  storageBucket: "mml-website-4379.appspot.com",
  messagingSenderId: "990592603658",
  appId: "1:990592603658:web:43275948c2cbdf9374b1f3"
};

const app = initializeApp(firebaseConfig);

window.onscroll = function() {adjustScroll();}
window.onload = function() {
    countapi.visits().then((result) => {
        viewCount.innerHTML = result.value;
    }).catch((error) => {
        viewCount.innerHTML = "[ERR_GETTING_VALUE]";
    });
}

const viewCount = document.getElementById('mmltechViews');
const navigation = document.getElementById('navigation');

function adjustScroll() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        navigation.style.padding = "10px 10px";
    }else{
        navigation.style.padding = "20px 10px";
    }
}
