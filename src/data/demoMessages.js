// =====================================
// Demo 1: Integração SAP
// =====================================
const demo1Messages = [
    {
        sender: 'bot',
        text: `👋 Olá! Sou o assistente virtual da Hvar. Como posso ajudar sua empresa hoje?`,
        persona: 'general',
        timestamp: '14:20'
    },
    {
        sender: 'user',
        text: `Estamos com problemas para integrar nossos dados SAP aos sistemas analíticos`,
        timestamp: '14:21'
    },
    {
        sender: 'bot',
        text: `Entendi que vocês precisam integrar dados <span style="color:#2563eb">SAP</span> de forma eficiente com seus sistemas analíticos. 📊
      
Esse é um caso de uso excelente para nossas soluções de <span style="color:#2563eb">Integração SAP</span>!

Para que possamos direcionar melhor nossa proposta, poderia me contar quais módulos <span style="color:#2563eb">SAP</span> vocês utilizam atualmente (ECC, S/4HANA, etc.) e para quais finalidades (finanças, supply chain, etc.)?`,
        persona: 'sap',
        timestamp: '14:21'
    },
    {
        sender: 'user',
        text: `Usamos SAP ECC para financeiro e S/4HANA para supply chain. Queremos criar dashboards no Power BI.`,
        timestamp: '14:22'
    },
    {
        sender: 'bot',
        text: `Ótimo! Essa combinação de <span style="color:#2563eb">SAP ECC</span>, <span style="color:#2563eb">S/4HANA</span> e <span style="color:#2563eb">Power BI</span> é exatamente onde entregamos valor.
  
  Podemos implementar conectores especializados para:
  
  1. Integrar dados financeiros e de supply chain de forma contínua  
  2. Criar <span style="color:#2563eb">dashboards customizados</span> que seguem práticas de UX  
  3. Acelerar a tomada de decisão com dados confiáveis
  
  Empresas que adotaram nossas soluções de Integração SAP reduziram em até <strong>60%</strong> o tempo de implementação e ganharam mais agilidade na análise de resultados.
  
  Gostaria de conhecer algum caso específico ou entender melhor como estruturamos esse processo?`,
        persona: 'sap',
        timestamp: '14:23'
    }
];

// =====================================
// Demo 2: Atendimento ao Cliente
// =====================================
const demo2Messages = [
    {
        sender: 'bot',
        text: `👋 Olá! Sou o assistente virtual da Hvar. Como posso ajudar sua empresa hoje?`,
        persona: 'general',
        timestamp: '14:30'
    },
    {
        sender: 'user',
        text: `Precisamos melhorar nossa experiência de atendimento ao cliente`,
        timestamp: '14:31'
    },
    {
        sender: 'bot',
        text: `Melhorar a experiência de atendimento ao cliente é uma meta essencial. 📈
  
  Para direcionar nossa conversa, poderia compartilhar quais canais vocês utilizam (telefone, chat, email etc.) e os principais desafios no dia a dia?`,
        persona: 'general',
        timestamp: '14:31'
    },
    {
        sender: 'user',
        text: `Temos um call center com 50 atendentes. O tempo de espera está muito alto e pensamos em chatbots.`,
        timestamp: '14:32'
    },
    {
        sender: 'bot',
        text: `Entendi que vocês enfrentam desafios no atendimento, com longos tempos de espera. 📞
  
  Esse é um caso ideal para nossas soluções de <span style="color:#2563eb">Agentes Conversacionais</span> e <span style="color:#2563eb">Automação Robótica de Processos (RPA)</span>!
  
  Nossos <span style="color:#2563eb">Squads de Conversational AI</span> podem implementar chatbots inteligentes que:
  
  1. Resolvam questões básicas de forma autônoma  
  2. Mantenham o contexto ao transferir para um atendente  
  3. Reduzam significativamente o tempo de espera e o custo operacional
  
  Clientes que adotaram essas soluções diminuíram em até <strong>65%</strong> o volume de interações humanas nas etapas iniciais, melhorando a satisfação do cliente.
  
  Gostaria de conhecer um caso específico ou saber mais sobre como funciona a implementação?`,
        persona: 'conversational',
        timestamp: '14:33'
    }
];

// =====================================
// Demo 3: IA Generativa
// =====================================
const demo3Messages = [
    {
        sender: 'bot',
        text: `👋 Olá! Sou o assistente virtual da Hvar. Como posso ajudar sua empresa hoje?`,
        persona: 'general',
        timestamp: '14:40'
    },
    {
        sender: 'user',
        text: `Estamos interessados em inteligência artificial para nossos processos internos`,
        timestamp: '14:41'
    },
    {
        sender: 'bot',
        text: `Ótimo! A <span style="color:#2563eb">IA</span> pode realmente transformar diversos processos internos. 🤖
  
  Para direcionar melhor nossa conversa, poderia compartilhar quais áreas específicas vocês estão considerando aprimorar (ex: automação de documentos, análise de dados, atendimento ao cliente etc.)?`,
        persona: 'general',
        timestamp: '14:41'
    },
    {
        sender: 'user',
        text: `Principalmente na criação e análise de documentos, como contratos e relatórios técnicos. Gastamos muito tempo nisso hoje.`,
        timestamp: '14:42'
    },
    {
        sender: 'bot',
        text: `Entendi que seu foco está na otimização do trabalho com documentos como contratos e relatórios técnicos. 📄
  
  Esse é um caso de uso excelente para <span style="color:#2563eb">IA Generativa</span>!  
  
  Nossos <span style="color:#2563eb">Squads de IA Generativa</span> especializam-se exatamente nesse tipo de aplicação.
  
  Podemos implementar uma solução que utiliza modelos de linguagem avançados para:
  
  1. Gerar primeiras versões de contratos baseados em modelos e parâmetros específicos  
  2. Analisar e extrair informações-chave de relatórios extensos  
  3. Criar resumos executivos automaticamente
  
  Empresas que implementaram soluções similares reduziram em até <strong>70%</strong> o tempo dedicado a esses processos.
  
  Gostaria de conhecer um caso específico ou saber mais sobre como funciona a implementação?`,
        persona: 'genai',
        timestamp: '14:43'
    }
];

const demoMessages = [demo1Messages, demo2Messages, demo3Messages];

export { demo1Messages, demo2Messages, demo3Messages, demoMessages };
export default demoMessages;
