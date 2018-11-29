$(document).ready(function () {



    $(".path").hover(
        function () {
            let data = $(this).attr('data-region');
            let dataCount= $(this).attr('data-count-1');
            console.log(dataCount);
            $('#descr').show();
            $('#descr .h4').html(data);
            $('.precent').html(`${dataCount}%`);
            $('.progress .progress-item').css("width", dataCount + "%");
        },
        function () {
            $('#descr').hide();
        }
    );







    $(".path").mousemove(
        function (pos) {
            $("#descr")
                .css('left', (pos.pageX + 10) + 'px')
                .css('top', (pos.pageY + 10) + 'px');
        }
    );





});


