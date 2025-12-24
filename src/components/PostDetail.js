
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
      
      <div style="height: 400px; background: ${post.imageColor || '#1e293b'}; border-radius: 1rem; margin-bottom: 3rem; position: relative; overflow: hidden;">
         ${post.image ?
      `<img src="${post.image}" alt="${post.title}" style="width: 100%; height: 100%; object-fit: cover;" />` :
      `<div style="width: 100%; height: 100%; background: ${post.imageColor};"></div>`
    }
         <div style="position: absolute; inset: 0; background: linear-gradient(to top, rgba(0,0,0,0.5), transparent);"></div>
      </div>

      <div class="post-content" style="font-size: 1.125rem; line-height: 1.8; color: var(--color-text-secondary);">
        ${post.content || '<p>내용이 없습니다.</p>'}
      </div>
    </article>
  `;
};
