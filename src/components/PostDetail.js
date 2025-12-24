
export const PostDetail = (post) => {
    return `
    <article class="container" style="padding-top: 2rem; padding-bottom: 4rem; max-width: 800px; animation: fadeIn 0.5s ease;">
      <a href="#" id="back-home" style="display: inline-block; margin-bottom: 2rem; color: var(--color-text-secondary);">&larr; 홈으로 돌아가기</a>
      
      <header style="margin-bottom: 3rem; text-align: center;">
        <span style="color: var(--color-accent); font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">${post.category}</span>
        <h1 style="font-size: 2.5rem; font-weight: 800; margin: 1rem 0 1.5rem; line-height: 1.2;">${post.title}</h1>
        <div style="display: flex; justify-content: center; align-items: center; gap: 0.75rem; color: var(--color-text-secondary);">
            <div style="width: 2.5rem; height: 2.5rem; border-radius: 50%; background: #334155;"></div>
            <span>${post.author}</span>
            <span>•</span>
            <span>${post.date}</span>
        </div>
      </header>
      
      <div style="height: 400px; background: ${post.imageColor}; border-radius: 1rem; margin-bottom: 3rem; position: relative; overflow: hidden;">
         <div style="position: absolute; inset: 0; background: linear-gradient(to top, rgba(0,0,0,0.5), transparent);"></div>
      </div>

      <div class="prose" style="font-size: 1.1rem; line-height: 1.8; color: var(--color-text-primary);">
        <p style="margin-bottom: 1.5rem;">${post.excerpt}</p>
        <p style="margin-bottom: 1.5rem;">
          여기에 본문 내용이 들어갑니다. 사용자가 클릭한 포스트의 상세 내용을 보여주는 예시 화면입니다. 
          프리미엄 블로그 디자인은 가독성을 최우선으로 하며, 시각적인 편안함을 제공해야 합니다.
        </p>
        <h2 style="font-size: 1.8rem; margin: 2rem 0 1rem; color: var(--color-text-primary);">소제목 예시</h2>
        <p style="margin-bottom: 1.5rem;">
          긴 글을 읽을 때 눈의 피로를 줄이기 위해 적절한 줄 간격과 폰트 크기를 사용했습니다. 
          배경색과 글자색의 대비(Contrast)를 세심하게 조정하여 다크 모드에서도 선명하게 보입니다.
        </p>
        <blockquote style="border-left: 4px solid var(--color-accent); padding-left: 1.5rem; margin: 2rem 0; font-style: italic; color: var(--color-text-secondary);">
          "좋은 디자인은 눈에 보이지 않는다. 단지 느껴질 뿐이다."
        </blockquote>
        <p>
          이제 Antigravity와 함께 멋진 블로그를 계속해서 발전시켜 나가보세요.
        </p>
      </div>
    </article>
  `;
};
