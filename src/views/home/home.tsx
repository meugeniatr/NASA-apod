import { FC, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { COLORS } from "../../constants";
import Button from "../../components/Button/Button";
import Loader from "../../components/Loader/Loader";
import {
  StyledSection,
  DateWrapper,
  Placeholder,
  PickerText
} from "./homeStyles";
import Display from "../../components/Display/Display";
import useAPI from "../../services/useAPI";

const Home: FC = () => {
  const [imageView, setImageView] = useState<boolean>(false);
  const [date, setDate] = useState(new Date());
  const [{ response: data, error, loading }, fetchData] = useAPI();

  function getRandomDate(from: Date, to: Date) {
    const fromTime = from.getTime();
    const toTime = to.getTime();
    return new Date(fromTime + Math.random() * (toTime - fromTime));
  }

  const generateRandomDOB = (): string => {
    const random = getRandomDate(
      new Date("2021-01-01T01:57:45.271Z"),
      new Date("2021-12-31T01:57:45.271Z")
    );
    return random.toISOString();
  };

  if (loading) {
    return (
      <Placeholder>
        <Loader />
      </Placeholder>
    );
  } else {
    return (
      <StyledSection hasDisplay={imageView}>
        {imageView && !error ? (
          <Display data={data!}>
            <Button
              variant="fill"
              bgColor={COLORS.purple}
              bgColorLight={COLORS.purpleLight}
              onClick={(): void => {
                fetchData({
                  date: generateRandomDOB().split("T")[0]
                });
              }}
            >
              I want a random picture from 2021!
            </Button>
            <DateWrapper>
              <PickerText>
                Psst... you can also pick a picture from another date
              </PickerText>
              <DatePicker
                selected={date}
                maxDate={new Date()}
                onChange={(date: Date) => {
                  fetchData({ date: date.toISOString().split("T")[0] });
                  setDate(date);
                }}
              />
            </DateWrapper>
          </Display>
        ) : (
          <>
            <h1>It's a wonderful universe</h1>
            <Button
              variant="fill"
              bgColor={COLORS.purple}
              bgColorLight={COLORS.purpleLight}
              onClick={(): void => setImageView(!imageView)}
            >
              Discover it!
            </Button>
          </>
        )}
      </StyledSection>
    );
  }
};

export default Home;
