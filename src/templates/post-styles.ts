import styled, { css } from 'styled-components';

interface IPostMetaProps {
  postIndex: Number;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  max-width: 768px;
  width: 100%;

  h1 {
    color: #00143c;
    font-size: 32px;
    margin-bottom: 16px;
    text-align: center;
  }
`;

export const Post = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;

export const PostMeta = styled.div<IPostMetaProps>`
  border-left: 3px solid #70a1ff;
  color: #00143c;
  display: flex;
  flex-direction: column;
  margin: 16px 0;
  padding-left: 16px;
  padding-top: 8px;

  @media (min-width: 768px) {
    ${props =>
    props.postIndex === 0 &&
    css`
        flex-direction: row;
      `}
  }
`;

export const PostBody = styled.div`
  max-width: 100%;

  a {
    color: #00143c;
    text-decoration: underline;

    &[target='_blank']:after {
      content: '\f35d';
      font-family: 'Font Awesome 5 Free';
      font-size: 11px;
      font-weight: 900;
      margin-left: 5px;
    }
  }

  > h1,
  > h2,
  > h3,
  > h4,
  > h5,
  > h6 {
    color: #00143c;
    margin-top: 32px;
    font-weight: 800;
    margin-bottom: 8px !important;
  }

  ol,
  ul {
    padding-left: 24px;
  }

  li {
    color: #00143c;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    margin-top: 16px;
  }

  p {
    color: #00143c;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    margin-bottom: 24px;
    text-align: justify;
  }

  figure {
    figcaption {
      color: #00143c;
      font-size: 14px;
      font-weight: 500;
      margin-bottom: 20px;
      margin-top: 8px;
      text-align: center;
    }
  }

  /**
             * Based on MUICSS's Table Component
             */
  table {
    width: 100%;
    max-width: 100%;
    margin-bottom: 18px;
  }

  table > thead > tr > th,
  table > tbody > tr > th,
  table > tfoot > tr > th {
    text-align: left;
  }

  table > thead > tr > th,
  table > thead > tr > td,
  table > tbody > tr > th,
  table > tbody > tr > td,
  table > tfoot > tr > th,
  table > tfoot > tr > td {
    padding: 8px;
    line-height: 1.429;
  }

  table > thead > tr > th {
    border-bottom: 2px solid rgba(0, 0, 0, 0.12);
    font-weight: 700;
  }

  table > tbody + tbody {
    border-top: 2px solid rgba(0, 0, 0, 0.12);
  }

  table > tbody > tr > td {
    border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  }

  :target::before {
    content: '';
    display: block;
    position: relative;
    height: $md-toolbar-mobile-portrait-height + $phone-status-bar-height;
    margin: -($md-toolbar-mobile-portrait-height + $phone-status-bar-height) 0 0;
  }

  code[class*='language-'],
  pre[class*='language-'] {
    font-family: Consolas, Menlo, Monaco, 'Andale Mono WT', 'Andale Mono',
      'Lucida Console', 'Lucida Sans Typewriter', 'DejaVu Sans Mono',
      'Bitstream Vera Sans Mono', 'Liberation Mono', 'Nimbus Mono L',
      'Courier New', Courier, monospace;
    font-size: 14px;
    line-height: 1.375;
    direction: ltr;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    -moz-tab-size: 4;
    -o-tab-size: 4;
    tab-size: 4;
    -webkit-hyphens: none;
    -moz-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
    background: #1d1f21;
    color: #c5c8c6;
  }

  pre[class*='language-']::-moz-selection,
  pre[class*='language-'] ::-moz-selection,
  code[class*='language-']::-moz-selection,
  code[class*='language-'] ::-moz-selection {
    text-shadow: none;
    background: #b4b7b4;
  }

  pre[class*='language-']::selection,
  pre[class*='language-'] ::selection,
  code[class*='language-']::selection,
  code[class*='language-'] ::selection {
    text-shadow: none;
    background: #b4b7b4;
  }

  pre[class*='language-'] {
    padding: 1em;
    margin: 0.5em 0;
    overflow: auto;
  }

  :not(pre) > code[class*='language-'] {
    padding: 0.1em;
    border-radius: 0.3em;
  }

  .token.comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
    color: #969896;
  }

  .token.punctuation {
    color: #c5c8c6;
  }

  .token.namespace {
    opacity: 0.7;
  }

  .token.operator,
  .token.boolean,
  .token.number {
    color: #de935f;
  }

  .token.property {
    color: #f0c674;
  }

  .token.tag {
    color: #81a2be;
  }

  .token.string {
    color: #8abeb7;
  }

  .token.selector {
    color: #b294bb;
  }

  .token.attr-name {
    color: #de935f;
  }

  .token.entity,
  .token.url,
  .language-css .token.string,
  .style .token.string {
    color: #8abeb7;
  }

  .token.attr-value,
  .token.keyword,
  .token.control,
  .token.directive,
  .token.unit {
    color: #b5bd68;
  }

  .token.statement,
  .token.regex,
  .token.atrule {
    color: #8abeb7;
  }

  .token.placeholder,
  .token.variable {
    color: #81a2be;
  }

  .token.deleted {
    text-decoration: line-through;
  }

  .token.inserted {
    border-bottom: 1px dotted #fff;
    text-decoration: none;
  }

  .token.italic {
    font-style: italic;
  }

  .token.important,
  .token.bold {
    font-weight: bold;
  }

  .token.important {
    color: #c66;
  }

  .token.entity {
    cursor: help;
  }

  pre > code.highlight {
    outline: 0.4em solid #c66;
    outline-offset: 0.4em;
  }
`;
