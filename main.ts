let distance = 0
basic.forever(function () {
    distance = sonar.ping(
    DigitalPin.P0,
    DigitalPin.P0,
    PingUnit.MicroSeconds
    )
    basic.showString("" + Math.round(distance / 34 * 100) / 100 + "cm")
    basic.pause(1000)
})
