import './style.css'
import { Header } from './components/Header.js'
import { PostCard } from './components/PostCard.js'
import { Footer } from './components/Footer.js'

// Mock Data
const posts = [
  {
    id: 1,
    category: '기술',
    title: '2025년 웹 개발 트렌드: 무엇을 준비해야 할까?',
    excerpt: 'AI 중심의 개발 도구부터 더 빨라진 빌드 시스템까지, 올해 주목해야 할 프론트엔드 생태계의 변화를 심층 분석합니다.',
    author: '김개발',
    date: '2025년 3월 15일',
    imageColor: 'linear-gradient(135deg, #6366f1, #a855f7)'
  },
  {
    id: 2,
    category: '디자인',
    title: '사용자 경험을 극대화하는 마이크로 인터랙션',
    excerpt: '작은 움직임이 큰 차이를 만듭니다. 버튼 클릭부터 페이지 전까지, 사용자를 매료시키는 디테일한 애니메이션 가이드.',
    author: '이디자',
    date: '2025년 3월 12일',
    imageColor: 'linear-gradient(135deg, #ec4899, #f43f5e)'
  },
  {
    id: 3,
    category: '기술',
    title: 'Vite와 함께하는 모던 자바스크립트 프로젝트',
    excerpt: '복잡한 설정 없이 바로 시작하는 가볍고 빠른 개발 환경 구축하기. 초보자도 쉽게 따라할 수 있는 단계별 튜토리얼.',
    author: '박코딩',
    date: '2025년 3월 10일',
    imageColor: 'linear-gradient(135deg, #3b82f6, #06b6d4)'
  },
  {
    id: 4,
    category: '인사이트',
    title: '생산성을 높이는 AI 코딩 어시스턴트 활용법',
    excerpt: '단순 반복 작업은 이제 그만. AI를 활용하여 창의적인 문제 해결에 집중하는 방법과 추천 도구를 소개합니다.',
    author: '최지능',
    date: '2025년 3월 05일',
    imageColor: 'linear-gradient(135deg, #10b981, #3b82f6)'
  },
  {
    id: 5,
    category: '라이프스타일',
    title: '개발자를 위한 데스크 셋업 가이드',
    excerpt: '장시간 코딩에도 건강을 지키는 인체공학적 의자와 모니터 배치, 그리고 집중력을 높이는 조명 설정 팁.',
    author: '건강왕',
    date: '2025년 2월 28일',
    imageColor: 'linear-gradient(135deg, #f59e0b, #d97706)'
  },
  {
    id: 6,
    category: '디자인',
    title: '다크 모드 디자인의 핵심 원칙',
    excerpt: '단순한 색상 반전을 넘어, 눈이 편안하고 가독성 높은 다크 모드 UI를 설계하는 방법을 알아봅니다.',
    author: '어둠의자식',
    date: '2025년 2월 20일',
    imageColor: 'linear-gradient(135deg, #64748b, #475569)'
  }
];


import { PostDetail } from './components/PostDetail.js'

// State
let state = {
  view: 'home',
  postId: null
};

// Render Functions
const renderHome = () => {
  return `
    ${Header()}
    
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
              ${posts.map(post => `
                <div class="post-link" data-id="${post.id}">
                  ${PostCard(post)}
                </div>
              `).join('')}
          </div>
      </section>
    </main>

    ${Footer()}
  `;
};

const renderDetail = (id) => {
  const post = posts.find(p => p.id === parseInt(id));
  if (!post) return renderHome();

  return `
    ${Header()}
    ${PostDetail(post)}
    ${Footer()}
  `;
};

const render = () => {
  const app = document.querySelector('#app');

  if (state.view === 'home') {
    app.innerHTML = renderHome();
  } else if (state.view === 'detail') {
    app.innerHTML = renderDetail(state.postId);
  }

  // Re-attach event listeners
  attachListeners();
};

const attachListeners = () => {
  // Mobile Nav / Links
  document.querySelectorAll('a[href="#"]').forEach(el => {
    el.addEventListener('click', (e) => e.preventDefault());
  });

  // Post Click
  document.querySelectorAll('.post-link').forEach(el => {
    el.addEventListener('click', (e) => {
      // Find closest card or handle bubble
      const id = el.dataset.id;
      state.view = 'detail';
      state.postId = id;
      window.scrollTo(0, 0);
      render();
    });
  });

  // Back to Home
  const backBtn = document.getElementById('back-home');
  if (backBtn) {
    backBtn.addEventListener('click', (e) => {
      e.preventDefault();
      state.view = 'home';
      state.postId = null;
      window.scrollTo(0, 0);
      render();
    });
  }

  // Header Logo Click
  const logo = document.querySelector('header a[href="/"]');
  if (logo) {
    logo.addEventListener('click', (e) => {
      e.preventDefault();
      state.view = 'home';
      render();
    });
  }
};

// Initial Render
render();

