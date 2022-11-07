/*global $, document, window, setTimeout, navigator, console, location*/
var usernameError = true,
        idError    = true,
        passwordError = true,
        passConfirm   = true,
        contactError = true;

$(document).ready(function () {
    'use strict';

    // Detect browser for css purpose
    if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
        $('.form form label').addClass('fontSwitch');
    }

    // Label effect
    $('input').focus(function () {

        $(this).siblings('label').addClass('active');
    });

    // Form validation
    $('input').blur(function () {

        // User Name
        if ($(this).hasClass('name')) {
            if ($(this).val().length === 0) {
                $(this).siblings('span.error').text('이름을 입력해주세요').fadeIn().parent('.form-group').addClass('hasError');
                usernameError = true;
            } else if ($(this).val().length > 1 && $(this).val().length <= 2) {
                $(this).siblings('span.error').text('2자 이상 입력해주세요.').fadeIn().parent('.form-group').addClass('hasError');
                usernameError = true;
            } else {
                $(this).siblings('.error').text('').fadeOut().parent('.form-group').removeClass('hasError');
                usernameError = false;
            }
        }
        // ID
        if ($(this).hasClass('id')) {
            if ($(this).val().length == '') {
                $(this).siblings('span.error').text('ID 값을 넣어주세요').fadeIn().parent('.form-group').addClass('hasError');
                idError = true;
            } else {
                $(this).siblings('.error').text('').fadeOut().parent('.form-group').removeClass('hasError');
                idError = false;
            }
        }

        // PassWord
        if ($(this).hasClass('pass')) {
            if ($(this).val().length < 10) {

                if (chkPwd($(this).val())){
                    $(this).siblings('span.error').text('영문,숫자, 특수문자 중 2가지 이상을 혼합하여 입력해주세요.').fadeIn().parent('.form-group').addClass('hasError');
                    passwordError = true;
                } else {
                    $(this).siblings('span.error').text('10 ~ 20자 이내로 입력해주세요.').fadeIn().parent('.form-group').addClass('hasError');
                    passwordError = true;
                }

            } else {
                $(this).siblings('.error').text('').fadeOut().parent('.form-group').removeClass('hasError');
                passwordError = false;
            }
        }

        // PassWord confirmation
        if ($('.pass').val() !== $('.passConfirm').val()) {
            $('.passConfirm').siblings('.error').text('패스워드가 일치하지 않습니다.').fadeIn().parent('.form-group').addClass('hasError');
            passConfirm = false;
        } else {
            $('.passConfirm').siblings('.error').text('').fadeOut().parent('.form-group').removeClass('hasError');
            passConfirm = false;
        }

        // Contact
        if ($(this).hasClass('contact')) {
            if ($(this).val().length == '') {
                $(this).siblings('span.error').text('연락처를 넣어주세요').fadeIn().parent('.form-group').addClass('hasError');
                contactError = true;
            } else {
                $(this).siblings('.error').text('').fadeOut().parent('.form-group').removeClass('hasError');
                contactError = false;
            }
        }

        // label effect
        if ($(this).val().length > 0) {
            $(this).siblings('label').addClass('active');
        } else {
            $(this).siblings('label').removeClass('active');
        }
    });


    // form switch
    $('a.switch').click(function (e) {
        $(this).toggleClass('active');
        e.preventDefault();

        if ($('a.switch').hasClass('active')) {
            $(this).parents('.form-peice').addClass('switched').siblings('.form-peice').removeClass('switched');
        } else {
            $(this).parents('.form-peice').removeClass('switched').siblings('.form-peice').addClass('switched');
        }
    });


    // Form submit
    $('form.signup-form').submit(function (event) {
        event.preventDefault();

        if (usernameError == true || idError == true || passwordError == true || passConfirm == true || contactError == true) {
            $('.name, .id, .pass, .passConfirm, .contact').blur();
        } else {
            $('.signup, .login').addClass('switched');

            setTimeout(function () { $('.signup, .login').hide(); }, 700);
            setTimeout(function () { $('.brand').addClass('active'); }, 300);
            setTimeout(function () { $('.heading').addClass('active'); }, 600);
            setTimeout(function () { $('.success-msg p').addClass('active'); }, 900);
            setTimeout(function () { $('.success-msg a').addClass('active'); }, 1050);
            setTimeout(function () { $('.form').hide(); }, 700);
        }
    });

    // Reload page
    $('a.profile').on('click', function () {
        location.reload(true);
    });


});

function chkPwd(str) {
    var pw = str;
    var num = pw.search(/[0-9]/g);
    var eng = pw.search(/[a-z]/ig);
    var spe = pw.search(/[`~!@@#$%^&*|₩₩₩'₩";:₩/?]/gi);
    if (pw.length < 10 || pw.length > 20) {
        $(".signup-form #sign_pw").siblings('span.error').text('10 ~ 20자 이내로 입력해주세요.').fadeIn().parent('.form-group').addClass('hasError');
        passwordError = true;
        return false;
    }

    if (pw.search(/₩s/gi) != -1) {
        $(".signup-form #sign_pw").siblings('span.error').text('비밀번호는 공백업이 입력해주세요.').fadeIn().parent('.form-group').addClass('hasError');
        passwordError = true;
        return false;
    }

    if ((num < 0 && eng < 0) || (eng < 0 && spe < 0) || (spe < 0 && num < 0)) {
        $(".signup-form #sign_pw").siblings('span.error').text('영문,숫자, 특수문자 중 2가지 이상을 혼합하여 입력해주세요.').fadeIn().parent('.form-group').addClass('hasError');
        passwordError = true;
        return false;
    }
    return true;
}