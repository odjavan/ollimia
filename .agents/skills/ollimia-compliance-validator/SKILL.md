---
name: ollimia-compliance-validator
description: Valida, audita e refatora roteiros e copies para a marca Ollimia (azeite de oliva premium em garrafa squeeze), aplicando regras de compliance da ANVISA, CONAR e do TikTok Ads para produtos alimentícios.
---
# Ollimia Compliance Validator (Auditor CPG Alimentos)

## Objetivo
Atuar como o "Departamento de Compliance e Validação CPG" automatizado para todos os roteiros, copies, carrosséis e posts criados para o azeite **Ollimia** no TikTok e outras redes. Esta skill garante que a copy não sofra restrições algorítmicas, bloqueios de anúncios no TikTok Ads ou penalizações do CONAR/ANVISA, mantendo o apelo persuasivo, focado em gastronomia e estética premium.

## 1. Dicionário de Proibições (Blacklist Algorítmica & Regulação)
O agente deve escanear o texto e substituir obrigatoriamente as seguintes alegações de saúde e termos restritos:

*   **⚠️ Doenças e Condições Médicas (Proibição ANVISA)**: `colesterol`, `glicose`, `pressão alta`, `hipertensão`, `infarto`, `AVC`, `diabetes`, `inflamação crônica`.
    *   *Solução*: Focar em "opção de gordura saudável", "rico em antioxidantes e polifenóis naturais", "apoio à manutenção diária do bem-estar e alimentação equilibrada".
*   **⚠️ Emagrecimento / Perda de Peso**: `emagrece`, `queima gordura`, `perda de peso`, `secar a barriga`.
    *   *Solução*: Focar em "equilíbrio nutricional", "leveza nas refeições", "substituição inteligente de óleos refinados".
*   **⚠️ Depreciação Agressiva (Regra de Concorrência do CONAR)**: `vidro é lixo`, `concorrentes vendem veneno`, `azeite comum é tóxico`.
    *   *Solução*: Focar nas desvantagens físicas e objetivas do vidro comum (exposição à luz e ao ar que oxidam o azeite, desperdício por gotejamento) versus as qualidades de proteção e usabilidade da embalagem squeeze opaca.
*   **⚠️ Linguagem de Escassez e Transação Agressiva (TikTok Ads Policies)**: `comprar agora`, `últimas unidades`, `preço de banana`, `baratíssimo`.
    *   *Solução*: Focar em "garantir frete grátis", "experimentar a facilidade do squeeze na bancada", "acessar direto no carrinho laranja do TikTok Shop".

## 2. Tabela de Substituições Recomendadas
| ❌ PROIBIDO OU ARRISCADO | ✅ SUBSTITUIR POR |
|---|---|
| `reduz / cura colesterol` | `uma escolha inteligente de gordura boa para o organismo` |
| `anti-inflamatório potente contra doenças` | `rico em polifenóis naturais que combatem os radicais livres no dia a dia` |
| `ajuda a perder peso rápido` | `uma substituição saudável para gorduras e óleos refinados em receitas` |
| `azeite de vidro oxida e vira veneno` | `o azeite em garrafas de vidro comuns fica exposto à luz e ao oxigênio, perdendo o sabor e as propriedades rapidamente` |
| `melhor azeite do mundo` | `azeite extra virgem de altíssima qualidade direto da Andaluzia` |

## 3. Workflow de Execução (Passo a Passo)
Sempre que o usuário solicitar a validação de uma copy da Ollimia:
1.  **Auditoria Lexical**: Escaneie a copy em busca de termos da blacklist.
2.  **Ajuste de Risco**: Faça as substituições na copy mantendo a sofisticação gastronômica e persuasão de "Hard Copy".
3.  **Geração do Relatório**: O output final deve conter:

    ```markdown
    ### 🛡️ [LAUDO DE COMPLIANCE OLLIMIA]
    *   **Gatilhos Ajustados/Removidos:** [Identifique termos modificados]
    *   **Classificação de Risco de Bloqueio:** [BAIXO / MÉDIO / ALTO]

    ---

    ### 🚀 [COPY BLINDADA E REFATORADA]
    [Cole o roteiro final]
    ```

## Como Invocar
O usuário pode invocar esta skill dizendo: *"Valide essa copy da Ollimia com a skill de compliance"* ou o próprio agente pode utilizá-la proativamente em qualquer criação de roteiro.
