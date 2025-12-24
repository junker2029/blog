import './style.css'
import { Header } from './components/Header.js'
import { PostCard } from './components/PostCard.js'
import { Footer } from './components/Footer.js'
import { PostDetail } from './components/PostDetail.js'
import { fetchPosts } from './api/posts.js'

// State
let state = {
  view: 'home',
  postId: null,
  posts: [],
  isLoading: true,
  error: null
};

// Render Functions
const renderLoading = () => {
  return `
        ${Header()}
        <main class="container" style="padding: 10rem 0; text-align: center;">
            <div style="font-size: 1.5rem; color: var(--color-text-secondary); animation: pulse 1.5s infinite;">
                블로그 글을 불러오는 중입니다...
            </div>
        </main>
        ${Footer()}
    `;
};

const renderError = () => {
  return `
        ${Header()}
         <main class="container" style="padding: 10rem 0; text-align: center;">
            <h2 style="font-size: 2rem; margin-bottom: 1rem;">문제가 발생했습니다.</h2>
            <p style="color: var(--color-text-secondary);">${state.error || '데이터를 불러올 수 없습니다.'}</p>
        </main>
        ${Footer()}
    `;
};

const renderHome = () => {
  return `
    ${Header()}

<main class="container" style="padding-top: 4rem; padding-bottom: 4rem;">
  <section style="text-align: center; margin-bottom: 5rem; padding: 4rem 0;">
    <h1 style="font-size: 3.5rem; font-weight: 800; margin-bottom: 1.5rem; background: linear-gradient(to right, #fff, #94a3b8); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
      혁신적인 아이디어의 시작
    </h1>
    <p style="font-size: 1.25rem; color: var(--color-text-secondary); max-width: 600px; margin: 0 auto 2.5rem;">
      GitHub Issues로 작성된 생생한 개발 이야기를 만나보세요.<br>
        매주 새로운 인사이트가 업데이트됩니다.
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

    ${state.posts.length === 0 ?
      `<div style="text-align: center; padding: 4rem; color: var(--color-text-secondary); background: #1e293b; border-radius: 1rem;">
         <p style="font-size: 1.2rem;">아직 작성된 글이 없습니다.</p>
       </div>` :
      `<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 2rem;">
        ${state.posts.map(post => `
                  <div class="post-link" data-id="${post.id}">
                    ${PostCard(post)}
                  </div>
                `).join('')}
      </div>`
    }
  </section>
</main>

    ${Footer()}
`;
};

const renderDetail = (id) => {
  const post = state.posts.find(p => p.id === parseInt(id));
  if (!post) return renderHome();

  return `
    ${Header()}
    ${PostDetail(post)}
    ${Footer()}
`;
};

const render = () => {
  const app = document.querySelector('#app');
  window.scrollTo(0, 0);

  if (state.isLoading) {
    app.innerHTML = renderLoading();
    return;
  }

  if (state.error) {
    app.innerHTML = renderError();
    return;
  }

  if (state.view === 'home') {
    app.innerHTML = renderHome();
  } else if (state.view === 'detail') {
    app.innerHTML = renderDetail(state.postId);
  }
};

const setupGlobalEvents = () => {
  const app = document.querySelector('#app');

  app.addEventListener('click', (e) => {
    // 1. Post Click (Delegation)
    const postLink = e.target.closest('.post-link');
    if (postLink) {
      e.preventDefault();
      const id = postLink.dataset.id;
      state.view = 'detail';
      state.postId = id;
      render();
      return;
    }

    // 2. Back to Home Click
    const backBtn = e.target.closest('#back-home');
    if (backBtn) {
      e.preventDefault();
      state.view = 'home';
      state.postId = null;
      render();
      return;
    }

    // 3. Logo Click
    const logo = e.target.closest('header a[href="/"]');
    if (logo) {
      e.preventDefault();
      state.view = 'home';
      render();
      return;
    }

    // 4. Dummy Links
    const dummyLink = e.target.closest('a[href="#"]');
    if (dummyLink) {
      e.preventDefault();
    }
  });
};

const init = async () => {
  setupGlobalEvents();
  render(); // Show loading state

  try {
    state.posts = await fetchPosts();
    state.isLoading = false;
    render(); // Show data
  } catch (err) {
    state.error = '데이터를 불러오는 중 오류가 발생했습니다.';
    state.isLoading = false;
    render();
  }
};

// Start
init();

