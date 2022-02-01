let frontEnd = document.getElementById('front-end')
let fullStack = document.getElementById('full-stack')
let android = document.getElementById('android')
let ios = document.getElementById('ios')
let highlights = document.getElementById('highlights')
let animations = document.getElementById('animations')
frontEnd.style.display = "block"
fullStack.style.display = "none"
android.style.display = "none"
ios.style.display = "none"
highlights.style.display = "none"
animations.style.display = "none"

function onFrontEndClicked() {
    frontEnd.style.display = "block"
    fullStack.style.display = "none"
    android.style.display = "none"
    ios.style.display = "none"
    highlights.style.display = "none"
    animations.style.display = "none"
}

function onFullStackClicked() {
    frontEnd.style.display = "none"
    fullStack.style.display = "block"
    android.style.display = "none"
    ios.style.display = "none"
    highlights.style.display = "none"
    animations.style.display = "none"
}

function onAndroidClicked() {
    frontEnd.style.display = "none"
    fullStack.style.display = "none"
    android.style.display = "block"
    ios.style.display = "none"
    highlights.style.display = "none"
    animations.style.display = "none"
}

function oniOSClicked() {
    frontEnd.style.display = "none"
    fullStack.style.display = "none"
    android.style.display = "none"
    ios.style.display = "block"
    highlights.style.display = "none"
    animations.style.display = "none"
}

function onHighlightsClicked() {
    frontEnd.style.display = "none"
    fullStack.style.display = "none"
    android.style.display = "none"
    ios.style.display = "none"
    highlights.style.display = "block"
    animations.style.display = "none"
}

function onAnimationClicked() {
    frontEnd.style.display = "none"
    fullStack.style.display = "none"
    android.style.display = "none"
    ios.style.display = "none"
    highlights.style.display = "none"
    animations.style.display = "block"
}