import React from 'react';
import Header from '../components/common/Header';
import {
  PageTemplateContainer,
  ErrorMessageContainer,
  ErrorMessage,
  CloseMessageButton,
  Footer,
} from './PageTemplate.styled';

const PageTemplate = ({ error, clearError, children }) => {
  return (
    <PageTemplateContainer>
      <Header />
      {error && <ErrorMessageContainer>
        <ErrorMessage>{error}</ErrorMessage>
        <CloseMessageButton onClick={clearError}>x</CloseMessageButton>
      </ErrorMessageContainer>}
      {children}
      <Footer />
    </PageTemplateContainer>
  );
};

export default PageTemplate;
