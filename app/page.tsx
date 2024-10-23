"use client";
import Link from 'next/link';

// Dados dos posts (mockados)
const posts = [
  {
    slug: 'meu-primeiro-post',
    titulo: 'Novidades do Angular 17',
    conteudo: 'As melhores novidades sobre o angular 17 e muito mais',
    imagem: '/images/angular.jpg',
  },
  {
    slug: 'aprendendo-nextjs',
    titulo: 'Aprendendo Next.js',
    conteudo: 'Primeiros passos com next.js',
    imagem: '/images/nextjs.png',
  },
  {
    slug: 'trabalhando-com-react',
    titulo: 'Trabalhando com React',
    conteudo: 'Trabalhando com React: O Básico para Iniciantes',
    imagem: '/images/react.png',
  },
  {
    slug: 'vantagens-do-typescript',
    titulo: 'Vantagens do TypeScript',
    conteudo: 'TypeScript adiciona tipos ao JavaScript, tornando o código mais previsível e escalável...',
    imagem: '/images/typescript.png',
  },
  {
    slug: 'introducao-ao-nodejs',
    titulo: 'Introdução ao Node.js',
    conteudo: 'Node.js permite construir aplicações do lado do servidor com JavaScript, com alta performance...',
    imagem: '/images/nodejs.png',
  },
];

export default function Home() {
  return (
    <div>
      {posts.map((post) => (
        <Link href={`/${post.slug}`} key={post.slug}>
          <div>
            <h2>{post.titulo}</h2>
            <img src={post.imagem} alt={post.titulo} width={200} />
            <p>{post.conteudo.substring(0, 100)}...</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
