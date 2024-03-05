

window.onload=function(){
    document.body.style.backgroundColor='#e6fae6';

    let main_header=document.getElementById('main-header');
    main_header.style.margin='90px 0';

    for (let i = 1; i <= 4; i++) {
        let img = document.getElementById('i' + i);
        img.width=130;
        img.height=130;
        img.style.float='left'; /*수평 정렬*/
        img.style.marginRight='30px';

        if (img == document.getElementById('i1')) {    
            img.src='/web/image/paper.png';                
        } else if (img == document.getElementById('i2')) {
            img.src='/web/image/glass.png'; 
        }  else if (img == document.getElementById('i3')) {
            img.src='/web/image/plastic.png'; 
        } else if (img == document.getElementById('i4')) {
            img.src='/web/image/can.png'; 
        };
    }

    let button=document.querySelector('button');
    button.style.width='650px';
    button.style.height='50px';
    button.style.borderRadius='20px';
    button.style.backgroundColor='#39ad4d';
    button.style.fontSize='25px';
};

function checkQuiz() { /*인라인 이벤트 모델*/
    alert('정답: O X X X\n');
    let answer=document.getElementById('answer');
    answer.innerHTML='<h4>A1. 부피가 클 경우 대형 폐기물 신고 후 배출 수수료를 납부해야합니다.<br><br>A2. 염분이 많은 장류를 음식물 쓰레기에 포함되지 않습니다.<br><br>A3. 칫솔은 플라스틱류가 아닌 일반 쓰레기로 분류해야 합니다. <br><br>A4. 유리그릇은 재활용이 되지만 도자기와 사기는 일반 쓰레기입니다.</h4>';

};