import React from 'react';
import theme from '../../styles/theme';

const TechTab = () => {
    const agentTypes = [
        {
            title: "Agente Orchestrator",
            description: "Coordena o fluxo conversacional, identifica intenções e direciona para o especialista apropriado."
        },
        {
            title: "Agentes Especialistas",
            description: "Agentes treinados em domínios específicos do portfólio Hvar, com conhecimento aprofundado em cada área."
        },
        {
            title: "Agente Executor",
            description: "Responsável por ações práticas como agendamento e integração com sistemas externos (Pipedrive, calendários)."
        }
    ];

    const systemComponents = [
        {
            number: "1",
            title: "Frontend Adaptativo",
            description: "Interface de usuário dinâmica que se adapta sutilmente conforme a especialidade detectada."
        },
        {
            number: "2",
            title: "Motor de Detecção de Especialidade",
            description: "Sistema de NLP baseado em Multi Agentes LLM, que analisa a entrada do usuário para identificar a área de especialidade relevante, usando técnicas de classificação de texto e reconhecimento de entidades."
        },
        {
            number: "3",
            title: "Base de Conhecimento",
            description: "Repositório de informações específicas para cada especialidade, incluindo descrições de serviços, casos de uso, FAQs e argumentos comerciais. Implementado com vetorização semântica para recuperação contextual."
        },
        {
            number: "4",
            title: "APIs de Integração",
            description: "Conectores para sistemas externos como Pipedrive (Deals), Google Calendar (agendamento) e Google Analytics (rastreamento de origem)."
        },
        {
            number: "5",
            title: "Treinamento e Aprendizado Contínuo",
            description: "Input de insumos de feedback e interações passadas para melhorar a detecção de especialidade e refinar respostas, enriquecendo a base de conhecimento."
        }
    ];

    return (
        <div>
            <h2 style={{ color: theme.colors.text.primary, marginBottom: theme.spacing.xl }}>
                Arquitetura Tecnológica
            </h2>

            <div style={{
                padding: theme.spacing.xl,
                backgroundColor: "#f8fafc",
                borderRadius: theme.borderRadius.medium,
                marginBottom: theme.spacing.xxl
            }}>
                <h3 style={{ fontSize: theme.fontSizes.xl, marginTop: 0, marginBottom: theme.spacing.md }}>
                    Sistema Multi-Agente
                </h3>
                <p style={{ marginBottom: theme.spacing.md }}>
                    O assistente utiliza uma arquitetura de múltiplos agentes especializados, orquestrados por um sistema central que determina qual especialista deve atender cada interação.
                </p>
                <div style={{ display: "flex", gap: theme.spacing.md, flexWrap: "wrap" }}>
                    {agentTypes.map((agent, index) => (
                        <div
                            key={index}
                            style={{
                                flex: "1 1 200px",
                                padding: theme.spacing.md,
                                backgroundColor: "white",
                                borderRadius: theme.borderRadius.medium,
                                boxShadow: theme.shadows.light
                            }}
                        >
                            <div style={{ fontWeight: "600", marginBottom: theme.spacing.xs, color: theme.colors.primary }}>
                                {agent.title}
                            </div>
                            <p style={{ margin: 0, fontSize: theme.fontSizes.md }}>
                                {agent.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            <h3 style={{
                color: theme.colors.primary,
                borderBottom: `1px solid ${theme.colors.primary}`,
                paddingBottom: theme.spacing.xs,
                marginBottom: theme.spacing.xl
            }}>
                Componentes do Sistema
            </h3>

            <div style={{ display: "flex", flexDirection: "column", gap: theme.spacing.md }}>
                {systemComponents.map((component, index) => (
                    <div key={index} style={{ display: "flex", gap: theme.spacing.md, alignItems: "flex-start" }}>
                        <div style={{
                            padding: theme.spacing.sm,
                            backgroundColor: theme.colors.primary,
                            color: "white",
                            borderRadius: theme.borderRadius.medium,
                            fontSize: theme.fontSizes.xl,
                            minWidth: "40px",
                            textAlign: "center"
                        }}>
                            {component.number}
                        </div>
                        <div>
                            <div style={{ fontWeight: "600", fontSize: theme.fontSizes.lg, marginBottom: theme.spacing.xs }}>
                                {component.title}
                            </div>
                            <p style={{ margin: 0, fontSize: theme.fontSizes.md, lineHeight: "1.5" }}>
                                {component.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TechTab;