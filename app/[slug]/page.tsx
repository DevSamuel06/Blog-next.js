"use client";
import { notFound } from 'next/navigation';
import { usePathname } from 'next/navigation';

// Dados dos posts (mockados)
const posts = [
  {
    slug: 'meu-primeiro-post',
    titulo: 'Novidades do Angular 17',
    conteudo: `
      <h3>Explorando o Angular 17: Novidades e Melhorias</h3>
      <p>Com o lançamento do Angular 17, o framework continua a se solidificar como uma das ferramentas mais poderosas para desenvolvimento de aplicações web modernas. Nesta nova versão, o time do Angular trouxe várias melhorias e novidades que tornam o desenvolvimento mais eficiente, simplificando a experiência tanto para desenvolvedores novos quanto experientes. Vamos explorar algumas das principais mudanças e o que elas significam para você.</p>
      
      <h4>1. <strong>Melhorias de Performance</strong></h4>
      <p>Uma das áreas de maior foco no Angular 17 é a performance. Graças a otimizações significativas no tempo de compilação, o build de projetos agora está mais rápido do que nunca. Isso é especialmente útil para aplicações maiores, onde a diminuição no tempo de build pode ser notada imediatamente.</p>
      
      <p>Além disso, a árvore de componentes do Angular foi otimizada para realizar menos atualizações desnecessárias na DOM, o que resulta em uma performance de renderização mais eficiente.</p>

      <h4>2. <strong>Standalone Components Ainda Mais Poderosos</strong></h4>
      <p>O conceito de <em>Standalone Components</em> foi introduzido nas versões anteriores do Angular, mas na versão 17, ele ganhou melhorias importantes. Agora é possível criar componentes isolados sem a necessidade de módulos, o que simplifica muito a estrutura dos projetos. A flexibilidade e a facilidade de manutenção de projetos com <em>Standalone Components</em> torna o Angular uma ferramenta ainda mais modular e escalável.</p>

      <h4>3. <strong>Suporte Aprimorado para Signals</strong></h4>
      <p>O Angular 17 expandiu o suporte para <em>Signals</em>, uma nova maneira de lidar com reatividade nas aplicações. Com <em>Signals</em>, você pode criar fluxos reativos que facilitam a sincronização de estados e a atualização de componentes. Isso torna a criação de interfaces dinâmicas mais intuitiva e eficiente.</p>

      <h4>4. <strong>Melhorias na Integração com RxJS</strong></h4>
      <p>A integração com o RxJS, a biblioteca reativa usada comumente no Angular para lidar com fluxos de dados assíncronos, foi aprimorada. A nova versão facilita a criação e o gerenciamento de <em>Observables</em>, tornando as operações reativas mais suaves e menos propensas a erros. Com isso, os desenvolvedores podem tirar melhor proveito de conceitos como <em>Observables</em> e <em>Subjects</em>, melhorando a gestão de eventos e dados.</p>

      <h4>5. <strong>Simplificações no uso do Angular CLI</strong></h4>
      <p>O Angular CLI continua a evoluir e, com o Angular 17, traz algumas novas opções e comandos que tornam o desenvolvimento mais ágil. Agora, você pode configurar projetos com ainda mais precisão, além de novos parâmetros que ajudam a personalizar a experiência de desenvolvimento de acordo com as necessidades do projeto.</p>

      <h4>6. <strong>Maior Suporte para TypeScript</strong></h4>
      <p>O Angular 17 vem com suporte aprimorado para as últimas versões do TypeScript, garantindo que os desenvolvedores possam utilizar todos os novos recursos e otimizações oferecidos por essa linguagem tipada. Isso inclui a compatibilidade com recursos como tipos de dados mais precisos e melhorias no sistema de inferência de tipos.</p>

      <h4><strong>Conclusão</strong></h4>
      <p>O Angular 17 traz uma série de melhorias que continuam a posicionar o framework como uma solução robusta e moderna para o desenvolvimento de aplicações web. Desde a performance aprimorada até as novas funcionalidades como <em>Signals</em> e o suporte mais integrado ao TypeScript, esta versão facilita ainda mais o trabalho de desenvolvedores na criação de interfaces ricas e interativas.</p>

      <p>Se você já está usando o Angular, essa atualização é um ótimo momento para explorar os novos recursos. Se ainda não experimentou, agora é a hora perfeita para começar a explorar este framework poderoso e eficiente!</p>
    `,
    imagem: '/images/angular.jpg',
  },


  {
    slug: 'aprendendo-nextjs',
    titulo: 'Aprendendo Next.js: O Básico para Iniciantes',
    conteudo: `
      <h3>Introdução ao Next.js</h3>
      <p>Next.js é um poderoso framework React para construção de aplicações web escaláveis e otimizadas. Ele facilita a criação de páginas com renderização no servidor (SSR), geração de sites estáticos (SSG) e roteamento dinâmico. O Next.js tem como objetivo simplificar a vida do desenvolvedor com diversas funcionalidades prontas para uso.</p>
      
      <h4>1. <strong>Por que usar o Next.js?</strong></h4>
      <p>Se você já conhece o React, o Next.js é um passo natural para quem deseja construir aplicações web mais completas e otimizadas. Algumas das vantagens incluem:</p>
      <ul>
        <li>Renderização no servidor (Server-Side Rendering - SSR) para melhorar o SEO e a performance.</li>
        <li>Geração de sites estáticos (Static Site Generation - SSG) para páginas rápidas e altamente performáticas.</li>
        <li>Rotas automáticas baseadas na estrutura de arquivos, facilitando a navegação entre páginas.</li>
        <li>Suporte embutido para APIs, permitindo que você crie backends diretamente na sua aplicação.</li>
      </ul>
  
      <h4>2. <strong>Começando com Next.js</strong></h4>
      <p>Para começar, você pode criar um novo projeto Next.js rapidamente usando o comando abaixo:</p>
      <pre><code>npx create-next-app nome-do-projeto</code></pre>
      <p>Isso criará uma estrutura de pastas pronta para começar a desenvolver sua aplicação. Ao final da instalação, você pode iniciar o servidor de desenvolvimento com o seguinte comando:</p>
      <pre><code>npm run dev</code></pre>
  
      <h4>3. <strong>Entendendo as Páginas no Next.js</strong></h4>
      <p>No Next.js, cada arquivo na pasta <code>/pages</code> representa uma rota. Por exemplo, se você criar um arquivo <code>about.js</code> dentro da pasta <code>pages</code>, ele será acessível através da rota <code>/about</code>. Isso facilita muito o roteamento.</p>
  
      <h4>4. <strong>Criando uma Página Básica</strong></h4>
      <p>Vamos criar uma página básica chamada <code>about.js</code> dentro da pasta <code>pages</code>:</p>
      <pre><code>
  import React from 'react';
  
  export default function About() {
    return (
      <div>
        <h1>Sobre Nós</h1>
        <p>Este é um exemplo de uma página criada com Next.js.</p>
      </div>
    );
  }
      </code></pre>
  
      <p>Agora, ao acessar <code>/about</code>, você verá essa página sendo renderizada automaticamente.</p>
  
      <h4>5. <strong>Estilização no Next.js</strong></h4>
      <p>Você pode estilizar suas páginas de diversas maneiras. O Next.js oferece suporte a CSS Modules, onde cada arquivo CSS é escopado automaticamente ao componente em que é importado. Veja como isso funciona:</p>
      <pre><code>
  /* styles.module.css */
  .titulo {
    color: blue;
  }
      </code></pre>
      <pre><code>
  /* about.js */
  import styles from './styles.module.css';
  
  export default function About() {
    return (
      <div>
        <h1 className={styles.titulo}>Sobre Nós</h1>
        <p>Este é um exemplo de uma página com estilo em Next.js.</p>
      </div>
    );
  }
      </code></pre>
  
      <h4>6. <strong>Criando API Routes no Next.js</strong></h4>
      <p>Além de páginas, o Next.js permite que você crie rotas de API. Qualquer arquivo criado dentro da pasta <code>pages/api</code> será tratado como uma rota de API. Por exemplo, vamos criar uma rota que retorna uma mensagem:</p>
      <pre><code>
  /* pages/api/hello.js */
  export default function handler(req, res) {
    res.status(200).json({ message: 'Hello Next.js!' });
  }
      </code></pre>
      <p>A rota será acessível em <code>/api/hello</code>, retornando o JSON <code>{ "{ message: 'Hello Next.js!' }" }</code>.</p>
  
      <h4>7. <strong>Conclusão</strong></h4>
      <p>Este é apenas o começo do que você pode fazer com Next.js. Ele oferece uma solução poderosa para quem quer construir aplicações escaláveis e rápidas. Desde a criação de páginas dinâmicas até a implementação de APIs, o Next.js cobre tudo que um desenvolvedor moderno precisa.</p>
  
      <p>Agora que você conhece o básico, explore mais sobre esse incrível framework e veja como ele pode transformar a forma como você desenvolve aplicações web!</p>
    `,
    imagem: '/images/nextjs.png',
  },
  

  {
    slug: 'trabalhando-com-react',
    titulo: 'Trabalhando com React: O Básico para Iniciantes',
    conteudo: `
      <h3>Introdução ao React</h3>
      <p>React é uma biblioteca JavaScript criada pelo Facebook para a construção de interfaces de usuário (UI). Ela permite que os desenvolvedores criem aplicações de forma declarativa e baseada em componentes, facilitando a manutenção e o escalonamento de projetos.</p>
      
      <h4>1. <strong>Por que usar o React?</strong></h4>
      <p>React é uma das bibliotecas mais populares no ecossistema front-end por sua simplicidade e eficiência. Algumas das principais vantagens de usar o React incluem:</p>
      <ul>
        <li>Facilidade em criar componentes reutilizáveis.</li>
        <li>Domínio virtual (Virtual DOM), que otimiza a performance da aplicação.</li>
        <li>Comunidade enorme e suporte a uma grande variedade de bibliotecas e ferramentas.</li>
        <li>Fluxo de dados unidirecional (one-way data binding), o que facilita o rastreamento de estados.</li>
      </ul>
  
      <h4>2. <strong>Criando uma Aplicação com React</strong></h4>
      <p>Para começar com React, o jeito mais rápido é usar o <code>create-react-app</code>, uma ferramenta que já configura um projeto React para você. Basta rodar o comando:</p>
      <pre><code>npx create-react-app nome-do-projeto</code></pre>
      <p>Depois que o projeto for criado, você pode iniciá-lo com:</p>
      <pre><code>npm start</code></pre>
      <p>Isso abrirá um servidor de desenvolvimento e sua aplicação estará rodando em <code>http://localhost:3000</code>.</p>
  
      <h4>3. <strong>Criando um Componente React</strong></h4>
      <p>No React, tudo é baseado em componentes. Vamos criar um componente simples chamado <code>Welcome</code>:</p>
      <pre><code>
  import React from 'react';
  
  function Welcome(props) {
    return <h1>Olá, {props.name}!</h1>;
  }
  
  export default Welcome;
      </code></pre>
      <p>Esse componente recebe uma propriedade chamada <code>name</code> e exibe uma saudação personalizada.</p>
  
      <h4>4. <strong>Estado e Ciclo de Vida</strong></h4>
      <p>O React permite que você gerencie o estado dos seus componentes. O <code>useState</code> é um Hook que ajuda a gerenciar estados em componentes funcionais. Veja um exemplo:</p>
      <pre><code>
  import React, { useState } from 'react';
  
  function Contador() {
    const [count, setCount] = useState(0);
  
    return (
      <div>
        <p>Você clicou {count} vezes</p>
        <button onClick={() => setCount(count + 1)}>
          Clique aqui
        </button>
      </div>
    );
  }
  
  export default Contador;
      </code></pre>
      <p>O componente <code>Contador</code> usa o Hook <code>useState</code> para manter o número de cliques e atualizá-lo a cada clique no botão.</p>
  
      <h4>5. <strong>Manipulação de Eventos</strong></h4>
      <p>Assim como no HTML, você pode manipular eventos no React. Veja como capturar um clique de botão:</p>
      <pre><code>
  function MeuBotao() {
    function handleClick() {
      alert('Botão clicado!');
    }
  
    return (
      <button onClick={handleClick}>
        Clique aqui
      </button>
    );
  }
  
  export default MeuBotao;
      </code></pre>
  
      <h4>6. <strong>Componentes Baseados em Classes vs Funcionais</strong></h4>
      <p>React originalmente usava componentes de classe para manipular estado e ciclo de vida. No entanto, os componentes funcionais, juntamente com os Hooks, tornaram-se o padrão moderno no React:</p>
      <ul>
        <li><strong>Componentes de Classe:</strong> Mais antigos, mas ainda amplamente usados. Utilizam métodos como <code>render()</code>, <code>componentDidMount()</code> e <code>componentDidUpdate()</code>.</li>
        <li><strong>Componentes Funcionais:</strong> Usam funções para definir componentes e Hooks como <code>useState</code> e <code>useEffect</code> para lidar com estado e ciclo de vida.</li>
      </ul>
      
      <h4>7. <strong>Estilizando Componentes no React<strong></h4>
      <p>React oferece várias formas de estilizar componentes. A mais simples é utilizar CSS tradicional, mas você pode também usar soluções como CSS Modules, inline styles ou bibliotecas como Styled Components. Aqui está um exemplo básico com inline styles:</p>
      <pre><code>
  function MeuTitulo() {
    return (
      <h1 style={{ color: 'blue', fontSize: '24px' }}>
        Este é um título estilizado
      </h1>
    );
  }
  
  export default MeuTitulo;
      </code></pre>
  
      <h4>8. <strong>Conclusão</strong></h4>
      <p>O React continua sendo uma das bibliotecas mais populares para construção de interfaces de usuário por sua flexibilidade e simplicidade. Aprender o básico do React abre portas para construir aplicações dinâmicas e escaláveis. Explore mais sobre os Hooks, contexto, roteamento e a vasta gama de ferramentas que complementam o React.</p>
  
      <p>Agora que você conhece o básico, comece a criar seus próprios componentes e experimente construir aplicações completas com React!</p>
    `,
    imagem: '/images/react.png',
  },


  {
    slug: 'vantagens-do-typescript',
    titulo: 'Vantagens do TypeScript: Por Que Usar?',
    conteudo: `
      <h3>O Que é TypeScript?</h3>
      <p>TypeScript é um superset de JavaScript desenvolvido pela Microsoft que adiciona tipagem estática opcional à linguagem. Isso significa que você pode definir tipos de variáveis, funções e classes, tornando seu código mais robusto e menos propenso a erros. Ele se transpila para JavaScript, então você pode utilizá-lo em qualquer ambiente que suporte JS.</p>
  
      <h4>1. <strong>Tipagem Estática</strong></h4>
      <p>Uma das maiores vantagens do TypeScript é sua tipagem estática. Isso significa que você pode declarar explicitamente o tipo de dados que uma variável deve armazenar. Isso ajuda a evitar erros de tipo durante a compilação, antes que eles apareçam em tempo de execução:</p>
      <pre><code>
  let nome: string = 'Angular';
  nome = 42; // Erro: Type 'number' não pode ser atribuído ao tipo 'string'.
      </code></pre>
      <p>Com a tipagem estática, você consegue capturar erros antes mesmo de rodar o código, o que melhora significativamente a qualidade do desenvolvimento.</p>
  
      <h4>2. <strong>Melhor Autocompletar e IntelliSense</strong></h4>
      <p>Ao usar TypeScript em editores de código como o VS Code, você tem acesso a um autocompletar mais preciso e a sugestões baseadas nos tipos definidos no seu código. Isso facilita o trabalho do desenvolvedor, fornecendo dicas úteis sobre os métodos disponíveis, parâmetros e tipos de retorno, além de reduzir o risco de cometer erros.</p>
  
      <h4>3. <strong>Refatoração Mais Segura</strong></h4>
      <p>Refatorar um grande código JavaScript pode ser arriscado, especialmente em projetos grandes. Com TypeScript, a tipagem estática torna o processo de refatoração mais seguro, pois o compilador irá sinalizar qualquer lugar onde os tipos não se alinhem corretamente, ajudando a garantir que as mudanças sejam consistentes em todo o projeto.</p>
  
      <h4>4. <strong>Interface e Tipos Customizados</strong></h4>
      <p>TypeScript permite que você defina interfaces e tipos personalizados. Isso é útil para garantir que objetos tenham uma estrutura fixa, o que torna o código mais previsível e fácil de manter:</p>
      <pre><code>
  interface Usuario {
    nome: string;
    idade: number;
  }
  
  function exibirUsuario(usuario: Usuario) {
    console.log(\`Nome: \${usuario.nome}, Idade: \${usuario.idade}\`);
  }
  
  const usuario = { nome: 'João', idade: 25 };
  exibirUsuario(usuario);
      </code></pre>
      <p>Com o uso de interfaces e tipos customizados, você pode criar contratos explícitos para como os dados devem se parecer, o que ajuda a reduzir ambiguidades e erros.</p>
  
      <h4>5. <strong>Compatibilidade com JavaScript</strong></h4>
      <p>Uma das grandes vantagens do TypeScript é que ele é 100% compatível com JavaScript. Qualquer código JavaScript válido é também um código TypeScript válido. Isso permite que você adote o TypeScript de maneira gradual em um projeto existente, sem precisar reescrever todo o código de uma vez.</p>
  
      <h4>6. <strong>Ampla Adoção e Suporte da Comunidade</strong></h4>
      <p>TypeScript está se tornando cada vez mais popular entre desenvolvedores, especialmente em grandes projetos, como Angular, Vue, React e Node.js. A adoção crescente significa que há uma vasta quantidade de recursos, bibliotecas e ferramentas disponíveis para ajudar no desenvolvimento com TypeScript. Além disso, a comunidade ativa garante que novos recursos e atualizações sejam lançados regularmente.</p>
  
      <h4>7. <strong>Suporte à Programação Orientada a Objetos (OOP)</strong></h4>
      <p>Se você vem de uma linguagem orientada a objetos como Java ou C#, vai se sentir em casa com o TypeScript. Ele oferece suporte completo a conceitos de OOP, como classes, interfaces, herança e modificadores de acesso (public, private, protected). Isso torna o código mais modular, reutilizável e fácil de entender.</p>
  
      <h4>8. <strong>Conclusão</strong></h4>
      <p>TypeScript oferece uma camada extra de segurança e previsibilidade ao desenvolvimento JavaScript. Sua tipagem estática, ferramentas de desenvolvimento aprimoradas, e integração com os principais frameworks fazem dele uma excelente escolha para projetos de qualquer tamanho. Adotar TypeScript pode melhorar a qualidade do código, reduzir erros e aumentar a produtividade dos desenvolvedores.</p>
      
      <p>Se você está buscando uma maneira de tornar seu código JavaScript mais robusto e escalável, o TypeScript é, sem dúvida, uma das melhores opções!</p>
    `,
    imagem: '/images/typescript.png',
  },


{
  slug: 'introducao-ao-nodejs',
  titulo: 'Introdução ao Node.js: O Que é e Como Começar?',
  conteudo: `
    <h3>O Que é Node.js?</h3>
    <p>Node.js é um ambiente de execução JavaScript que permite aos desenvolvedores usar JavaScript para programar no lado do servidor. Ele é construído sobre o motor de JavaScript do Google, o V8, e foi projetado para criar aplicações escaláveis e de alto desempenho, como APIs, serviços web e muito mais.</p>

    <h4>1. <strong>JavaScript no Back-End</strong></h4>
    <p>Historicamente, o JavaScript era usado principalmente para o desenvolvimento de front-end, criando interações e lógica de interface em navegadores. Com o Node.js, o JavaScript pode ser usado para o back-end, permitindo que desenvolvedores escrevam código para o servidor, banco de dados e lógica de aplicação. Isso significa que, com Node.js, você pode usar uma única linguagem em todo o stack de desenvolvimento.</p>

    <h4>2. <strong>Por Que Usar Node.js?</strong></h4>
    <p>Node.js é conhecido por sua eficiência em manipular operações assíncronas, o que o torna ideal para construir aplicações que exigem alta escalabilidade e tempo de resposta rápido, como aplicações em tempo real (chats, jogos multiplayer), APIs REST, e servidores de arquivos.</p>
    <ul>
      <li><strong>Escalabilidade</strong>: Node.js usa um modelo assíncrono baseado em eventos, que permite o gerenciamento de várias conexões simultâneas de maneira eficiente.</li>
      <li><strong>Alta Performance</strong>: Por ser baseado no motor V8, o Node.js compila o código JavaScript em código de máquina, resultando em alta velocidade de execução.</li>
      <li><strong>Comunidade Ampla</strong>: O ecossistema de pacotes do Node.js, chamado <strong>NPM</strong> (Node Package Manager), é o maior repositório de pacotes de software do mundo. Há uma vasta gama de bibliotecas disponíveis para ajudar a desenvolver praticamente qualquer tipo de aplicação.</li>
    </ul>

    <h4>3. <strong>Como Funciona o Node.js?</strong></h4>
    <p>Diferente dos servidores tradicionais como Apache ou PHP, que seguem um modelo de execução multithread, o Node.js opera em um único thread, mas com um loop de eventos que lida com operações assíncronas, como operações de I/O, chamadas a banco de dados, e outras tarefas que não precisam bloquear a execução do programa.</p>
    <pre><code>
// Exemplo básico de um servidor em Node.js
const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Olá, Mundo!');
});

server.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});
    </code></pre>
    <p>No exemplo acima, criamos um servidor básico que responde "Olá, Mundo!" em qualquer requisição. O <strong>http.createServer</strong> cria o servidor e o <strong>listen</strong> faz com que ele escute na porta 3000. Essa simplicidade é um dos motivos pelos quais o Node.js se tornou tão popular.</p>

    <h4>4. <strong>Principais Casos de Uso</strong></h4>
    <p>Node.js é amplamente utilizado em várias áreas devido à sua flexibilidade e performance. Aqui estão alguns dos principais casos de uso:</p>
    <ul>
      <li><strong>APIs RESTful</strong>: O Node.js é uma excelente escolha para construir APIs que precisam manipular muitas requisições e respostas de forma rápida e eficiente.</li>
      <li><strong>Aplicações em Tempo Real</strong>: Chats, sistemas de mensagens e aplicações de colaboração (como Google Docs ou Slack) se beneficiam muito do modelo de eventos e sockets oferecido pelo Node.js.</li>
      <li><strong>Ferramentas de CLI</strong>: Muitas ferramentas de linha de comando modernas, como o npm e o yarn, são construídas usando Node.js devido à sua simplicidade para manipular arquivos e processar operações do sistema.</li>
    </ul>

    <h4>5. <strong>Conclusão</strong></h4>
    <p>O Node.js transformou o ecossistema do desenvolvimento back-end ao trazer o JavaScript para o lado do servidor. Sua natureza assíncrona e orientada a eventos, juntamente com a ampla adoção pela comunidade e a vasta gama de bibliotecas disponíveis, fazem dele uma das principais escolhas para desenvolvedores que buscam construir aplicações web escaláveis e de alta performance.</p>
    <p>Se você está começando no desenvolvimento de back-end, o Node.js é uma excelente plataforma para aprender, especialmente se você já tem experiência com JavaScript no front-end!</p>
  `,
  imagem: '/images/nodejs.png',
},
];

export default function Post() {
  const pathname = usePathname();
  const slug = pathname.substring(1); // Extrai o slug da URL

  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return notFound(); // Retorna 404 se o post não for encontrado
  }

  return (
    <div>
      <h2>{post.titulo}</h2>
      <img src={post.imagem} alt={post.titulo} width={400} />
      <div dangerouslySetInnerHTML={{ __html: post.conteudo }} />
    </div>
  );
}
