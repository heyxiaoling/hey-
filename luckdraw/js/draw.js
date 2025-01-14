import loader from './load';
import ajax from './ajax';
import msg from './msg';

window.onload = function(){
    let doc = document,
        textInput = doc.querySelector('#textInput'),
        spanSub = doc.querySelector('#spanSub'),
        mask = doc.querySelector('#popup-mask'),
        popup = doc.querySelector('#popup'),
        popupClose = doc.querySelector('#card-close'),
        prize =  doc.querySelector('.prizetype'),
        time = doc.querySelector('.card-time');

    var txt,btn = true;

    //loading..
    loader();

    textInput.value = '';
    textInput.addEventListener('keyup',function(e){
        txt = this.value;
    },false);

    spanSub.addEventListener('click',function(){
        let re = /^1\d{10}$/;
        if (re.test(txt) && btn) {
            btn = false;
            ajax('get','http://mt.mangocity.com/act/index.php','c=weichat_oauth2&m=win_prize&phone=' + txt,function(data){
                btn = true;
                data = JSON.parse(data);
                if(data.code === "1"){
                    data.prizetype ? (prize.innerHTML = data.prizetype) : prize.innerHTML = '';
                    data.time ? (time.innerHTML = '展会期间有效（请联系现场人员兑换）' ) : time.innerHTML='';
                    cardToggle(true);
                }else{
                    msg({
                        type: 'alert',
                        text: data.message
                    });
                }
            });
        }else if(re.test(txt) && !btn ) {
            msg({
                type:'alert',
                text:"操作频繁"
            });

        }else{
            msg({
                type:'alert',
                text:"请输入正确的手机号码"
            });

            
        }

    },false);

    popupClose.addEventListener('click',function(){
        cardToggle(false);
    },false);

    function cardToggle(bool) {
        if(bool){
            mask.style.display = 'block';
            popup.style.display = 'block';

        }else{
            mask.style.display = 'none';
            popup.style.display = 'none';

        }
        
    } 
}




