import { publications } from "./Publication.data";
import { contacts } from "./Contact.data";

export const SITE_URL = "https://doh-ha.github.io/";

const PERSON_ID = `${SITE_URL}#person`;
const PERSON_NAME = "Hayeon Doh";

const sameAs = contacts.map((c) => c.href).filter((href): href is string => !!href && href.startsWith("http"));

const person = {
  "@type": "Person",
  "@id": PERSON_ID,
  name: PERSON_NAME,
  alternateName: ["Hayeon (Hannah) Doh", "Hannah Doh"],
  url: SITE_URL,
  email: "mailto:hayeonhannahdoh@gmail.com",
  jobTitle: "M.S. Student",
  affiliation: { "@type": "CollegeOrUniversity", name: "KAIST" },
  alumniOf: [
    { "@type": "CollegeOrUniversity", name: "Ewha Womans University" },
    { "@type": "CollegeOrUniversity", name: "Uppsala University" },
  ],
  knowsAbout: ["Human-Computer Interaction", "Educational Technology", "Large Language Models", "AI in Education"],
  sameAs,
};

const articles = publications.map((pub) => ({
  "@type": "ScholarlyArticle",
  headline: pub.title,
  name: pub.title,
  author: pub.authors.split(",").map((name) => {
    const trimmed = name.trim();
    return trimmed === PERSON_NAME ? { "@id": PERSON_ID } : { "@type": "Person", name: trimmed };
  }),
  datePublished: String(pub.year),
  ...(pub.image && { image: `${SITE_URL}${pub.image.replace(/^\//, "")}` }),
  ...(pub.venue !== "Under Review" && { description: `Published at ${pub.venue.replace(/\s*\n\s*/g, " ")}` }),
  ...(pub.doi && { identifier: { "@type": "PropertyValue", propertyID: "DOI", value: pub.doi } }),
  ...(pub.links?.length && { url: pub.links[0].url, sameAs: pub.links.map((l) => l.url) }),
}));

export const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfilePage",
      "@id": SITE_URL,
      url: SITE_URL,
      name: "Hayeon Doh — HCI & Educational Technology Researcher",
      mainEntity: { "@id": PERSON_ID },
    },
    person,
    ...articles,
  ],
};
