import React, { useContext } from "react";
import styled from "styled-components";
import PropTypes, { string } from "prop-types";

import { CREATE_MASKED_CHARACTERS } from "utils/constants";
import CardInfoContext from "context/CardInfoContext";

const CARD_SIZE_BEFORE_SUBMIT = {
  width: "213px",
  height: "133px",
  padding: "14px 16px",
  fontSize: "10px",
  lineHeight: "12px",
  justifyContent: "flex-start",
};

const CARD_SIZE_AFTER_SUBMIT = {
  width: "295px",
  height: "180px",
  padding: "20px 25px",
  fontSize: "16px",
  lineHeight: "20px",
  justifyContent: "space-around",
};

const CARD_COLORS = {
  default: "#d2d2d2",
  complete: "#00caa5",
  0: "#383838",
  1: "#066163",
  2: "#CDBE78",
  3: "#F2F2F2",
  4: "#FFEF82",
};

const CardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const cardSize = (isSubmitted) =>
  isSubmitted ? CARD_SIZE_AFTER_SUBMIT : CARD_SIZE_BEFORE_SUBMIT;

const SmallCard = styled.div(({ isSubmitted, colorType }) => ({
  display: "flex",
  "flex-direction": "column",
  "justify-content": cardSize(isSubmitted).justifyContent,

  width: cardSize(isSubmitted).width,
  height: cardSize(isSubmitted).height,
  padding: cardSize(isSubmitted).padding,

  "background-color": CARD_COLORS[colorType],
  "box-shadow": "3px 3px 5px rgba(0, 0, 0, 0.25)",
  "border-radius": "5px",

  color: (colorType === 0 || colorType === 1) && "#ffffff",

  "font-size": cardSize(isSubmitted).fontSize,
  "line-height": cardSize(isSubmitted).lineHeight,
  "vertical-align": "middle",
  "font-weight": "400",
}));

const CardName = React.memo(styled.p`
  margin-bottom: 20px;
`);

const CardChip = React.memo(styled.div`
  width: 40px;
  height: 26px;

  background: #cbba64;
  border-radius: 4px;

  margin-bottom: 15px;
`);

const CardNumber = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  height: 10px;
  margin-bottom: 12px;
`;

const CardNumberUnit = styled.p``;

const CardBottomSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 10px;
`;

const CardHolderName = styled.p`
  width: 55%;
  word-wrap: break-word;
`;

const CardExpireDate = styled.p``;

export default function CardPreview({
  cardInfo,
  isValidCardInfo,
  isSubmitted,
  color,
}) {
  const { state } = useContext(CardInfoContext);
  const { cardNumber, holderName, expireDate } = { ...cardInfo, ...state };

  return (
    <CardContainer>
      <SmallCard
        isComplete={isValidCardInfo}
        isSubmitted={isSubmitted}
        colorType={color || (isValidCardInfo ? "complete" : "default")}
      >
        <CardName>Woowa Card</CardName>
        <CardChip />
        <CardNumber>
          <CardNumberUnit>{cardNumber[0]}</CardNumberUnit>
          <CardNumberUnit>{cardNumber[1]}</CardNumberUnit>
          <CardNumberUnit>
            {CREATE_MASKED_CHARACTERS(cardNumber[2].length)}
          </CardNumberUnit>
          <CardNumberUnit>
            {CREATE_MASKED_CHARACTERS(cardNumber[3].length)}
          </CardNumberUnit>
        </CardNumber>
        <CardBottomSection>
          <CardHolderName>{holderName}</CardHolderName>
          <CardExpireDate>
            {expireDate[0]} {expireDate[0].length !== 0 && "/"} {expireDate[1]}
          </CardExpireDate>
        </CardBottomSection>
      </SmallCard>
    </CardContainer>
  );
}

CardPreview.propTypes = {
  cardInfo: PropTypes.shape({
    cardInfo: PropTypes.shape({
      cardNumber: PropTypes.arrayOf(string),
      holderName: PropTypes.string,
      expireDate: PropTypes.arrayOf(string),
    }),
  }),
  isValidCardInfo: PropTypes.bool,
  isSubmitted: PropTypes.bool,
  color: PropTypes.oneOf([0, 1, 2, 3, 4, "default", "complete"]),
};

CardPreview.defaultProp = {
  color: "default",
};
