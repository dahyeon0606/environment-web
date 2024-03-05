
window.onload=function(){
    let submit=document.getElementById('submit');
    
    submit.onclick=function(){
        let number=document.getElementById('number').value;
        let username = document.getElementById('username').value; /*경고창에 사용자가 입력한 정보를 출력하기 위해 찾은 속성*/
        if(username!=''&& number!=''){
            alert(username+'님, 신청이 완료되었습니다 :)\n추후에 문자를 통해 안내사항을 확인해주세요!');
        }
        else{
            let noneText=document.getElementById('noneText');
            alert('위 항목을 모두 채워주세요!');
            noneText.innerHTML='<h3>위 항목을 모두 채워주세요!</h3>';
            noneText.style.color='red';
            event.preventDefault(); /*sumit버튼은 무조껀 제출되기 때문에
            항목을 모두 입력하지 않았을 경우, 제출을 막아주는 메서드를 찾음*/
        }
    };

    
};   