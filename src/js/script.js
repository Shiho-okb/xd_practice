
jQuery(function ($) {

  // ページトップボタン
  var topBtn = $('.js-pagetop');
  topBtn.hide();

  // ページトップボタンの表示設定
  $(window).scroll(function () {
    if ($(this).scrollTop() > 70) {
      // 指定px以上のスクロールでボタンを表示
      topBtn.fadeIn();
    } else {
      // 画面が指定pxより上ならボタンを非表示
      topBtn.fadeOut();
    }
  });

  // ページトップボタンをクリックしたらスクロールして上に戻る
  topBtn.click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 300, 'swing');
    return false;
  });

  // スムーススクロール (絶対パスのリンク先が現在のページであった場合でも作動。ヘッダーの高さ考慮。)
  $(document).on('click', 'a[href*="#"]', function () {
    let time = 400;
    let header = $('header').innerHeight();
    let target = $(this.hash);
    if (!target.length) return;
    let targetY = target.offset().top - header;
    $('html,body').animate({ scrollTop: targetY }, time, 'swing');

    // クリックされた要素（this）がドロワーメニュー内にある場合、メニューを閉じる処理も実行する
    if ($(this).closest('.js-drawer').length) {
      $('.js-hamburger').removeClass('is-active');
      $('body').removeClass('active');
      $('.js-drawer').fadeOut();
  }
    return false;
  });

  // ハンバーガーメニュー
  $('.js-hamburger').on('click', function (e) {
    e.stopPropagation();
    $(this).toggleClass('is-active');
    $("body").toggleClass("active");
    $('.js-drawer').fadeToggle();
  });

  // 背景をクリックした時にメニューを閉じる
  $('.js-drawer').on('click', function () {
    $('.js-hamburger').removeClass('is-active');
    $("body").removeClass("active");
    $(this).fadeOut();
  });
});
