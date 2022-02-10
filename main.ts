input.onButtonPressed(Button.A, function () {
    degrees += -5
    if (degrees < 0) {
        degrees = 0
    }
    motor.servo(motor.Servos.S1, degrees)
})
input.onButtonPressed(Button.B, function () {
    degrees += 5
    if (degrees > 180) {
        degrees = 180
    }
    motor.servo(motor.Servos.S1, degrees)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    degrees = 90
    motor.servo(motor.Servos.S1, 90)
})
let degrees = 0
degrees = 90
/**
 * X Axis:
 * 
 * Deadzone: 450 to 550
 * 
 * Left: Less Than 450
 * 
 * Right: More Than 550
 */
basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P1) < 450) {
        degrees += -5
        if (degrees < 0) {
            degrees = 0
        }
        motor.servo(motor.Servos.S1, degrees)
    }
    if (pins.analogReadPin(AnalogPin.P1) > 550) {
        degrees += 5
        if (degrees > 180) {
            degrees = 180
        }
        motor.servo(motor.Servos.S1, degrees)
    }
})
