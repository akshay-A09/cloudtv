if ($.isFunction($.validator)) {
    $.validator.addMethod('mobile', function (value, element, param) {
        if (value) {
            var pattern = /^[0-9]{10}$/;
            return pattern.test(value);
        } else {
            return true;
        }
    }, 'Please enter a valid mobile number.');

    $.validator.addMethod('url', function (value, element, param) {
        if (value) {
            var pattern = /^(http|https|ftp):\/\/[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/i;
            return pattern.test(value);
        } else {
            return true;
        }
    }, 'Please enter a valid url.');

    $.validator.addMethod('validateEmail', function (value, element, param) {
        var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
        return this.optional(element) || pattern.test(value);
    }, ' Please enter a valid email address.');

    $.validator.addMethod("alphanumeric", function (value, element) {
        // return this.optional(element) || /^[\w.]+$/i.test(value);
        return this.optional(element) || /^[a-z0-9]+$/i.test(value);
    }, "Code must contain only letters and numbers");

    $.validator.addMethod("alphachar", function (value, element) {
        $regex = /^[a-z0-9,.?&\-\s\']+$/i;
        return this.optional(element) || $regex.test(value);
    }, "Text must contain only alphanumberic and <i> . , ? & - '</i> chars.");

    $.validator.addMethod("lettersonly", function (value, element) {
        return this.optional(element) || /^[a-z\s]+$/i.test(value);
    }, "Only letters are allowed");

    $.validator.addMethod("strongPass", function (value, element) {
        return this.optional(element) || nilesh.strongPass(value);
    }, "Password must be more than 8 digit and must contain atleast one lower & upper case letter, one digit and a special character");

    //custom validation

    // 25 MB = 25485760  1MB = 1024 bytes

    // Custom method for validate plugin

    $.validator.addMethod('filesize', function (value, element, param) {
        if (element.files[0] !== undefined) {
            console.log(element.files[0].size);
            const fsize = element.files[0].size;
            const fileSize = Math.round((fsize / 1024));
            const sizeMB = param * 1024;
            return this.optional(element) || (fileSize <= sizeMB)
        } else {
            return true;
        }
    }, 'File size must be less than {0} MB');

    $.validator.addMethod('pan_card', function (value, element, param) {
        if (value) {
            var pattern = /^[A-Za-z]{5}[0-9]{4}[A-Za-z]{1}$/;
            return pattern.test(value);
        } else {
            return true;
        }
    });

    $.validator.addMethod('aadhaar_card', function (value, element, param) {
        if (value) {
            var pattern = /^(\d{12}|\d{16})$/;
            return pattern.test(value);
        } else {
            return true;
        }
    }, 'Please enter valid aadhar number.');
}

function validateMobile(num) {
    var pattern = /^[0-9]{10}$/;
    return pattern.test(num);
}

function IsEmail(email) {
    var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!regex.test(email)) {
        return false;
    } else {
        return true;
    }
}
$('#frm_cloudtv').validate({
    ignore: [],
    rules: {
        first_name: {required: true,alphachar:true,lettersonly:true}, 
        last_name: {required: true,alphachar:true,lettersonly:true}, 
        company_name: {required: true,alphachar:true}, 
        massage: {required: true,alphachar:true}, 
        email: { required: true, email: true },
        mobile: {required: true, minlength:10, mobile:true}, 
           
    },
    messages: {
    },
    errorElement: 'span',
    errorPlacement: function (error, element) {
        error.addClass('invalid-feedback');
        element.closest('.getintouch').append(error);
    },
    highlight: function (element, errorClass, validClass) {
        $(element).addClass('is-invalid');
    },
    unhighlight: function (element, errorClass, validClass) {
        $(element).removeClass('is-invalid');
    },
    submitHandler: function (form) {
        var formData = new FormData(form);
        //var token = grecaptcha.getResponse();
        // if(token  == ''){

        //    $('.form_response').css({'color':'#DC3545'}).html('Please validate captcha');

        //    return false;

        // }
        $button = $(form).find('#submit');
        $button.attr('disabled', 'disabled');
        $button.val('processing..');
        
        // grecaptcha.ready(function() {

        //     grecaptcha.execute('6LfQ3g8mAAAAAK9Azpw_rrjhQVqiW24fAaUn1uT8', {action: 'submit'}).then(function(token) {
                $.ajax({
                    type: 'POST',
                    url: $(form).attr('action'),
                    data: formData,
                    processData: false,
                    contentType: false,
                    dataType: 'json',
                    beforeSend: function () {
                        $('.response_msg').text('');
                    },
                    success: function (response) {
                        console.log(response);
                        if (response.status == 1) {
                            $('#frm_cloudtv')[0].reset();
                            $('#thanks').show();
                            $('#contct_frm').hide();
                        }else if (response.status == 2) {
                            var button = document.getElementById("submit");
                            button.removeAttribute("disabled");
                            button.removeAttribute("value");
                            $('.form_response').css({'color' : '#DC3545'}).text( response.message );
                        } else {
                            $('.form_response').css({'color' : '#DC3545'}).text( response.message );
                        }
                    },
                    error: function (error, textStatus, errorMessage) {
                        console.log(error);
                        console.log(textStatus);
                        console.log(errorMessage);
                        alert('Some error occured.');
                    }
                });
        //     });
        // });
     } //end ajax }
});


$('#newsletter').validate({
    ignore: [],
    rules: {
        newsletter_email: { required: true, email: true },
    },
    messages: {
    },
    errorElement: 'span',
    errorPlacement: function (error, element) {
        error.addClass('invalid-feedback');
        element.closest('.newsletter-frm').append(error);
    },
    highlight: function (element, errorClass, validClass) {
        $(element).addClass('is-invalid');
    },
    unhighlight: function (element, errorClass, validClass) {
        $(element).removeClass('is-invalid');
    },
    submitHandler: function (form) {
        var formData = new FormData(form);
        //var token = grecaptcha.getResponse();
        // if(token  == ''){

        //    $('.form_response').css({'color':'#DC3545'}).html('Please validate captcha');

        //    return false;

        // }
        $button = $(form).find('#newsletter-submit');
        $button.attr('disabled', 'disabled');
        $button.val('processing..');
        
        //grecaptcha.ready(function() {

            //grecaptcha.execute('6LfQ3g8mAAAAAK9Azpw_rrjhQVqiW24fAaUn1uT8', {action: 'submit'}).then(function(token) {
                $.ajax({
                    type: 'POST',
                    url: $(form).attr('action'),
                    data: formData,
                    processData: false,
                    contentType: false,
                    dataType: 'json',
                    beforeSend: function () {
                        $('.response_msg').text('');
                    },
                    success: function (response) {
                        console.log(response);
                        if (response.status == 1) {
                            $('#newsletter')[0].reset();
                            $('.newsletter-frm_thanks').show();
                            $('.newsletter-frm').hide();
                        } else {
                            $('.form_response').css({'color' : '#DC3545'}).text( response.message );
                        }
                    },
                    error: function (error, textStatus, errorMessage) {
                        console.log(error);
                        console.log(textStatus);
                        console.log(errorMessage);
                        alert('Some error occured.');
                    }
                });
            //});
        //});
     } //end ajax }
});
