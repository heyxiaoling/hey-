/**
 * Created by zhuyu on 2016/10/10.
 *
 */
(function($){
/**
 * 地图位置定位
 * callback 回调函数，取位置
 * 如：$.getLocation(function(data){
 *          alert(data);
 *     });
 * 
 */
$.getLocation = function(callback){
    var location = "深圳";
    var callback = callback || function(){};
    if($.cookieUtil.getItem('location')){
        location = $.cookieUtil.getItem('location');
        callback.call(null,location);
        return;
    }
    
    if (navigator.geolocation){   
        navigator.geolocation.getCurrentPosition(success,failed);   
    }else{
        $.tomsg.show({msg:'浏览器不支持地理定位。'});
    }

    function success(position){
        console.log(position);
        var latlon = position.coords.latitude+','+position.coords.longitude;
        //baidu百度接口  
        //
        // $.ajax({
        //         type:'get', dataType : 'jsonp',
        //         url : 'http://api.map.baidu.com/geocoder/v2/',  
        //         data : {
        //                 ak:"iGNqcHsyqCdA84Ukj8ekGHY2",
        //                 output:"json",
        //                 pois:1,
        //                 callback:"renderReverse",
        //                 location: latlon,
        //         },
        //         success:function(){

        //         }, 
        //         error : function(e) {  
        //             console.log("百度地图api错误:geocoder");
        //             //alert(JSON.stringify(e));
        //         }  
        //     }  
        // );


        // var url = "http://api.map.baidu.com/geocoder/v2/?ak=C93b5178d7a8ebdb830b9b557abce78b&callback=renderReverse&location="+latlon+"&output=json&pois=0";
        $.ajax({    
            type:'get', 
            dataType : 'jsonp',
            url : 'http://api.map.baidu.com/geocoder/v2/',  
            data : {
                    ak:"iGNqcHsyqCdA84Ukj8ekGHY2",
                    output:"json",
                    pois:1,
                    callback:"renderReverse",
                    location: latlon,
            }, 
            beforeSend: function(){
                $.tomsg.show({msg:'正在定位...'});
            },   
            success: function (json) {    
                if(json.status==0){ 
                    location = json.result.addressComponent.city.replace("市","");
                    $.cookieUtil.setItem({'key':'location','value': location,'maxAge': 30*24*60*60*1000});
                }else{
                    $.tomsg.show({msg:'地址位置获取失败'});
                }
                callback.call(null,location);
            },   
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                $.tomsg.show({msg:'地址位置获取失败'});
                callback.call(null,location);
            }   
        }); 
    }

    function failed(error){
        switch(error.code) {   
            case error.PERMISSION_DENIED:
                $.tomsg.show({msg:'定位失败,用户拒绝请求地理定位'});
                break;   
            case error.POSITION_UNAVAILABLE:
                $.tomsg.show({msg:'定位失败,位置信息不可用'});
                break;   
            case error.TIMEOUT:
                $.tomsg.show({msg:'定位失败,请求获取用户位置超时'});
                break;   
            case error.UNKNOWN_ERROR:
                $.tomsg.show({msg:'定位失败,定位系统失效'});
                break;   
        }
        callback.call(null,location);
    }    
}

})(mgui)