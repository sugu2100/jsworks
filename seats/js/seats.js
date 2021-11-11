//자리배치도 프로그램

var customerNum = prompt("입장객은 몇 명인가요?"); //입장객
var columnNum = prompt("한 줄에 몇명 앉나요?");    //열
var rowNum = 0;       //줄(행)

// 처리 : 좌석 줄(행)수 = 입장객 / 좌석 열수
if(customerNum == null || columnNum == null){
    document.write("입력이 취소되었습니다.");
}
else{
    if(customerNum % columnNum == 0){ //나누어 떨어지면
        rowNum = customerNum / columnNum;
    }
    else{ //나머지가 있으면
        rowNum = parseInt(customerNum / columnNum) + 1;
    }

    //document.write(rowNum + "개의 줄이 필요합니다.");
}

//중첩 for로 자리 배치
document.write("<table>");
for(var i = 0; i < rowNum; i++){
    document.write("<tr>");
    for(var j = 1; j <= columnNum; j++){
        var seatNum = i * columnNum + j;   //예 입장객(33) 자리(33)
        if(seatNum > customerNum) break;
        document.write("<td>좌석" + seatNum + "</td>");
    }
    document.write("</tr>");
}
document.write("</table>");