// $(document).ready(function () {
//     $(".path").hover(
//         function () {
//             let data = $(this).attr('data-region');
//             let dataCount= $(this).attr('data-count-1');
//             console.log(dataCount);
//             $('#descr').show();
//             $('#descr .h4').html(data);
//             $('.precent').html(`${dataCount}%`);
//             $('.progress .progress-item').css("width", dataCount + "%");
//         },
//         function () {
//             $('#descr').hide();
//         }
//     );
//     $(".path").mousemove(
//         function (pos) {
//             $("#descr")
//                 .css('left', (pos.pageX + 10) + 'px')
//                 .css('top', (pos.pageY + 10) + 'px');
//         }
//     );
// });


window.onload = function () {
    let path = document.querySelectorAll('.path'),
        descr = document.getElementById('descr'),
        descTitle = document.querySelector('.h4'),
        progress = document.querySelectorAll('.progress .progress-item'),
        precent = document.querySelectorAll('.precent');
    for (let pat of path) {
        pat.addEventListener('mouseover', showRegion);
        pat.addEventListener('mouseout', hideRegion);
        pat.addEventListener('mousemove', getDescrMove);

    }

    function showRegion() {
        let data = this.dataset.region;
        descr.classList.remove('hidden');
        descTitle.innerHTML = data;
        for (let i = 0; i < progress.length; i++) {
            let getCount = this.getAttribute('data-count' + [i + 1]);
            progress[i].style.width = getCount + "%";
            precent[i].innerHTML = getCount + "%";
        }
    }

    function hideRegion(e) {
        descr.classList.add('hidden');
    }

    function getDescrMove(pos) {
        descr.style.left = (pos.pageX + 10) + 'px';
        descr.style.top = (pos.pageY + 10) + 'px';
    }
}






