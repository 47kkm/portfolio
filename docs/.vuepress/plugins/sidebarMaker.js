import { getFSInfo, makeTreeItem, buildTree } from '../utils/sidebar';

export const generateSidebar = () => {
  const { baseDir: tempBase, fileNames: tempFiles } = getFSInfo('../../');

  const order = ['projects'];
  const sidebar = new Array(order.length);

  const length = tempFiles.length;

  tempFiles.forEach((file, index) => {
    if (!order.includes(tempFiles[index])) return;
  
    const { baseDir, fileNames } = getFSInfo(`../../${tempFiles[index]}`);
    const treeItem = buildTree(makeTreeItem(baseDir, fileNames));

    const sidebarIndex = order.indexOf(tempFiles[index]);
    sidebar[sidebarIndex] = treeItem;
  });

  return sidebar;
}