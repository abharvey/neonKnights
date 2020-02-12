import React, { useContext, useEffect } from "react";
import styled from "styled-components";

import { store } from "data/store";

import {
    Header,
    ContentPanel,
    FooterNavigation,
    Polygon,
    Card,
    StyledLink,
    MEDIUM
} from "components";
import { centeredFlexColumn } from "components/cssUtils";

const Description = styled.div`
    ${centeredFlexColumn};
    text-align: center;
    h2 {
        margin-top: 40px;
    }
`;

const Welcome = styled.h1`
    ${({ theme: { font } }) => font`${MEDIUM}`}
`;

const Home = () => {
    const { dispatch } = useContext(store);
    useEffect(() => {
        dispatch({ type: "QUESTIONS/CLEAR_ANSWERS" });
    }, [dispatch]);

    return (
        <>
            <Header>
                <Polygon>
                    <Welcome>Welcome to the Trivia Challenge</Welcome>
                </Polygon>
            </Header>
            <ContentPanel>
                <Card>
                    <Description>
                        <h2>
                            You will be presented with 10 True or False
                            Questions.
                        </h2>
                        <h2>Can you score 100%?</h2>
                    </Description>
                </Card>
            </ContentPanel>
            <FooterNavigation>
                <StyledLink to="/quiz">Begin</StyledLink>
            </FooterNavigation>
        </>
    );
};

export default Home;
