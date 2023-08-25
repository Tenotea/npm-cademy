import { type ReactNode } from "react";

export type RecordsLayoutProps = {
  title: string;
  headers: { id: string; name: ReactNode }[];
  data: Array<Record<string, ReactNode>>;
};
