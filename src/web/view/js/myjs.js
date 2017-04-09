/**
 * Created by hasee on 2017/3/11.
 */
function sendMes() {
    var info = $('#info').val();
    var loc = "";
    var userid = "123456";
    var key = "4b5a967ee6af4eefaf9662f4cef0bf52";
    var historyMes = $('#historyMes');
    var historyMesVal = historyMes.val();
    historyMesVal += ("Me : "+info+"\r\n");
    historyMes.val(historyMesVal);
    $.ajax({
        type:"POST",
        url:"http://www.tuling123.com/openapi/api",
        data:"key="+key+"&info="+info+"&loc="+loc+"&userid="+userid,
        success:function (msg) {
            // alert(msg.text);
            historyMes.val(historyMesVal+"Kitty : "+msg.text+"\r\n");
        }
    });
}
