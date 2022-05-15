// $("#imgZoom").mousemove(function (event) {
//    $(".zoomIn").css('display','inline-block'),('height','300px'),('width','200px');
//    $(".zoomIn").css('visibility','visible')
//    var x = event.clientX;
//    var y = event.clientY;
//    $(".zoomIn").css('top',(y-80));
//    $(".zoomIn").css('left',(x-80))
// })

//  $("#imgZoom").mouseout(function () {
//     $(".zoomIn").css('display','none')
//  })
// $(selector).click(function (e) { 
//     e.preventDefault();
    
// });





$(document).ready(function() { 
// tab product 
$('.tab-content-item').hide();
    $('.tab-content-item:first-child').show()
$('.nav-tabs li').click(function() {
    // active nav tabs 
    $('.nav-tabs li').removeClass('active')
    $(this).addClass('active')
    // show conten 
    let id_tabs = $(this).children('a').attr('href');
    $('.tab-content-item').hide();
    $(id_tabs).fadeIn();
    

    return false;
    
})

//end tab product 
// bg show password 
$(".icon-eye").click(function() {
    $(this).toggleClass("fa-eye-slash","fa-eye");
    if($(this).hasClass("fa-eye-slash"))
    {
        $(this).prev("input").attr('type','text')
    
    }
    else
    {
        $(this).prev("input").attr('type','password')
    }
})
// end show password 
// animation cart 
$(".add--cart").click(function () {
    var src = $(this).parents('.product-slide').find('img').attr('src');
    var pa =$(this).parents('.product-slide');
    var patop = pa.offset().top;
    var paleft = pa.offset().left;
    var imgHTML = 
        '<img class="img__product-cart-fly" src="src" />';
    $(".product-slide").append(imgHTML)
    


    setTimeout(function(){
        var cart = $(document).find('.cart');
        $(document).find(".img__product-cart-fly").css({
            'top'  :  cart.offset().top,
            'left' : cart.offset().left,
        })

    },3000)

})


$(".test").click(function () {
    var a=$('.testtext').offset();
    alert('top:'+a.top +'  '+'left:'+a.left)
  })

})
