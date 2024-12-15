// メイン画像カルーセル
$('.carousel').slick( {
  autoplay:true,
  dots: true,
  infinite: true,
  speed:1000,
  autoplaySpeed: 5000,
  fade: true,
  cssEase: 'linear'
});

$(function () {
  // リンクのホバー時に不透明度をアニメーションで変更する
  $('a').on('mouseover', function () {
    $(this).animate( {
      opacity: 0.5,
    });
  });
  $('a').on('mouseout', function () {
    $(this).animate( {
      opacity: 1,
    });
  });

  // スクロールしたときにTOPに戻るボタンを表示させる
  $(window).scroll(function() {
    if (100 < $(this).scrollTop()) {
      $('#top').fadeIn();
    }
    else {
      $('#top').fadeOut();
    }
  });

  // ページ内リンクのスクロールをなめらかにする
  $('a[href^="#"]').on('click', function() {
    // スクロールスピード
    let speed = 500;
    // クリックされたaタグのhref属性の値を代入
    let point = $(this).attr('href');
    // '#' == point　が　trueかfalseか
    let target = $('#' == point ? 'html':point);
    // 移動先
    let destination = $(target).offset().top;
    $('html, body').animate({scrollTop:destination}, speed);
  });

  // スクロールしたときにセクションをフェードインさせる
  $(window).scroll(function() {
    // ウインドウをスクロールしたら
    $('.fadein').each(function() {
      // この要素のスクロール位置（上から）
      var pos = $(this).offset().top;
      // ウインドウのスクロール量（上から）
      var scroll = $(window).scrollTop();
      // ウインドウの縦幅
      var winHeight = $(window).height();
      // ウインドウのスクロール量（上から）が
      // この要素のスクロール位置 - ウインドウの縦幅 + 100pxより大きい場合
      if (scroll > pos - winHeight + 100) {
        // .scrollというクラス.fadeinに付与する
        $(this).addClass('scroll');
      }
    });
  });

  // Worksの画像をクリックしたときにモーダルで拡大表示する
  $('.open').on('click', function() {
    var photo = $(this).attr('src');
    $('.open-img').attr('src', photo);
    $('.modal').fadeIn();
  });
  $('.modal-close').on('click', function() {
    $('.modal').fadeOut();
  });
});