# PROJECT 3 Mintool 

## 데모영상
![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/ec16b739-662c-4c0e-bcf2-5794e33094d1/test.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221024%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221024T003004Z&X-Amz-Expires=86400&X-Amz-Signature=ee6a26c7fec4d30293713d968ab9b4994fc3600ff1dd88ffe179812cb7ea0c59&X-Amz-SignedHeaders=host&x-id=GetObject)
## 팀 구성 및 역할

### 팀원 구성

- Web - 1명
- Blockchain - 1명

## 프로젝트 목표

- **그림작가가 NFT/블록체인 기술에 대한 깊은 이해 없이, 쉽게 NFT생산/판매(컨트랙트 제작/민팅)이 가능한 플랫폼 웹사이트 제작**

## 프로젝트 기간

- 2022년 07월 04일 ~ 07월 29일
- 회의 - 오후 10시마다 회의 진행
  - 디스코드 이용

## 기술스택

### Blockchain

- **Languege** - Solidity
- **Core** - Klaytn
- **Tools** - Remix IDE

### Back-end

- **Languege** - TypeScript
- **Core** - Next.js 
- **DB** - MongoDB

### Front-end

- **Languege** - TypeScript
- **Core** - Next.js
- **Style** - mui

## 시나리오


### 지갑 로그인

KAIKASLOGIN 버튼으로 지갑 로그인


### 티켓구매

1. 지갑 로그인 이후, TICKET 탭 클릭
2. 패스권을 Klay로 구매  (테스트넷의 Klay 이용)
* 패스권의 nft# limit의 개수에 따라 한번에 만들 수 있는 nft의 개수가 정해짐

### NFT생성

1. CREATENFT 탭 클릭
2. 프로젝트 이름, 심볼 등의 NFT생성에 필요한 항목 작성
3. 만들고 싶은 이미지를 레이어화 하여(배경외의 이미지는 배경이 투명할 것) 준비
4. Layer0에 배경에 깔리는 그림을 파일선택 버튼을 눌러서 추가
5. 입력한 배경에 맞는 Attribute Name과 value값을 입력
6. 작업이 완료되면, LOCK버튼을 눌러 고정
7. 4~6의 진행과 같이 Layer1에 작업. 이미지는 레이어의 숫자가 낮을 수록 아래에 먼저 그려지는 이미지로 취급.
8. Layer가 부족할 경우 ADD TAB버튼을 눌러 Layer를 추가하여 동일한 방식으로 진행
9. total nft 개수가 맞도록 확인 후, CREATE CONTRACT버튼을 눌러 NFT 생성 완료 (정확히는 컨트랙트 생성 완료)

### 마이페이지

1. MYPAGE탭 클릭
2. 생성된 NFT 목록을 확인 가능. 확인후 원하는 NFT 클릭
3. 생성된 NFT의 모든 모습들을 확인 가능. 
4. 판매(Mint)하고 싶을 경우, MINT!버튼을 눌러 진행
5. 판매 시, BlockNum항목에 몇번째 블록부터 판매할지 결정 가능. 현재블록보다 낮을 경우 바로 판매 가능
6. MintPrice항목에 원하는 판매가격 입력. 모든 입력이 완료되면 SUBMIT버튼 클릭 후 판매 진행

### NFT판매 품목 확인 및 구매

1. MINT탭을 클릭
2. 판매되는 NFT가 있을 경우, 해당 페이지에 표시됨. 구매를 원할 경우 MINT버튼 클릭
3. 지갑에 전달된 트랜잭션을 진행하여 구매 완료
