import { Link } from 'react-router-dom';
import Card from '../../components/Card/Card';
import LOCAL_STORAGE_KEY from '../../constants/localStorageKey';
import ROUTE from '../../constants/route';
import useLocalStorage from '../../hooks/useLocalStorage';

const CardList = () => {
  const cardList = useLocalStorage(LOCAL_STORAGE_KEY.CARD_LIST);

  return (
    <div>
      <Link to={ROUTE.ADD}>카드 추가하기</Link>
      <ul>
        {cardList.value.map((card) => {
          const {
            id,
            cardNumbers,
            cardCompanyName,
            cardCompanyColor,
            ownerName,
            expiryDate,
            nickname,
          } = card;

          return (
            <li key={id}>
              <Card
                bgColor={cardCompanyColor}
                companyName={cardCompanyName}
                cardNumbers={cardNumbers}
                ownerName={ownerName}
                expiryDate={expiryDate}
              />
              카드 별칭 : {nickname}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CardList;
