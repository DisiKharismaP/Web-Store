//TODO 5 navigation bar script
//Untuk ngecek apakah saat di scroll posisinya udah masuk ke navbar, kalo udah jadi ketutupan
$(function() {
    $(document).scroll(function() {
        var $nav = $(".navbar-fixed-top");
        $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
    });
});