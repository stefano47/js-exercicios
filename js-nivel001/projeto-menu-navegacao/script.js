// minha solução
// let divMenu = document.getElementById('menu-opener')
// let divArea = document.getElementById('menu-area')

// divMenu.onclick = function(){
//     if(divArea.style.width === `200px`) {
//         divArea.style.width = `0px`
//     } else {
//         divArea.style.width = `200px`
//     }
// }

// outra solução
function menuToggle() {
    let menuArea = document.getElementById('menu-area')

    if(menuArea.classList.contains('menu-opened') === true) {
        menuArea.classList.remove('menu-opened')
    } else {
        menuArea.classList.add('menu-opened')
    }
}