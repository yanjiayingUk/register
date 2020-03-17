$(function() {
    // get dom elem
    // 48:45
    // 27
    var $person=$('#person'),
    $phone=$('#phone'),
    $pwd=$('#pwd'),
    $btnCal=$('#zhuce');
    $subbutton=$('#subyan')

    var timer;

    $subbutton.click(function(){
        num=6;
        timer=setInterval(function(){
            $subbutton.attr("disabled",true);
            // num--;
            if(num === -1){
                clearInterval(timer);
                $subbutton.val('获取验证码');
                $subbutton.removeAttr('disabled');
                $('#sub-validation-message').html('请求超时，请稍后再试')
            }
            else{
                $subbutton.val('发送中('+num+')s');
            }
            num--;
        },1000);
    })

    /*calc button click event */
    $btnCal.click(function(){
        if( !validate1('#person') || !validate2('#phone') || !validate3('#pwd')) return;
        alert('登录')
    })

    // 字段校验
    $phone.focusout(function(){
        if(!validate2('#phone')) $phone.select();
    })
    $pwd.focusout(function(){
        if(!validate3('#pwd')) $pwd.select();
    })
    $person.focusout(function(){
        if(!validate1('#person')) $person.select();
    });

    // 表单验证
    function validate3(field){
        var $data=$(field),
        $msg=$(field+'-validation-message');
        if(!/(?!^[0-9]+$)(?!^[A-z]+$)(?!^[^A-z0-9]+$)^[^\s\u4e00-\u9fa5]{8,14}$/.test($data.val())){
            $msg.html('密码设置不符合要求');
            $data.select();
            return false;
        }
        $msg.html('');
        return true;
    }

    function validate2(field){
        var $data=$(field),
        $msg=$(field+'-validation-message');
        if(!/^[1][3,4,5,7,8,9][0-9]{9}$/.test($data.val())){
            $msg.html('手机号码格式不正确');
            $data.select();
            return false;
        }
        $msg.html('');
        return true;
    }

    function validate1(field){
        var $data=$(field),
        $msg=$(field+'-validation-message');
        if(!/^[\u4e00-\u9fa5]{1,7}$|^[\dA-Za-z_]{1,14}$/.test($data.val())){
            $msg.html('用户名仅支持中英文、数字和下划线，且不能为纯数字');
            $data.select();
            return false;
        }
        if(/^[0-9]+$/.test($data.val())){
            $msg.html('用户名仅支持中英文、数字和下划线，且不能为纯数字');
            $data.select();
            return false;
        }
        $msg.html('');
        return true;
    }

})