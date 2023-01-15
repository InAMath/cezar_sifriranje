input.onButtonPressed(Button.A, function () {
    brojac = (brojac + 1) % 26
    slovo = abeceda[brojac]
    basic.showString("" + (slovo))
})
function sifriraj () {
    sifrat = (brojac + kljuc) % 26
    basic.showString("" + (abeceda[sifrat]))
}
input.onButtonPressed(Button.AB, function () {
    sifriraj()
})
input.onButtonPressed(Button.B, function () {
    kljuc = (kljuc + 1) % 26
    basic.showNumber(kljuc)
})
let sifrat = 0
let brojac = 0
let kljuc = 0
let abeceda: string[] = []
let slovo = ""
slovo = "A"
abeceda = [
"A",
"B",
"C",
"D",
"E",
"F",
"G",
"H",
"I",
"J",
"K",
"L",
"M",
"N",
"O",
"P",
"Q",
"R",
"S",
"T",
"U",
"V",
"W",
"X",
"Y",
"Z"
]
kljuc = 0
brojac = -1
