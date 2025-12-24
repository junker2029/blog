
export const Header = () => {
    return `
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
  `;
};
