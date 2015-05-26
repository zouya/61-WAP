(function($,win,park) {
    var $win=$(window),$html=$('html'),d = document.documentElement;
    park.initRemset=function(){
        $win.on('resize',setRem);
        setRem();
        function setRem(){
            //$html.css('font-size',d.getBoundingClientRect().width/10+'px');
            $html.css('font-size',$('body').width()/10+'px');
        }
    };
    park.initRemset()

    park.initList=function(){
        $('body').on('click','.flst h5',function(){
            $(this).parent().toggleClass('show');
        })
    }


    park.shareTouch=function(){
        $('.reward-btn-share').on('click',function(){
            $('.reward-overlay').show();
            $('.reward-overlay-text').show();
        })
    }

    $(function(){
        park.initRemset();
        park.initList();
        park.shareTouch();
    });

})(Zepto,window,window.park||(window.park={}));
