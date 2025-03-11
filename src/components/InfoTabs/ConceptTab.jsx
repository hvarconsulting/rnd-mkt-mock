import React from 'react';
import theme from '../../styles/theme';

const ConceptTab = () => {
    return (
        <div>
            <h2 style={{ color: theme.colors.text.primary, marginBottom: theme.spacing.xl }}>
                Conceito: Transição Transparente entre Especialidades
            </h2>

            <p style={{ lineHeight: "1.6", marginBottom: theme.spacing.xl }}>
                O <strong>Assistente Inteligente Hvar</strong> utiliza um sistema de multi-agentes especializados que se adaptam de forma transparente às necessidades do usuário. Diferentemente dos chatbots tradicionais, onde o usuário precisa selecionar categorias ou ser explicitamente transferido entre departamentos, nosso assistente oferece uma experiência fluida e natural.
            </p>

            <div style={{ display: "flex", gap: theme.spacing.xl, marginBottom: "30px" }}>
                <div style={{
                    flex: 1,
                    backgroundColor: "#f8fafc",
                    padding: theme.spacing.md,
                    borderRadius: theme.borderRadius.medium,
                    borderLeft: `4px solid ${theme.colors.primary}`
                }}>
                    <h3 style={{ fontSize: theme.fontSizes.lg, marginTop: 0 }}>Abordagem Tradicional</h3>
                    <ul style={{ paddingLeft: theme.spacing.xl, margin: `${theme.spacing.sm} 0` }}>
                        <li>Usuário seleciona departamento/categoria</li>
                        <li>Menus de navegação interrompem o fluxo</li>
                        <li>Transferências explícitas</li>
                        <li>Experiência fragmentada</li>
                    </ul>
                </div>

                <div style={{
                    flex: 1,
                    backgroundColor: theme.colors.highlight.blue.light,
                    padding: theme.spacing.md,
                    borderRadius: theme.borderRadius.medium,
                    borderLeft: `4px solid ${theme.colors.highlight.blue.dark}`
                }}>
                    <h3 style={{ fontSize: theme.fontSizes.lg, marginTop: 0 }}>Nossa Abordagem</h3>
                    <ul style={{ paddingLeft: theme.spacing.xl, margin: `${theme.spacing.sm} 0` }}>
                        <li>Detecção automática da especialidade</li>
                        <li>Conversa natural sem interrupções</li>
                        <li>Transições suaves baseadas no contexto</li>
                        <li>Experiência unificada e contínua</li>
                    </ul>
                </div>
            </div>

            <h3 style={{
                color: theme.colors.primary,
                borderBottom: `1px solid ${theme.colors.primary}`,
                paddingBottom: theme.spacing.xs
            }}>
                Como Funciona
            </h3>
            <p style={{ lineHeight: "1.6", marginTop: theme.spacing.md }}>
                O assistente inicia com uma abordagem generalista. Conforme a conversa evolui, ele identifica automaticamente a especialidade necessária analisando as palavras-chave, intenções e contexto. A transição para o agente especializado ocorre de forma transparente, adaptando sutilmente o tom, a terminologia e as recomendações sem quebrar o fluxo conversacional.
            </p>

            <div style={{ marginTop: theme.spacing.xl, display: "flex", flexDirection: "column", gap: theme.spacing.md }}>
                {[
                    { number: "1", title: "Engajamento inicial", desc: "Abordagem genérica e acolhedora" },
                    { number: "2", title: "Detecção de necessidade", desc: "Análise das entradas do usuário para identificar a especialidade" },
                    { number: "3", title: "Qualificação contextual", desc: "Perguntas estratégicas para refinar o entendimento quando necessário" },
                    { number: "4", title: "Transição fluida", desc: "Mudança para o agente especializado sem interrupção do fluxo" },
                    { number: "5", title: "Resposta especializada", desc: "Comunicação adaptada com terminologia e soluções específicas da área" }
                ].map((step, index) => (
                    <div key={index} style={{ display: "flex", alignItems: "center" }}>
                        <div style={{
                            width: "30px",
                            height: "30px",
                            borderRadius: "50%",
                            backgroundColor: theme.colors.primary,
                            color: "white",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            marginRight: theme.spacing.md
                        }}>
                            {step.number}
                        </div>
                        <div>
                            <strong>{step.title}</strong> - {step.desc}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ConceptTab;