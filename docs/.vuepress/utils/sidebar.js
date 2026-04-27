import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

/**
 * sidebar item 구조에 맞게 frontmatter 정보를 가공하여 리턴
 * @param {Object} matter 
 * @returns 
 */
const restructureMatter = (matter) => {
  const { fileName, depth, title, type, order } = matter
  const newOne = {
    text: title,
    link: `/${type}/${fileName}`,
    order,
    children: [],
  }

  return depth === 1 ? {
    prefiex: `/${type}/`,
    ...newOne,
  } : newOne;
}

/**
 * frontmatter 배열을 sidebar 구조에 맞춰 트리형태로 리턴
 * @param {Array} matters 
 * @returns 
 */
export const buildTree = (matters) => {
  let root;
  const stack = [];
  
  matters.forEach((matter) => {
    const node = restructureMatter(matter);
    const { depth } = matter;

    while(stack.length && stack[stack.length - 1].depth >= depth) {
      stack.pop();
    }

    if (stack.length === 0) {
      root = {
        ...node,
      }
    } else {
      const parent = stack[stack.length - 1];
      parent.node.children.push(node);
      parent.node.children.sort((a, b) => a.order - b.order);
    }

    stack.push({ depth, node });
  });

  return root;
}

/**
 * baseDir 과 fileNames 정보를 리턴
 * @param {String} relPath 
 * @returns 
 */
export const getFSInfo = (relPath) => {
  const baseDir = path.resolve(__dirname, relPath);

  return {
    baseDir,
    fileNames: fs.readdirSync(baseDir),
  }
}

/**
 * sidebar Item 구조화하여 리턴
 * @param {String} baseDir 
 * @param {Array} fileNames 
 */
export const makeTreeItem = (baseDir, fileNames) => {
  const groups = [];

  fileNames.forEach((fileName) => {
      if (!fileName.endsWith('.md')) return;
  
      const fullPath = path.join(baseDir, fileName);
      const content = fs.readFileSync(fullPath, 'utf-8');
      const { data } = matter(content);
  
      if (data.sidebar === false) return;
  
      groups.push({ fileName, ...data });
    });
  
    return groups;
}