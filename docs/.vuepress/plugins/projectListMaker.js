/**
 * 프로젝트 상세 페이지의 frontmatter 로 목록 데이터를 만들어 @temp/projectList.js 로 저장
 * @param {Object} app
 */
export const writeProjectList = async (app) => {
  const projectList = app.pages
    .filter(({ frontmatter }) => frontmatter.type === 'projects' && frontmatter.depth === 2)
    .sort((a, b) => a.frontmatter.order - b.frontmatter.order)
    .map(({ path, frontmatter }) => {
      const { title, description, category, stack = [], period = '' } = frontmatter;

      return { to: path, title, desc: description, category, stack, period };
    });

  await app.writeTemp(
    'projectList.js',
    `export const projectList = ${JSON.stringify(projectList)};\n`,
  );
}
