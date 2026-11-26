// Arquivo responsável por gerar o feed RSS do blog
import rss, { pagesGlobToRssItems } from '@astrojs/rss';

// Função que retorna o feed RSS do blog
export async function GET(context) {
  return rss({
    title: 'Aluno de Astro | Blog',
    description: 'Minha jornada aprendendo Astro',
    site: context.site,
    items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
    customData: `<language>pt-br</language>`,
  });
}
