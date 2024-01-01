let imgs = document.querySelectorAll('.bus>img')
let bus = document.querySelector('.bus')
let right = document.getElementById('right')
let left = document.getElementById('left')
let ul = document.getElementById('list')
let turn = 0
bus.style.width = ((imgs.length) * 600) + 'px'

imgs.forEach((val) => {
    let _li = document.createElement('li')
    ul.appendChild(_li)
})
const li = document.querySelectorAll('ul>li')
li.forEach((val, i) => {
    val.addEventListener('click', () => {
        li.forEach((item) => {
            item.style.background = 'transparent'
        })
        val.style.background = 'black'
        turn = i
        bus.style.left = -(turn * 600) + 'px'

        if (turn == (imgs.length) - 1) {
            right.style.right = '-110px'
        } else {
            right.style.right = 0
        }
        if (turn != 0) {
            left.style.left = 0
        }
        if (turn == 0) {
            left.style.left = '-110px'
        }
    })
})


right.addEventListener('click', () => {
    turn++
    bus.style.left = -(turn * 600) + 'px'
    if (turn == (imgs.length) - 1) {
        right.style.right = '-110px'
    } else {
        right.style.right = 0
    }
    if (turn != 0) {
        left.style.left = 0
    }

})
left.addEventListener('click', () => {
    if (turn >= 1) {
        turn--
        bus.style.left = -(turn * 600) + 'px'
        console.log(turn);
    }
    if (turn == 0) {
        left.style.left = '-110px'
    }

})
