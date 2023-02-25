let A = 0
let proizvod = 0
let B = 0
input.onButtonPressed(Button.A, function () {
    A = randint(0, 10)
    basic.showNumber(A)
})
input.onButtonPressed(Button.AB, function () {
    proizvod = A * B
    basic.showNumber(proizvod)
})
input.onButtonPressed(Button.B, function () {
    B = randint(0, 10)
    basic.showNumber(B)
})
