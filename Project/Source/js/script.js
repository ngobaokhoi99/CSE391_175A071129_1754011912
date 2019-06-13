$('#login').click(function() {
        if ($('#name').val()=='admin' && $('#pass').val()=='admin') {
            window.location.href='';
        }
        else{
            $( ".alert-danger" ).show();
        }
});