import { mdxAnnotations } from 'mdx-annotations';
import recmaNextjsStaticProps from 'recma-nextjs-static-props';

const recmaRemoveNamedExports = () => (tree) => {
  tree.body = tree.body.filter((node) => node.type !== 'ExportNamedDeclaration');
};

export const recmaPlugins = [
  mdxAnnotations.recma,
  recmaRemoveNamedExports(),
  recmaNextjsStaticProps,
];
