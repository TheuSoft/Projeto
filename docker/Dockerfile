# Dockerfile para Agenda Médica
FROM node:22.13.1-alpine

WORKDIR /app

# Instalar dependências do sistema
RUN apk add --no-cache \
    libc6-compat \
    python3 \
    make \
    g++ \
    postgresql-client

# Copiar arquivos de configuração
COPY package*.json ./
COPY tsconfig.json ./
COPY next.config.ts ./
COPY components.json ./
COPY drizzle.config.ts ./
COPY postcss.config.mjs ./
COPY eslint.config.mjs ./

# Instalar dependências
RUN npm ci

# Copiar código fonte
COPY . .

# Criar usuário não-root
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Definir permissões
RUN chown -R nextjs:nodejs /app
USER nextjs

EXPOSE 3000

CMD ["npm", "run", "dev"]
