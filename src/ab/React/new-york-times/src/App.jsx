import React from 'react';
import styled from 'styled-components';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Article from './components/Secction/Article';
import BusinessNav from './components/BusinessNav/BusinessNav';
import MarketSnapshotNav from './components/MarketSnapshotNav/MarketSnapshotNav';
import article1Image from './assets/article1.png';
import fast1Image from './assets/fast1.png';
import fast2Image from './assets/fast2.png';
import fast3Image from './assets/fast3.png';

const AppContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  background-color: #f7f7f7;
`;

const Section = styled.section`
  display: grid;
  grid-template-columns: 1.7fr 1.4fr 1fr;
  gap: 30px;
`;

const App = () => {
  const mainNavItems = [
    { href: '#', text: 'World' },
    { href: '#', text: 'Politics' },
    { href: '#', text: 'Business' },
    { href: '#', text: 'Opinion' },
    { href: '#', text: 'Tech' },
    { href: '#', text: 'Science' },
    { href: '#', text: 'Sports' },
    { href: '#', text: 'Arts' },
    { href: '#', text: 'Books' },
    { href: '#', text: 'Style' },
    { href: '#', text: 'Food' },
    { href: '#', text: 'Travel' },
    { href: '#', text: 'Magazine' },
  ];

  return (
    <AppContainer>
      <head>
        <link
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet"
        />
      </head>
      <body>
        <Header />
        <Navbar items={mainNavItems} />
        <BusinessNav />
        <Section>
          <Article
            image={article1Image}
            subtitle="TECH FIX"
            date="May 20, 2020"
            title="Everything You Need to Know About Slow Internet Speeds"
            content="Our Crummy connections are the biggest tech headache in the pandemic. Here's a comprehensive guide to do about them."
          />
          <div>
            <Article
              sectionTitle="Latest News"
              subtitle="The upsho"
              date="May 19, 2020"
              title="A Wave of Small Business Closures Is on the Way. Can Washington Stop It?"
              smallTitle 
            />
            <Article
              subtitle="NEW ANALYSIS"
              date="May 19, 2020"
              title="Coronavirus Shut Down the 'Experience Economy.' Can It Come Back?"   
              showIcon={true}
              smallTitle 
            />
          </div>
          <div>
            <Article
              sectionTitle="Fast Forward"
              image={fast1Image}
              title="Another Grim Tally of U.S. Unemployment Is Expected: Live Business Updates"
              date="May 20, 2020"
              content="Live stock Market News Darling the Coronavirus Pandemic."
              smallImage 
              smallestOverall 
              hideReadMore
            />
            <Article
              image={fast2Image}
              title="Another Grim Tally of U.S. Unemployment Is Expected: Live Business Updates"
              date="May 20, 2020"
              content="Live stock Market News Darling the Coronavirus Pandemic."
              smallImage 
              smallestOverall 
              hideReadMore
            />
            <Article
              image={fast3Image}
              title="Another Grim Tally of U.S. Unemployment Is Expected: Live Business Updates"
              date="May 20, 2020"
              content="Live stock Market News Darling the Coronavirus Pandemic."
              smallImage 
              smallestOverall 
              hideReadMore
              showShowAllLink={true} 
            />
          </div>
        </Section>
        <MarketSnapshotNav />
      </body>
    </AppContainer>
  );
};

export default App;
