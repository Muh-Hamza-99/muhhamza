import type { ReactNode } from "react";

type NoteProps = {
  children: ReactNode;
};

export function Note({ children }: NoteProps) {
  return (
    <aside className="my-6 border border-border bg-card px-4 py-3 text-sm text-card-foreground">
      {children}
    </aside>
  );
}
