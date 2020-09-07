import React from 'react';
import { useIntl } from 'gatsby-plugin-intl';
import { FaUser, FaBookOpen, FaEnvelope } from 'react-icons/fa';

import Layout from '../components/Layout';

import {
  Container,
  TitleWrapper,
  IconsWrapper,
  ItemLink,
} from './index-styles';

export default () => {
  const intl = useIntl();
  return (
    <Layout isHome>
      <Container>
        <TitleWrapper>
          <h1>
            {`${intl.formatMessage({ id: 'home.hello' })},`}
            <br />
            {`${intl.formatMessage({ id: 'home.iam' })} `}
            <strong>Douglas Fuelber</strong>
          </h1>
          <h2>{intl.formatMessage({ id: 'home.subtitle' })}</h2>
        </TitleWrapper>

        <IconsWrapper>
          <ItemLink to="/about/">
            <FaUser />
            <div className="info">
              <span>
                {intl.formatMessage({ id: 'navigation.about.subtitle' })}
              </span>
              <h3>{intl.formatMessage({ id: 'navigation.about.title' })}</h3>
            </div>
          </ItemLink>

          <ItemLink to="/blog/">
            <FaBookOpen />
            <div className="info">
              <span>
                {intl.formatMessage({ id: 'navigation.blog.subtitle' })}
              </span>
              <h3>{intl.formatMessage({ id: 'navigation.blog.title' })}</h3>
            </div>
          </ItemLink>

          <ItemLink to="/contact/">
            <FaEnvelope />
            <div className="info">
              <span>
                {intl.formatMessage({ id: 'navigation.contact.subtitle' })}
              </span>
              <h3>{intl.formatMessage({ id: 'navigation.contact.title' })}</h3>
            </div>
          </ItemLink>
        </IconsWrapper>
      </Container>
    </Layout>
  );
};
