/*
    * 나이
        8세 미만이면 "미취학아동", 8세~13세 "초등학생"
        14~19세 "중, 고등학생", 20세이상 "일반인"
    * 입장료 
        - 미취학아동 : 1000원
        - 초등학생 : 2000원
        - 중학생 : 2500원
        - 고등학생 : 3000원
*/

//입력(저장) - 변수 생성
var age = prompt("나이를 입력하세요", '5');    //나이
var charge = 0;  //입장료(초기화)

//처리 및 출력
if(age == null){
    document.write("입력이 취소되었습니다.");
}
else{
    if(age >= 0 && age < 8){
        document.write("<p>미취학 아동입니다.</p>");
        charge = 1000;
    }else if(age >= 8 && age < 14){
        document.write("<p>초등 학생입니다.</p>");
        charge = 2000;
    }else if(age >= 14 && age < 20){
        document.write("<p>중,고등 학생입니다.</p>");
        charge = 2500;
    }else if(age >= 20 && age < 80){
        document.write("<p>일반인 입니다.</p>");
        charge = 3000;
    }else{
        document.write("입력 범위를 초과했습니다.");
    }
    
    document.write("<p>입장료는 <span class='access'>" + charge + "원</span> 입니다.</p>");
}





