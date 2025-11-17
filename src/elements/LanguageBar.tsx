import { LANGUAGES, LanguageTag } from "@/constants";
import MainCSS from "@/style/main.module.css";
export type LanguageBarProps = {
  languages: Record<LanguageTag, number>;
};

export default function LanguageBar({ languages }: LanguageBarProps) {
  const entries = Object.entries(languages) as [LanguageTag, number][];
  const total = entries.reduce((sum, [, value]) => sum + value, 0);
  return (
    <div
      className={MainCSS.divider}
      style={{ display: "flex", width: "100%", height: "10px" }}
    >
      {entries.map(([lang, value]) => (
        <div
          key={lang}
          style={{
            flex: value,
            backgroundColor: LANGUAGES[lang]
              ? LANGUAGES[lang].color
              : LANGUAGES.unknown.color,
            height: "100%",
          }}
          title={`${lang}: ${((value / total) * 100).toFixed(1)}%`}
        />
      ))}
    </div>
  );
}
