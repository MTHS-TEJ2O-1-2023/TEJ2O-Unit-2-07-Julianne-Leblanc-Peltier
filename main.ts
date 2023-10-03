/* Copyright (c) 2023 MTHS All rights reserved
 *
 * Created by: Julianne Leblanc-Peltier
 * Created on: Sep 2023
 * This program is a cookie clicker game
*/

basic.clearScreen()
basic.showIcon(IconNames.Happy)

let numberOfCookiesClicked: number
numberOfCookiesClicked = 0

input.onButtonPressed(Button.A, function () {
  numberOfCookiesClicked = numberOfCookiesClicked + 1
  basic.showString(numberOfCookiesClicked.toString())

})

input.onButtonPressed(Button.B, function () {
  numberOfCookiesClicked = 0
  basic.showString(numberOfCookiesClicked.toString())

} )
