## 기능 구현 요구사항

- [x] 카드번호를 입력받을 수 있다.
  - [x] 각 자리 당 4자까지만 입력받을 수 있다.
  - [x] Number만 입력할 수 있다.
  - [ ] 빈 값이 아니고, 4자리를 다 채워야한다.
- [x] 만료일을 입력받을 수 있다.
  - [x] 각 자리 당 2자까지만 입력받을 수 있다.
  - [x] Number만 입력할 수 있다.
  - [x] month는 01~12까지의 숫자만 입력할 수 있다.
  - [x] 빈 값이 아니고, 2자리를 다 채워야한다.
- [x] 카드 소유자 이름 (선택)을 입력받을 수 있다.
  - [x] 카드 소유자 이름 영어만 입력할 수 있다.
- [x] 보안 코드(CVC/CVV)를 입력받을 수 있다.
- [x] 카드 비밀번호를 입력받을 수 있다.
- [x] `다음`버튼을 눌러 카드를 추가할 수 있다.
- [x] 카드 이미지에 입력되는 값들이 업데이트된다.

## 컴포넌트 구현

### Input 컴포넌트

- [x] Input을 그려주고, 입력값의 상태를 변경한다.
  - [x] label title, input element를 인자로 받는다.
  - [x] 완성된 input Component를 반환한다.

### Card 컴포넌트

- [x] Card를 그려주고 Input 입력에 따라 카드의 각 부분을 출력해준다.
  - [x] 카드번호, 만료일, 카드 소유자 이름, 보안코드, 카드 비밀번호를 인자로 받는다.
  - [x] 완성된 Card Component를 반환한다.

### InputForm 컴포넌트

- [x] Input 컴포넌트들을 관리한다.
- [x] 카드 정보 입력 후 제출할 수 있다.