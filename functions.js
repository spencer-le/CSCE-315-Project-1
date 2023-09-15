function toggle() {
    const stylesheet = document.getElementById('style');
    if (stylesheet.href.includes('style1.css')) {
        stylesheet.href = 'style2.css'; 
        localStorage.setItem('stylesheet', 'style2.css'); 
    } else {
        stylesheet.href = 'style1.css'; 
        localStorage.setItem('stylesheet', 'style1.css'); 
    }
}   

window.onload = function(){
    const savedStylesheet = localStorage.getItem('stylesheet');
    if (savedStylesheet) {
        const stylesheet = document.getElementById('style');
        stylesheet.href = savedStylesheet;
    } else {
        stylesheet.href = 'style1.css';
        localStorage.setItem('stylesheet', 'style1.css');
    } 
}