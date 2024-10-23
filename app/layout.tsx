import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt">
      <head>
        <title>Meu Blog</title>
      </head>
      <body>
        <header>
          <h1>Meu Blog</h1>
          <nav>
            <a href="/">Início</a>
          </nav>
        </header>
        <main>{children}</main>
        <footer>
          <p>© 2024 Meu Blog. Todos os direitos reservados.</p>
        </footer>
      </body>
    </html>
  );
}
