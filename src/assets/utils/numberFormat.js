const numberFormat = function(number, decimals, dec_point, thousands_sep) {
    　　/*
    　　 * 参数说明：
    　　 * number：要格式化的数字
    　　 * decimals：保留几位小数
    　　 * dec_point：小数点符号
    　　 * thousands_sep：千分位符号
    　　 * */
    　　 number = (number + '').replace(/[^0-9+-Ee.]/g, '');
    　　 let n = !isFinite(+number) ? 0 : +number,
    　　 prec = !isFinite(+decimals) ? 2 : Math.abs(decimals),
     　　sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
     　　dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
     　　s = '',
    　　 toFixedFix = function(n, prec) {
     　　　　const k = Math.pow(10, prec);
     　　　　return '' + Math.ceil(n * k) / k;
     　　};
    
     　　s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
    　　 const re = /(-?\d+)(\d{3})/;
    　　 while(re.test(s[0])) {
     　　　　s[0] = s[0].replace(re, "$1" + sep + "$2");
     　　}
    
     　　if((s[1] || '').length < prec) {
        　　 s[1] = s[1] || '';
         　　s[1] += new Array(prec - s[1].length + 1).join('0');
     　　}
      　　　　return s.join(dec);
};

export default numberFormat;