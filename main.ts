input.onButtonPressed(Button.A, function () {
    SelectActive = 1
    if (ActiveLED <= 8) {
        ActiveLED += 1
    } else {
        ActiveLED = 1
    }
})
function BlinkLED (num: number, num2: number) {
    if (TeamTemp == 1) {
        led.plot(LEDX[num], LEDY[num])
        basic.pause(200)
        led.unplot(LEDX[num], LEDY[num])
        basic.pause(200)
    } else if (TeamTemp == 2) {
        led.plotBrightness(LEDX[num], LEDY[num], 155)
        basic.pause(200)
        led.unplot(LEDX[num], LEDY[num])
        basic.pause(200)
    }
}
input.onGesture(Gesture.ScreenDown, function () {
    Reset()
})
input.onButtonPressed(Button.B, function () {
    LEDTeam[ActiveLED - 1] = TeamTemp
    if (TeamTemp == 1) {
        TeamTemp = 2
    } else {
        TeamTemp = 1
    }
    if (ActiveLED <= 8) {
        ActiveLED += 1
    } else {
        ActiveLED = 1
    }
})
function BoardState () {
    for (let index = 0; index <= 8; index++) {
        if (LEDTeam[index] == 2) {
            led.plotBrightness(LEDX[index], LEDY[index], 155)
        } else if (LEDTeam[index] == 1) {
            led.plot(LEDX[index], LEDY[index])
        } else {
        	
        }
    }
}
function Reset () {
    LEDTeam = []
    LEDX = []
    LEDY = []
    for (let index = 0; index <= 8; index++) {
        LEDTeam.push(0)
    }
    for (let indexY = 0; indexY <= 2; indexY++) {
        for (let indexX = 0; indexX <= 2; indexX++) {
            LEDX.push(indexX * 2)
            LEDY.push(indexY * 2)
        }
    }
    TeamTemp = 1
    SelectActive = 0
    ActiveLED = 0
    basic.clearScreen()
}
let LEDTeam: number[] = []
let LEDY: number[] = []
let LEDX: number[] = []
let TeamTemp = 0
let ActiveLED = 0
let SelectActive = 0
Reset()
for (let index = 0; index < 4; index++) {
    basic.showLeds(`
        # . # . #
        . . . . .
        # . # . #
        . . . . .
        # . # . #
        `)
    basic.pause(100)
    basic.clearScreen()
    basic.pause(200)
}
basic.forever(function () {
    while (SelectActive) {
        BlinkLED(ActiveLED - 1, 0)
    }
})
basic.forever(function () {
    BoardState()
})
