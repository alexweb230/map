
$(document).ready(function(){

    $(".path").hover(
        function () {
            let data = $(this).attr('data-region');
            $('#descr').show();
            $('#descr .h4').html(data);
        },
        function () {
            $('#descr').hide();
        }
    )
    $(".path").mousemove(
        function(pos) {
            $("#descr")
                .css('left',(pos.pageX+10)+'px')
                .css('top',(pos.pageY+10)+'px');
        }
    );



});
