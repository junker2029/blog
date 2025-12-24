(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(t){if(t.ep)return;t.ep=!0;const o=r(t);fetch(t.href,o)}})();const d=()=>`
    <header class="glass-panel" style="position: sticky; top: 1rem; margin: 1rem auto; padding: 1rem 2rem; display: flex; justify-content: space-between; align-items: center; max-width: 1200px; z-index: 100;">
      <a href="/" style="font-family: var(--font-heading); font-size: 1.5rem; font-weight: 700; color: var(--color-text-primary); display: flex; align-items: center; gap: 0.5rem;">
        <span style="color: var(--color-accent);">Antigravity</span> Blog
      </a>
      <nav>
        <ul style="display: flex; gap: 2rem; list-style: none;">
          <li><a href="#" style="font-weight: 500;">홈</a></li>
          <li><a href="#" style="font-weight: 500;">기술</a></li>
          <li><a href="#" style="font-weight: 500;">디자인</a></li>
          <li><a href="#" class="btn btn-primary" style="padding: 0.5rem 1rem;">구독하기</a></li>
        </ul>
      </nav>
    </header>
  `,p=e=>`
    <article class="glass-panel" style="overflow: hidden; transition: transform var(--transition-smooth), box-shadow var(--transition-smooth); cursor: pointer; display: flex; flex-direction: column; height: 100%;">
      <div style="height: 12rem; overflow: hidden; position: relative;">
        ${e.image?`<img src="${e.image}" alt="${e.title}" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s ease;" />`:`<div style="width: 100%; height: 100%; background: ${e.imageColor||"linear-gradient(45deg, #3b82f6, #8b5cf6)"};"></div>`}
        <div style="position: absolute; top: 1rem; left: 1rem; background: rgba(30, 41, 59, 0.8); backdrop-filter: blur(4px); padding: 0.25rem 0.75rem; border-radius: 9999px; font-size: 0.875rem; color: #e2e8f0; border: 1px solid rgba(255,255,255,0.1);">
          ${e.category}
        </div>
      </div>
      <div style="padding: 1.5rem; flex: 1; display: flex; flex-direction: column;">
        <span style="color: var(--color-accent); font-size: 0.875rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 0.5rem;">${e.category}</span>
        <h3 style="font-size: 1.25rem; font-weight: 700; margin-bottom: 0.75rem; color: var(--color-text-primary);">${e.title}</h3>
        <p style="color: var(--color-text-secondary); font-size: 0.95rem; line-height: 1.6; margin-bottom: 1.5rem; flex: 1;">${e.excerpt}</p>
        <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid var(--color-border); padding-top: 1rem; margin-top: auto;">
            <div style="display: flex; align-items: center; gap: 0.5rem;">
                <div style="width: 2rem; height: 2rem; border-radius: 50%; background: #334155;"></div>
                <span style="font-size: 0.875rem; color: var(--color-text-secondary);">${e.author}</span>
            </div>
            <span style="font-size: 0.85rem; color: var(--color-text-secondary);">${e.date}</span>
        </div>
      </div>
    </article>
  `,c=()=>`
    <footer style="border-top: 1px solid var(--color-border); margin-top: 4rem; padding: 3rem 0; background: var(--color-bg-secondary);">
      <div class="container" style="text-align: center;">
        <h3 style="margin-bottom: 1rem; color: var(--color-text-primary);">Antigravity 블로그</h3>
        <p style="color: var(--color-text-secondary); margin-bottom: 2rem;">최신 기술 트렌드와 디자인 인사이트를 공유합니다.</p>
        <div style="display: flex; justify-content: center; gap: 1.5rem; margin-bottom: 2rem;">
            <a href="#" style="color: var(--color-text-secondary);">트위터</a>
            <a href="#" style="color: var(--color-text-secondary);">깃허브</a>
            <a href="#" style="color: var(--color-text-secondary);">링크드인</a>
        </div>
        <p style="font-size: 0.875rem; color: var(--color-text-primary); opacity: 0.5;">&copy; 2025 Antigravity. All rights reserved.</p>
      </div>
    </footer>
  `,m=[{id:1,category:"기술",title:"2025년 웹 개발 트렌드: 무엇을 준비해야 할까?",excerpt:"AI 중심의 개발 도구부터 더 빨라진 빌드 시스템까지, 올해 주목해야 할 프론트엔드 생태계의 변화를 심층 분석합니다.",author:"김개발",date:"2025년 3월 15일",imageColor:"linear-gradient(135deg, #6366f1, #a855f7)",content:`
      <p>여기에 본문 내용을 작성합니다. 줄바꿈을 포함하여 긴 글을 쓸 수 있습니다.</p>
      <p>HTML 태그를 직접 사용할 수도 있습니다.</p>
    `},{id:2,category:"디자인",title:"사용자 경험을 극대화하는 마이크로 인터랙션",excerpt:"작은 움직임이 큰 차이를 만듭니다. 버튼 클릭부터 페이지 전까지, 사용자를 매료시키는 디테일한 애니메이션 가이드.",author:"이디자",date:"2025년 3월 12일",imageColor:"linear-gradient(135deg, #ec4899, #f43f5e)"},{id:3,category:"기술",title:"Vite와 함께하는 모던 자바스크립트 프로젝트",excerpt:"복잡한 설정 없이 바로 시작하는 가볍고 빠른 개발 환경 구축하기. 초보자도 쉽게 따라할 수 있는 단계별 튜토리얼.",author:"박코딩",date:"2025년 3월 10일",imageColor:"linear-gradient(135deg, #3b82f6, #06b6d4)"},{id:4,category:"인사이트",title:"생산성을 높이는 AI 코딩 어시스턴트 활용법",excerpt:"단순 반복 작업은 이제 그만. AI를 활용하여 창의적인 문제 해결에 집중하는 방법과 추천 도구를 소개합니다.",author:"최지능",date:"2025년 3월 05일",imageColor:"linear-gradient(135deg, #10b981, #3b82f6)"},{id:5,category:"라이프스타일",title:"개발자를 위한 데스크 셋업 가이드",excerpt:"장시간 코딩에도 건강을 지키는 인체공학적 의자와 모니터 배치, 그리고 집중력을 높이는 조명 설정 팁.",author:"건강왕",date:"2025년 2월 28일",imageColor:"linear-gradient(135deg, #f59e0b, #d97706)"},{id:6,category:"디자인",title:"다크 모드 디자인의 핵심 원칙",excerpt:"단순한 색상 반전을 넘어, 눈이 편안하고 가독성 높은 다크 모드 UI를 설계하는 방법을 알아봅니다.",author:"어둠의자식",date:"2025년 2월 20일",imageColor:"linear-gradient(135deg, #64748b, #475569)"},{id:7,category:"공지사항",title:"Antigravity 블로그에 오신 것을 환영합니다!",excerpt:"이것은 샘플 포스트입니다. 데이터 파일(src/data/posts.js)을 수정하여 여러분만의 이야기를 시작해보세요.",author:"관리자",date:"2025년 12월 24일",imageColor:"linear-gradient(135deg, #f472b6, #db2777)",content:`
      <p>안녕하세요! 이것은 샘플 포스트입니다.</p>
      <p>여러분의 블로그가 성공적으로 배포되었습니다. 이제 <code>src/data/posts.js</code> 파일을 열어서 이 내용을 지우고 새로운 내용을 작성해 보세요.</p>
      <h3>글 작성 팁</h3>
      <ul>
        <li>HTML 태그를 사용할 수 있습니다.</li>
        <li>이미지 그라데이션 색상을 변경하여 분위기를 바꿀 수 있습니다.</li>
      </ul>
    `},{id:8,category:"사진",title:"이미지가 포함된 포스트 예시",excerpt:"이제 블로그에 멋진 커버 이미지를 추가할 수 있습니다. 이미지를 넣는 방법을 확인해보세요.",author:"관리자",date:"2025년 12월 25일",image:"/blog/images/tech.png",content:`
      <p>커버 이미지가 적용된 포스트입니다.</p>
      <p>본문에도 이미지를 넣을 수 있습니다:</p>
      <img src="/blog/images/design.png" alt="샘플 이미지" style="width: 100%; border-radius: 8px; margin: 2rem 0;">
      <p>위와 같이 <code>&lt;img&gt;</code> 태그를 사용하여 본문 중간에 이미지를 삽입할 수 있습니다.</p>
    `}];let a={view:"home",postId:null};const g=()=>`
    ${d()}

<main class="container" style="padding-top: 4rem; padding-bottom: 4rem;">
  <section style="text-align: center; margin-bottom: 5rem; padding: 4rem 0;">
    <h1 style="font-size: 3.5rem; font-weight: 800; margin-bottom: 1.5rem; background: linear-gradient(to right, #fff, #94a3b8); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
      혁신적인 아이디어의 시작
    </h1>
    <p style="font-size: 1.25rem; color: var(--color-text-secondary); max-width: 600px; margin: 0 auto 2.5rem;">
      기술, 디자인, 그리고 미래에 대한 깊이 있는 이야기를 나눕니다.<br>
        매주 새로운 인사이트를 만나보세요.
    </p>
    <div style="display: flex; justify-content: center; gap: 1rem;">
      <button class="btn btn-primary" style="font-size: 1.1rem; padding: 1rem 2rem;">최신 글 보기</button>
      <button class="btn" style="background: rgba(255,255,255,0.1); color: white; border: 1px solid rgba(255,255,255,0.2);">뉴스레터 신청</button>
    </div>
  </section>

  <section>
    <div style="display: flex; justify-content: space-between; align-items: end; margin-bottom: 2rem;">
      <h2 style="font-size: 2rem; margin-bottom: 0;">최신 포스트</h2>
      <a href="#" style="font-weight: 500;">전체 보기 &rarr;</a>
    </div>

    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 2rem;">
      ${m.map(e=>`
                <div class="post-link" data-id="${e.id}">
                  ${p(e)}
                </div>
              `).join("")}
    </div>
  </section>
</main>

    ${c()}
`,f=e=>{const i=m.find(r=>r.id===parseInt(e));return i?`
    ${d()}
    ${PostDetail(i)}
    ${c()}
`:g()},l=()=>{const e=document.querySelector("#app");a.view==="home"?e.innerHTML=g():a.view==="detail"&&(e.innerHTML=f(a.postId)),y()},y=()=>{document.querySelectorAll('a[href="#"]').forEach(r=>{r.addEventListener("click",n=>n.preventDefault())}),document.querySelectorAll(".post-link").forEach(r=>{r.addEventListener("click",n=>{const t=r.dataset.id;a.view="detail",a.postId=t,window.scrollTo(0,0),l()})});const e=document.getElementById("back-home");e&&e.addEventListener("click",r=>{r.preventDefault(),a.view="home",a.postId=null,window.scrollTo(0,0),l()});const i=document.querySelector('header a[href="/"]');i&&i.addEventListener("click",r=>{r.preventDefault(),a.view="home",l()})};l();
