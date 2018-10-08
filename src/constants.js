/* 
국문 관광정보 서비스 
https://www.data.go.kr/subMain.jsp#/L3B1YnIvcG90L215cC9Jcm9zTXlQYWdlL29wZW5EZXZEZXRhaWxQYWdlJEBeMDgyTTAwMDAxMzBeTTAwMDAxMzUkQF5wdWJsaWNEYXRhRGV0YWlsUGs9dWRkaTo2YjZiNjFlMi1jZjVkLTQ5N2YtOGZkMi1jMGI4NGVhOTU0YzJfMjAxMzAzMDQxMDA0JEBecHJjdXNlUmVxc3RTZXFObz00OTgwNDI4JEBecmVxc3RTdGVwQ29kZT1TVENEMDE=
*/

export const USER_SERVICE_KEY =
  'ovetGQy5H99noe%2FM12s%2B5x0G%2FTGDtLGE7p9I1NYNqVfD0XarCCwjYL07BNSA8v5HabqzK0LIO7lN7ASVP6Y%2BwA%3D%3D';

/*
ServiceKey    공공데이터포털에서 발급받은 인증키 
numOfRows    한 페이지 결과 수 
pageNo    현재 페이지 번호 
MobileOS    IOS (아이폰), AND (안드로이드), WIN (원도우폰),ETC 
MobileApp    서비스명=어플명 
arrange    (A=제목순, B=조회순, C=수정순, D=생성일순) 대표이미지가 반드시 있는 정렬 (O=제목순, P=조회순, Q=수정일순, R=생성일순) 
listYN    목록 구분(Y=목록, N=개수) 
areaCode    지역코드 
sigunguCode    시군구코드(areaCode 필수) 
eventStartDate    행사 시작일(형식:YYYYMMDD) 
eventEndDate    행사 종료일(형식:YYYYMMDD) 
*/


http://api.visitkorea.or.kr/openapi/service/rest/KorService/searchFestival?serviceKey=ovetGQy5H99noe%2FM12s%2B5x0G%2FTGDtLGE7p9I1NYNqVfD0XarCCwjYL07BNSA8v5HabqzK0LIO7lN7ASVP6Y%2BwA%3D%3D&MobileOS=ETC&MobileApp=AppTest&arrange=A&listYN=Y&eventStartDate=20180929&eventEndDate=20180930&_type=json
