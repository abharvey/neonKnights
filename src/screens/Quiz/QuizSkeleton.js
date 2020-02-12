import React from "react";

import { Header, ContentPanel, Card } from "components";

import CategoryLabel from "./components/CategoryLabel";

export default () => (
    <>
        <Header>
            <CategoryLabel>Loading...</CategoryLabel>
        </Header>
        <ContentPanel>
            <Card>Loading...</Card>
        </ContentPanel>
    </>
);
