$(document).ready(function() {
    // 高亮当前页面导航项
    var currentPage = window.location.pathname.split('/').pop();
    $('.navbar-nav a[href="'+currentPage+'"]').parent().addClass('active');
    
    // 简单的图片点击放大效果
    $('.card-img-top').click(function() {
        $(this).toggleClass('img-fluid');
    });
}); 