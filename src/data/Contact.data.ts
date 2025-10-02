export interface ContactItemData {
  icon: string;
  label: string;
  value: string;
  href?: string;
}

export const contacts: ContactItemData[] = [
  { icon: "📧", label: "Email", value: "hayeon@example.com", href: "mailto:hayeon@example.com" },
  { icon: "💼", label: "LinkedIn", value: "linkedin.com/in/hayeon", href: "https://linkedin.com/in/hayeon" },
  { icon: "🐙", label: "GitHub", value: "github.com/hayeon", href: "https://github.com/hayeon" },
  { icon: "🌍", label: "Tistory", value: "tistory.com/hayeon", href: "https://tistory.com/hayeon" },
  { icon: "👀", label: "Velog", value: "velog.io/@hayeon", href: "https://velog.io/@hayeon" },
];
