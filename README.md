# Site da Psicóloga Yasmin Martins

Site profissional desenvolvido em Next.js 15 com design elegante e responsivo.

## 🚀 Como instalar e executar

### Pré-requisitos
- Node.js 18+ instalado
- npm, yarn ou pnpm

### Instalação

1. **Clone ou baixe o projeto**
\`\`\`bash
# Se estiver usando Git
git clone <url-do-repositorio>
cd yasmin-martins-psicologa

# Ou extraia os arquivos baixados em uma pasta
\`\`\`

2. **Instale as dependências**
\`\`\`bash
npm install
# ou
yarn install
# ou
pnpm install
\`\`\`

3. **Execute o projeto em desenvolvimento**
\`\`\`bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
\`\`\`

4. **Abra no navegador**
\`\`\`
http://localhost:3000
\`\`\`

## 📁 Estrutura do projeto

\`\`\`
yasmin-martins-psicologa/
├── app/                    # App Router do Next.js 15
│   ├── globals.css        # Estilos globais
│   ├── layout.tsx         # Layout principal
│   └── page.tsx           # Página inicial
├── components/            # Componentes reutilizáveis
│   ├── ui/               # Componentes de UI (shadcn/ui)
│   ├── contact-form.tsx  # Formulário de contato
│   ├── faq-accordion.tsx # Accordion de FAQ
│   ├── instagram-feed.tsx # Feed do Instagram
│   ├── mobile-nav.tsx    # Navegação mobile
│   └── scroll-animation.tsx # Animações de scroll
├── public/               # Arquivos estáticos
└── package.json         # Dependências e scripts
\`\`\`

## 🛠️ Scripts disponíveis

- `npm run dev` - Executa em modo desenvolvimento
- `npm run build` - Gera build de produção
- `npm run start` - Executa build de produção
- `npm run lint` - Executa linting do código
- `npm run type-check` - Verifica tipos TypeScript

## 🎨 Tecnologias utilizadas

- **Next.js 15** - Framework React
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilização
- **Lucide React** - Ícones
- **Radix UI** - Componentes acessíveis
- **Google Fonts** - Tipografia (Crimson Text + Inter)

## 📱 Funcionalidades

- ✅ Design responsivo
- ✅ Animações suaves de scroll
- ✅ Navegação mobile com menu hambúrguer
- ✅ Formulário de contato funcional
- ✅ FAQ com accordion
- ✅ Seção de redes sociais
- ✅ SEO otimizado
- ✅ Acessibilidade (WCAG)
- ✅ Performance otimizada

## 🎯 Personalização

### Alterar cores
Edite as variáveis CSS em `app/globals.css`:
\`\`\`css
.textured-bg {
  background-color: #f0e6e1; /* Cor principal */
}
\`\`\`

### Alterar conteúdo
Edite o arquivo `app/page.tsx` para modificar textos e seções.

### Alterar fontes
Modifique as importações em `app/layout.tsx`:
\`\`\`typescript
import { Crimson_Text, Inter } from 'next/font/google'
\`\`\`

## 🚀 Deploy

### Vercel (Recomendado)
1. Faça push do código para GitHub
2. Conecte no Vercel
3. Deploy automático

### Outros provedores
\`\`\`bash
npm run build
npm run start
\`\`\`

## 📞 Suporte

Para dúvidas sobre o código, consulte a documentação do Next.js ou entre em contato.

## 📄 Licença

Este projeto é privado e destinado ao uso da Psicóloga Yasmin Martins.
