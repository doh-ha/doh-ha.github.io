import React, { useState, useEffect, useRef } from "react";
import styled, { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "./styles/styled-components";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import About from "./sections/About";
import Experience from "./sections/Experience";
// import Project from "./sections/Project"; // temporarily hidden
import News from "./sections/News";
import NewsPage from "./sections/News/NewsPage";
import Publication from "./sections/Publication";
import Education from "./sections/Education";

type Page = "main" | "news";

const getPageFromUrl = (): Page => {
  const params = new URLSearchParams(window.location.search);
  return params.get("page") === "news" ? "news" : "main";
};

const AppContainer = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
`;

const TwoColumnLayout = styled.div`
  display: grid;
  grid-template-columns: 3fr 7fr;
  min-height: 100vh;

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

const SidebarPanel = styled.aside`
  position: sticky;
  top: 0;
  height: 100vh;
  overflow-y: auto;
  background: ${theme.colors.backgroundGray};

  @media (max-width: ${theme.breakpoints.tablet}) {
    position: static;
    height: auto;
  }
`;

const MainContent = styled.main`
  height: 100vh;
  overflow-y: auto;
  min-width: 0;
  position: sticky;
  top: 0;

  @media (max-width: ${theme.breakpoints.tablet}) {
    height: auto;
    overflow-y: visible;
    position: static;
  }
`;

const NewsPageLayout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;

  > footer {
    margin-top: auto;
  }
`;

const ContentSections = styled.div`
  > section {
    min-height: auto;
    align-items: flex-start;
    padding-top: ${({ theme }) => theme.spacing["2xl"]};
    padding-bottom: ${({ theme }) => theme.spacing["2xl"]};
    border-bottom: 1px solid ${({ theme }) => theme.colors.borderColor};
    background: ${({ theme }) => theme.colors.backgroundWhite};

    &:last-of-type {
      border-bottom: none;
    }
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    > section {
      padding-top: ${({ theme }) => theme.spacing.xl};
      padding-bottom: ${({ theme }) => theme.spacing.xl};
    }
  }
`;

const NAV_SCROLL_OFFSET = 80;

const isDocumentScroll = () => window.matchMedia(`(max-width: ${theme.breakpoints.tablet})`).matches;

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(getPageFromUrl);
  const [activeSection, setActiveSection] = useState("news");
  const [pendingSection, setPendingSection] = useState<string | null>(null);
  const mainRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (!element) return;

    if (isDocumentScroll()) {
      const top = element.getBoundingClientRect().top + window.scrollY - NAV_SCROLL_OFFSET;
      window.scrollTo({ top, behavior: "smooth" });
      return;
    }

    const mainEl = mainRef.current;
    if (mainEl) {
      mainEl.scrollTo({ top: element.offsetTop - NAV_SCROLL_OFFSET, behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    if (isDocumentScroll()) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    mainRef.current?.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handlePopState = () => setCurrentPage(getPageFromUrl());
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  useEffect(() => {
    if (currentPage !== "main") return;

    const handleScroll = () => {
      const sections = ["news", "publication", "experience", "education"];

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= NAV_SCROLL_OFFSET && rect.bottom > NAV_SCROLL_OFFSET) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    const scrollTarget = isDocumentScroll() ? window : mainRef.current;
    if (!scrollTarget) return;

    scrollTarget.addEventListener("scroll", handleScroll, { passive: true });
    return () => scrollTarget.removeEventListener("scroll", handleScroll);
  }, [currentPage]);

  useEffect(() => {
    if (currentPage !== "main" || !pendingSection) return;
    scrollToSection(pendingSection);
    setPendingSection(null);
  }, [currentPage, pendingSection]);

  const goToMain = (sectionId = "news") => {
    window.history.pushState({}, "", window.location.pathname);
    setCurrentPage("main");
    setActiveSection(sectionId);
    setPendingSection(sectionId);
  };

  const openNewsPage = () => {
    window.history.pushState({ page: "news" }, "", "?page=news");
    setCurrentPage("news");
    scrollToTop();
  };

  const handleSectionChange = (sectionId: string) => {
    if (currentPage !== "main") {
      goToMain(sectionId);
      return;
    }

    setActiveSection(sectionId);
    scrollToSection(sectionId);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppContainer>
        <TwoColumnLayout>
          <SidebarPanel>
            <About />
          </SidebarPanel>
          <MainContent ref={mainRef}>
            {currentPage === "news" ? (
              <NewsPageLayout>
                <ContentSections>
                  <NewsPage onBack={() => goToMain("news")} />
                </ContentSections>
                <Footer />
              </NewsPageLayout>
            ) : (
              <>
                <NavBar activeSection={activeSection} onSectionChange={handleSectionChange} />
                <ContentSections>
                  <News onMoreClick={openNewsPage} />
                  <Publication />
                  <Experience />
                  {/* <Project /> temporarily hidden */}
                  <Education />
                  <Footer />
                </ContentSections>
              </>
            )}
          </MainContent>
        </TwoColumnLayout>
      </AppContainer>
    </ThemeProvider>
  );
};

export default App;
