// Login
$('#login').click(function() {
        if ($('#name').val()=='admin' && $('#pass').val()=='admin') {
            window.location.href='admin.html';
        }
        else{
            $( ".alert-danger" ).show();
        }
});
// Thêm mới
$('#them').click(function() {
    $('#addNew').removeClass('hidden');
});

$("#cancel1").click(function() {
    $("#addNew").addClass('hidden');
});

//Sửa
$("#sua").click(function() {
    $('#repair').removeClass('hidden');
});
$('#timkiem').click(function() {
    $('#old').removeClass('hidden');
});
$("#cancel2").click(function() {
    $("#repair").addClass('hidden');
});