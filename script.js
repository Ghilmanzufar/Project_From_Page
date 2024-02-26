$(document).ready(function() {
    $('#show_password').on('click', function(){
        var passwordField = $('#exampleInputPassword1');
        var passwordFieldType = passwordField.attr('type');
        if(passwordFieldType == 'password')
        {
            passwordField.attr('type', 'text');
            $(this).html('<img src="path_to_your_hide_image" alt="Hide Password">');
        } else {
            passwordField.attr('type', 'password');
            $(this).html('<img src="path_to_your_show_image" alt="Show Password">');
        }
    });
});