import { Header } from './Header.js';
import { Footer } from './Footer.js';

export const Admin = () => {
    return `
        ${Header()}
        <main class="container" style="padding: 6rem 0;">
            <div class="glass-panel" style="padding: 3rem; max-width: 800px; margin: 0 auto;">
                <h1 style="text-align: center; margin-bottom: 2rem;">새 글 작성</h1>
                <form id="admin-form" style="display: flex; flex-direction: column; gap: 1.5rem;">

                    <div style="display: flex; flex-direction: column; gap: 0.5rem;">
                        <label for="github-token" style="color: var(--color-text-secondary); font-size: 0.9rem;">GitHub Personal Access Token (PAT)</label>
                        <input type="password" id="github-token" required placeholder="ghp_..."
                            style="padding: 1rem; border-radius: 0.5rem; border: 1px solid var(--color-border); background: rgba(0,0,0,0.2); color: white; outline: none; transition: border-color 0.2s;"
                            onfocus="this.style.borderColor='var(--color-accent)'"
                            onblur="this.style.borderColor='var(--color-border)'"
                        >
                        <small style="color: var(--color-text-secondary); font-size: 0.8rem;">
                            'public_repo' 권한이 있는 토큰이 필요합니다.
                            <a href="https://github.com/settings/tokens" target="_blank" style="text-decoration: underline;">여기서 발급</a>
                        </small>
                    </div>

                    <div style="display: flex; flex-direction: column; gap: 0.5rem;">
                        <label for="post-title" style="color: var(--color-text-secondary); font-size: 0.9rem;">제목</label>
                        <input type="text" id="post-title" required placeholder="글 제목을 입력하세요"
                            style="padding: 1rem; border-radius: 0.5rem; border: 1px solid var(--color-border); background: rgba(0,0,0,0.2); color: white; outline: none; transition: border-color 0.2s;"
                            onfocus="this.style.borderColor='var(--color-accent)'"
                            onblur="this.style.borderColor='var(--color-border)'"
                        >
                    </div>

                    <div style="display: flex; flex-direction: column; gap: 0.5rem;">
                        <label for="post-labels" style="color: var(--color-text-secondary); font-size: 0.9rem;">카테고리/태그 (쉼표로 구분)</label>
                        <input type="text" id="post-labels" placeholder="예: Technology, Tutorial"
                            style="padding: 1rem; border-radius: 0.5rem; border: 1px solid var(--color-border); background: rgba(0,0,0,0.2); color: white; outline: none; transition: border-color 0.2s;"
                            onfocus="this.style.borderColor='var(--color-accent)'"
                            onblur="this.style.borderColor='var(--color-border)'"
                        >
                    </div>

                    <div style="display: flex; flex-direction: column; gap: 0.5rem;">
                        <label for="post-body" style="color: var(--color-text-secondary); font-size: 0.9rem;">내용 (Markdown)</label>
                        <textarea id="post-body" required placeholder="Markdown 형식으로 글을 작성하세요..." rows="15"
                            style="padding: 1rem; border-radius: 0.5rem; border: 1px solid var(--color-border); background: rgba(0,0,0,0.2); color: white; outline: none; resize: vertical; transition: border-color 0.2s; font-family: monospace;"
                            onfocus="this.style.borderColor='var(--color-accent)'"
                            onblur="this.style.borderColor='var(--color-border)'"
                        ></textarea>
                    </div>

                    <button type="submit" class="btn btn-primary" style="margin-top: 1rem;">
                        업로드
                    </button>
                </form>
            </div>
        </main>
        ${Footer()}
    `;
};
