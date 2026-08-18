# 🏛️ Plano Mestre: Arquitetura, Design System & Imagens da Homepage Ollimia

> **Status:** Documento Oficial de Planejamento da Homepage  
> **SSoT de Referência:** Wireframe 7 Páginas + Anotações da Isa + Anatomia Guto + Identidade Visual Oficial  
> **Workspace:** `C:\2026\Ollimia`  
> **Data:** 2026-08-05  

---

## 🧭 1. O Wireframe de 7 Páginas como Norte Absoluto (SSoT)

Este plano da **Homepage (Página 01)** respeita e integra integralmente o **Wireframe de 7 Páginas** do projeto e as **Anotações da Isa**. O wireframe define o mapa de navegação completo da marca:

| Página do Wireframe | Função no Ecossistema Ollimia | Status no Planejamento |
|---|---|---|
| **Página 01 — HOME** | Posicionamento Hero Squeeze (*Chef-Style*), anatomia, comparativo vidro vs. squeeze e conversão B2C/B2B | **Foco Atual (Fase 1)** |
| **Página 02 — PROCESSO** | Prensagem a frio (<27°C) e laudos de polifenóis | Herda Design System da Home |
| **Página 03 — PRODUTOS** | Vitrine Linha Espanha (Picual) vs. Linha Portugal (Alentejo) | Herda Design System da Home |
| **Página 04 — WAITLIST B2C** | Captação de lista de espera para o consumidor final | Herda Design System da Home |
| **Página 05 — REVENDEDOR B2B** | Formulário e fluxo de 3 passos para empórios e lojistas | Herda Design System da Home |
| **Página 06 — DISTRIBUIDOR B2B** | Captação de parceiros de grande distribuição regional e internacional | Herda Design System da Home |
| **Página 07 — FAQS** | Central de dúvidas sobre a garrafa squeeze e conservação | Herda Design System da Home |

> 📌 **Como as Anotações da Isa se Integram ao Wireframe:**
> - **Blocos 1.1 a 1.3:** Fornecem os textos exatos da Home (*"A nova era do Azeite de Oliva"*, *"Embalagem Inovadora"*, propósitos das duas famílias).
> - **Bloco 1.4:** Consolida a tripla conversão na Home (Waitlist Consumidor / Revendedor / Distribuidor).
> - **Passos do Revendedor:** Estrutura em 3 etapas (*Cadastro ➔ Análise Comercial ➔ Faturamento/Envio*).

---

## 🎨 2. Design System Oficial Ollimia (Extraído da Apresentação Comercial)

A estética da Home aplicará rigorosamente a identidade visual definida na apresentação comercial da marca:

```css
:root {
  /* Cores Principais Ollimia */
  --ollimia-olive-dark:   #1E2616; /* Fundo Verde-Oliva Escuro Profundo (Rótulo Picual) */
  --ollimia-olive-lime:   #8C9926; /* Verde-Limão / Chartreuse (Acentuação e CTAs) */
  --ollimia-terracotta:   #D48C46; /* Terracota Quente (Linha Portugal / Alentejo) */
  --ollimia-cream:        #F5F3E9; /* Creme / Warm Vanilla (Fundos Claros e Textos) */
  --ollimia-carbon:       #141414; /* Preto Carbono (Bico Dosador e Tampas) */
  --ollimia-gold:         #C5A059; /* Dourado V-Emblem e Selos de Qualidade */

  /* Tipografia */
  --font-display: 'Archivo Narrow', 'Monument Extended', sans-serif; /* Caixas Altas Condensadas Bold */
  --font-accent:  'Ollimia Cursive Script', cursive; /* Assinatura Retrô da Marca */
  --font-body:    'Inter', system-ui, sans-serif;    /* Corpo de Texto Fino / Refinado */
}
```

---

## 🖼️ 3. Estratégia de Solução para Imagens (Como Resolveremos a Falta de Fotos)

Como atualmente não temos o banco de fotos final da garrafa física, aplicaremos uma **Estratégia Tripla de Produção Visual** para entregar um site deslumbrante e 100% realista:

1. **Geração de Imagens com Inteligência Artificial Agêntica (`generate_image`):**
   * Criaremos imagens ultra-realistas em alta definição da garrafa squeeze da Ollimia em verde-esmeralda, em cenários de bancada de cozinha gourmet, com iluminação de estúdio gastronômico.
   * Renderização em macro do **Bico Dosador Inteligente** despejando azeite dourado em gota e em fio sobre saladas e massas.
   * Imagens de atmosfera mediterrânea (colheita de azeitonas Picual na Andaluzia e lagares em Portugal).

2. **Componentização CSS/SVG Avançada (UI Engine):**
   * Gráficos vetoriais SVG para o símbolo "V", selos de qualidade, ícones de sustentabilidade e diagramas da garrafa.
   * Mockups interativos em CSS pura com glassmorphism, sombras realistas e overlays de iluminação.

3. **Curadoria de Fotografia Gastronômica de Apoio:**
   * Fotografia editorial gastronômica de alta resolução para composições de fundo e prova social.

---

## 📐 4. Mapeamento da Homepage: 10 Módulos + Efeitos dos Benchmarks

Integrando a estrutura do Guto (`anatomia-homepage-ollimia.pdf`), o wireframe da Isa e as melhores práticas dos 7 benchmarks:

### **Módulo 01 · Hero Section (Acima da Dobra)**
* **Textos da Isa:** *"A nova era do Azeite de Oliva"* • *"Chef's Style"*.
* **Efeitos & Benchmarks:** Ref. `Its Olio` + `Fly By Jing`. Layout split-screen com hero visual da garrafa squeeze, badges arredondados (`pill`) e botão de ação em verde-limão.

### **Marquee Ticker (Efeito `Fishwife`)**
* Faixa rolante contínua com frases de efeito: `OLLIMIA • 10X MAIS LEVE • BICO DOSADOR INTELIGENTE • 0% DE QUEBRA • AZEITE PICUAL ESPANHOL •`

### **Módulo 02 · Barra de Micro-Provas & Diferenciais**
* **Textos da Isa:** 4 ícones (Andaluzia & Alentejo, Bico Inteligente, WhatsApp Antifraude, Leve & Sustentável).
* **Efeitos & Benchmarks:** Ref. `Seed`. Cards em respiro elevado com micro-interação no hover.

### **Módulo 03 & 04 · Vitrine de Produtos & Squeezes**
* Cards 3D das linhas Picual (500ml/750ml) e Alentejo com selo "Em Breve / Waitlist". Ref. `Its Olio` + `Bachan's`.

### **Módulo 05 · Squeeze vs. Vidro (Quebra de Objeção)**
* **Efeitos & Benchmarks:** Ref. `Bachan's`. Toggle/Slider interativo comparando "Garrafa de Vidro" (pesada/quebra/lambuzeira) vs "Ollimia Squeeze" (leve/precisa/inquebrável).

### **Módulo 06 · Transparência & Antifraude (Parceria OOriginal)**
* **Efeitos & Benchmarks:** Ref. `Ritual`. Mockup interativo de smartphone escaneando QR Code e mostrando o laudo no WhatsApp.

### **Módulo 07 · Da Origem ao Prato (Storytelling)**
* **Textos da Isa:** *"A Tradição do Mediterrâneo Encontra o Design Contemporâneo"*. Grid assimétrico estilo editorial. Ref. `Borgo de Medici`.

### **Módulo 08 · Prova Social & Aspas de Chefs**
* Carrossel de avaliações reais e aspas de especialistas gastronômicos. Ref. `Its Olio`.

### **Módulo 09 · Perguntas Frequentes (FAQ)**
* Accordion expansível com dúvidas sobre a embalagem squeeze. Ref. `Seed`.

### **Módulo 10 · Rodapé Comercial & Captação (B2C & B2B)**
* Formulario integrado com abas para Consumidor (Waitlist) vs Revendedor (3 Passos da Isa: *Cadastro ➔ Análise ➔ Faturamento*) vs Distribuidor. Ref. `Bachan's`.

---

## 🚦 Próximos Passos
Com este documento salvo, a estrutura está protegida e pronta para a fase de prototipação visual da **Home**.
