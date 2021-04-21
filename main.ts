input.onButtonPressed(Button.A, function () {
    music.playTone(415, music.beat(BeatFraction.Whole))
    music.playTone(392, music.beat(BeatFraction.Half))
    music.playTone(370, music.beat(BeatFraction.Half))
    music.playTone(330, music.beat(BeatFraction.Quarter))
    music.playTone(330, music.beat(BeatFraction.Quarter))
    music.playTone(277, music.beat(BeatFraction.Quarter))
    music.playTone(330, music.beat(BeatFraction.Quarter))
    music.playTone(370, music.beat(BeatFraction.Quarter))
    music.playTone(247, music.beat(BeatFraction.Quarter))
    music.playTone(247, music.beat(BeatFraction.Quarter))
    music.playTone(554, music.beat(BeatFraction.Half))
    music.playTone(415, music.beat(BeatFraction.Whole))
    music.playTone(392, music.beat(BeatFraction.Half))
    music.playTone(370, music.beat(BeatFraction.Half))
    music.playTone(330, music.beat(BeatFraction.Quarter))
    music.playTone(330, music.beat(BeatFraction.Quarter))
    music.playTone(294, music.beat(BeatFraction.Quarter))
    music.playTone(349, music.beat(BeatFraction.Quarter))
    music.playTone(392, music.beat(BeatFraction.Quarter))
    music.playTone(233, music.beat(BeatFraction.Quarter))
    music.playTone(233, music.beat(BeatFraction.Quarter))
    music.playTone(587, music.beat(BeatFraction.Half))
    music.playTone(440, music.beat(BeatFraction.Whole))
    music.playTone(415, music.beat(BeatFraction.Half))
    music.playTone(392, music.beat(BeatFraction.Half))
    music.playTone(330, music.beat(BeatFraction.Quarter))
    music.playTone(330, music.beat(BeatFraction.Quarter))
    music.playTone(277, music.beat(BeatFraction.Quarter))
    music.playTone(330, music.beat(BeatFraction.Quarter))
    music.playTone(370, music.beat(BeatFraction.Quarter))
    music.playTone(220, music.beat(BeatFraction.Quarter))
    music.playTone(220, music.beat(BeatFraction.Quarter))
    music.playTone(554, music.beat(BeatFraction.Half))
    music.playTone(415, music.beat(BeatFraction.Whole))
    music.playTone(392, music.beat(BeatFraction.Half))
    music.playTone(370, music.beat(BeatFraction.Half))
    music.playTone(330, music.beat(BeatFraction.Quarter))
    music.playTone(330, music.beat(BeatFraction.Quarter))
    music.playTone(277, music.beat(BeatFraction.Quarter))
    music.playTone(330, music.beat(BeatFraction.Quarter))
    music.playTone(370, music.beat(BeatFraction.Quarter))
    music.playTone(277, music.beat(BeatFraction.Quarter))
    music.playTone(277, music.beat(BeatFraction.Quarter))
})
basic.showIcon(IconNames.Happy)
basic.showIcon(IconNames.Skull)
basic.forever(function () {
    basic.showIcon(IconNames.Ghost)
    basic.showIcon(IconNames.Heart)
    basic.showIcon(IconNames.Skull)
    basic.showLeds(`
        . # # # .
        # . # . #
        # # # # #
        . # . # .
        . # # # .
        `)
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        . # # # .
        . . # . .
        `)
    basic.showLeds(`
        . . . . .
        # . . . .
        # . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . # # . .
        # . . . .
        # . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . # # # .
        # . # . .
        # # # . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . # # # .
        # . # . #
        # # . . #
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . # # # .
        # . # . #
        # . # . #
        . # . . .
        . . . . .
        `)
    basic.showLeds(`
        . # # # .
        # . # . #
        # . # . #
        . # . . .
        . # # . .
        `)
    basic.showLeds(`
        . # # # .
        # . # . #
        # . # . #
        . # . # .
        . # # # .
        `)
    basic.showLeds(`
        . # # # .
        # . # . #
        # . # . #
        . # . # .
        . # # # .
        `)
    basic.showIcon(IconNames.Skull)
})
