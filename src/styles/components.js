import theme from './theme';

// Common styles for reusable components
export const containerStyle = (activePersona) => ({
    width: "100%",
    maxWidth: "400px",
    borderRadius: theme.borderRadius.large,
    overflow: "hidden",
    fontFamily: activePersona.font,
    boxShadow: theme.shadows.dark,
    border: `2px solid ${activePersona.color}`,
    backgroundColor: theme.colors.white,
    transition: "all 0.3s ease",
    height: "100%",
    display: "flex",
    flexDirection: "column"
});

export const headerStyle = (activePersona) => ({
    backgroundColor: activePersona.color,
    color: theme.colors.white,
    padding: theme.spacing.md,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    transition: "background-color 0.3s ease"
});

export const chatBodyStyle = {
    padding: theme.spacing.md,
    backgroundColor: theme.colors.white,
    flex: 1,
    overflowY: "auto"
};

export const getBotMessageStyle = (persona) => ({
    backgroundColor: `${persona.color}15`,
    borderRadius: "18px 18px 18px 0",
    padding: `${theme.spacing.sm} ${theme.spacing.md}`,
    margin: `${theme.spacing.sm} 0`,
    maxWidth: "85%",
    color: theme.colors.text.primary,
    borderLeft: `3px solid ${persona.color}`,
    transition: "all 0.3s ease",
});

export const userMessageStyle = {
    backgroundColor: theme.colors.lightGrey,
    borderRadius: "18px 18px 0 18px",
    padding: `${theme.spacing.sm} ${theme.spacing.md}`,
    margin: `${theme.spacing.sm} 0 ${theme.spacing.sm} auto`,
    maxWidth: "85%",
    textAlign: "right"
};

export const inputAreaStyle = {
    display: "flex",
    padding: theme.spacing.md,
    borderTop: `1px solid ${theme.colors.mediumGrey}`,
    backgroundColor: "#f9f9f9"
};

export const inputStyle = (activePersona) => ({
    flex: 1,
    border: `1px solid ${activePersona.color}`,
    borderRadius: theme.borderRadius.xl,
    padding: `${theme.spacing.sm} ${theme.spacing.md}`,
    outline: "none",
    fontSize: theme.fontSizes.md,
    transition: "border-color 0.3s ease"
});

export const buttonStyle = (activePersona) => ({
    backgroundColor: activePersona.color,
    color: theme.colors.white,
    border: "none",
    borderRadius: theme.borderRadius.round,
    width: "40px",
    height: "40px",
    marginLeft: theme.spacing.sm,
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "background-color 0.3s ease"
});

export const timestampStyle = {
    fontSize: theme.fontSizes.xs,
    color: theme.colors.text.light,
    marginTop: theme.spacing.xs,
    display: "block"
};

export const logoStyle = (activePersona) => ({
    fontSize: theme.fontSizes.xxl,
    marginRight: theme.spacing.sm,
    backgroundColor: activePersona.secondaryColor,
    borderRadius: theme.borderRadius.round,
    width: "36px",
    height: "36px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "background-color 0.3s ease"
});

export const demoSelectorStyle = {
    display: "flex",
    justifyContent: "center",
    margin: `0 0 ${theme.spacing.xl} 0`,
    gap: theme.spacing.sm
};

export const demoButtonStyle = (isActive) => ({
    padding: `${theme.spacing.xs} ${theme.spacing.lg}`,
    backgroundColor: isActive ? theme.colors.primary : theme.colors.lightGrey,
    color: isActive ? theme.colors.white : theme.colors.text.primary,
    border: "none",
    borderRadius: theme.borderRadius.xl,
    cursor: "pointer",
    fontWeight: isActive ? "bold" : "normal"
});

export const layoutStyle = {
    display: "flex",
    flexDirection: "row",
    gap: theme.spacing.xxl,
    maxWidth: "1200px",
    margin: "0 auto",
    height: "600px"
};

export const leftColumnStyle = {
    flex: "0 0 380px",
    display: "flex",
    flexDirection: "column"
};

export const rightColumnStyle = {
    flex: 1,
    backgroundColor: theme.colors.white,
    borderRadius: theme.borderRadius.large,
    padding: theme.spacing.xl,
    boxShadow: theme.shadows.medium,
    overflowY: "auto"
};

export const tabsStyle = {
    display: "flex",
    marginBottom: theme.spacing.xl,
    borderBottom: `1px solid ${theme.colors.mediumGrey}`
};

export const tabStyle = (isActive) => ({
    padding: `${theme.spacing.sm} ${theme.spacing.lg}`,
    cursor: "pointer",
    borderBottom: isActive ? `2px solid ${theme.colors.primary}` : "none",
    color: isActive ? theme.colors.primary : theme.colors.darkGrey,
    fontWeight: isActive ? "600" : "normal"
});

export const highlightBoxStyle = {
    backgroundColor: theme.colors.highlight.blue.light,
    border: `1px solid ${theme.colors.highlight.blue.medium}`,
    borderRadius: theme.borderRadius.medium,
    padding: theme.spacing.md,
    marginBottom: theme.spacing.xl
};

export const featuresStyle = {
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing.sm,
    padding: theme.spacing.md,
    backgroundColor: "#f8fafc",
    borderRadius: theme.borderRadius.medium,
    marginTop: theme.spacing.xl
};

export const featureLabelStyle = {
    display: "inline-block",
    padding: `4px 8px`,
    borderRadius: theme.borderRadius.small,
    fontSize: theme.fontSizes.sm,
    backgroundColor: theme.colors.primary,
    color: theme.colors.white,
    marginRight: theme.spacing.sm
};