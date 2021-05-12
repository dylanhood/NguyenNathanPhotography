import React from 'react';
import { MdDesktopMac, MdCode, MdPhonelinkSetup } from 'react-icons/md';
import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import ServicesSectionItem from './ServicesSectionItem';

const ServicesItemsStyles = styled.div`
  padding: 10rem 0;
  .services__allItems {
    display: flex;
    gap: 10rem;
    justify-content: space-between;
    margin-top: 5rem;
  }
  @media only screen and (max-width: 768px) {
    .services__allItems {
      flex-direction: column;
      max-width: 350px;
      margin: 0 auto;
      margin-top: 5rem;
      gap: 5rem;
    }
  }
`;

export default function ServicesSection() {
  return (
    <ServicesItemsStyles>
      <div className="container">
        <SectionTitle subheading="What I can do for you" heading="Services" />
        <div className="services__allItems">
          <ServicesSectionItem
            title="Photography"
            desc="I do photography for people who desire others to see them as who they are."
          />
          <ServicesSectionItem
            title="Photo Editing"
            desc="I also edit photos. I utilize a MacBook Pro for all of the nitty gritty."
          />
          <ServicesSectionItem
            title="Cinematopgraphy"
            desc="I would heavily enjoy creating advertisements for you. I can include project examples from other clients upon request. "
          />
        </div>
      </div>
    </ServicesItemsStyles>
  );
}
