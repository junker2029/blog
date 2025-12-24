
export const Footer = () => {
    return `
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
  `;
};
