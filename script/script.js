jQuery(function() {
    var pagetop = $('#page_top');   
    pagetop.hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {  //100pxスクロールしたら表示
            pagetop.fadeIn();
        } else {
            pagetop.fadeOut();
        }
    });
    pagetop.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500); //0.5秒かけてトップへ移動
        return false;
    });
});

// クリックスクロール
$(function(){
    $('a[href^="#"]').click(function(){
      var speed = 500;
      var href= $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top;
      $("html, body").animate({scrollTop:position}, speed, "swing");
      return false;
    });
  });



//   メニュー
$(function(){
    const btn = document.querySelector('.btn-menu');
    const nav = document.querySelector('nav');
     
    btn.addEventListener('click', () => {
      nav.classList.toggle('open-menu')
    });
});


// nav
$(function(){
$('.nav-btn').on('click',function(){
    if( $(this).hasClass('active') ){
     // if条件１があったときの処理
     // hasClassは、クリックしたときにactive要素があるかどうか調べている。
     $(this).removeClass('active');
     // removeClassは、クリックしたときにactive要素を消す働きがある。
     $('.header-nav').addClass('close').removeClass('open');
     // addClassは、クリックしたときに要素を追加できる。
   }
     else {
       // 条件がなかった場合の処理
     $(this).addClass('active');
     $('.header-nav').addClass('open').removeClass('close');
   }
 });
});

// スクロール時のアニメーション
$(function(){
  var effect_pos = 1000; // 画面下からどの位置でフェードさせるか(px)
  var effect_move = 50; // どのぐらい要素を動かすか(px)
  var effect_time = 800; // エフェクトの時間(ms) 1秒なら1000

  // フェードする前のcssを定義
  $('.scroll-fade').css({
      opacity: 0,
      transform: 'translateY('+ effect_move +'px)',
      transition: effect_time + 'ms'
  });

  // スクロールまたはロードするたびに実行
  $(window).on('scroll load', function(){
      var scroll_top = $(this).scrollTop();
      var scroll_btm = scroll_top + $(this).height();
      effect_pos = scroll_btm - effect_pos;

      // effect_posがthis_posを超えたとき、エフェクトが発動
      $('.scroll-fade').each( function() {
          var this_pos = $(this).offset().top;
          if ( effect_pos > this_pos ) {
              $(this).css({
                  opacity: 1,
                  transform: 'translateY(0)'
              });
          }
      });
  });
});

// スクロール
$(function(){
$(window).scroll(function (){
  $('.fadein').each(function(){
      var position = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > position - windowHeight + 200){
        $(this).addClass('active');
      }
  });
});
});
