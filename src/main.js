import './style.css'
import { Header } from './components/Header.js'
import { PostCard } from './components/PostCard.js'
import { Footer } from './components/Footer.js'
import { posts } from './data/posts.js'

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

