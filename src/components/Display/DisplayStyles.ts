import styled from "styled-components";
import { QUERIES } from "../../constants";

const StyledPicture = styled.picture`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  @media ${QUERIES.laptopAndUp} {
    flex-direction: row;
    gap: 1.5rem;
  }
`;

const StyledImage = styled.img<{ isLoaded: boolean }>`
  ${(p) =>
    p.isLoaded
      ? `opacity: 1;
  transition: all 0.3s ease-in;`
      : `
      min-width: 45vw;
      background-color: var(--dark);
      opacity: 0;
      transition: all 0.3s ease-in;`}
  max-width: 100%;

  @media ${QUERIES.laptopAndUp} {
    min-width: 700px;
    max-width: 50%;
    max-height: 85vh;
    object-fit: contain;
  }
`;

const StyledIframe = styled.iframe`
  min-width: 45vw;
  transition: all 0.3s ease-in;
  max-width: 100%;

  @media ${QUERIES.laptopAndUp} {
    min-width: 700px;
    max-width: 50%;
    max-height: 85vh;
    min-height: 400px;
  }
`;

const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Copyright = styled.p`
  text-align: right;
  margin: 20px 0;
  font-style: italic;
`;

const Date = styled.p`
  margin: 0 0 20px 0;
  font-size: var(--font-size-small);
  font-style: italic;
`;

export {
  StyledPicture,
  StyledImage,
  DescriptionWrapper,
  Copyright,
  Date,
  StyledIframe
};
