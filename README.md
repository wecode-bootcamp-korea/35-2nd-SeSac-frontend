# 싱그러운 우리 (SeSAC)🌱

<img src="https://user-images.githubusercontent.com/104430030/184290180-66c96950-1e42-461e-b413-1c74f05ce4c4.jpeg" alt="teamS2" width="500px" />

## 개발 인원 및 기간

- 개발기간 : 2022/8/1 ~ 2022/8/12 (10일)
- 개발 인원 : FE 4명, BE 2명
  - Front-end : 김영수, 박성은, 손민지, 이금관
  - Back-end : 김동규, 박서윤

## 프로젝트 소개

식물 판매 및 식물 커뮤니티 사이트 [싱그러운 집](https://www.shouse.garden/main/main.html)을 모티브로 한 프로젝트 입니다.<br>
기존 싱그러운 집 사이트와 차별화 되는점은 e-커머셜 기능을 제외하고 **커뮤니티 기능에 중점**을 둔 것입니다.<br>
기존 사이트 '싱그러운 집'에서는 모티브만 가져왔을 뿐 개발은 초기 세팅부터 모두 직접 구현하였으며,<br>
이번 프로젝트는 다양한 라이브러리와 API를 최대한 활용하는 것을 목표로 진행하였습니다.

## 사용기술 스택

### Front-end<br>

![HTML Badge](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=HTML5&logoColor=white)&nbsp;
![CSS3 Badge](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=CSS3&logoColor=white)&nbsp;
![JavaScript Badge](https://img.shields.io/badge/Javascript-F7DF1E?style=for-the-badge&logo=Javascript&logoColor=white)&nbsp;
![React Badge](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white)&nbsp;
![StyledComponents Badge](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)

### Back-end<br>

<img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=Python&logoColor=white"/>&nbsp;
<img src="https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=Django&logoColor=white"/>&nbsp;
<img src="https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=MySQL&logoColor=white"/>&nbsp;
<img src="https://img.shields.io/badge/Amazon AWS-232F3E?style=for-the-badge&logo=AmazonAWS&logoColor=white">&nbsp;<img src="https://img.shields.io/badge/Amazon S3-569A31?style=for-the-badge&logo=AmazonS3&logoColor=white">

## 협업 툴

<img src="https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=Slack&logoColor=white"/>&nbsp;
<img src="https://img.shields.io/badge/Trello-0052CC?style=for-the-badge&logo=Trello&logoColor=white"/>&nbsp;
<img src="https://img.shields.io/badge/Notion-000000?style=for-the-badge&logo=Notion&logoColor=white"/>&nbsp;
<img src="https://img.shields.io/badge/Github-181717?style=for-the-badge&logo=Github&logoColor=white"/>&nbsp;

## 구현 목표

- 메인 페이지 (React-Slick 라이브러리를 이용한 이미지 슬라이더 구현)
- 소셜 로그인 (카카오 REST API)을 이용한 로그인 페이지
- 게시글목록 페이지
- 게시글목록 페이지 내 검색 및 필터링 기능
- 개별 게시글 상세 페이지
- 게시글 댓글, 대댓글 기능 생성, 수정 및 삭제 기능
- 글쓰기 페이지 (여러개의 사진을 Form Data를 이용하여 보내기)

## 시연영상

[🌱 싱그러운 우리, SeSac](http://www.youtube.com/watch?v=ayGvLwikPxk)

### 메인

: 사이트 메인 페이지

- React-Slick 라이브러리를 사용한 이미지 슬라이더 구현

![2022-08-12_10:36:13_video](https://user-images.githubusercontent.com/104430030/184285325-a0b7a399-1acd-4291-939e-822bf55ee7c2.GIF)

### 소셜로그인 및 로그아웃

- Kakao REST API를 이용한 소셜 로그인 기능 구현
- 로그인 및 로그아웃 기능 구현
  ![2022-08-12_10:36:13_video 2](https://user-images.githubusercontent.com/104430030/184285340-ee5e048f-7c4b-4b57-9593-2896b547785e.GIF)
  ![2022-08-12_10:36:13_video 10](https://user-images.githubusercontent.com/104430030/184287240-f172a994-ea8e-461b-9098-db83d5e843e5.GIF)

### 리스트 페이지

: 게시한 글의 목록 조회하고 검색할 수 있는 페이지

- 글의 제목, 카테고리, 해시태그 등의 정보를 이용한 검색 및 필터링 기능 구현
- KaKao Maps API를 이용한 지도 기능 구현
- 사용자 경험을 위한 페이지네이션 기능 구현
  ![2022-08-12_10:36:13_video 4](https://user-images.githubusercontent.com/104430030/184285717-1153760c-cf3e-4077-893f-bd4cbb9aa548.GIF)
  ![2022-08-12_10:36:13_video 5](https://user-images.githubusercontent.com/104430030/184285725-4c81c58e-d5db-4789-97e5-640f5a461dbc.GIF)

### 글쓰기 페이지

: 게시글 내용 작성 페이지

- Form Data를 활용한 게시글 작성 기능 구현
- Drop Zone 라이브러리를 이용해 drag n drop으로 사진 첨부 기능 구현
- S3를 이용한 이미지 파일 첨부 기능 구현
  ![2022-08-12_10:36:13_video 6](https://user-images.githubusercontent.com/104430030/184286796-d27b30a6-fa53-435b-adb5-8118400a72ef.GIF)
  ![2022-08-12_10:36:13_video 7](https://user-images.githubusercontent.com/104430030/184286846-0a524f00-b19d-41e9-949c-28c496a108b0.GIF)

### 게시글 상세 페이지

: 게시글 내용 상세(조회) 및 댓글 페이지

- KaKao Maps API를 이용한 지도 기능 구현
- 댓글 및 대댓글의 생성, 수정, 삭제 기능 구현
- 사용자 경험을 위한 댓글 페이지네이션 기능 구현
  ![2022-08-12_10:36:13_video 11](https://user-images.githubusercontent.com/104430030/184287166-e906db31-38ad-4c31-9977-bc0cfc8a0e98.GIF)
  ![2022-08-12_10:36:13_video 12](https://user-images.githubusercontent.com/104430030/184287193-25fc5f1c-1521-4736-aea3-ae1d14cb6e4c.GIF)
  ![2022-08-12_10:36:13_video 8](https://user-images.githubusercontent.com/104430030/184287120-328c6e8b-2a82-4413-a752-6daf8a689056.GIF)
  ![2022-08-12_10:36:13_video 9](https://user-images.githubusercontent.com/104430030/184287124-347473db-a34e-4cd6-af8a-72b9a3a44540.GIF)

### 로딩 페이지

- 사용자 경험을 위한 로딩 페이지 생성
  ![2022-08-12_10:36:13_video 3](https://user-images.githubusercontent.com/104430030/184287309-7bde2d4f-09df-40e8-a565-48bfdd751e55.GIF)

## 참고

- 이 프로젝트는 [싱그러운집](https://www.shouse.garden/main/main.html) 사이트를 참조하여 학습목적으로 만들었습니다.
- 실무수준의 프로젝트이지만 학습용으로 만들었기 때문에 이 코드를 활용하여 이득을 취하거나 무단 배포할 경우 법적으로 문제될 수 있습니다.
- 이 프로젝트에서 사용하고 있는 사진 대부분은 위코드에서 구매한 것이므로 해당 프로젝트 외부인이 사용할 수 없습니다.
