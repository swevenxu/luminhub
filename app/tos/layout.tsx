import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - Lumin Hub",
  description: "Terms of Service for Lumin Hub",
};

export default function TosLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
