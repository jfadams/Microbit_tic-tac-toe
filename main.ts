function FastBlink (num: number, num2: number) {
    led.plot(num, num2)
    basic.pause(100)
    led.unplot(num, num2)
    basic.pause(25)
}
input.onButtonPressed(Button.A, function () {
    SelectActive = 1
    if (ActiveLED <= 8) {
        ActiveLED += 1
    } else {
        ActiveLED = 1
    }
})
function BlinkLED (num: number, num2: number) {
    led.plot(num, num2)
    basic.pause(300)
    led.unplot(num, num2)
    basic.pause(300)
}
input.onButtonPressed(Button.B, function () {
    LEDTeam[ActiveLED - 1] = TeamTemp
    if (TeamTemp == 1) {
        TeamTemp = 2
    } else {
        TeamTemp = 1
    }
})
function BoardState () {
    for (let index = 0; index <= 8; index++) {
        if (LEDTeam[index] == 2) {
            FastBlink(LEDX[index], LEDY[index])
        } else if (LEDTeam[index] == 1) {
            led.plot(LEDX[index], LEDY[index])
        } else {
        	
        }
    }
}
let ActiveLED = 0
let SelectActive = 0
let TeamTemp = 0
let LEDY: number[] = []
let LEDX: number[] = []
let LEDTeam: number[] = []
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
        while (ActiveLED == 1) {
            BlinkLED(0, 0)
        }
        while (ActiveLED == 2) {
            BlinkLED(2, 0)
        }
        while (ActiveLED == 3) {
            BlinkLED(4, 0)
        }
        while (ActiveLED == 4) {
            BlinkLED(0, 2)
        }
        while (ActiveLED == 5) {
            BlinkLED(2, 2)
        }
        while (ActiveLED == 6) {
            BlinkLED(4, 2)
        }
        while (ActiveLED == 7) {
            BlinkLED(0, 4)
        }
        while (ActiveLED == 8) {
            BlinkLED(2, 4)
        }
        while (ActiveLED == 9) {
            BlinkLED(4, 4)
        }
    }
})
basic.forever(function () {
    BoardState()
})
