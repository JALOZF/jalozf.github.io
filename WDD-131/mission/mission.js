const themeSelector = document.querySelector('#mode-select');
let themeState = themeSelector.value;
function changeTheme(event) {
    if (event.target.value === 'dark') {
        document.body.classList.add('dark');
    } else {
        document.body.classList.remove('dark');
    }
}
themeSelector.addEventListener('change', changeTheme);