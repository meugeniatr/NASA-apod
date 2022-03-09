import styled from "styled-components";
import { COLORS, QUERIES } from "../../constants";

const ButtonBase = styled.button`
  font-size: var(--font-size-normal);
  padding: 10px 40px;
  border: 2px solid transparent;
  border-radius: 2px;
  text-transform: uppercase;
  font-size: ${14 / 16}rem;

  &:focus {
    outline-color: ${COLORS.blue};
    outline-offset: 4px;
  }

  @media ${QUERIES.laptopAndUp} {
    padding: 15px 53px;
    font-size: ${15 / 16}rem;
  }
  @media ${QUERIES.desktopAndUp} {
    padding: 20px 70px;
    border-radius: 4px;
    font-size: ${16 / 16}rem;
  }
`;

const FillButton = styled(ButtonBase)<{
  bgColor: string;
  bgColorLight: string;
}>`
  background-color: ${(props) => props.bgColor};
  color: ${COLORS.white};
  cursor: pointer;
  margin: 40px 0;
  transition: transform 250ms;

  &:hover {
    background-color: ${(props) => props.bgColorLight};
    transform: translateY(-8px);
  }
`;

export { FillButton };
