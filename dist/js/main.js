

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






