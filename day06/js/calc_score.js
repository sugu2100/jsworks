//성적 계산
//자료 입력 - 국어, 수학점수
var score = [
    [80, 70],
    [90, 60],
    [70, 75],
    [100, 90],
    [85, 70]
]
var korSum = 0;
var mathSum = 0;

//점수 합계
for(var i = 0; i < score.length; i++){
    korSum += score[i][0];
}

document.write(korSum);
