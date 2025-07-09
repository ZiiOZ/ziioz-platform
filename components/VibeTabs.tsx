import React from "react";

interface VibeTabsProps {
  active: string;
  onSelect: (vibe: string) => void;
}

export default function VibeTabs({ active, onSelect }: VibeTabsProps) {
  const tabs = [
    { key: "trending", label: "Trending" },
    { key: "fresh", label: "Fresh" },
    { key: "underground", label: "Underground" },
  ];

  return (
    <div
      style={{
        display: "flex",
        gap: "24px",
        borderBottom: "1px solid #333",
        paddingBottom: "8px",
      }}
    >
      {tabs.map((tab) => (
        <button
          key={tab.key}
          onClick={() => onSelect(tab.key)}
          style={{
            border: "none",
            background: "none",
            color: active === tab.key ? "#FFFFFF" : "#888888",
            fontWeight: active === tab.key ? "600" : "400",
            paddingBottom: "4px",
            borderBottom:
              active === tab.key ? "2px solid #FFFFFF" : "2px solid transparent",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
