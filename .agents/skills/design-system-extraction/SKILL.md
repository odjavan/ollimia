---
name: design-system-extraction
description: >
  Skill de Extração e Recriação Original de Design System (Home DTC).
  Transforma referências visuais (benchmarks) em um design system próprio, original e defensável contra plágio através de um pipeline sequencial de 5 papéis (UX Researcher, UI Designer, Design System Engineer, Copywriter, Brand Differentiation Strategist).
---

# SKILL: Extração e Recriação Original de Design System (Home DTC)

## 0. Objetivo da skill

Transformar N referências visuais em UM design system próprio, original, defensável
legalmente, através de um pipeline de 5 papéis especializados que trabalham em
sequência. Nenhuma fase pode ser pulada. A Fase 5 é a trava de segurança contra plágio
e é obrigatória antes de qualquer entrega final.

Escopo padrão: iniciar sempre pela **Home**. Só expandir para outras páginas depois
que a Home estiver validada pelo usuário.

---

## 1. Inputs obrigatórios (perguntar antes de começar, se faltar algum)

1. **URLs de referência** (1 a N) — sites cujo design/estrutura serão estudados.
   - Se só houver acesso via fetch de texto (sem CSS renderizado), sinalizar a limitação
     e pedir **screenshots** da home inteira (scroll completo) ou dados extraídos via
     DevTools (Inspecionar → Computed Styles).
2. **Material de identidade da marca própria**: logo, paleta já existente (se houver),
   tom de voz, posicionamento, categoria de produto.
3. **Qual referência é a "Top Pick"** (a mais próxima do resultado desejado) — isso
   define o peso relativo de cada referência na síntese final.

---

## 2. FASE 1 — UX Researcher / Analista de Estrutura

Para cada URL/screenshot, mapear a home em ordem vertical, seção por seção, respondendo
"o que essa seção faz, não o que ela parece":

Ordem-padrão observada em homes DTC (usar como checklist, nem toda home tem todas):

1. Barra de anúncio (frete, promoção, urgência)
2. Header/nav (estrutura de menu, CTAs de conta/carrinho, mega-menu ou não)
3. Hero (imagem/vídeo + headline + CTA + prova social imediata tipo rating)
4. Prova social / logos de imprensa
5. Diferencial técnico (ícones de benefício OU tabela comparativa "nós vs. eles")
6. Produto em destaque / grid de produtos
7. Storytelling (fundador, origem, processo)
8. UGC / depoimentos / vídeos de cliente
9. FAQ ou bloco educativo
10. Captura de e-mail
11. Footer

**Output da Fase 1:** wireframe textual numerado por site + uma síntese cross-site
apontando o que é padrão de categoria (não protegível) vs. o que é escolha autoral
do site de referência (não deve ser copiado 1:1).

---

## 3. FASE 2 — UI Designer / Analista Visual

Extrair, por referência, os seguintes tokens (a partir de screenshot ou CSS real):

| Token | O que observar |
|---|---|
| Cor de fundo dominante | cor de maior área da home |
| Cor de destaque/CTA | cor dos botões de ação |
| Cor de texto primária | contraste sobre o fundo |
| Tipografia display | categoria: sans condensada/display, serif editorial, script, ou combinação |
| Tipografia body | peso, tamanho aproximado, tracking |
| Forma de botão | pill (arredondado total), retangular, com borda grossa |
| Estilo de divisores | reto, zigzag, escalope (scalloped), orgânico |
| Motivo gráfico/ilustração | mascote, selo vintage, ícone de linha, foto pura |
| Densidade de whitespace | compacto vs. respirado |

**Regra:** se a extração vier de fetch de texto (sem CSS), declarar explicitamente
"tokens estimados visualmente, não são hex exatos — validar com DevTools antes de
finalizar" ao invés de inventar valores com falsa precisão.

**Output da Fase 2:** tabela de tokens por referência.

---

## 4. FASE 3 — Front-end / Design System Engineer

Traduzir os tokens da Fase 2 em variáveis técnicas implementáveis:

```css
:root {
  --color-bg-primary: ...;
  --color-accent: ...;
  --color-text-primary: ...;
  --font-display: ...;
  --font-body: ...;
  --radius-button: ...; /* ex: 999px para pill */
  --spacing-base: ...;  /* ex: 8px */
}
```

Também define breakpoints e escala tipográfica (ex: 1.25 type scale) prontos para o
dev implementar sem ambiguidade.

**Output da Fase 3:** bloco de tokens técnicos (CSS custom properties ou Tailwind
config) — este é o artefato que vai direto pro código.

---

## 5. FASE 4 — Copywriter / Estrategista de Mensagem

Extrair a **arquitetura retórica**, nunca o texto literal:

- Estrutura da headline (ex: "Promessa + prova numérica", "Pergunta + resposta",
  "Imperativo + benefício sensorial")
- Tom de voz (formal/informal, técnico/emocional, brincalhão/sério)
- Gatilhos dominantes (escassez, autoridade científica, tradição/herança, prova social,
  humor/mascote)

**Regra de copyright:** nunca reproduzir frases da referência, nem paráfrases próximas.
Extrair apenas o "molde" retórico e preencher com conteúdo 100% autoral da marca.

**Output da Fase 4:** brief de tom de voz + esqueleto de headline vazio (a preencher).

---

## 6. FASE 5 — Brand Differentiation Strategist (trava anti-plágio, OBRIGATÓRIA)

Esta fase recebe: tokens da Fase 2/3 + brief da Fase 4 + material de identidade própria
do usuário (Fase 0). Produz o design system final, original.

### Técnicas de tradução (aplicar, não pular nenhuma):

1. **Rotação de matiz:** manter luminosidade e saturação percebidas semelhantes à
   referência, mas mudar o matiz (hue) para a família de cor da marca própria.
2. **Substituição tipográfica por categoria equivalente:** se a referência usa serif
   editorial, escolher outra família serif com peso visual parecido — nunca a mesma
   família ou uma visualmente indistinguível.
3. **Substituição de motivo gráfico:** trocar selos/mascotes/ilustrações por um motivo
   próprio, coerente com a categoria de produto da marca (ex: motivo botânico para
   azeite, não repetir selo vintage de outra marca).
4. **Reescala da grade de espaçamento:** se a referência usa base 8px, considerar base
   6px ou 10px — cria "impressão digital" espacial distinta.
5. **Reformulação de headline:** manter apenas a arquitetura retórica da Fase 4, texto
   100% novo.

### Checklist de validação final (percorrer item a item antes de aprovar entrega):

- [ ] Nenhuma cor em hex idêntica (ou a menos de ~10% de diferença perceptual) à referência
- [ ] Nenhuma fonte com o mesmo nome de família da referência
- [ ] Nenhuma sequência de 4+ palavras idênticas entre o copy novo e o da referência
- [ ] Motivo gráfico/ilustração não é derivado direto do ativo visual da referência
- [ ] A ordem de seções pode ser estruturalmente parecida (isso é padrão de categoria,
      não é protegível), mas o conteúdo de cada seção é autoral
- [ ] Um observador que conheça as duas marcas reconheceria inspiração, não cópia

**Se qualquer item falhar → volta para a técnica correspondente antes de entregar.**

---

## 7. Output final do pipeline

Entregar sempre neste formato:

```
[NOME DO PROJETO] — Design System v1

1. Paleta (tokens com hex)
2. Tipografia (display, body, escala de tamanhos)
3. Componentes (botão, card, badge, divisor)
4. Grid/espaçamento
5. Wireframe de home (herdado da Fase 1, adaptado à marca)
6. Voz de marca (Fase 4)
7. Relatório de originalidade (checklist da Fase 5, preenchido e assinado)
```

---

## 8. Como reutilizar esta skill em outros projetos

1. Copiar este arquivo inteiro como prompt-base no Antigravity.
2. Trocar apenas a seção 1 (Inputs): novas URLs + novo material de identidade.
3. Rodar as 5 fases em sequência — nunca pular direto para a Fase 5.
4. Nenhuma entrega final sai sem a checklist da Fase 5 preenchida.
5. Se o projeto tiver múltiplas referências (como no caso abaixo), a Fase 5 deve
   sintetizar todas elas numa linguagem única — não é permitido "colar" pedaços
   literais de cada referência lado a lado.

---

## 9. Exemplo real de uso — Benchmarks Ollimia (Fase 1 + Fase 2 já executadas)

Este bloco serve como referência de calibração para a skill: mostra o nível de
detalhe esperado nas Fases 1 e 2 quando aplicadas a 7 marcas DTC reais de alimentos.

| Marca | Paleta dominante | Tipografia display | Forma de botão | Motivo/assinatura visual |
|---|---|---|---|---|
| **It's Olio** (Top Pick) | verde-floresta escuro + creme/amarelo-pálido + vermelho-laranja de destaque | condensada bold em caixa alta para labels; sans limpa no corpo | pill contornado | selo/carimbo vintage estilo etiqueta de lata, ticker de imprensa em faixa laranja |
| **Fishwife** | amarelo vibrante + creme + navy + contornos pretos grossos | serif black bold para headline; script cursivo na wordmark | pill sólido, borda preta grossa | ilustração retrô estilo sereia/lata, embalagens coloridas expostas |
| **Bachan's** | vermelho + branco + preto, borda inferior escalopada | display bold caixa-alta + script vermelho cursivo no destaque | pill sólido | mascote (polvo) ilustrado, faixa de varejo com logos |
| **Fly By Jing** | vermelho saturado + amarelo + preto + branco | sans extra-condensada/heavy caixa-alta, tracking apertado | pill sólido de alto contraste (amarelo/preto) | divisor em zigzag, jarra de produto como hero central |
| **Borgo de Medici** | navy + creme/marfim + dourado/mustard de destaque | serif editorial clássica | retangular com leve raio, dourado | fotografia de flatlay em madeira, padrão preto/branco de embalagem |
| **Ritual** | navy + amarelo-mostarda + cinza-claro | serif itálica editorial misturada com sans | pill sólido navy | split-screen hero (foto + bloco de texto), badges "Best Seller" |
| **Seed** | verde-floresta muito escuro + off-white/creme + acentos verde-neon | sans limpa, peso médio, minimalista | pill (branco sobre fundo escuro, escuro sobre fundo claro) | javras de produto translúcidas, ausência quase total de ilustração — foco 100% fotográfico |

**Síntese cross-site (padrão de categoria, não protegível):** hero full-bleed com
produto centralizado, botão CTA em pill, bloco de prova social logo abaixo do hero,
bloco de diferencial técnico com ícones, storytelling de origem, footer com captura
de e-mail. Isso é gramática de categoria — pode informar a estrutura da nova home
sem violar nada.

**O que É autoral de cada marca e NÃO deve ser herdado:** hex exatos, motivo
ilustrativo específico (selo do It's Olio, mascote polvo do Bachan's, sereia da
Fishwife), família tipográfica exata, texto de headline.
