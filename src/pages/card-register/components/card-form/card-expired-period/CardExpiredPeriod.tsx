import React from 'react';
import styled from '@emotion/styled';
import { useFormContext } from '../../../../../hooks/useForm/useFormContext';
import PositiveNumberInput from '../../common/PositiveNumberInput';
import Fieldset from '../Fieldset';

function ExpiredPeriod() {
  const { register } = useFormContext();

  const handleMonthOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target: input } = event;
    const { value, selectionStart } = input;
    if (selectionStart === null) return;

    const cursor = selectionStart - 1;
    const insertedNum = Number(value[cursor]);

    // 처음부터 2이상의 숫자를 입력한 경우
    if (value.length === 1 && Number(value) > 1) {
      input.value = `0${insertedNum}`;
      input.setCustomValidity(''); // 이렇게 안하면 계속 invalid상태가 된다
      return;
    }

    // 00은 금지한다
    if (value.length === 2 && Number(value) === 0) {
      input.value = '0';
    }
  };

  const monthRegex = '0[1-9]|1[0-2]';
  const year = `${new Date().getFullYear() - 2000}`;
  const yearRegex = `(${year[0]}[${year[1]}-9]|[${Math.min(Number(year[0]) + 1, 9)}-9][0-9])`;

  return (
    <Fieldset>
      <Fieldset.Head>
        <label htmlFor="expired-period">만료일</label>
      </Fieldset.Head>
      <Fieldset.Content>
        <Row>
          <PositiveNumberInput
            id="expired-period"
            type="text"
            {...register('expired-period-1', {
              required: { value: true },
              maxLength: { value: 2 },
              pattern: { value: monthRegex, message: '날짜를 다시 확인해 주세요' },
              onChange: handleMonthOnChange,
            })}
          />
          <Seperator />
          <PositiveNumberInput
            type="text"
            {...register('expired-period-2', {
              required: { value: true },
              maxLength: { value: 2 },
              pattern: { value: yearRegex, message: '년도를 다시 확인해 주세요' },
            })}
          />
        </Row>
      </Fieldset.Content>
    </Fieldset>
  );
}

const Row = styled.div`
  display: flex;
  max-width: 50%;
  background-color: #ecebf1;
  border-radius: 7px;
  overflow: hidden;
`;

const Seperator = styled.div`
  width: 10px;
  position: relative;
  &:after {
    content: '/';
    width: 10px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #80808078;
  }
`;

export default ExpiredPeriod;
