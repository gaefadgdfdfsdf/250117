
document.addEventListener('DOMContentLoaded', function() {
    const divs = document.querySelectorAll('#hyundai div');
    
    divs.forEach(function(div, index) {
        // 각 div의 애니메이션 딜레이 설정
        div.style.animationDelay = `${index * 0.1}s`; // 0.1초씩 딜레이를 주어 하나씩 순차적으로 올라오게
    });
});


