import type { ReactNode } from "react";
import type { Block } from "../data/content";

export function Inline({ text }: { text: string }) {
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return (
    <>
      {parts.map((part, index) =>
        part.startsWith("**") && part.endsWith("**") ? (
          <strong key={index}>{part.slice(2, -2)}</strong>
        ) : (
          <span key={index}>{part}</span>
        ),
      )}
    </>
  );
}

export function RichTitle({ text }: { text: string }) {
  const parts = text.split(/(\{\{.*?\}\})/g);
  const nodes: ReactNode[] = parts.map((part, index) =>
    part.startsWith("{{") && part.endsWith("}}") ? (
      <span key={index} className="accent">
        {part.slice(2, -2)}
      </span>
    ) : (
      <span key={index}>{part}</span>
    ),
  );
  return <>{nodes}</>;
}

export function Prose({ blocks }: { blocks: Block[] }) {
  return (
    <div className="prose">
      {blocks.map((block, index) => {
        if (block.type === "h3") return <h3 key={index}>{block.text}</h3>;
        if (block.type === "ul") {
          return (
            <ul key={index}>
              {block.items.map((item) => (
                <li key={item}>
                  <Inline text={item} />
                </li>
              ))}
            </ul>
          );
        }
        return (
          <p key={index}>
            <Inline text={block.text} />
          </p>
        );
      })}
    </div>
  );
}
