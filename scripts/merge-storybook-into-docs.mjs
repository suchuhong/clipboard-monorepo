import { cpSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const storybook = join('packages', 'react-clipboard-lite', 'storybook-static');
const docsDist = join('docs', '.vitepress', 'dist', 'storybook');

mkdirSync(docsDist, { recursive: true });
cpSync(storybook, docsDist, { recursive: true });
console.log('Merged Storybook into docs dist at /storybook');