$(document).ready(function () {
    let result=document.getElementById('result');

    $.ajax({
        url: '/haloo',
        method: 'post',
        success: function (response) {
            for(var i=0;i<response.length;i++) {
               var div = document.createElement('div');

                div.className = 'card col-lg-2 col-md-3 col-sm-3';
                div.style.cssText = 'width:200px;height:300px;border:3px  solid #ddd;margin:10px;padding-top:30px';
                var divbody = document.createElement('div');
                divbody.className = 'card-body';
                var divName = document.createElement('h5');
                divName.className = ('card-title');
                divName.innerHTML = `${response[i].name}`;
                divbody.appendChild(divName);
                var divtext = document.createElement('label');
                divtext.className = ('card-text');
                var divnum = document.createElement('label');
                divnum.innerHTML = "Phone Number " + `${response[i].pno}`;
                var divlfees = document.createElement('label');
                divlfees.innerHTML = "Item  " + `${response[i].item}`;
                var butt = document.createElement('button');
                butt.className = ('btn btn-outline-danger');
                butt.innerHTML = "Report";

                divtext.appendChild(divnum);
                divtext.appendChild(divlfees);
                divbody.appendChild(divtext);
                divbody.appendChild(butt)
                div.appendChild(divbody);
                result.append(div);
                butt.onclick = function () {
                    this.innerHTML = "Reported";
                    this.disabled=true;
                }
                }

        }
    })
})