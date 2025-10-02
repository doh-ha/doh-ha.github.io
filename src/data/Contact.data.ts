export interface ContactItemData {
  icon: string;
  label: string;
  value: string;
  href?: string;
}

export const contacts: ContactItemData[] = [
  { icon: "📧", label: "Email", value: "hayeon@example.com", href: "mailto:hayeon@example.com" },
  { icon: "📱", label: "Phone", value: "010-1234-5678", href: "tel:01012345678" },
  { icon: "💼", label: "LinkedIn", value: "linkedin.com/in/hayeon", href: "https://linkedin.com/in/hayeon" },
  { icon: "🐙", label: "GitHub", value: "github.com/hayeon", href: "https://github.com/hayeon" },
];
