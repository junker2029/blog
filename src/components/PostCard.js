
export const PostCard = (post) => {
    return `
    <article class="glass-panel" style="overflow: hidden; transition: transform var(--transition-smooth), box-shadow var(--transition-smooth); cursor: pointer; display: flex; flex-direction: column; height: 100%;">
      <div style="height: 200px; background: ${post.imageColor || 'linear-gradient(45deg, #3b82f6, #8b5cf6)'}; position: relative; overflow: hidden;">
         <!-- Placeholder for image -->
         <div style="position: absolute; inset: 0; background: rgba(0,0,0,0.2);"></div>
      </div>
      <div style="padding: 1.5rem; flex: 1; display: flex; flex-direction: column;">
        <span style="color: var(--color-accent); font-size: 0.875rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 0.5rem;">${post.category}</span>
        <h3 style="font-size: 1.25rem; font-weight: 700; margin-bottom: 0.75rem; color: var(--color-text-primary);">${post.title}</h3>
        <p style="color: var(--color-text-secondary); font-size: 0.95rem; line-height: 1.6; margin-bottom: 1.5rem; flex: 1;">${post.excerpt}</p>
        <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid var(--color-border); padding-top: 1rem; margin-top: auto;">
            <div style="display: flex; align-items: center; gap: 0.5rem;">
                <div style="width: 2rem; height: 2rem; border-radius: 50%; background: #334155;"></div>
                <span style="font-size: 0.875rem; color: var(--color-text-secondary);">${post.author}</span>
            </div>
            <span style="font-size: 0.85rem; color: var(--color-text-secondary);">${post.date}</span>
        </div>
      </div>
    </article>
  `;
};
