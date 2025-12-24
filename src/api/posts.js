import { marked } from 'marked';

export const fetchPosts = async () => {
    try {
        // Fetch the generated JSON file
        const response = await fetch('/posts.json');

        if (!response.ok) {
            throw new Error(`Failed to load posts: ${response.status}`);
        }

        const posts = await response.json();

        // Convert markdown content to HTML using 'marked'
        return posts.map(post => ({
            ...post,
            content: post.content ? marked.parse(post.content) : '',
            imageColor: 'linear-gradient(135deg, #6366f1, #a855f7)' // Defalt gradient
        }));

    } catch (error) {
        console.error('Failed to fetch posts:', error);
        return [];
    }
};
