---
type: projects
depth: 2
title: 카카오모빌리티 디벨로퍼스
description: 카카오모빌리티 디벨로퍼스
order: 4
---

# 카카오모빌리티 디벨로퍼스

## 프로젝트 개요
카카오모빌리티에서 제공하는 제품 및 기술에 대한 내용을 담은 페이지

## 프로젝트 정보
- [카카오모빌리티디벨로퍼스](https://developers.kakaomobility.com/)

## 기술 스택
- UI: html, scss
- FRONT: Nuxt2, Vuepress

## 특이 사항
- 동일한 도메인에 git 2개를 연결 (Front Nuxt2 깃 + 문서 Vuepress 깃)
- 사이트 하나의 메뉴 탭에 두 가지 git이 함께 서빙되는 형태

## 주요 구현 기능
- 구글 `reCAPTCHA` 적용
  - 제휴 제안 시 무분별한 서버 요청을 제한하기 위해 구글에서 제공하는 `reCAPTCHA` 기능을 적용하였다.
- `SHA-256`를 활용한 개인정보 암호화
  - 고객사에서 제공하는 키를 환경변수에 저장하고, 해당 키를 이용하여 개인정보를 암호화 처리하였다.
- youtube embed 구현
  - youtube 에서 제공하는 api 를 활용해 embed 플레이어 구현 및 상세 페이지 적용하였다.
- vuepress 내 문서 작업용 컴포넌트 제작
  - built in component 외에도 TW(Technical Writer)가 쉽게 사용할 수 있도록 컴포넌트를 제작하고 가이드문서를 개발서버에서 제공할 수 있도록 하였다.
  - TW가 개발이나 GUI 에 익숙하지 않기때문에, 문서영역 배포를 위한 소스트리 사용법을 가이드로 제공하였다.


## 문제 및 해결
- **리소스 관리 문제**
  - <Badge type="danger" text="문제" vertical="middle" />: 프론트 작업 영역이 2개로 나뉘어 있어 각기 개발을 진행하였고, 서로의 개발 진행사항을 잘 파악하지 못한 문제가 발생하였다.
  - <Badge type="tip" text="고려" vertical="middle" />: 추후 개발 진행 상황을 주도적으로 확인하였고, 리소스가 모자란 부분에서 지원 수행하여 일정 이슈 없이 개발 진행되도록 하였다.
- **프레임워크에 대한 고민**
  - <Badge type="danger" text="문제" vertical="middle" />: 처음 문서 영역은 이전 프로젝트에서 진행한 바가 있었던 `hugo`를 고려하였으나, `hugo`프레임워크에 대해 알지 못하는 부분이 많았으며 러닝커브가 크다는 문제 발생하였다.
  - <Badge type="tip" text="해결" vertical="middle" />: 협업자의 노력으로 고객사에 제안하여 `nuxt`와 호환성도 좋으며 `vue`를 기반으로 한 `vupress`를 최종적으로 사용하게 되었다.
  - <Badge type="info" text="개선" vertical="middle" />: 프레임워크를 변경한다는 것은 리스크가 있을 수도 있는 선택이었으나, 결과적으로는 개발 측면이나 유지보수 측면에서도 좋은 선택이었다. 면밀히 검토하여 적절한 선택을 하고, 해당 선택을 고객사에 제안할 수 있어야 한다.

## 성과
- 부족한 리소스 상황에 대해 빠른 개발 처리 및 협업자 지원을 통해 일정 관리에 기여
- `reCAPTCHA`, `Vuepress`, `개인정보 암호화 처리` 등 새로운 기술 및 적용에 대한 적절한 구현과 문서 정리 및 공유