import React from 'react';
import StickyBox from 'react-sticky-box';

import List from '../List';
import FollowSuggestion from '../FollowSuggestion';
import News from '../News';

import { 
    Container, 
    SearchWrapper, 
    SearchInput, 
    SearchIcon, 
    Body 
} from './styles';

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
                    title="Assuntos do Momento"
                    elements={[<News />, <News />, <News />, <News />, <News />,]}
                />


                <List 
                    title="Talvez você curta"
                    elements={[
                        <FollowSuggestion
                            name="Diego Gomes"
                            nickname="@diegogomes"
                        />,

                        <FollowSuggestion
                            name="Valdemir Ribeiro"
                            nickname="@valribeiro"
                        />,

                        <FollowSuggestion
                            name="Luiz Felipe"
                            nickname="@lipeldb"
                        />,
                    ]}
                />
                
            </Body>
        </StickyBox>
    </Container>
  );
}

export default SideBar;