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
  
  Gostaria de agendar uma demonstração com nosso especialista em Integração SAP para entender como podemos ajudar seu caso específico?`,
        persona: 'sap',
        timestamp: '14:23'
    },
    {
        sender: 'user',
        text: `Sim, tenho interesse. Podemos agendar para a próxima semana.`,
        timestamp: '14:24'
    },
    {
        sender: 'bot',
        text: `Perfeito! Acabei de adicionar sua demonstração com nosso especialista em Integração SAP na terça-feira, 18 de março, às 14:00. Um convite foi enviado para seu email com os detalhes da reunião.

Nosso time está ansioso para mostrar como podemos otimizar a integração entre seus sistemas SAP e Power BI. Se precisar reagendar ou tiver outras dúvidas antes da reunião, é só me avisar!`,
        persona: 'sap',
        timestamp: '14:25'
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
  
  Podemos agendar uma conversa com nossa equipe de Conversational AI para explorar como podemos reduzir seus tempos de espera?`,
        persona: 'conversational',
        timestamp: '14:33'
    },
    {
        sender: 'user',
        text: `Sim, tem disponibilidade na quinta-feira pela manhã?`,
        timestamp: '14:34'
    },
    {
        sender: 'bot',
        text: `Excelente! Agendei sua reunião com nossa equipe de Conversational AI para quinta-feira, 13 de março, às 10:30. Você receberá um convite por email com o link para a videoconferência nos próximos minutos.

Durante a reunião, nossos especialistas vão apresentar casos de implementação similares e discutir as melhores abordagens para o seu call center. Se precisar reagendar ou tiver alguma dúvida até lá, estou à disposição!`,
        persona: 'conversational',
        timestamp: '14:35'
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
  
  Gostaria de agendar uma sessão de diagnóstico com nossa equipe de IA Generativa para avaliarmos seu caso específico?`,
        persona: 'genai',
        timestamp: '14:43'
    },
    {
        sender: 'user',
        text: `Com certeza! Pode ser na segunda-feira à tarde.`,
        timestamp: '14:44'
    },
    {
        sender: 'bot',
        text: `Perfeito! Agendei sua sessão de diagnóstico com nossa equipe de IA Generativa para segunda-feira, 17 de março, às 15:00. Um convite com os detalhes e o link da reunião já foi enviado para seu email.

Durante esta sessão, vamos analisar amostras dos seus documentos (se possível compartilhá-los) e discutir as melhores abordagens para automatizar esse trabalho. Nosso time está ansioso para mostrar como a IA Generativa pode transformar seus processos de documentação!

Se precisar reagendar ou tiver qualquer pergunta antes da reunião, estou à disposição.`,
        persona: 'genai',
        timestamp: '14:45'
    }
];

const demoMessages = [demo1Messages, demo2Messages, demo3Messages];

export { demo1Messages, demo2Messages, demo3Messages, demoMessages };
export default demoMessages;