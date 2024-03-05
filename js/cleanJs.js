
window.onload=function(){
    document.body.style.backgroundColor='#e6fae6';

    let th0=document.getElementById('th0');
    th0.colSpan=2;
    th0.style.height='40px';
    th0.style.fontSize='25px';
    th0.style.backgroundColor='#bcf5c6';

    let ths=document.getElementsByClassName('th');
    for(let i=0;i<ths.length;i++){
        let th=ths[i];
        th.rowSpan=2;
    }

    let main_header=document.getElementById('main-header');
    main_header.style.margin='90px 0';

    let tableDatas=document.querySelectorAll('td');
    for(let i=0;i<tableDatas.length;i++){
        let tableData=tableDatas[i];
        tableData.style.height='70px';
        tableData.style.width='1200px';
        tableData.style.textAlign='justify';
        tableData.style.margin='0 20px';
    }

    let widthHeaders=document.getElementsByClassName('width');
    for(let i=0;i<widthHeaders.length;i++)
    {
        let widthHeader=widthHeaders[i];
        widthHeader.style.width='100px';
    }
   
    let main_footer=document.getElementById('main-footer');
    main_footer.style.marginTop='90px';

        for (let i = 1; i <= 6; i++) {
            let tdElement = document.getElementById('td' + i);
            
            tdElement.onclick = function() {
                if (tdElement == document.getElementById('td1')) {
                    tdElement.innerHTML = '테이블이나 의자 등에 묻은 가벼운 손때는 베이킹 소다를 살짝 뿌려 닦아낸 다음 구연산수를 스프레이로 뿌려 마무리한다.';
                    tdElement.style.backgroundColor='#f2f5da';
                } else if (tdElement == document.getElementById('td2')) {
                    tdElement.innerHTML = '후드나 가스레인지 등에 묻은 찌든 기름때는 비눗물을 뿌려 불린 다음 베이킹 소다를 뿌리고 아크릴 털실로 짠 수세미나 칫솔로 문지른 뒤 걸레로 닦아낸다.';
                    tdElement.style.backgroundColor='#f2f5da';
                } else if (tdElement == document.getElementById('td3')) {
                    tdElement.innerHTML = ' 수돗물에 들어 있는 칼슘 성분이 쌓이면서 생긴 때다. 쉽게 제거되지 않는 수도꼭지의 물때는 2~3배의 물로 희석한 식초수를 적신 키친타월을 둘둘 말아 2시간 정도 밀봉한 후 칫솔로 문질러 제거한다.';
                    tdElement.style.backgroundColor='#f2f5da';
                } else if (tdElement == document.getElementById('td4')) {
                    tdElement.innerHTML = '욕조는 베이킹 소다를 뿌리고 비눗물을 몇 방울 떨어뜨려 스펀지로 문지른다.';
                    tdElement.style.backgroundColor='#f2f5da';
                } else if (tdElement == document.getElementById('td5')) {
                    tdElement.style.backgroundColor='#f2f5da';
                    tdElement.innerHTML = '선반, 전등 갓, 창틀에 쌓인 끈적끈적한 먼지는 먼지에 기름이 달라붙었을 가능성이 크다. 소량의 비눗물과 베이킹 소다를 묻힌 헝겊으로 더러움을 두드리듯 닦아낸 후 구연산수를 뿌린 깨끗한 헝겊으로 닦아 중화시킨다.';
                } else if (tdElement == document.getElementById('td6')) {
                    tdElement.style.backgroundColor='#f2f5da';
                    tdElement.innerHTML = ' 타일 이음매의 재료는 알칼리성이다. 알칼리성 틈새에서는 곰팡이가 잘 생기지 않지만 점차 중성이 되면서 곰팡이가 피기 시작한다. 이음매 부분의 물기를 제거하고 곰팡이가 생긴 곳에 베이킹 소다를 뿌린 다음 칫솔로 문질러 곰팡이를 제거한다.';
                }
            };
        }
        
    
};
