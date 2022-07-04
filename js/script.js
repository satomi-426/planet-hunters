$(function(){

    var loading = $('#js-loading');

    //ページ読み込み完了後にローディングアニメーションの表示終了・MVの高さを調整
    $(window).on('load', function() {
        var windowHeight = $(window).height();
        $('.mv').height(windowHeight);
        loading.delay(1000).fadeOut(2000);
    });

    //ページの読み込みが完了していなくても3秒後にアニメーションを終了
    setTimeout(function() {
        loading.fadeOut(2000);
    }, 8000);

    //画面リサイズ時にMVの高さを変更
    $(window).resize(function() {
        var windowHeight = $(window).height();
        $('.mv').height(windowHeight);
    });



    //オーディオの再生と停止
    var audio = $('#js-audio').get(0);
    var isPlaying = false;
    audio.volume = .5;

    $('#js-audio-play').on('click', function() {
        if(isPlaying) {
            audio.pause();
            $('.audioSwich').removeClass('on');
            $('.audioSwich-text').html('SOUND OFF');
        } else {
            audio.play();
            $('.audioSwich').addClass('on');
            $('.audioSwich-text').html('SOUND ON');
        }
    });

    audio.onplaying = function() {
        isPlaying = true;
    };
    audio.onpause = function() {
        isPlaying = false;
    };


    // ページ内スムーススクロール
    $('a[href^="#"]').on('click', function() {
        const href = $(this).attr('href');
        const target = $(href == '#' || href == '' ? 'html' : href);
        const position = target.offset().top;
        const speed = 500;
        $('body, html').animate({
            scrollTop: position
        }, speed, 'swing');
        return false;
    });


});