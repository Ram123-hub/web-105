searchform = document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
}
let loginFrom = document.querySelector('.login-form-container');
document.querySelector('#login-btn').onclick = () => {
    loginFrom.classList.toggle('active');
}
document.querySelector('#close-loin-btn').onclick = () => {
    loginFrom.classList.remove('active')
}