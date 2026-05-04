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


//그래픽 디자인 swiper
const graphicSlide = document.querySelector('.graphic_wrap .swiper');
//console.log(graphicSlide);

const graphicSwiper = new Swiper(graphicSlide,{
    loop:true,
    autoplay:{
        delay:3000,
        //마우스 올라가면 일시정지(true)
        pauseOnMouseEnter: true,
    },
    speed:1000,
    spaceBetween: 20,
    slidesPerView: 3,
    navigation:{
        prevEl:'.graphic_wrap .gra-prev',
        nextEl:'.graphic_wrap .gra-next',
    },
})

//영상 swiper
const videoSlide = document.querySelector('.video_wrap .swiper');
//console.log(videoSlide);

const videoSwiper = new Swiper(videoSlide,{
    loop:true,
    autoplay:{
        delay:3000,
        pauseOnMouseEnter: true,
    },
    speed:1000,
    spaceBetween: 20,
    slidesPerView: 3,
    navigation:{
        prevEl:'.video_wrap .vd-prev',
        nextEl:'.video_wrap .vd-next',
    },
})


//팝업 JS
const portGraphic = [{
    //클릭했을때 팝업 이미지
    src: 'images/works/popup_01.jpg',
    //컨텐츠 가로 크기
    w: 40,
    //컨텐츠 세로 크기
    h: 90,
},{
    src:'images/works/popup_02.jpg',
    w: 30,
    h: 90,
},{
    src: 'images/works/popup_03.jpg',
    w: 40,
    h: 90,
},{
    src: 'images/works/popup_04.png',
    w: 30,
    h: 90,
},{
    src: 'images/works/popup_05.jpg',
    w: 30,
    h: 90,
}
];
const portVideo = [
    'https://www.youtube.com/embed/uct20GlATOk',
    'https://www.youtube.com/embed/cZ7jnEh35HI',
    'https://www.youtube.com/embed/osl5rZtxhmY?feature=share',
    'https://www.youtube.com/embed/iKj92yBiVL4',
    'https://www.youtube.com/embed/BiUw6L2afos?feature=share',
];

const graphicA = document.querySelectorAll('.grap_project a');
const graphicPopup = document.querySelector('.popup_bg_i');
const videoA = document.querySelectorAll('.video_project a');
const videoPopup = document.querySelector('.popup_bg_v');
//console.log(graphicA, graphicPopup, videoA, videoPopup);

//그래픽 팝업 클릭이벤트
for(let ga of graphicA){
    ga.addEventListener('click', function(){
        graphicPopup.style.display = 'block'; //컨텐츠 보이기
        graphicPopup.children[0].children[0].src = portGraphic[ga.dataset.index].src;
        graphicPopup.children[0].style.width = portGraphic[ga.dataset.index].w+'%';
        graphicPopup.children[0].style.height = portGraphic[ga.dataset.index].h+'vh';
        document.body.style.overflow = 'hidden'; //body 영역 스크롤 안되게 설정
    })
}

//비디오 팝업 클릭이벤트
for(let vd of videoA){
    vd.addEventListener('click', function(){
        videoPopup.style.display = 'block';
        videoPopup.children[0].children[0].src = portVideo[vd.dataset.index];
        document.body.style.overflow = 'hidden';
    })
}

const popupGaClose = document.querySelector('.close_ga');
const popupVdClose = document.querySelector('.close_vd');

//그래픽 팝업 닫기
popupGaClose.addEventListener('click',function(){
    popupGaClose.parentNode.style.display = 'none'; 
    document.body.style.overflow = 'auto'; //body 영역 스크롤 다시 되게 초기화
})
//비디오 팝업 닫기
popupVdClose.addEventListener('click',function(){
    popupVdClose.parentNode.parentNode.style.display = 'none';
    document.body.style.overflow = 'auto';
})