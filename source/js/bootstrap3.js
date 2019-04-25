import '@babel/polyfill'
import feather from 'feather-icons'
import '@chenfengyuan/datepicker'
import DataTable from 'datatables.net'
import $ from 'jquery'
import 'bootstrap-sass/assets/javascripts/bootstrap'
import './app/forms'
// import './app/editorSetup'
import './app/toastr'
import './app/owl'

if($('[data-toggle="datepicker"]')) {
    let dat = $('[data-toggle="datepicker"]');
    dat = [...dat];
    dat.map((da) => {
        let tr  = da.nextElementSibling;
        $(da).datepicker({
            format: 'yyyy-mm-dd',
            trigger: tr,
            autoHide: true
        });
    })
}
var ham = $("#ham");
var more = $(".more");
var showMore = $("#show-more");
if(ham){
    ham.on('click', function(){
        $("#sidebar").toggleClass("slideIn");
        $('#main').toggleClass("col-lg-20").find(".col-lg-24").toggleClass('shift--300');
    })
}
if(more){
more.on('click', function (e) {
    e.preventDefault();
    $(this).next('.sub-nav').toggle(400);
});
}
if(showMore){
    showMore.on('click', () => {
        $("#more-options").fadeToggle('fast');
    })
}

$(document).ready( function () {
    DataTable();
    $('.datatable').DataTable();
    $('[data-toggle="tooltip"]').tooltip()
} );

feather.replace()

