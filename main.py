def on_button_pressed_a():
    global degrees
    degrees += -5
    if degrees < 0:
        degrees = 0
    motor.servo(motor.Servos.S1, degrees)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    global degrees
    degrees += 5
    if degrees > 180:
        degrees = 180
    motor.servo(motor.Servos.S1, degrees)
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_logo_pressed():
    global degrees
    degrees = 90
    motor.servo(motor.Servos.S1, 90)
input.on_logo_event(TouchButtonEvent.PRESSED, on_logo_pressed)

degrees = 0
degrees = 90

def on_forever():
    pass
basic.forever(on_forever)
