export interface ContactItemData {
  icon: string;
  label: string;
  value?: string;
  href?: string;
}

export const contacts: ContactItemData[] = [
  { icon: "📧", label: "Email", href: "mailto:hayeonlr@gmail.com" },
  { icon: "💼", label: "LinkedIn", href: "https://www.linkedin.com/in/hayeon-doh-45102a252/" },
  { icon: "🐙", label: "GitHub", href: "https://github.com/doh-ha" },
  { icon: "🌍", label: "Tistory", href: "https://ardohtory.tistory.com/" },
  { icon: "👀", label: "Velog", href: "https://velog.io/@ardoh/posts" },
];
