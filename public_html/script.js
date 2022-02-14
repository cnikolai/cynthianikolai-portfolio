// JQuery
// check form and validate that form has correct types of data and hanlde submission
$(document).ready(function(){
    $('#contact').validate({
        debug: true,
        //put class in div tag
        errorClass: 'alert alert-danger',
        //id of div tag where output should go
        ErrorLabelContainer: '#output-area',
        //div of information
        errorElement: 'div',
        // rules here define what is good or bad input
        // each rule starts with the form input element's NAME attribute
        rules: {
            name: {
                required: true
            },
            email: {
                email: true,
                required: true
            },
            message: {
                required: true,
                maxlength: 2000
            },
            subject: {
                required: false,
                maxlength: 255
            }
        },
        messages: {
            name: {
                required: 'Please enter your name, so that I can reply to you :-)'
            },
            email: {
                email: 'Please provide a valid email, so that I can reply to you :-)',
                required: 'Email is required. Please provide an email, so that I can reply to you :-)'
            },
            message: {
                required: 'Please provide a message',
                maxlength: 'The maximum length of the message is 2000 characters!'
            },
            subject: {
                maxlength: 'The maximum length of the subject is 255 characters!'
            }
        },
        submitHandler: (form) => {
            $('#contact').ajaxSubmit({
                type: 'POST',
                url: $('#contact').attr('action'),
                success: (ajaxOutput) => {
                    $('#output-area').css('display','')
                    $('#output-area').html(ajaxOutput)

                    if ($('.alert-success') >= 1) {
                        $('#contact')[0].reset()
                    }
                }
            })
        }
    })
})

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

