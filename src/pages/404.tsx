import React from "react";
import Button from "react-md/lib/Buttons";
import { useIntl } from "gatsby-plugin-intl";

import Layout from "../components/Layout";

import { Container } from './404-styles';

const PageNotFound: React.FC = () => {
  const intl = useIntl();

  return <Layout
    pageTitle={intl.formatMessage({ id: "404.pageTitle" })}
    pageRelativeUrl="404">
    <Container>
      <h1>Ops!</h1>
      <h2>{intl.formatMessage({ id: "404.subtitle" })}</h2>
      <Button className="primary-button" href={`/${intl.locale}/`}>{intl.formatMessage({ id: "404.button" })}</Button>
    </Container>
  </Layout>
}

export default PageNotFound;
