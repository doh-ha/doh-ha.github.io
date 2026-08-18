import React, { useState, useEffect, useRef } from "react";
import styled, { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "./styles/styled-components";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import About from "./sections/About";
import Project from "./sections/Project";
import Experience from "./sections/Experience";
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

const ContentSections = styled.div`
  padding-top: ${({ theme }) => theme.spacing.lg};

  > section {
    min-height: auto;
    align-items: flex-start;
    padding-top: ${({ theme }) => theme.spacing["3xl"]};
    padding-bottom: ${({ theme }) => theme.spacing["2xl"]};
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    padding-top: ${({ theme }) => theme.spacing.md};

    > section {
      padding-top: ${({ theme }) => theme.spacing["2xl"]};
      padding-bottom: ${({ theme }) => theme.spacing.xl};
    }
  }
`;

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(getPageFromUrl);
  const [activeSection, setActiveSection] = useState("news");
  const [pendingSection, setPendingSection] = useState<string | null>(null);
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handlePopState = () => setCurrentPage(getPageFromUrl());
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  useEffect(() => {
    const mainEl = mainRef.current;
    if (!mainEl || currentPage !== "main") return;

    const handleScroll = () => {
      const sections = ["news", "publication", "experience", "project", "education"];
      const scrollPosition = mainEl.scrollTop + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    mainEl.addEventListener("scroll", handleScroll);
    return () => mainEl.removeEventListener("scroll", handleScroll);
  }, [currentPage]);

  useEffect(() => {
    if (currentPage !== "main" || !pendingSection) return;
    const mainEl = mainRef.current;
    const element = document.getElementById(pendingSection);
    if (mainEl && element) {
      mainEl.scrollTo({ top: element.offsetTop, behavior: "smooth" });
    }
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
    mainRef.current?.scrollTo({ top: 0 });
  };

  const handleSectionChange = (sectionId: string) => {
    if (currentPage !== "main") {
      goToMain(sectionId);
      return;
    }

    setActiveSection(sectionId);
    const mainEl = mainRef.current;
    const element = document.getElementById(sectionId);
    if (mainEl && element) {
      mainEl.scrollTo({ top: element.offsetTop, behavior: "smooth" });
    }
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
              <ContentSections>
                <NewsPage onBack={() => goToMain("news")} />
                <Footer />
              </ContentSections>
            ) : (
              <>
                <NavBar activeSection={activeSection} onSectionChange={handleSectionChange} />
                <ContentSections>
                  <News onMoreClick={openNewsPage} />
                  <Publication />
                  <Experience />
                  <Project />
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
