import React from "react";

import { Header, ContentPanel } from "components";

import CategoryLabel from "./components/CategoryLabel";
import QuestionCard from "./components/QuestionCard";

export default () => (
    <>
        <Header>
            <CategoryLabel>Loading...</CategoryLabel>
        </Header>
        <ContentPanel>
            <QuestionCard>Loading...</QuestionCard>
        </ContentPanel>
    </>
);
