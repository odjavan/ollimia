# 🏛️ Documentação Oficial: Design System & Arquitetura da Home Page Ollimia

> **Status:** Documentação Técnica Concluída e Aprovada  
> **Arquivo CSS Principal:** [`styles/design-system-ollimia.css`](file:///c:/2026/Ollimia/styles/design-system-ollimia.css)  
> **Home Page Oficial:** [`index_ollimia_home.html`](file:///c:/2026/Ollimia/index_ollimia_home.html)  
> **Data:** 2026-08-10  

---

## 🧭 1. Resumo Executivo & Origem do Design System

Este Design System foi desenvolvido integrando:
1. **Identidade de Marca Oficial (`APRESENTACAO COMERCIAL OLLIMIA.pdf`):** Paleta de cores oficial (Verde-Oliva Profundo `#1E2616`, Verde-Limão Chartreuse `#8C9926`, Terracota `#D48C46`, Creme `#F5F3E9`, Preto Carbono `#141414` e Dourado V-Emblem `#C5A059`).
2. **Wireframe Mestre SSoT (7 Páginas Ollimia):** Estrutura funcional em 10 módulos estratégicos para a Página 01 (Home Page).
3. **Síntese de UX Research (7 Benchmarks DTC):** Adoção das melhores práticas de usabilidade e conversão (It's Olio, Fishwife, Bachan's, Fly By Jing, Borgo de Medici, Ritual e Seed).

---

## 🎨 2. Mapeamento de Tokens CSS (`:root`)

As custom properties estão salvas e prontas para uso em todo o repositório:

```css
:root {
  /* Paleta Oficial */
  --ollimia-olive-dark:   #1E2616; /* Verde-Oliva Profundo (Hero & Dark Cards) */
  --ollimia-olive-medium: #384620; /* Verde-Oliva Intermediário */
  --ollimia-olive-lime:   #8C9926; /* Verde-Limão Chartreuse (CTAs & Interação) */
  --ollimia-terracotta:   #D48C46; /* Terracota Quente (Linha Portugal / Logística) */
  --ollimia-cream:        #F5F3E9; /* Creme Warm Vanilla (Fundos Claros) */
  --ollimia-carbon:       #141414; /* Preto Carbono (Detalhes e Tampas) */
  --ollimia-gold:         #C5A059; /* Dourado V-Emblem */

  /* Tipografia */
  --font-display: 'Archivo Narrow', sans-serif;
  --font-body:    'Inter', system-ui, sans-serif;
  --font-accent:  'Playfair Display', serif;

  /* Formas DTC */
  --radius-pill: 999px; /* Botões Pill DTC */
  --radius-card: 16px;  /* Cards Arredondados Modernos */
}
```

---

## 📐 3. Estrutura dos 10 Módulos da Home Page Oficial

A Home Page [`index_ollimia_home.html`](file:///c:/2026/Ollimia/index_ollimia_home.html) foi construída articulando os 10 módulos:

1. **Top Announcement Marquee:** Faixa rotativa com promessas essenciais (`10X MAIS LEVE • BICO INTELIGENTE • 0% DE QUEBRA`).
2. **Header Stickied:** Logo cursivo nominativo + links navegáveis + botão CTA Pill Verde-Limão.
3. **Hero Section (Split-Screen):** Headline de impacto + Mockup da garrafa Squeeze em ação + CTAs duplos (Waitlist B2C / Revendedor B2B).
4. **Marquee Ticker de Imprensa (Press Bar):** Logos e citações de autoridade gastronômica.
5. **Barra de Micro-Provas (4 Feature Cards):** Origem Espanha, Bico Dosador, Proteção UV Opaca e QR Code Antifraude.
6. **Vitrine 3D de Produtos:** Cards interativos dos SKUs Picual 500ml, Picual 750ml e Alentejo Seleção.
7. **Módulo Comparativo Squeeze vs. Vidro:** Tabela interativa provando a superioridade prática da embalagem flexible em relação às garrafas tradicionais.
8. **Transparência Antifraude OOriginal:** Demonstração visual do escaneamento do lote e laudo técnico de peróxidos/polifenóis no WhatsApp.
9. **Storytelling Editorial "Da Origem ao Prato":** Herança da colheita artesanal na Andaluzia e envase seguro em Portugal.
10. **Rodapé de Tripla Conversão (Tabbed Footer):** Abas dinâmicas para Consumidor (Waitlist VIP), Revendedor B2B (3 passos) e Distribuidor.

---

## 🛡️ 4. Validação de Originalidade & Proteção Contra Plágio

* **100% de Autoria Visual:** Nenhuma cor, tipografia ou elemento de design foi duplicado 1:1 de qualquer benchmark.
* **Ergonomia Única:** Foco total no conceito de **"Azeite de Bancada Chef-Style"** (*Countertop Tool*).
