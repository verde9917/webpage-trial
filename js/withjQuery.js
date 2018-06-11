/*global $*/
$(function () {
    
    // change first color
    $('#firstColor').change(function () {
        var newColor = $('#firstColor').val();
        $('body').css('color', newColor);
        $('#head').css('background-color', newColor);
        $('#footer').css('background-color', newColor);
    });
    // change second color
    $('#secondColor').change(function(){
        var newColor = $('#secondColor').val();
        $('body').css('background-color', newColor);
        $('#head').css('color',newColor);
        $('#footer').css('color', newColor);
    });
    
    // count characters
    var $countNum = $('#count');
    $('#countButton').click(function(){
        $countNum.html($('#inputText').val().length);
    });
    
    $('#textresetButton').click(function(){
        $countNum.html('0');
        $('#inputText').val('');
    });
});