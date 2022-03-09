import styled from "styled-components";
import { QUERIES } from "../../constants";

const StyledSection = styled.section<{ hasDisplay: boolean }>`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: ${(p) => (p.hasDisplay ? "none" : "center")};

  h1 {
    text-align: center;
    margin: 20px 0;
  }

  @media ${QUERIES.laptopAndUp} {
    justify-content: center;
    align-items: center;
  }
`;

const DateWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const PickerText = styled.p`
  font-size: var(--font-size-small);
  margin-right: 8px;
`;

const Placeholder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${QUERIES.tabletAndUp} {
    height: 90vh;
    width: 45vw;
  }
`;

export { StyledSection, DateWrapper, Placeholder, PickerText };
