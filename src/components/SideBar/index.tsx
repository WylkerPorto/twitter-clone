import React from 'react';
import StickyBox from 'react-sticky-box';
import List from '../List'
import FollowSuggestion from '../FollowSuggestion'
import News from '../News'
import { Container, SearchWrapper, SearchInput, SearchIcon, Body } from './styles';

const SideBar: React.FC = () => {
  return (
      <Container>
        <SearchWrapper>
            <SearchInput placeholder="Buscar no Twitter" />
            <SearchIcon />
        </SearchWrapper>

        <StickyBox>
            <Body>
                <List 
                    title="Talvez vc curta"
                    elements={[
                        <FollowSuggestion
                            name="Teste 1"
                            nickname="tst1"
                        />,
                        <FollowSuggestion
                            name="Teste 2"
                            nickname="tst2"
                        />,
                        <FollowSuggestion
                            name="Teste 3"
                            nickname="tst3"
                        />,
                        <FollowSuggestion
                            name="Teste 4"
                            nickname="tst4"
                        />
                    ]}
                />
                
                <List 
                    title="Talvez vc curta"
                    elements={[
                        <News />,
                        <News />,
                        <News />,
                        <News />,
                        <News />,
                    ]}
                />
                
                <List 
                    title="Talvez vc curta"
                    elements={[
                        <News />,
                        <News />,
                        <News />,
                        <News />,
                        <News />,
                    ]}
                />
                
                <List 
                    title="Talvez vc curta"
                    elements={[
                        <News />,
                        <News />,
                        <News />,
                        <News />,
                        <News />,
                    ]}
                />
            </Body>
        </StickyBox>
      </Container>
  );
}

export default SideBar;