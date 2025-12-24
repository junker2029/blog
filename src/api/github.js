import { marked } from 'marked';

const REPO_OWNER = 'junker2029';
const REPO_NAME = 'blog';
const API_URL = `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/issues`;

export const fetchPosts = async () => {
    try {
        const response = await fetch(API_URL);

        if (!response.ok) {
            throw new Error(`GitHub API Error: ${response.status}`);
        }

        const issues = await response.json();

        // Filter out pull requests (they are also listed as issues in GitHub API)
        const posts = issues
            .filter(issue => !issue.pull_request)
            .map(issue => {
                // Extract first image from markdown content if exists
                const imageMatch = issue.body ? issue.body.match(/!\[.*?\]\((.*?)\)/) : null;
                const image = imageMatch ? imageMatch[1] : null;

                // Parse labels for category (use first label or 'Uncategorized')
                const category = issue.labels.length > 0 ? issue.labels[0].name : 'Uncategorized';

                return {
                    id: issue.number,
                    category: category,
                    title: issue.title,
                    excerpt: issue.body ? issue.body.substring(0, 150).replace(/[#*`]/g, '') + '...' : '',
                    author: issue.user.login,
                    date: new Date(issue.created_at).toLocaleDateString('ko-KR', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                    }),
                    image: image,
                    imageColor: 'linear-gradient(135deg, #6366f1, #a855f7)', // Default gradient
                    content: issue.body ? marked.parse(issue.body) : ''
                };
            });

        return posts;
    } catch (error) {
        console.error('Failed to fetch posts:', error);
        return [];
    }
};
