window.onload=function(){
    let title=document.getElementById('title');
    title.style.fontSize='40px';
    title.style.textAlign='left';
    title.style.marginTop='90px';

    let write_text='<p>조지아나 래너드 기자, BBC 기후 전문기자 | 2023.12.12</p>';
    let write=document.getElementById('write');
    write.innerHTML=write_text;
    write.style.margin='50px 0';

    let content_text='<p>현재 아랍에미리트(UAE) 두바이에서 열리고 있는 제28차 유엔기후변화협약 당사국 총회(COP28)가 일부 국가들의 화석연료 관련 합의문 초안에 대한 격렬한 반발로 위험에 빠질 수도 있는 모습이다.<br><br>이들 국가는 합의문 초안 내용이 너무 “미약하다”고 주장한다.<br><br>지난번 초안과 달리 최근 초안에선 화석연료가 “단계적으로 퇴출”될 수 있다는 표현이 자취를 감췄다.<br><br>198개국의 만장일치로 결정되기에, 한 국가라도 반발할 경우 합의문은 없다.<br><br>인류의 화석연료 사용은 수백 명의 목숨을 위태롭게 하는 지구 온난화의 주범이지만, 국제 사회는 단 한 번도 화석연료 사용을 언제 혹은 어떻게 중단할지에 대해 합의한 바 없다.<br><br>유럽연합(EU)의 한 대표는 화석연료에 대한 표현이 빠진 이번 초안을 “용납할 수 없다”면서 EU는 이번 공동 선언문에서 빠질 수도 있다고 말했다.<br><br>EU 협상위원이자 아일랜드 환경부 장관인 에이먼 라이언은 “우리는 해당 초안을 받아들일 수 없다”면서도 기후 회담의 결렬이 “지금 이 세계에 필요한 결과는 아니”라고 덧붙였다.<br><br>역대 가장 따뜻한 한 해로 기록될 것으로 예상되는 올해, 기후 변화로 인한 영향의 최전선에 있는 국가들을 포함한 각국 정치인들은 갈수록 증가하는 기후 변화 문제에 대해 논의하고자 두바이에 모여 있다.<br><br>그리고 석유, 석탄, 가스 사용으로 인한 온실가스 배출에 관한 문제가 단연 이번 회담의 핵심이다.</p>';
    let content=document.getElementById('content');
    content.innerHTML=content_text;
    content.style.fontSize='20px';

    let img=document.getElementById('image');
    img.src='/web/image/contentEn.jpeg';
    img.alt="그림이 존재하지 않습니다.";

    let a1=document.getElementById('a1');
    a1.innerHTML='글로벌 기업들의 사회적 책임을 일깨우는 ‘에코바디스’';
    a1.href='https://www.bbc.com/korean/articles/cv2z7n2jq7ko';
    let a2=document.getElementById('a2');
    a2.innerHTML='수십 년 만에 "안전한" 피난처로 다시 돌아온 대왕고래';
    a2.href='https://www.bbc.com/korean/articles/cv2zkj1enp0o';
    let a3=document.getElementById('a3');
    a3.innerHTML='A23a: 세계 최대 크기 빙산, 30년 만에 움직여';
    a3.href='https://www.bbc.com/korean/articles/ckmpl8xkn8lo';

    document.querySelector('h3').style['color']='#ebca1c';

    document.body.style['background-color']= '#f7f2d7';
};