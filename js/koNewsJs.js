window.onload=function(){
    let title=document.getElementById('title');
    title.style.fontSize='40px';
    title.style.textAlign='left';
    title.style.marginTop='90px';

    let write_text='<p>이정은 기자 | 2023.12.17 12:00</p>';
    let write=document.getElementById('write');
    write.innerHTML=write_text;
    write.style.margin='50px 0';

    let content_text='<p>[환경일보] 환경부(장관 한화진)는 ‘제3차 국가 기후위기 적응 강화대책’의 이행점검을 위한 제3기 국민평가단을 구성하고 12월 18일 코엑스(서울 강남구)에서 발족식을 개최한다. <br><br>국민평가단은 기후위기 적응대책에 국민의 참여를 늘리고 국민의 눈높이에 맞는 정책을 수립하기 위해 2021년부터 도입됐다.<br><br>19세 이상 국민 50명으로 구성되며, 이번 제3기 평가단은 기후위기 적응정책에 대한 이해도와 전문성을 높이기 위해 올해 7월부터 11월까지 운영된 ‘기후위기 적응 교육과정’ 수료자를 중심으로 선정됐다.<br><br>2023년 6월 19세 이상 국민대상 공개 모집(총 280명 지원)을 통해 지역, 성별, 연령 등 고려해 100명을 선정, 부문별 기후위기 영향 및 대책 등 적응 전반에 대해 교육했다.<br><br>제3기 국민평가단은 올해 12월부터 내년 4월까지 활동하며, 올해 6월에 수립된 ‘제3차 국가 기후위기 적응 강화대책’의 2023년도 추진상황을 정부와 함께 점검한다.<br><br>국민평가단은 정책현장 방문, 분과별 검토 등 활동을 통해 적응대책 전반에 대한 의견을 제시하고, 국민체감형 정책과제를 평가하고 우수과제를 선정한다.<br><br>국민평가단이 참여한 ‘제3차 국가 기후위기 적응 강화대책’의 2023년도 추진상황 점검결과는 내년 상반기 중에 2050 탄소중립녹색성장위원회 심의를 거쳐 공개된다.<br><br>이영석 환경부 기후변화정책관은 “기후위기는 국민의 생활과 안전에 큰 영향을 미치는 만큼 국가 적응대책에 대해 국민 눈높이에 맞는 평가가 이뤄져야 한다”며, “국민평가단 운영을 통해서 국가 기후위기 적응대책의 국민체감성과 실효성을 높여 가겠다”라고 밝혔다.</p>';
    let content=document.getElementById('content');
    content.innerHTML=content_text;
    content.style.fontSize='20px';

    let img=document.getElementById('image');
    img.src='/web/image/content.jpg';
    img.alt="그림이 존재하지 않습니다.";
    img.height=450;
    img.width=600;

    let a1=document.getElementById('a1');
    a1.innerHTML='“누구와 무엇을 위한 스마트 에코시티인가?”';
    a1.href='https://www.hkbs.co.kr/news/articleView.html?idxno=737581';
    let a2=document.getElementById('a2');
    a2.innerHTML='차량용 요소수 물량 추가 확보';
    a2.href='https://www.hkbs.co.kr/news/articleView.html?idxno=737810';
    let a3=document.getElementById('a3');
    a3.innerHTML='신규 플라스틱 사용 억제로 탄소중립 기여';
    a3.href='https://www.hkbs.co.kr/news/articleView.html?idxno=737809';

    document.querySelector('h3').style['color']='#ebca1c';

    document.body.style['background-color']= '#f7f2d7';
};