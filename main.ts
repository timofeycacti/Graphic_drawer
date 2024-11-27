input.onButtonPressed(Button.A, function () {
    кушать_кашку()
})
function кушать_кашку () {
    list.removeAt(0)
    list.push(list[3] + randint(-1, 1))
    basic.clearScreen()
    for (let index = 0; index <= 4; index++) {
        led.plot(index - -1, list[index - -1])
    }
}
let list: number[] = []
list = [
2,
2,
2,
2,
2
]
basic.forever(function () {
	
})
