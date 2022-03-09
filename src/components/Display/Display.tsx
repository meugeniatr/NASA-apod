import { FC, ReactElement, useState } from "react";
import { IPicture } from "../../services/useAPI";
import {
  StyledPicture,
  StyledImage,
  DescriptionWrapper,
  Copyright,
  Date,
  StyledIframe
} from "./DisplayStyles";

interface IProps {
  data: IPicture;
}

const Display: FC<IProps> = ({ data, children }): ReactElement<any, any> => {
  const [loaded, setLoaded] = useState(false);

  const onImgLoad = (): void => {
    setLoaded(true);
  };

  return (
    <StyledPicture>
      {data.url.includes(".youtube") ? (
        <StyledIframe src={data.url} title={data.title} />
      ) : (
        <StyledImage
          isLoaded={loaded}
          src={data.url}
          alt={"NASA highlight of the day"}
          onLoad={onImgLoad}
        />
      )}
      <DescriptionWrapper>
        <h2>{data.title}</h2>
        <Date>Date: {data.date}</Date>
        <p>{data.explanation}</p>
        <Copyright>
          Copyright: {data.copyright ?? "No copyright signaled"}
        </Copyright>
        {children}
      </DescriptionWrapper>
    </StyledPicture>
  );
};

export default Display;
