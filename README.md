# LoL Info App

## 📃 프로젝트 소개
LoL Info App은 리그 오브 레전드(LoL)의 간단한 정보들을 확인할 수 있는 **Next.js** 기반 웹 애플리케이션입니다.  
**Riot Games API**를 활용해 매주 업데이트되는 챔피언 로테이션 목록을 조회할 수 있으며, **PC와 모바일** 환경에 최적화된 디자인을 제공하고 있습니다.

## 📅 개발 기간
2025. 03. 10 ~ 2025. 03. 17 (총 8일)

## 📑 페이지 구성
1. **메인 화면**  
   앱의 첫 화면으로, 사용자가 빠르게 정보를 확인할 수 있습니다.
   <img width="1414" alt="스크린샷 2025-03-19 오후 12 52 17" src="https://github.com/user-attachments/assets/cc702e02-32c0-4f05-b97b-6abfc17276c0" />

3. **챔피언 전체 목록 페이지**  
   모든 챔피언의 정보를 한눈에 볼 수 있는 페이지입니다.
   <img width="1399" alt="스크린샷 2025-03-19 오후 12 53 31" src="https://github.com/user-attachments/assets/af280842-1fb6-4e4c-802d-236a903c4ef1" />

5. **챔피언 로테이션 목록 페이지**  
   주간 챔피언 로테이션 목록을 확인할 수 있습니다.
   <img width="1401" alt="스크린샷 2025-03-19 오후 12 54 37" src="https://github.com/user-attachments/assets/286ca687-ce79-4fbd-8cd2-a93145ae131f" />

7. **챔피언 상세 페이지**  
   각 챔피언의 상세 정보와 스탯을 확인할 수 있는 페이지입니다.
   <img width="1400" alt="스크린샷 2025-03-19 오후 12 55 18" src="https://github.com/user-attachments/assets/9807b5e1-1a8b-4e49-baf8-940e09cde7dc" />

9. **아이템 목록 페이지**  
   게임 내 아이템 목록을 조회할 수 있는 페이지입니다.
      <img width="1400" alt="스크린샷 2025-03-19 오후 12 54 06" src="https://github.com/user-attachments/assets/f399f105-9cae-4303-adbb-496fe1ca09cc" />

## ⚙ 프로젝트 기능
<img src="https://img.shields.io/badge/Next.js-black?style=for-the-badge&logo=Next.js&logoColor=white">
<img src="https://img.shields.io/badge/RiotGames-red?style=for-the-badge&logo=Riot Games&logoColor=red">
<img src="https://img.shields.io/badge/tailwindcss-green?style=for-the-badge&logo=tailwindcss&logoColor=green">
<img src="https://img.shields.io/badge/FetchAPI-blue?style=for-the-badge&logo=Fetch API&logoColor=blue">

## 렌더링 기법
- **SSG**: 아이템 목록 페이지
- **ISR**: 챔피언 목록 페이지
- **CSR**: 무료 챔피언 로테이션 페이지
- **SSR**: 챔피언 상세 페이지

## 🚀 프로젝트 회고
### [트러블 슈팅] 배포 후 에러 발생?!
배포 시 환경 변수 설정을 잘못하여 발생한 에러를 수정하는 과정이 있었습니다. `.env` 파일을 정확하게 작성하고, 배포 환경에 맞는 설정을 해주는 것이 얼마나 중요한지 다시 한 번 느꼈습니다.

## 📁 프로젝트 구조

📦 
nextjs-riot-app ├── .github ├── public └── src ├── app │ ├── api/rotation │ ├── pages │ │ └── [id] │ ├── items │ ├── rotation │ ├── error.tsx │ ├── globals.css │ ├── layout.tsx │ ├── loading.tsx │ ├── error.tsx │ └── page.tsx ├── components │ │ ├── champion-card.tsx │ ├── champion-list.tsx │ │ └── item-card.tsx │ └── layouts │ └── header ├── config ├── constants ├── api │ └── utils └── types

