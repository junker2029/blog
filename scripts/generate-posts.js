import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const postsDirectory = path.join(__dirname, '../posts');
const outputFile = path.join(__dirname, '../public/posts.json');

// Ensure posts directory exists
if (!fs.existsSync(postsDirectory)) {
    console.log('Creating posts directory...');
    fs.mkdirSync(postsDirectory, { recursive: true });
}

const getPosts = () => {
    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames
        .filter(fileName => fileName.endsWith('.md'))
        .map(fileName => {
            // Read markdown file as string
            const fullPath = path.join(postsDirectory, fileName);
            const fileContents = fs.readFileSync(fullPath, 'utf8');

            // Use gray-matter to parse the post metadata section
            const matterResult = matter(fileContents);

            // Combine the data with the id
            return {
                id: fileName.replace(/\.md$/, ''),
                ...matterResult.data,
                content: matterResult.content
            };
        });

    // Sort posts by date
    return allPostsData.sort((a, b) => {
        if (a.date < b.date) {
            return 1;
        } else {
            return -1;
        }
    });
};

const posts = getPosts();
fs.writeFileSync(outputFile, JSON.stringify(posts, null, 2));
console.log(`Successfully generated ${posts.length} posts to ${outputFile}`);

