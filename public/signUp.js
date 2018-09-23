$(document).ready(function () {
    let btn= $('#btn');
    var inp=$('#name');
    let pn=$('#pno');
    let pass =$('#pass');
    let item=$('#item');
    var latitude;
    var longitude;
    btn.click(function () {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
                latitude = position.coords.latitude;
                longitude=position.coords.longitude;
                console.log(latitude);
                console.log(longitude);
                console.log(inp.val())
                console.log(pn.val())
                console.log(pass.val())
                console.log(item.val());
                sendData(latitude,longitude,inp.val(),pn.val(),pass.val(),item.val());
            })

        }


    });

    function sendData(latitude,longitude,inpo,pno,passo,itemo){
        $.ajax({
            url: '/data',
            method: 'post',
            data: {
                name:inpo,
                item:itemo,
                lat: latitude,
                lon:longitude,
                pno:pno,
                pass:passo,

            },
            dataType: "json",
            success: function(response) {   //redirect to page login for worker
                if (response.redirect !== undefined && response.redirect) {
                    window.location.href = response.redirect_url;
                }

            }
        })
    }




})