import React from 'react';
import theme from '../../styles/theme';
import { featuresStyle, featureLabelStyle } from '../../styles/components';
import personas from '../../data/personas';

const FeaturesTab = () => {
    const features = [
        {
            label: "Detecção Automática",
            description: "Identificação da área de especialidade com base nas palavras-chave e contexto da conversa, utilizando processamento de linguagem natural avançado para entender a intenção do usuário mesmo quando expressa de diferentes formas."
        },
        {
            label: "Transição Fluida",
            description: "Mudança de especialidade sem quebrar o fluxo ou exigir seleção do usuário, mantendo o histórico da conversa e o contexto durante todo o processo para uma experiência contínua."
        },
        {
            label: "Qualificação Contextual",
            description: "Perguntas estratégicas para refinar o entendimento antes de mudar para o especialista, adaptadas ao contexto da indústria e necessidades específicas da empresa para uma qualificação mais precisa."
        },
        {
            label: "Adaptação Sutil",
            description: "Mudanças sutis de terminologia e tom para se adequar à área de especialidade, incluindo recomendações de produtos/serviços e exemplos de casos de uso relevantes para o contexto."
        },
        {
            label: "Re-direcionamento Inteligente",
            description: "Capacidade de mudar para outra especialidade se o tópico da conversa evoluir, identificando quando a necessidade do usuário muda durante a interação e se adaptando dinamicamente."
        }
    ];

    const specialties = [
        {
            name: "Modernização de Dados",
            description: "Especialista em data lakes, integração, arquiteturas modernas e DaaS.",
            persona: "datamod"
        },
        {
            name: "IA Generativa e ML",
            description: "Especialista em modelos de linguagem, automação cognitiva e ML personalizado.",
            persona: "genai"
        },
        {
            name: "Integração SAP",
            description: "Especialista em conectores SAP, análise de dados financeiros e GenAI4SAP.",
            persona: "sap"
        },
        {
            name: "Agentes Conversacionais",
            description: "Especialista em CCaaS, contact centers digitais e experiência unificada.",
            persona: "conversational"
        }
    ];

    return (
        <div>
            <h2 style={{ color: theme.colors.text.primary, marginBottom: theme.spacing.xl }}>
                Funcionalidades Principais
            </h2>

            <div style={featuresStyle}>
                {features.map((feature, index) => (
                    <div key={index}>
                        <span style={featureLabelStyle}>{feature.label}</span>
                        {feature.description}
                    </div>
                ))}
            </div>

            <h3 style={{
                color: theme.colors.primary,
                borderBottom: `1px solid ${theme.colors.primary}`,
                paddingBottom: theme.spacing.xs,
                marginTop: "30px"
            }}>
                Especialidades Implementadas
            </h3>

            <div style={{ display: "flex", flexWrap: "wrap", gap: theme.spacing.md, marginTop: theme.spacing.xl }}>
                {specialties.map((specialty, index) => (
                    <div
                        key={index}
                        style={{
                            flex: "1 1 calc(33% - 15px)",
                            padding: theme.spacing.md,
                            backgroundColor: theme.colors.highlight.blue.light,
                            borderRadius: theme.borderRadius.medium,
                            borderTop: `3px solid ${personas[specialty.persona].color}`
                        }}
                    >
                        <h4 style={{ margin: "0 0 10px 0", color: personas[specialty.persona].color }}>
                            {specialty.name}
                        </h4>
                        <p style={{ fontSize: theme.fontSizes.md, margin: 0 }}>
                            {specialty.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FeaturesTab;