;(function($){
    $(function(){


        // $('.slide > ul').slidy({
        //     children: 'li',
        //     animation:  'fade',
        //     width: 2000,
        //     height: 880

        // });   


        $('.slide > ul').bxSlider({

            auto: true, //자동재생 : false (멈춤-기본값) true(자동재생)
            nextText: '',
            prevText: ''

        });

        $('#headerInner').scrollToGiveClass({
            class: 'header_fix',
            baseline: 90
        });

        $('.stylepick > ul').bxSlider({
            auto: true,  //auto값은 항상 맨 위에 작성
            maxSlides: 3, //한 화면에 동시에 보여질 슬라이드 수
            slideWidth: 600, //한 슬라이드 너비값(maxSlides넣으면 꼭 추가해야 하는 옵션)
            moveSlides: 1, // 움직이는 슬라이드 개수
            pause: 3000, // 정지된 화면이 지속되는 시간(기본값 3000)
            speed: 700, //슬라이드 움직이는 시간
            controls: false //prev , next 삭제하고 싶으면 false 추가
            //pager: false - 페이저 버튼 삭제

        });

        $(".click_btn").clickToGiveClass({
            class: 'view',
            addTarget : '#headerInner, .layer_shadow' // 서치영역을 켜졌을 때 마우스 위치와 상관 없이 배경이 유지되도록
        });


    });
})(jQuery);