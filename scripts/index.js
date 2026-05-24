/**
 * GitHub Repository Phishing Alert Appeal & Project Verification
이 페이지는 깃허브에서 발생한 피싱 경고 오탐지(False Positive)를 해명하고, 해당 코드가 순수한 학습 및 포트폴리오용임을 증명하기 위해 작성되었습니다.
 * PROJECT: Portfolio Prototype
 * WARNING: This script does not process real transactions or user credentials.
 * All functions are for demonstration purposes only.
 */


// header 스크롤 이벤트
const header = document.querySelector('#wrap header');
//console.log(header);

window.addEventListener('scroll',function(){
    //스크롤 100px 이상 내려가면
    if(window.scrollY >= 200){
        header.classList.add('scroll');
    }else{
        header.classList.remove('scroll');
    }
});


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

// active 적용/해제 함수
function activeFunc(target){
    for(let i of gnbTitle) i.classList.remove('active');
    return target.classList.add('active');
}

// 스크롤시 해당하는 섹션에 도착하면 gnb active 됨
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


// 그래픽 디자인 swiper
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

// 영상 swiper
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


// ===================  그래픽 & 영상 팝업 효과
const body = document.querySelector('body');

// 그래픽 팝업
const graphicA = document.querySelectorAll('.grap_project a');
const graPopup = document.querySelector('.popup_bg_i');
const graTitle = document.querySelector('.popup_bg_i .p_title');
const graTag = document.querySelector('.popup_bg_i .p_tag');
const graPlan = document.querySelector('.popup_bg_i .p_plan');
const graImg = document.querySelector('.popup_bg_i .popup_img img');
//console.log(graphicA, graPopup, graTitle, graTag, graPlan, graImg);

// 그래픽 팝업 내용
const portGraphic = [{
    src: 'images/works/popup_01.jpg',
    w: 800,
    h: 90,
    title: '3단 리플렛',
    tag: 'Photoshop, Illustrator',
    plan: '뜨개 브랜드인 「 바늘이야기 」를 소개하는 3단 리플렛 디자인입니다. 브랜드 컬러인 주황색을 중심으로 전체적인 톤을 구성했으며, 바늘이야기를 처음 접하는 사람들도 브랜드의 분위기와 특징을 자연스럽게 이해할 수 있도록 디자인했습니다.',
},{
    src:'images/works/popup_02.jpg',
    w: 600,
    h: 90,
    title: '상세페이지',
    tag: 'Photoshop, Freepik AI',
    plan: '「 일리 」 커피 원두를 주제로 제작한 상세페이지 디자인입니다. 브랜드 컬러인 레드를 포인트 컬러로 활용했으며, 베이지 톤의 배경을 함께 사용해 부드러운 분위기와 조화를 이루도록 디자인했습니다. 또한 메인에 사용된 커피 이미지는 AI를 활용해 제작했습니다.',
},{
    src: 'images/works/popup_03.jpg',
    w: 600,
    h: 90,
    title: '상세페이지',
    tag: 'Photoshop, Illustrator',
    plan: '한강 작가의 「 채식주의자 」 도서를 주제로 제작한 상세페이지 디자인입니다. 책 표지의 색감을 참고하여 전체적인 무드를 구성했으며, 작품의 분위기에 맞게 차분하고 몽환적인 느낌으로 디자인했습니다.',
},{
    src: 'images/works/popup_04.jpg',
    w: 600,
    h: 85,
    title: '이벤트 팝업',
    tag: 'Photoshop, Illustrator, Freepik AI',
    plan: '「 두바이 쫀득 쿠키 」 를 주제로 제작한 이벤트 팝업 디자인입니다. 중앙에 제품 이미지를 크게 배치해 시선을 유도하였고, 장식적인 일러스트 문양 요소를 함께 활용해 디자인의 완성도를 높였습니다. 또한 메인에 사용된 제품 이미지는 AI를 활용해 제작했습니다.',
},{
    src: 'images/works/popup_05.jpg',
    w: 550,
    h: 90,
    title: '포스터',
    tag: 'Illustrator',
    plan: '「 인천 청년도약기지 」 사업 참여자 모집을 주제로 제작한 인포그래픽 포스터 디자인입니다. 청년이 성장하는 이미지를 전달할 수 있도록 일러스트 요소를 활용했으며, 다양한 정보를 한눈에 보기 쉽도록 레이아웃과 가독성을 고려하여 디자인했습니다.',
},{
    src: 'images/works/popup_06.jpg',
    w: 500,
    h: 80,
    title: 'SNS 이벤트 배너',
    tag: 'Photoshop, Freepik AI',
    plan: '「 ZEROID 」 선크림 제품을 활용해 제작한 SNS 이벤트 배너 디자인입니다. 오늘의 특가 콘셉트에 맞춰 33% 할인 정보를 강조해 구성했으며, 중앙에는 AI를 활용해 제품 이미지를 크게 배치해 시선을 유도했습니다.',
}
];

// 그래픽 팝업 클릭이벤트
for(let ga of graphicA){
    ga.addEventListener('click', function(e){
        e.preventDefault();
        const index = ga.dataset.index;
        body.style.overflow = 'hidden';
        graPopup.style.display = 'block';
        //왼쪽 이미지
        graImg.src = portGraphic[index].src;
        graImg.parentElement.style.width = portGraphic[index].w+'px';
        graImg.parentElement.style.height = portGraphic[index].h+'vh';
        //오른쪽 설명
        graTitle.textContent = portGraphic[index].title;
        graTag.textContent = portGraphic[index].tag;
        graPlan.textContent = portGraphic[index].plan;
    })
}

// 그래픽 팝업 닫기
graPopup.addEventListener('click', function(){
    graPopup.style.display = 'none';
    body.style.overflow = 'auto';
});

// 영상 팝업
const videoA = document.querySelectorAll('.video_project a');
const videoPopup = document.querySelector('.popup_bg_v');
const videoTitle = document.querySelector('.popup_bg_v .p_title');
const videoTag = document.querySelector('.popup_bg_v .p_tag');
const videoPlan = document.querySelector('.popup_bg_v .p_plan');
const videoFrame = document.querySelector('.popup_bg_v iframe');
//console.log(videoA, videoPopup, videoTitle, videoTag, videoPlan, videoFrame);

// 영상 팝업 내용
const portVideo = [{
    src: 'https://www.youtube.com/embed/uct20GlATOk',
    w: 500,
    h: 80,
    title: '숏폼 콘텐츠',
    tag: 'Premiere Pro, After Effects',
    plan: '「 우딘 」 인턴 근무 당시 제작한 숏폼 콘텐츠입니다. 청계천에 설치된 「 커넥천 파빌리온 」 구조물을 주제로 제작했으며, 현장에서 직접 영상과 사진을 촬영해 작업물에 활용했습니다. 짧은 영상 안에서도 우딘의 전문성과 기술력이 자연스럽게 전달될 수 있도록 연출했습니다.',
},{
    src: 'https://www.youtube.com/embed/cZ7jnEh35HI',
    w: 900,
    h: 70,
    title: '프로모션 영상',
    tag: 'After Effects, Photoshop, Firefly',
    plan: '「 배스킨라빈스 」 7월 이달의 맛 프로모션을 주제로 제작한 모션그래픽 콘텐츠입니다. 재치 있는 언어유희 타이포그래피를 활용해 영상에 재미 요소를 더했으며, 여름 시즌에 어울리는 시원하고 감각적인 분위기로 구성했습니다. Firefly를 활용해 현실감 있는 콘 아이스크림을 AI로 제작했습니다.',
},{
    src: 'https://www.youtube.com/embed/osl5rZtxhmY?feature=share',
    w: 500,
    h: 80,
    title: '숏폼 콘텐츠',
    tag: 'Premiere Pro, After Effects',
    plan: '「 우딘 」 인턴 근무 당시 제작한 숏폼 콘텐츠이며, SNS 업로드 영상 중 약 14만회 이상의 높은 조회수를 기록했습니다. 브랜드의 전통성과 공장의 규모감을 짧은 영상 안에서 효과적으로 전달하는 데 중점을 두었으며, BGM의 리듬에 맞춰 타이포그래피와 화면 전환이 자연스럽게 이어지도록 구성했습니다.',
},{
    src: 'https://www.youtube.com/embed/iKj92yBiVL4',
    w: 900,
    h: 70,
    title: '브랜딩 모션그래픽',
    tag: 'Premiere Pro, After Effects',
    plan: '「 POLO 」 의 클래식한 감성과 현대적인 무드를 표현한 브랜딩 모션그래픽 콘텐츠입니다. After Effects를 중심으로 제작했으며, 애니메이션을 활용해 요소들을 리듬감 있게 배치하고 부드러운 모션을 구현했습니다. 특히 모서리가 둥근 사각형 박스 모듈 안에 영상 소스를 배치해 각 장면이 독립적으로 보이면서도 유기적으로 연결될 수 있도록 구성했습니다. ',
},{
    src: 'https://www.youtube.com/embed/BiUw6L2afos?feature=share',
    w: 600,
    h: 90,
    title: '모션 포스터',
    tag: 'After Effects, Illustrator',
    plan: '「 제로 웨이스트 」 의 개념과 실천 방법을 전달하기 위해 제작한 세로형 모션 인포그래픽 포스터입니다. 위에서 아래로 자연스럽게 이어지는 수직형 3단 구조를 활용해 정보의 흐름과 집중도를 유지했으며, 모션그래픽을 통해 환경 보호 메시지가 보다 쉽고 흥미롭게 전달될 수 있도록 제작했습니다.',
}];

// 영상 팝업 클릭이벤트
for(let vd of videoA){
    vd.addEventListener('click', function(e){
        e.preventDefault();
        const index = vd.dataset.index;
        body.style.overflow = 'hidden';
        videoPopup.style.display = 'block';
        //왼쪽 영상
        videoFrame.src = portVideo[index].src;
        videoFrame.style.width = portVideo[index].w + 'px';
        videoFrame.style.height = portVideo[index].h + 'vh';
        //오른쪽 설명
        videoTitle.textContent = portVideo[index].title;
        videoTag.textContent = portVideo[index].tag;
        videoPlan.textContent = portVideo[index].plan;
    })
}

//영상 팝업 닫기
videoPopup.addEventListener('click', function(){
    videoPopup.style.display = 'none';
    body.style.overflow = 'auto';
    videoFrame.src = '';
});