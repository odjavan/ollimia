# 🗺️ Roadmap & Pipeline Operacional: Criação Visual & Homepage Ollimia

> **Status:** Guia de Acompanhamento Fase a Fase  
> **Motor de Vídeo:** Google Flow (Google AI Studio / Veo / Flow)  
> **Workspace:** `C:\2026\Ollimia`  
> **Data de Criação:** 2026-08-05  

---

## 📌 Visão Geral do Pipeline

Este documento divide o desenvolvimento da **Homepage Ollimia** e a **Produção de Mídias por IA** em 5 fases sequenciais, definindo com clareza quem faz o quê em cada etapa.

```
[FASE 1: Extração PDF] ──> [FASE 2: Fotos 8K IA] ──> [FASE 3: Vídeos Google Flow] ──> [FASE 4: Código Home] ──> [FASE 5: Páginas Internas]
```

---

## 🚀 Detalhamento das Fases & Responsabilidades

### 🛠️ **FASE 1 — Extração das Imagens de Referência do PDF**
* **Responsável:** 🤖 Agente (Antigravity)
* **Ação:** Extração automática das fotos reais do produto do arquivo `APRESENTACAO COMERCIAL OLLIMIA.pdf` (garrafa Picual 500ml, garrafa Alentejo, bico dosador e uso na cozinha).
* **Entregável:** Pasta [`Curadoria/Imagens/`](file:///c:/2026/Ollimia/Curadoria/Imagens/) preenchida com as imagens `.png` fiéis da marca.

---

### 📸 **FASE 2 — Geração de Fotografias 8K (Image-to-Image)**
* **Responsável:** 🤝 Colaborativo (Agente entrega Prompts 8K + Usuário roda em Midjourney/Flux/Imagen ou via `generate_image`)
* **Ação:** Utilização das fotos extraídas da Fase 1 como **Image Prompt (Âncora Visual)** + os prompts do documento [`catalogo_prompts_homepage_ollimia.md`](file:///c:/2026/Ollimia/Referencias/catalogo_prompts_homepage_ollimia.md) para gerar fotos em alta resolução nos cenários da cozinha gourmet.
* **Entregável:** 6 imagens 8K impecáveis da garrafa nos cenários do site.

---

### 🎥 **FASE 3 — Geração de Vídeos Cinematográficos no Google Flow**
* **Responsável:** 🤝 Colaborativo (Agente fornece Prompts JSON / Image-to-Video ➔ Usuário executa no **Google Flow**)
* **Ação:** Upload das imagens 8K no Google Flow aplicados com a skill [`provador-omni-flash`](file:///c:/2026/SKILLS_MESTRAS/provador-omni-flash/SKILL.md) e os prompts estruturados em JSON ([`catalogo_prompts_video_ollimia.md`](file:///c:/2026/Ollimia/Referencias/catalogo_prompts_video_ollimia.md)).
* **Entregável:** Clipes MP4 cinematográficos de 5 a 10s (dosagem de azeite em fio, rotação 3D do squeeze, macro do bico dosador).

---

### 💻 **FASE 4 — Prototipação UI & Construção da Homepage (Página 01)**
* **Responsável:** 🤖 Agente (Antigravity)
* **Ação:** Construção do código limpo em HTML5/CSS3 vanilla da Home, aplicando os 10 Módulos do Plano Mestre ([`PLANO_MESTRO_HOMEPAGE_OLLIMIA.md`](file:///c:/2026/Ollimia/docs/PLANO_MESTRO_HOMEPAGE_OLLIMIA.md)), a cópia da Isa, o Design System Ollimia e integrando os vídeos do Google Flow.
* **Entregável:** Página 01 (Home) interativa e pronta para validação.

---

### 📄 **FASE 5 — Extensão para as Páginas Internas (Páginas 02 a 07)**
* **Responsável:** 🤖 Agente (Antigravity)
* **Ação:** Aplicação da herança visual da Home nas demais páginas do Wireframe (Processo, Produtos, Waitlist B2C, Revendedor B2B, Distribuidor B2B e FAQs).
* **Entregável:** Site de 7 Páginas concluído.

---

## 🔑 Comando Mágico para o Retorno do Usuário

Após reiniciar o PC e abrir este chat novamente, basta enviar a seguinte frase:

> 💬 **`Onde paramos? Vamos iniciar a Fase 1 do pipeline visual da Home`**

O agente lerá automaticamente a memória mestre `Ollimia_Memory_Chat.md` e iniciará a execução da **Fase 1** (extração de mídias e preparação do lote de geração do Google Flow).
