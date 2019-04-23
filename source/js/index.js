import '@babel/polyfill'
import 'bootstrap/js/src/util'
import 'bootstrap/js/src/tab'
import 'bootstrap/js/src/modal'
import 'bootstrap/js/src/dropdown'
import 'bootstrap/js/src/collapse'
import 'bootstrap/js/src/tooltip'
import 'bootstrap/js/src/carousel'
import feather from 'feather-icons'
// import 'd3'
import '@chenfengyuan/datepicker'
// import '@chenfengyuan/datepicker/dist/datepicker.css'
// import 'datatables/media/css/jquery.dataTables.min.css'
import DataTable from 'datatables.net'
import $ from 'jquery'

import './app/forms'
import './app/toastr'
import './app/owl'

if ($('[data-toggle="datepicker"]')) {
    let dat = $('[data-toggle="datepicker"]');
    dat = [...dat];
    dat.map((da) => {
        let tr = da.nextElementSibling;
        $(da).datepicker({
            format: 'yyyy-mm-dd',
            trigger: tr,
            autoHide: true
        });
    })
}

$("#ham").on('click', function () {
    $("#sidebar").toggleClass("slideIn");
    $('#main').toggleClass("col").toggleClass("col-lg-10");
})

$('.more').on('click', function (e) {
    e.preventDefault();
    $(this).next('.sub-nav').toggle(400);
})

$("#show-more").on('click', () => {
    $("#more-options").fadeToggle('fast');
})

$(document).ready(function () {
    DataTable();
    $('.table').DataTable();
    $('[data-toggle="tooltip"]').tooltip()
});

feather.replace()

