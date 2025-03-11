import React, { useState, useEffect } from 'react';

const AdaptativeChatbot = () => {
    const [messages, setMessages] = useState([]);
    const [currentPersona, setCurrentPersona] = useState('general');
    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const [showDemo, setShowDemo] = useState(1);
    const [activeTab, setActiveTab] = useState('concept');

    // Definição das personas/especialidades
    const personas = {
        general: {
            name: "Assistente Hvar",
            color: "#4f46e5", // Índigo
            secondaryColor: "#3730a3",
            font: "'Inter', sans-serif",
            icon: "🤖"
        },
        datamod: {
            name: "Assistente Hvar", // Mantém o mesmo nome para transparência
            color: "#2563eb", // Azul
            secondaryColor: "#1e40af",
            font: "'Inter', sans-serif",
            icon: "🤖", // Mantém o mesmo ícone para transparência
            expertise: "Modernização de Dados"
        },
        genai: {
            name: "Assistente Hvar",
            color: "#7c3aed", // Roxo
            secondaryColor: "#5b21b6",
            font: "'Inter', sans-serif",
            icon: "🤖",
            expertise: "IA Generativa e ML"
        },
        sap: {
            name: "Assistente Hvar",
            color: "#0ea5e9", // Azul claro
            secondaryColor: "#0284c7",
            font: "'Inter', sans-serif",
            icon: "🤖",
            expertise: "Integração SAP"
        },
        conversational: {
            name: "Assistente Hvar",
            color: "#06b6d4", // Ciano
            secondaryColor: "#0891b2",
            font: "'Inter', sans-serif",
            icon: "🤖",
            expertise: "Agentes Conversacionais"
        }
    };

    // Demonstração 1: Transição transparente baseada no tópico
    const demo1Messages = [
        {
            sender: 'bot',
            text: "Olá! Sou o assistente virtual da Hvar. Como posso ajudar sua empresa hoje?",
            persona: 'general',
            timestamp: '14:20'
        },
        {
            sender: 'user',
            text: "Estamos com problemas para integrar nossos dados SAP aos sistemas analíticos",
            timestamp: '14:21'
        },
        {
            sender: 'bot',
            text: "Entendi que vocês estão enfrentando desafios na integração de dados SAP com seus sistemas analíticos. Poderia me contar um pouco mais sobre quais sistemas analíticos vocês utilizam atualmente e quais módulos SAP precisam ser integrados?",
            persona: 'sap',  // Transição automática para especialista SAP
            timestamp: '14:21'
        },
        {
            sender: 'user',
            text: "Usamos SAP ECC para financeiro e S/4HANA para supply chain. Queremos criar dashboards no Power BI.",
            timestamp: '14:22'
        },
        {
            sender: 'bot',
            text: "Obrigado pelas informações. Para essa combinação específica de SAP ECC, S/4HANA e Power BI, nossa solução de Integração e Análise de Dados SAP seria ideal. Podemos implementar conectores especializados que mantêm a semântica dos dados financeiros e de supply chain, com atualizações em tempo real. Também oferecemos modelos pré-configurados de Power BI para análises financeiras e operacionais que aceleraram em 60% a implementação para clientes semelhantes. Gostaria de saber mais sobre o processo de implementação ou ver exemplos de dashboards que desenvolvemos para cenários similares?",
            persona: 'sap',
            timestamp: '14:23'
        }
    ];

    // Demonstração 2: Transição após qualificação adicional 
    const demo2Messages = [
        {
            sender: 'bot',
            text: "Olá! Sou o assistente virtual da Hvar. Como posso ajudar sua empresa hoje?",
            persona: 'general',
            timestamp: '14:30'
        },
        {
            sender: 'user',
            text: "Precisamos melhorar nossa experiência de atendimento ao cliente",
            timestamp: '14:31'
        },
        {
            sender: 'bot',
            text: "Melhorar a experiência de atendimento ao cliente é um objetivo importante. Para que eu possa ajudar melhor, poderia me contar um pouco mais sobre quais canais de atendimento vocês utilizam atualmente (telefone, chat, email, etc.) e quais são os principais desafios que estão enfrentando?",
            persona: 'general',  // Ainda general, solicitando mais informações
            timestamp: '14:31'
        },
        {
            sender: 'user',
            text: "Temos um call center tradicional com 50 atendentes e queremos implementar chatbots para reduzir a carga operacional. Nosso tempo de espera está muito alto.",
            timestamp: '14:32'
        },
        {
            sender: 'bot',
            text: "Entendi. Com base no seu cenário de call center com 50 atendentes e desafios de tempo de espera, nossa solução de Agentes Conversacionais seria ideal para vocês. Nossa abordagem CCaaS (Contact Center as a Service) pode implementar chatbots inteligentes que resolvem até 65% das interações básicas, reduzindo significativamente o tempo de espera e permitindo que seus atendentes foquem em casos mais complexos. As integrações nativas permitem que o histórico do chatbot seja transferido para o atendente quando necessário, mantendo o contexto completo. Gostaria de conhecer cases semelhantes ou entender mais sobre o processo de implementação?",
            persona: 'conversational',  // Agora transição para especialista em agentes conversacionais
            timestamp: '14:33'
        }
    ];

    // Demonstração 3: Transição após aprofundamento do assunto
    const demo3Messages = [
        {
            sender: 'bot',
            text: "Olá! Sou o assistente virtual da Hvar. Como posso ajudar sua empresa hoje?",
            persona: 'general',
            timestamp: '14:40'
        },
        {
            sender: 'user',
            text: "Estamos interessados em inteligência artificial para nossos processos internos",
            timestamp: '14:41'
        },
        {
            sender: 'bot',
            text: "Ótimo! A IA pode realmente transformar diversos processos internos. Para direcionar melhor nossa conversa, poderia compartilhar quais áreas específicas vocês estão considerando aprimorar com IA (ex: automação de documentos, análise de dados, atendimento ao cliente, etc)?",
            persona: 'general',  // Ainda general, refinando o entendimento
            timestamp: '14:41'
        },
        {
            sender: 'user',
            text: "Principalmente na criação e análise de documentos, como contratos e relatórios técnicos. Gastamos muito tempo nisso hoje.",
            timestamp: '14:42'
        },
        {
            sender: 'bot',
            text: "Entendi que seu foco está na otimização do trabalho com documentos como contratos e relatórios técnicos. Esse é um caso de uso excelente para IA Generativa! Nossos Squads de IA Generativa especializam-se exatamente nesse tipo de aplicação. Podemos implementar uma solução que utiliza modelos de linguagem avançados para: \n\n1. Gerar primeiras versões de contratos baseados em modelos e parâmetros específicos\n2. Analisar e extrair informações-chave de relatórios extensos\n3. Criar resumos executivos automaticamente\n\nEmpresas que implementaram soluções similares reduziram em até 70% o tempo dedicado a esses processos. Gostaria de conhecer um caso específico ou saber mais sobre como funciona a implementação?",
            persona: 'genai',  // Transição para especialista em IA Generativa
            timestamp: '14:43'
        }
    ];

    const allDemos = [demo1Messages, demo2Messages, demo3Messages];

    useEffect(() => {
        setMessages(allDemos[showDemo - 1]);
    }, [showDemo]);

    const getActivePersona = () => {
        if (messages.length === 0) return personas.general;

        // Encontra a última mensagem do bot para determinar a persona atual
        for (let i = messages.length - 1; i >= 0; i--) {
            if (messages[i].sender === 'bot') {
                return personas[messages[i].persona] || personas.general;
            }
        }
        return personas.general;
    };

    const activePersona = getActivePersona();

    // Descrições das demos
    const demoDescriptions = {
        1: {
            title: "Demo 1: Detecção Imediata de Especialidade",
            description: "Neste exemplo, o usuário menciona explicitamente \"dados SAP\", permitindo que o chatbot identifique instantaneamente a área de especialidade e faça a transição direta para o agente especializado em Integração SAP.",
            key: "Transição transparente sem perguntas adicionais de qualificação"
        },
        2: {
            title: "Demo 2: Qualificação para Determinar Especialidade",
            description: "O usuário começa com uma necessidade ampla de \"melhorar atendimento ao cliente\". O chatbot faz perguntas estratégicas para entender melhor o contexto e, após receber informações sobre o call center, transita para o especialista em Agentes Conversacionais.",
            key: "Demonstra qualificação contextual antes da especialização"
        },
        3: {
            title: "Demo 3: Aprofundamento Progressivo",
            description: "Quando o usuário demonstra interesse genérico em \"inteligência artificial\", o chatbot refina o entendimento com perguntas direcionadas. Ao identificar o foco em documentos, transita para o especialista em IA Generativa com recomendações específicas.",
            key: "Ilustra como o chatbot pode navegar de tópicos gerais para específicos"
        }
    };

    // Estilos para o chatbot
    const containerStyle = {
        width: "100%",
        maxWidth: "400px",
        borderRadius: "12px",
        overflow: "hidden",
        fontFamily: activePersona.font,
        boxShadow: "0 5px 15px rgba(0,0,0,0.15)",
        border: `2px solid ${activePersona.color}`,
        backgroundColor: "#fff",
        transition: "all 0.3s ease",
        height: "100%",
        display: "flex",
        flexDirection: "column"
    };

    const headerStyle = {
        backgroundColor: activePersona.color,
        color: "white",
        padding: "15px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        transition: "background-color 0.3s ease"
    };

    const chatBodyStyle = {
        padding: "15px",
        backgroundColor: "white",
        flex: 1,
        overflowY: "auto"
    };

    const getBotMessageStyle = (persona) => ({
        backgroundColor: `${personas[persona].color}15`,
        borderRadius: "18px 18px 18px 0",
        padding: "12px 15px",
        margin: "10px 0",
        maxWidth: "85%",
        color: "#333",
        borderLeft: `3px solid ${personas[persona].color}`,
        transition: "all 0.3s ease"
    });

    const userMessageStyle = {
        backgroundColor: "#f1f1f1",
        borderRadius: "18px 18px 0 18px",
        padding: "12px 15px",
        margin: "10px 0 10px auto",
        maxWidth: "85%",
        textAlign: "right"
    };

    const inputAreaStyle = {
        display: "flex",
        padding: "15px",
        borderTop: "1px solid #eee",
        backgroundColor: "#f9f9f9"
    };

    const inputStyle = {
        flex: 1,
        border: `1px solid ${activePersona.color}`,
        borderRadius: "20px",
        padding: "10px 15px",
        outline: "none",
        fontSize: "14px",
        transition: "border-color 0.3s ease"
    };

    const buttonStyle = {
        backgroundColor: activePersona.color,
        color: "white",
        border: "none",
        borderRadius: "50%",
        width: "40px",
        height: "40px",
        marginLeft: "10px",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "background-color 0.3s ease"
    };

    const timestampStyle = {
        fontSize: "11px",
        color: "#888",
        marginTop: "5px",
        display: "block"
    };

    const logoStyle = {
        fontSize: "24px",
        marginRight: "10px",
        backgroundColor: activePersona.secondaryColor,
        borderRadius: "50%",
        width: "36px",
        height: "36px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "background-color 0.3s ease"
    };

    const demoSelectorStyle = {
        display: "flex",
        justifyContent: "center",
        margin: "0 0 20px 0",
        gap: "10px"
    };

    const demoButtonStyle = (isActive) => ({
        padding: "8px 16px",
        backgroundColor: isActive ? "#4f46e5" : "#f1f1f1",
        color: isActive ? "white" : "#333",
        border: "none",
        borderRadius: "20px",
        cursor: "pointer",
        fontWeight: isActive ? "bold" : "normal"
    });

    const featuresStyle = {
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        padding: "15px",
        backgroundColor: "#f8fafc",
        borderRadius: "10px",
        marginTop: "20px"
    };

    const featureLabelStyle = {
        display: "inline-block",
        padding: "4px 8px",
        borderRadius: "4px",
        fontSize: "12px",
        backgroundColor: "#4f46e5",
        color: "white",
        marginRight: "10px"
    };

    const layoutStyle = {
        display: "flex",
        flexDirection: "row",
        gap: "30px",
        maxWidth: "1200px",
        margin: "0 auto",
        height: "600px"
    };

    const leftColumnStyle = {
        flex: "0 0 380px",
        display: "flex",
        flexDirection: "column"
    };

    const rightColumnStyle = {
        flex: 1,
        backgroundColor: "#fff",
        borderRadius: "12px",
        padding: "25px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
        overflowY: "auto"
    };

    const tabsStyle = {
        display: "flex",
        marginBottom: "20px",
        borderBottom: "1px solid #e5e7eb"
    };

    const tabStyle = (isActive) => ({
        padding: "12px 16px",
        cursor: "pointer",
        borderBottom: isActive ? "2px solid #4f46e5" : "none",
        color: isActive ? "#4f46e5" : "#6b7280",
        fontWeight: isActive ? "600" : "normal"
    });

    const highlightBoxStyle = {
        backgroundColor: "#f0f5ff",
        border: "1px solid #bfdbfe",
        borderRadius: "8px",
        padding: "15px",
        marginBottom: "20px"
    };

    return (
        <div style={{ padding: "20px", backgroundColor: "#fafafa", minHeight: "100vh", fontFamily: "'Inter', sans-serif" }}>
            <h1 style={{ textAlign: "center", marginBottom: "10px", color: "#333" }}>
                Assistente Inteligente Hvar - Transição Transparente
            </h1>
            <p style={{ textAlign: "center", color: "#666", marginBottom: "30px", maxWidth: "800px", margin: "0 auto 30px" }}>
                Demonstração interativa de um chatbot que identifica automaticamente a especialidade necessária
                e adapta a conversa de forma transparente, sem interromper o fluxo do usuário
            </p>

            <div style={demoSelectorStyle}>
                <button
                    style={demoButtonStyle(showDemo === 1)}
                    onClick={() => setShowDemo(1)}
                >
                    Demo 1: Integração SAP
                </button>
                <button
                    style={demoButtonStyle(showDemo === 2)}
                    onClick={() => setShowDemo(2)}
                >
                    Demo 2: Atendimento ao Cliente
                </button>
                <button
                    style={demoButtonStyle(showDemo === 3)}
                    onClick={() => setShowDemo(3)}
                >
                    Demo 3: IA Generativa
                </button>
            </div>

            <div style={layoutStyle}>
                <div style={leftColumnStyle}>
                    <div style={highlightBoxStyle}>
                        <h3 style={{ margin: "0 0 10px 0", color: "#2563eb" }}>{demoDescriptions[showDemo].title}</h3>
                        <p style={{ margin: "0 0 10px 0", fontSize: "14px" }}>{demoDescriptions[showDemo].description}</p>
                        <div style={{ display: "flex", alignItems: "center", marginTop: "10px" }}>
                            <div style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#2563eb", marginRight: "10px" }}></div>
                            <span style={{ fontSize: "14px", fontWeight: "500" }}>{demoDescriptions[showDemo].key}</span>
                        </div>
                    </div>

                    <div style={containerStyle}>
                        <div style={headerStyle}>
                            <div style={{ display: "flex", alignItems: "center" }}>
                                <span style={logoStyle}>{activePersona.icon}</span>
                                <div>
                                    <div style={{ fontWeight: "bold" }}>{activePersona.name}</div>
                                    {activePersona.expertise && (
                                        <div style={{ fontSize: "12px", opacity: "0.8" }}>Especialidade: {activePersona.expertise}</div>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div style={chatBodyStyle}>
                            {messages.map((msg, index) => (
                                <div key={index} style={msg.sender === 'bot' ? getBotMessageStyle(msg.persona) : userMessageStyle}>
                                    {msg.text}
                                    <span style={timestampStyle}>{msg.timestamp}</span>
                                </div>
                            ))}
                            {isTyping && (
                                <div style={{ ...getBotMessageStyle('general'), width: "60px" }}>
                                    <span>...</span>
                                </div>
                            )}
                        </div>

                        <div style={inputAreaStyle}>
                            <input
                                style={inputStyle}
                                placeholder="Digite sua mensagem..."
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                            />
                            <button style={buttonStyle}>
                                ➤
                            </button>
                        </div>
                    </div>
                </div>

                <div style={rightColumnStyle}>
                    <div style={tabsStyle}>
                        <div
                            style={tabStyle(activeTab === 'concept')}
                            onClick={() => setActiveTab('concept')}
                        >
                            Conceito
                        </div>
                        <div
                            style={tabStyle(activeTab === 'features')}
                            onClick={() => setActiveTab('features')}
                        >
                            Funcionalidades
                        </div>
                        <div
                            style={tabStyle(activeTab === 'benefits')}
                            onClick={() => setActiveTab('benefits')}
                        >
                            Benefícios
                        </div>
                        <div
                            style={tabStyle(activeTab === 'tech')}
                            onClick={() => setActiveTab('tech')}
                        >
                            Tecnologia
                        </div>
                    </div>

                    {activeTab === 'concept' && (
                        <div>
                            <h2 style={{ color: "#333", marginBottom: "20px" }}>Conceito: Transição Transparente entre Especialidades</h2>

                            <p style={{ lineHeight: "1.6", marginBottom: "20px" }}>
                                O <strong>Assistente Inteligente Hvar</strong> utiliza um sistema de multi-agentes especializados que se adaptam de forma transparente às necessidades do usuário. Diferentemente dos chatbots tradicionais, onde o usuário precisa selecionar categorias ou ser explicitamente transferido entre departamentos, nosso assistente oferece uma experiência fluida e natural.
                            </p>

                            <div style={{ display: "flex", gap: "20px", marginBottom: "30px" }}>
                                <div style={{ flex: 1, backgroundColor: "#f8fafc", padding: "15px", borderRadius: "8px", borderLeft: "4px solid #4f46e5" }}>
                                    <h3 style={{ fontSize: "16px", marginTop: 0 }}>Abordagem Tradicional</h3>
                                    <ul style={{ paddingLeft: "20px", margin: "10px 0" }}>
                                        <li>Usuário seleciona departamento/categoria</li>
                                        <li>Menus de navegação interrompem o fluxo</li>
                                        <li>Transferências explícitas entre agentes</li>
                                        <li>Experiência fragmentada</li>
                                    </ul>
                                </div>

                                <div style={{ flex: 1, backgroundColor: "#f0f9ff", padding: "15px", borderRadius: "8px", borderLeft: "4px solid #0ea5e9" }}>
                                    <h3 style={{ fontSize: "16px", marginTop: 0 }}>Nossa Abordagem</h3>
                                    <ul style={{ paddingLeft: "20px", margin: "10px 0" }}>
                                        <li>Detecção automática da especialidade</li>
                                        <li>Conversa natural sem interrupções</li>
                                        <li>Transições suaves baseadas no contexto</li>
                                        <li>Experiência unificada e contínua</li>
                                    </ul>
                                </div>
                            </div>

                            <h3 style={{ color: "#4f46e5", borderBottom: "1px solid #4f46e5", paddingBottom: "8px" }}>Como Funciona</h3>
                            <p style={{ lineHeight: "1.6", marginTop: "15px" }}>
                                O assistente inicia com uma abordagem generalista. Conforme a conversa evolui, ele identifica automaticamente a especialidade necessária analisando as palavras-chave, intenções e contexto. A transição para o agente especializado ocorre de forma transparente, adaptando sutilmente o tom, a terminologia e as recomendações sem quebrar o fluxo conversacional.
                            </p>

                            <div style={{ marginTop: "20px", display: "flex", flexDirection: "column", gap: "15px" }}>
                                <div style={{ display: "flex", alignItems: "center" }}>
                                    <div style={{ width: "30px", height: "30px", borderRadius: "50%", backgroundColor: "#4f46e5", color: "white", display: "flex", alignItems: "center", justifyContent: "center", marginRight: "15px" }}>1</div>
                                    <div>
                                        <strong>Engajamento inicial</strong> - Abordagem genérica e acolhedora
                                    </div>
                                </div>
                                <div style={{ display: "flex", alignItems: "center" }}>
                                    <div style={{ width: "30px", height: "30px", borderRadius: "50%", backgroundColor: "#4f46e5", color: "white", display: "flex", alignItems: "center", justifyContent: "center", marginRight: "15px" }}>2</div>
                                    <div>
                                        <strong>Detecção de necessidade</strong> - Análise das entradas do usuário para identificar a especialidade
                                    </div>
                                </div>
                                <div style={{ display: "flex", alignItems: "center" }}>
                                    <div style={{ width: "30px", height: "30px", borderRadius: "50%", backgroundColor: "#4f46e5", color: "white", display: "flex", alignItems: "center", justifyContent: "center", marginRight: "15px" }}>3</div>
                                    <div>
                                        <strong>Qualificação contextual</strong> - Perguntas estratégicas para refinar o entendimento quando necessário
                                    </div>
                                </div>
                                <div style={{ display: "flex", alignItems: "center" }}>
                                    <div style={{ width: "30px", height: "30px", borderRadius: "50%", backgroundColor: "#4f46e5", color: "white", display: "flex", alignItems: "center", justifyContent: "center", marginRight: "15px" }}>4</div>
                                    <div>
                                        <strong>Transição fluida</strong> - Mudança para o agente especializado sem interrupção do fluxo
                                    </div>
                                </div>
                                <div style={{ display: "flex", alignItems: "center" }}>
                                    <div style={{ width: "30px", height: "30px", borderRadius: "50%", backgroundColor: "#4f46e5", color: "white", display: "flex", alignItems: "center", justifyContent: "center", marginRight: "15px" }}>5</div>
                                    <div>
                                        <strong>Resposta especializada</strong> - Comunicação adaptada com terminologia e soluções específicas da área
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'features' && (
                        <div>
                            <h2 style={{ color: "#333", marginBottom: "20px" }}>Funcionalidades Principais</h2>

                            <div style={featuresStyle}>
                                <div>
                                    <span style={featureLabelStyle}>Detecção Automática</span>
                                    Identificação da área de especialidade com base nas palavras-chave e contexto da conversa, utilizando processamento de linguagem natural avançado para entender a intenção do usuário mesmo quando expressa de diferentes formas.
                                </div>
                                <div>
                                    <span style={featureLabelStyle}>Transição Fluida</span>
                                    Mudança de especialidade sem quebrar o fluxo ou exigir seleção do usuário, mantendo o histórico da conversa e o contexto durante todo o processo para uma experiência contínua.
                                </div>
                                <div>
                                    <span style={featureLabelStyle}>Qualificação Contextual</span>
                                    Perguntas estratégicas para refinar o entendimento antes de mudar para o especialista, adaptadas ao contexto da indústria e necessidades específicas da empresa para uma qualificação mais precisa.
                                </div>
                                <div>
                                    <span style={featureLabelStyle}>Adaptação Sutil</span>
                                    Mudanças sutis de terminologia e tom para se adequar à área de especialidade, incluindo recomendações de produtos/serviços e exemplos de casos de uso relevantes para o contexto.
                                </div>
                                <div>
                                    <span style={featureLabelStyle}>Re-direcionamento Inteligente</span>
                                    Capacidade de mudar para outra especialidade se o tópico da conversa evoluir, identificando quando a necessidade do usuário muda durante a interação e se adaptando dinamicamente.
                                </div>
                            </div>

                            <h3 style={{ color: "#4f46e5", borderBottom: "1px solid #4f46e5", paddingBottom: "8px", marginTop: "30px" }}>Especialidades Implementadas</h3>

                            <div style={{ display: "flex", flexWrap: "wrap", gap: "15px", marginTop: "20px" }}>
                                <div style={{ flex: "1 1 calc(33% - 15px)", padding: "15px", backgroundColor: "#f0f5ff", borderRadius: "8px", borderTop: `3px solid ${personas.datamod.color}` }}>
                                    <h4 style={{ margin: "0 0 10px 0", color: personas.datamod.color }}>Modernização de Dados</h4>
                                    <p style={{ fontSize: "14px", margin: 0 }}>Especialista em data lakes, integração, arquiteturas modernas e DaaS.</p>
                                </div>
                                <div style={{ flex: "1 1 calc(33% - 15px)", padding: "15px", backgroundColor: "#f0f5ff", borderRadius: "8px", borderTop: `3px solid ${personas.genai.color}` }}>
                                    <h4 style={{ margin: "0 0 10px 0", color: personas.genai.color }}>IA Generativa e ML</h4>
                                    <p style={{ fontSize: "14px", margin: 0 }}>Especialista em modelos de linguagem, automação cognitiva e ML personalizado.</p>
                                </div>
                                <div style={{ flex: "1 1 calc(33% - 15px)", padding: "15px", backgroundColor: "#f0f5ff", borderRadius: "8px", borderTop: `3px solid ${personas.sap.color}` }}>
                                    <h4 style={{ margin: "0 0 10px 0", color: personas.sap.color }}>Integração SAP</h4>
                                    <p style={{ fontSize: "14px", margin: 0 }}>Especialista em conectores SAP, análise de dados financeiros e GenAI4SAP.</p>
                                </div>
                                <div style={{ flex: "1 1 calc(33% - 15px)", padding: "15px", backgroundColor: "#f0f5ff", borderRadius: "8px", borderTop: `3px solid ${personas.conversational.color}` }}>
                                    <h4 style={{ margin: "0 0 10px 0", color: personas.conversational.color }}>Agentes Conversacionais</h4>
                                    <p style={{ fontSize: "14px", margin: 0 }}>Especialista em CCaaS, contact centers digitais e experiência unificada.</p>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'benefits' && (
                        <div>
                            <h2 style={{ color: "#333", marginBottom: "20px" }}>Benefícios para Stakeholders</h2>

                            <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
                                <div style={{ flex: "1 1 calc(50% - 10px)", padding: "20px", backgroundColor: "#f0f9ff", borderRadius: "8px", borderLeft: "4px solid #3b82f6" }}>
                                    <h3 style={{ fontSize: "18px", color: "#3b82f6", marginTop: 0 }}>Para o Negócio</h3>
                                    <ul style={{ paddingLeft: "20px", margin: "10px 0", lineHeight: "1.6" }}>
                                        <li><strong>Aumento na Conversão:</strong> Qualificação mais precisa de leads com até 30% mais agendamentos</li>
                                        <li><strong>Redução de Custos:</strong> Automação do processo inicial de qualificação, otimizando recursos humanos</li>
                                        <li><strong>Escalabilidade:</strong> Capacidade de atender múltiplos leads simultaneamente em 24/7</li>
                                        <li><strong>Consistência:</strong> Padronização da experiência e qualidade da interação inicial</li>
                                        <li><strong>Insights Avançados:</strong> Dados detalhados sobre interesses e necessidades dos leads</li>
                                    </ul>
                                </div>

                                <div style={{ flex: "1 1 calc(50% - 10px)", padding: "20px", backgroundColor: "#f0fdf4", borderRadius: "8px", borderLeft: "4px solid #22c55e" }}>
                                    <h3 style={{ fontSize: "18px", color: "#22c55e", marginTop: 0 }}>Para os Usuários</h3>
                                    <ul style={{ paddingLeft: "20px", margin: "10px 0", lineHeight: "1.6" }}>
                                        <li><strong>Experiência Fluida:</strong> Sem necessidade de navegar por menus ou categorias</li>
                                        <li><strong>Respostas Personalizadas:</strong> Conteúdo relevante e contextualizado para cada necessidade</li>
                                        <li><strong>Atendimento Imediato:</strong> Informações especializadas disponíveis instantaneamente</li>
                                        <li><strong>Conversas Naturais:</strong> Interação que simula o diálogo humano, sem rigidez de bots tradicionais</li>
                                        <li><strong>Agendamento Simplificado:</strong> Marcação direta de reuniões com especialistas humanos</li>
                                    </ul>
                                </div>
                            </div>

                            <div style={{ marginTop: "30px", padding: "20px", backgroundColor: "#fdf2f8", borderRadius: "8px", borderLeft: "4px solid #ec4899" }}>
                                <h3 style={{ fontSize: "18px", color: "#ec4899", marginTop: 0 }}>Para Equipe Comercial</h3>
                                <div style={{ display: "flex", flexWrap: "wrap", gap: "15px", marginTop: "10px" }}>
                                    <div style={{ flex: "1 1 200px" }}>
                                        <div style={{ fontWeight: "bold", marginBottom: "5px" }}>Leads Mais Qualificados</div>
                                        <p style={{ margin: 0, fontSize: "14px" }}>Receba leads pré-qualificados com informações contextuais completas, aumentando a taxa de conversão e reduzindo o tempo de ciclo de vendas.</p>
                                    </div>
                                    <div style={{ flex: "1 1 200px" }}>
                                        <div style={{ fontWeight: "bold", marginBottom: "5px" }}>Foco Estratégico</div>
                                        <p style={{ margin: 0, fontSize: "14px" }}>Concentre-se nas negociações de alto valor e relacionamentos estratégicos, enquanto o chatbot cuida da qualificação inicial.</p>
                                    </div>
                                    <div style={{ flex: "1 1 200px" }}>
                                        <div style={{ fontWeight: "bold", marginBottom: "5px" }}>Preparação Prévia</div>
                                        <p style={{ margin: 0, fontSize: "14px" }}>Acesse o histórico completo da conversa e necessidades específicas antes mesmo do primeiro contato humano.</p>
                                    </div>
                                    <div style={{ flex: "1 1 200px" }}>
                                        <div style={{ fontWeight: "bold", marginBottom: "5px" }}>Agenda Otimizada</div>
                                        <p style={{ margin: 0, fontSize: "14px" }}>Receba reuniões automaticamente agendadas com leads qualificados, integradas ao seu calendário.</p>
                                    </div>
                                </div>
                            </div>

                            <div style={{ marginTop: "30px" }}>
                                <h3 style={{ color: "#4f46e5", borderBottom: "1px solid #4f46e5", paddingBottom: "8px" }}>Métricas de Sucesso</h3>
                                <div style={{ display: "flex", flexWrap: "wrap", gap: "15px", marginTop: "15px" }}>
                                    <div style={{ flex: "1 1 calc(25% - 15px)", textAlign: "center", padding: "15px", backgroundColor: "#f8fafc", borderRadius: "8px" }}>
                                        <div style={{ fontSize: "24px", fontWeight: "bold", color: "#4f46e5", marginBottom: "5px" }}>30%</div>
                                        <div style={{ fontSize: "14px" }}>Aumento na taxa de conversão de leads</div>
                                    </div>
                                    <div style={{ flex: "1 1 calc(25% - 15px)", textAlign: "center", padding: "15px", backgroundColor: "#f8fafc", borderRadius: "8px" }}>
                                        <div style={{ fontSize: "24px", fontWeight: "bold", color: "#4f46e5", marginBottom: "5px" }}>65%</div>
                                        <div style={{ fontSize: "14px" }}>Redução no tempo de qualificação</div>
                                    </div>
                                    <div style={{ flex: "1 1 calc(25% - 15px)", textAlign: "center", padding: "15px", backgroundColor: "#f8fafc", borderRadius: "8px" }}>
                                        <div style={{ fontSize: "24px", fontWeight: "bold", color: "#4f46e5", marginBottom: "5px" }}>24/7</div>
                                        <div style={{ fontSize: "14px" }}>Disponibilidade para atendimento</div>
                                    </div>
                                    <div style={{ flex: "1 1 calc(25% - 15px)", textAlign: "center", padding: "15px", backgroundColor: "#f8fafc", borderRadius: "8px" }}>
                                        <div style={{ fontSize: "24px", fontWeight: "bold", color: "#4f46e5", marginBottom: "5px" }}>90%</div>
                                        <div style={{ fontSize: "14px" }}>Precisão na identificação da especialidade</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'tech' && (
                        <div>
                            <h2 style={{ color: "#333", marginBottom: "20px" }}>Arquitetura Tecnológica</h2>

                            <div style={{ padding: "20px", backgroundColor: "#f8fafc", borderRadius: "8px", marginBottom: "25px" }}>
                                <h3 style={{ fontSize: "18px", marginTop: 0, marginBottom: "15px" }}>Sistema Multi-Agente</h3>
                                <p style={{ marginBottom: "15px" }}>
                                    O assistente utiliza uma arquitetura de múltiplos agentes especializados, orquestrados por um sistema central que determina qual especialista deve atender cada interação.
                                </p>
                                <div style={{ display: "flex", gap: "15px", flexWrap: "wrap" }}>
                                    <div style={{ flex: "1 1 200px", padding: "15px", backgroundColor: "white", borderRadius: "8px", boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }}>
                                        <div style={{ fontWeight: "600", marginBottom: "8px", color: "#4f46e5" }}>Agente Orchestrator</div>
                                        <p style={{ margin: 0, fontSize: "14px" }}>Coordena o fluxo conversacional, identifica intenções e direciona para o especialista apropriado.</p>
                                    </div>
                                    <div style={{ flex: "1 1 200px", padding: "15px", backgroundColor: "white", borderRadius: "8px", boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }}>
                                        <div style={{ fontWeight: "600", marginBottom: "8px", color: "#4f46e5" }}>Agentes Especialistas</div>
                                        <p style={{ margin: 0, fontSize: "14px" }}>Agentes treinados em domínios específicos do portfólio Hvar, com conhecimento aprofundado em cada área.</p>
                                    </div>
                                    <div style={{ flex: "1 1 200px", padding: "15px", backgroundColor: "white", borderRadius: "8px", boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }}>
                                        <div style={{ fontWeight: "600", marginBottom: "8px", color: "#4f46e5" }}>Agente Executor</div>
                                        <p style={{ margin: 0, fontSize: "14px" }}>Responsável por ações práticas como agendamento e integração com sistemas externos (Pipedrive, calendários).</p>
                                    </div>
                                </div>
                            </div>

                            <h3 style={{ color: "#4f46e5", borderBottom: "1px solid #4f46e5", paddingBottom: "8px", marginBottom: "20px" }}>Componentes do Sistema</h3>

                            <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
                                <div style={{ display: "flex", gap: "15px", alignItems: "flex-start" }}>
                                    <div style={{ padding: "10px", backgroundColor: "#4f46e5", color: "white", borderRadius: "8px", fontSize: "20px", minWidth: "40px", textAlign: "center" }}>1</div>
                                    <div>
                                        <div style={{ fontWeight: "600", fontSize: "16px", marginBottom: "5px" }}>Frontend Adaptativo</div>
                                        <p style={{ margin: 0, fontSize: "14px", lineHeight: "1.5" }}>
                                            Interface de usuário dinâmica que se adapta sutilmente conforme a especialidade detectada, usando React para renderização e Tailwind CSS para estilização.
                                        </p>
                                    </div>
                                </div>

                                <div style={{ display: "flex", gap: "15px", alignItems: "flex-start" }}>
                                    <div style={{ padding: "10px", backgroundColor: "#4f46e5", color: "white", borderRadius: "8px", fontSize: "20px", minWidth: "40px", textAlign: "center" }}>2</div>
                                    <div>
                                        <div style={{ fontWeight: "600", fontSize: "16px", marginBottom: "5px" }}>Motor de Detecção de Especialidade</div>
                                        <p style={{ margin: 0, fontSize: "14px", lineHeight: "1.5" }}>
                                            Sistema de NLP baseado em LLM que analisa a entrada do usuário para identificar a área de especialidade relevante, usando técnicas de classificação de texto e reconhecimento de entidades.
                                        </p>
                                    </div>
                                </div>

                                <div style={{ display: "flex", gap: "15px", alignItems: "flex-start" }}>
                                    <div style={{ padding: "10px", backgroundColor: "#4f46e5", color: "white", borderRadius: "8px", fontSize: "20px", minWidth: "40px", textAlign: "center" }}>3</div>
                                    <div>
                                        <div style={{ fontWeight: "600", fontSize: "16px", marginBottom: "5px" }}>Base de Conhecimento</div>
                                        <p style={{ margin: 0, fontSize: "14px", lineHeight: "1.5" }}>
                                            Repositório de informações específicas para cada especialidade, incluindo descrições de serviços, casos de uso, FAQs e argumentos comerciais. Implementado com vetorização semântica para recuperação contextual.
                                        </p>
                                    </div>
                                </div>

                                <div style={{ display: "flex", gap: "15px", alignItems: "flex-start" }}>
                                    <div style={{ padding: "10px", backgroundColor: "#4f46e5", color: "white", borderRadius: "8px", fontSize: "20px", minWidth: "40px", textAlign: "center" }}>4</div>
                                    <div>
                                        <div style={{ fontWeight: "600", fontSize: "16px", marginBottom: "5px" }}>APIs de Integração</div>
                                        <p style={{ margin: 0, fontSize: "14px", lineHeight: "1.5" }}>
                                            Conectores para sistemas externos como Pipedrive (CRM), Google Calendar (agendamento) e Google Analytics (rastreamento de origem). Implementados com arquitetura RESTful e autenticação OAuth.
                                        </p>
                                    </div>
                                </div>

                                <div style={{ display: "flex", gap: "15px", alignItems: "flex-start" }}>
                                    <div style={{ padding: "10px", backgroundColor: "#4f46e5", color: "white", borderRadius: "8px", fontSize: "20px", minWidth: "40px", textAlign: "center" }}>5</div>
                                    <div>
                                        <div style={{ fontWeight: "600", fontSize: "16px", marginBottom: "5px" }}>Módulo de Aprendizado Contínuo</div>
                                        <p style={{ margin: 0, fontSize: "14px", lineHeight: "1.5" }}>
                                            Sistema de feedback que analisa interações passadas para melhorar a detecção de especialidade e refinar respostas. Implementado com técnicas de aprendizado semi-supervisionado.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AdaptativeChatbot;