import React from 'react';
import { highlightBoxStyle } from '../../styles/components';
import theme from '../../styles/theme';

const HighlightBox = ({ title, description, keyPoint, animation }) => {
    return (
        <div style={{
            ...highlightBoxStyle,
            animation: animation || 'none',
        }}>
            <h3 style={{ margin: "0 0 10px 0", color: theme.colors.highlight.blue.dark }}>{title}</h3>
            <p style={{ margin: "0 0 10px 0", fontSize: "14px" }}>{description}</p>
            {keyPoint && (
                <div style={{ display: "flex", alignItems: "center", marginTop: "10px" }}>
                    <div style={{
                        width: "8px",
                        height: "8px",
                        borderRadius: "50%",
                        backgroundColor: theme.colors.highlight.blue.dark,
                        marginRight: "10px"
                    }}></div>
                    <span style={{ fontSize: "14px", fontWeight: "500" }}>{keyPoint}</span>
                </div>
            )}
        </div>
    );
};

export default HighlightBox;