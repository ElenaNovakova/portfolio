$( document ).ready(function() {
    let $showMenu = false;
    $(".main-btn").on('click touch',function(){ 
    if(!$showMenu){
        $(".main-btn").addClass('close');
        $(".menu").addClass('show');
        $(".menu-nav").addClass('show');
        $('.menu-branding').addClass('show');
        $('.nav-item').addClass('Show');
        $showMenu = true;
    } else{
        $(".main-btn").removeClass('close');
        $(".menu").removeClass('show');
        $(".menu-nav").removeClass('show');
        $('.menu-branding').removeClass('show');
        $('.nav-item').removeClass('Show')
        $showMenu = false;
    }
})
});