# 🔧 Como configurar a integração com Instagram

## Passo 1: Criar um App no Facebook Developers

1. Acesse [Facebook Developers](https://developers.facebook.com/)
2. Clique em "Meus Apps" > "Criar App"
3. Escolha "Consumidor" como tipo de app
4. Preencha os dados do app

## Passo 2: Adicionar Instagram Basic Display

1. No painel do seu app, vá em "Produtos"
2. Encontre "Instagram Basic Display" e clique em "Configurar"
3. Clique em "Criar novo app"

## Passo 3: Configurar Instagram Basic Display

1. Vá para "Instagram Basic Display" > "Configuração básica"
2. Adicione estas URLs de redirecionamento OAuth válidas:
   - `https://seudominio.com/auth/callback`
   - `http://localhost:3000/auth/callback` (para desenvolvimento)
3. Adicione a URL de cancelamento de autorização:
   - `https://seudominio.com/auth/deauthorize`
4. Adicione a URL de exclusão de dados:
   - `https://seudominio.com/auth/delete`

## Passo 4: Adicionar usuário de teste

1. Vá para "Funções" > "Funções"
2. Clique em "Adicionar usuários de teste do Instagram"
3. Adicione o username: `gabrielaferreira_psi`
4. O usuário precisa aceitar o convite no Instagram

## Passo 5: Gerar Access Token

1. Vá para "Instagram Basic Display" > "Configuração básica"
2. Clique em "Gerar token" ao lado do usuário de teste
3. Faça login com a conta `gabrielaferreira_psi`
4. Autorize o app
5. Copie o Access Token gerado

## Passo 6: Obter User ID

Execute esta URL no navegador (substitua ACCESS_TOKEN):
\`\`\`
https://graph.instagram.com/me?fields=id,username&access_token=ACCESS_TOKEN
\`\`\`

## Passo 7: Configurar variáveis de ambiente

Crie o arquivo `.env.local` na raiz do projeto:

\`\`\`env
INSTAGRAM_ACCESS_TOKEN=seu_access_token_aqui
INSTAGRAM_USER_ID=seu_user_id_aqui
\`\`\`

## Passo 8: Renovar Access Token (Importante!)

Os tokens expiram em 60 dias. Para renovar:

\`\`\`bash
curl -i -X GET "https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=ACCESS_TOKEN"
\`\`\`

## ⚠️ Notas importantes:

1. **Modo de desenvolvimento**: O app funciona apenas com usuários de teste
2. **Modo de produção**: Precisa passar pela revisão do Facebook
3. **Rate limits**: 200 requests por hora por usuário
4. **Cache**: A API tem cache de 1 hora para otimizar performance

## 🔄 Para automatizar a renovação do token:

Você pode criar um cron job ou usar serviços como Vercel Cron Jobs para renovar automaticamente o token a cada 30 dias.
