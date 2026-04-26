/**
 * GitHub Repository Phishing Alert Appeal & Project Verification
이 페이지는 깃허브에서 발생한 피싱 경고 오탐지(False Positive)를 해명하고, 해당 코드가 순수한 학습 및 포트폴리오용임을 증명하기 위해 작성되었습니다.
 * PROJECT: Portfolio Prototype
 * WARNING: This script does not process real transactions or user credentials.
 * All functions are for demonstration purposes only.
 */


// header gnb 클릭 -> 해당 섹션으로 이동
const gnbTitle = document.querySelectorAll('#gnb a');
const gnbContent = document.querySelectorAll('main section');

//console.log(gnbTitle,gnbContent);

let clickScroll = false; //기본 상태 false

for(let title of gnbTitle){
    //console.log(title); //개별출력확인
    title.addEventListener('click',function(e){
        e.preventDefault();
        //console.log('클릭확인');
        //클릭한 제목에 관한 내용으로 스크롤 이동하기
        //console.log(e.currentTarget.dataset.index);//data-index
        const i = e.currentTarget.dataset.index;
        clickScroll = true; //클릭하면 true
        activeFunc(e.currentTarget); //active 적용
        window.scrollTo({
            top: gnbContent[i].offsetTop,
            behavior: 'smooth'/* 부드럽게 스크롤 */
        });
        //일정 시간 후 scroll 이벤트 다시 허용
        setTimeout(() => {
            clickScroll = false; //다시 false로 변경
        }, 500); // 0.5초 정도 scroll 이벤트 무시 (버벅거리는 문제해결)
    })
}

//active 적용/해제 함수
function activeFunc(target){
    for(let i of gnbTitle) i.classList.remove('active');
    return target.classList.add('active');
}

//스크롤시 해당하는 섹션에 도착하면 gnb active 됨
window.addEventListener('scroll', function () { //스크롤 이벤트
    if (clickScroll) return;
    let scrollY = window.scrollY; //스크롤 px값
    //console.log(scrollY);
    gnbContent.forEach((section, index) => {
        const sectionTop = section.offsetTop - 100; //섹션 시작 위치
        const sectionHeight = section.offsetHeight; //섹션 높이
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            //섹션 시작보다 아래에 있거나, 섹션 끝보다 위에 있으면
            //즉, 섹션 범위 안에 있으면
            activeFunc(gnbTitle[index]); //해당 메뉴에 active 넣기
        }
    });
});



//1. 그래픽 영역 부모 안 a(1)를 클릭 시(href#처리)
//2. 클릭한 a안에 이미지 경로를 인식(저장)
//3. 숨긴 팝업(2)을 보이게 하면서
//4. 팝업안에 이미지 경로에 클릭한 a의 이미지경로를 대입
//5. 팝업 영역 또는 팝업 안 X버튼(3) 클릭 시
//6. 팝업 숨기기
// const graphic_project_a = document.querySelectorAll('.graphic_container a');
// const graphic_popup = document.querySelector('.graphic_popup_bg');
// const graphic_popup_close = document.querySelector('#close');

// console.log(graphic_project_a, graphic_popup, graphic_popup_close);

// console.log(graphic_project_a[0].children[0].src);
// console.log(graphic_popup.children[0].children[1].src);
// console.log(graphic_popup_close.parentNode.parentNode.parentNode);

// function graphic_func(event, index, w=80, h=60){ //1
//     event.preventDefault() //a태그의 href 기본기능 막기함수
//     //console.log('클릭테스트');
//     let aSrc = graphic_project_a[index].children[0].src; //2
//     graphic_popup.style.display = 'block'; //3
//     graphic_popup.children[0].children[1].src = aSrc; //4
//     //실행 그래픽이미지에 맞는 비율로 팝업 비율 조정하기
//     graphic_popup.children[0].style.width = w+'%'; // == `${w}%`
//     graphic_popup.children[0].style.height = h+'vh'; // == `${h}vh`
//     //팝업이 실행됐을 때 뒤쪽 body의 전체 스크롤을 막기
//     document.body.style.overflow = 'hidden';
// }
// graphic_project_a[0].addEventListener('click',function(e){graphic_func(e, 0, 60, 90)})
// graphic_project_a[1].addEventListener('click',function(e){graphic_func(e, 1, 30, 80)})
// graphic_project_a[2].addEventListener('click',function(e){graphic_func(e, 2, 30, 90)})
// graphic_project_a[3].addEventListener('click',function(e){graphic_func(e, 3, 20, 70)})
// graphic_project_a[4].addEventListener('click',function(e){graphic_func(e, 4, 30, 80)})
// graphic_project_a[5].addEventListener('click',function(e){graphic_func(e, 5, 40, 90)})

// graphic_popup_close.addEventListener('click',function(){ //5
//     graphic_popup_close.parentNode.parentNode.parentNode.style.display = 'none'; //6
//     document.body.style.overflow = 'auto';
// })