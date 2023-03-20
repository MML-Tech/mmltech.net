(function () {
    // Because MML.
    function woahwoah() {
        console.log('|\ /| |\ /| |  ');
        console.log('|   | |   | |  ');
        console.log('|   | |   | |__');
    }
    const defChars = "0123456789ABCDEF";
    function randomString(strLen, chars) {
        let result = ' ';
        for (let i = 0; i < strLen; i++) {
            result += chars.charAt(Math.floor(Math.random() * strLen));
        }
        return result;
    }
    const date = new Date();
    const nYear = date + 1;
    const pYear = date - 1;
    function mmlData(instruction, dataset) {
        let result = ``;
        if (instruction === "write") {
            let writeCache = dataset;
            document.cookie = "mmltempdata_" + randomString(6, defChars) + "=" + writeCache + `;expires=Mon, Jan 1, ${nYear} 00:00:01 UTC;path=mmltech.net/dataset_${randomString(16, defChars)}`;
        }else if (instruction === "read") {
            let readCache = document.cookie;
            if (readCache.includes(dataset)) {
                result = readCache;
            }
        }
        return result;
    }
});

window.onscroll = function() {adjustScroll();}
const navigation = document.getElementById('navigation');
const logo = document.getElementById('jsLogo');

function adjustScroll() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        logo.style.display = "none";
        navigation.style.marginLeft = "none";
        navigation.style.marginTop = "none";
        navigation.style.width = "100%";
        navigation.style.background = "linearGradient(45deg, #151515, #303030)";
    }else{
        logo.style.display = "block";
    }
}