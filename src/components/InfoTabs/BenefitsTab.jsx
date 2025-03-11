import React from 'react';
import theme from '../../styles/theme';

const BenefitsTab = () => {
    const businessBenefits = [
        { title: "Aumento na Conversão", desc: "Qualificação mais precisa de leads" },
        { title: "Redução de Custos", desc: "Automação do processo inicial de qualificação, otimizando recursos humanos" },
        { title: "Escalabilidade", desc: "Capacidade de atender múltiplos leads simultaneamente" },
        { title: "Consistência", desc: "Padronização da experiência e qualidade da interação inicial" },
        { title: "Insights Avançados", desc: "Dados detalhados sobre interesses e necessidades dos leads" }
    ];

    const userBenefits = [
        { title: "Experiência Fluida", desc: "Sem necessidade de navegar por menus ou categorias" },
        { title: "Respostas Personalizadas", desc: "Conteúdo relevante e contextualizado para cada necessidade" },
        { title: "Atendimento Imediato", desc: "Informações especializadas disponíveis instantaneamente" },
        { title: "Conversas Naturais", desc: "Interação que simula o diálogo humano, sem rigidez de bots tradicionais" },
        { title: "Agendamento Simplificado", desc: "Marcação direta de reuniões com especialistas humanos" }
    ];

    const salesTeamBenefits = [
        { title: "Leads Mais Qualificados", desc: "Receba leads pré-qualificados com informações contextuais completas, aumentando a taxa de conversão e reduzindo o tempo de ciclo de vendas." },
        { title: "Foco Estratégico", desc: "Concentre-se nas negociações de alto valor e relacionamentos estratégicos, enquanto o chatbot cuida da qualificação inicial." },
        { title: "Preparação Prévia", desc: "Acesse o histórico completo da conversa e necessidades específicas antes mesmo do primeiro contato humano." },
        { title: "Agenda Otimizada", desc: "Receba reuniões automaticamente agendadas com leads qualificados, integradas ao seu calendário." }
    ];

    return (
        <div>
            <h2 style={{ color: theme.colors.text.primary, marginBottom: theme.spacing.xl }}>
                Benefícios para Stakeholders
            </h2>

            <div style={{ display: "flex", flexWrap: "wrap", gap: theme.spacing.xl }}>
                <div style={{
                    flex: "1 1 calc(50% - 10px)",
                    padding: theme.spacing.xl,
                    backgroundColor: theme.colors.highlight.blue.light,
                    borderRadius: theme.borderRadius.medium,
                    borderLeft: `4px solid ${theme.colors.highlight.blue.dark}`
                }}>
                    <h3 style={{ fontSize: theme.fontSizes.xl, color: theme.colors.highlight.blue.dark, marginTop: 0 }}>
                        Para o Negócio
                    </h3>
                    <ul style={{ paddingLeft: theme.spacing.xl, margin: `${theme.spacing.sm} 0`, lineHeight: "1.6" }}>
                        {businessBenefits.map((benefit, index) => (
                            <li key={index}>
                                <strong>{benefit.title}:</strong> {benefit.desc}
                            </li>
                        ))}
                    </ul>
                </div>

                <div style={{
                    flex: "1 1 calc(50% - 10px)",
                    padding: theme.spacing.xl,
                    backgroundColor: theme.colors.highlight.green.light,
                    borderRadius: theme.borderRadius.medium,
                    borderLeft: `4px solid ${theme.colors.highlight.green.dark}`
                }}>
                    <h3 style={{ fontSize: theme.fontSizes.xl, color: theme.colors.highlight.green.dark, marginTop: 0 }}>
                        Para os Usuários
                    </h3>
                    <ul style={{ paddingLeft: theme.spacing.xl, margin: `${theme.spacing.sm} 0`, lineHeight: "1.6" }}>
                        {userBenefits.map((benefit, index) => (
                            <li key={index}>
                                <strong>{benefit.title}:</strong> {benefit.desc}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div style={{
                marginTop: theme.spacing.xxl,
                padding: theme.spacing.xl,
                backgroundColor: theme.colors.highlight.pink.light,
                borderRadius: theme.borderRadius.medium,
                borderLeft: `4px solid ${theme.colors.highlight.pink.dark}`
            }}>
                <h3 style={{ fontSize: theme.fontSizes.xl, color: theme.colors.highlight.pink.dark, marginTop: 0 }}>
                    Para Equipe Comercial
                </h3>
                <div style={{ display: "flex", flexWrap: "wrap", gap: theme.spacing.md, marginTop: theme.spacing.sm }}>
                    {salesTeamBenefits.map((benefit, index) => (
                        <div key={index} style={{ flex: "1 1 200px" }}>
                            <div style={{ fontWeight: "bold", marginBottom: theme.spacing.xs }}>{benefit.title}</div>
                            <p style={{ margin: 0, fontSize: theme.fontSizes.md }}>{benefit.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div style={{ marginTop: theme.spacing.xxl }}>
                <h3 style={{
                    color: theme.colors.primary,
                    borderBottom: `1px solid ${theme.colors.primary}`,
                    paddingBottom: theme.spacing.xs
                }}>
                    Avaliação de Impacto Futura
                </h3>
                <p style={{ marginTop: theme.spacing.md }}>
                    Indicadores qualitativos de sucesso e framework de avaliação
                    para implementação futura:
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: theme.spacing.md, marginTop: theme.spacing.md }}>
                    <div style={{
                        flex: "1 1 calc(50% - 15px)",
                        padding: theme.spacing.md,
                        backgroundColor: "#f8fafc",
                        borderRadius: theme.borderRadius.medium
                    }}>
                        <div style={{ fontWeight: "bold", marginBottom: theme.spacing.xs, color: theme.colors.primary }}>
                            Indicadores Qualitativos Iniciais
                        </div>
                        <ul style={{ paddingLeft: theme.spacing.xl, margin: "0" }}>
                            <li>Feedback dos usuários sobre a fluidez da experiência</li>
                            <li>Avaliação da equipe comercial sobre a qualidade das informações coletadas</li>
                            <li>Análise de transcrições para verificar precisão na detecção de especialidades</li>
                        </ul>
                    </div>
                    <div style={{
                        flex: "1 1 calc(50% - 15px)",
                        padding: theme.spacing.md,
                        backgroundColor: "#f8fafc",
                        borderRadius: theme.borderRadius.medium
                    }}>
                        <div style={{ fontWeight: "bold", marginBottom: theme.spacing.xs, color: theme.colors.primary }}>
                            Framework de Avaliação Futuro
                        </div>
                        <ul style={{ paddingLeft: theme.spacing.xl, margin: "0" }}>
                            <li>Qualidade do Documento de Qualificação (avaliação categoria: bom, médio, ótimo)</li>
                            <li>Capacidade do modelo em responder dúvidas técnicas durante a qualificação (f1-score)</li>
                            <li>Tempo médio até identificação correta da especialidade</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BenefitsTab;