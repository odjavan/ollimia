# Regras Gerais do Projeto — Ollimia

## 🔴 Regra de Boot de Contexto & RAG Agêntico (OBRIGATÓRIA)

**Toda vez que o usuário perguntar "onde paramos?", "o que falta?", "qual o status?", "o que foi feito?" ou qualquer pergunta sobre o histórico ou estado atual do projeto, o agente DEVE:**

1. **Ignorar** o histórico de outras conversas ou outros projetos.
2. **Ler imediatamente** o arquivo [`Ollimia_Memory_Chat.md`](file:///C:/2026/Ollimia/Ollimia_Memory_Chat.md) na raiz do workspace como **fonte primária e Índice Mestre Roteador**.
3. **Identificar a Categoria Desejada** no roteador e acessar o sub-arquivo temático correspondente em `docs/memory/`:
   - 🫒 [`docs/memory/MEMORY_POSICIONAMENTO_GRAZA.md`](file:///C:/2026/Ollimia/docs/memory/MEMORY_POSICIONAMENTO_GRAZA.md) (Azeite Squeeze Picual, Benchmark Graza, PCO Compliance).
   - 🚚 [`docs/memory/MEMORY_OPERACAO_DISTRIBUICAO.md`](file:///C:/2026/Ollimia/docs/memory/MEMORY_OPERACAO_DISTRIBUICAO.md) (Operador logístico, 3 SKUs, precificação, 3 frentes).
   - 📐 [`docs/memory/MEMORY_SITE_WIREFRAME.md`](file:///C:/2026/Ollimia/docs/memory/MEMORY_SITE_WIREFRAME.md) (Wireframe 7 páginas B2C/B2B, SEO, TikTok Shop).
4. **Basear toda a resposta** exclusivamente no conteúdo desses arquivos categorizados.
5. **Jamais buscar** contexto em conversas de outros projetos.

> O arquivo `Ollimia_Memory_Chat.md` atua como **Índice Roteador de Alta Densidade** (< 200 linhas) direcionando o agente para os arquivos temáticos em `docs/memory/`.
