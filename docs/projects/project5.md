---
type: projects
depth: 2
title: 카카오 karlo
description: 카카오 karlo 프로모션
order: 5
---

# 카카오 karlo 프로모션

## 프로젝트 개요
카카오브레인에서 개발한 텍스트 기반 이미지 생성 AI 모델인 칼로(karlo)를 이용하여 사용자 선택을 프롬프트로 넘겨 이미지를 생성하고, 이를 카카오톡 프로필 배경 이미지로 전환하도록 유도하는 프로모션 

## 프로젝트 정보
- [마음 배경 갤러리 프로모션](https://www.kakaocorp.com/page/detail/10457)

## 기술 스택
- UI: html, scss
- FRONT: Nuxt3, typescript

## 주요 구현 기능
- 프롬프트 전송을 통한 AI 생성 이미지 활용 (백엔드 서버 경유)
- `pinia` 사용을 통한 페이지별 상태값 유지 및 관리
  - 프롬프트에 페이지별 사용자 선택값을 넘겨줘야했기 때문에 `pinia`를 활용하여 상태관리 하였다.
- `middleware`를 통한 페이지 및 진입점 별 접속 차단
  - 단계별 페이지로 구성되어 있어 중간 단계 진입을 막아야 하는 요구가 있었으며, 내비게이션 가드 개발을 통해 접근 제한 처리하였다.
- 프로필 배경 설정 등 `앱스킴`을 활용한 사용자 환경 구성

## 문제 및 해결
- **proxy설정**
  - <Badge type="danger" text="문제" vertical="middle" />: 기존 nuxt2 에서는 axios 를 활용하여 proxy 설정 및 api 호출을 진행했으나, nuxt3 에서는 axios가 권장 방식이 아니었기 때문에 사용에 문제가 있었다.
  - <Badge type="tip" text="해결" vertical="middle" />: 개발환경에서는 dev proxy 를 사용하여 api 를 호출하는데 이슈가 없었으나, prod 환경에서는 이가 작동하지 않았고, 당시 nuxt3 에 대한 문서 및 커뮤니티가 부족하여 해결에 소요시간이 오래 걸렸다. 결과적으로는 `nitro routeRules` 설정을 이용하여 해결하였다.
- **multipart/form-data 전송 이슈**
  - <Badge type="danger" text="문제" vertical="middle" />: `routeRules` 설정으로 prod 환경에서도 모든 api 가 잘 작동했으나, `multipart/form-data`를 전송했을때 파일이 정상적으로 전송되지 않고 깨지는 이슈가 있었다.
  - <Badge type="tip" text="해결" vertical="middle" />: 특정 확장자에 대해 `multipart/form-data`를 지원하지 않는 `nitro`의 초기 이슈인 것으로 파악했으며, `base64`등의 인코딩 방식을 통해 이를 우회하여 데이터를 전송하고 디코딩하는 방식을 사용하였다.
- **다양한 cors 에러**
  - <Badge type="danger" text="문제" vertical="middle" />: 이미지를 다루는 프로모션인 만큼, 이미지를 인코딩/디코딩 하는 과정, 이미지를 내려받아 저장하는 과정에서 다양한 cors 에러가 발생했다.
  - <Badge type="tip" text="해결" vertical="middle" />: `proxy`, `routeRules`, 이미지 서버 호출 시 타임스탬프 활용 등 다양한 방법을 통해 cors 에러를 해결하였다. 

## 성과
- 팀 내 nuxt3를 도입한 첫 프로젝트로, 기존 axios 를 사용한 api 호출을 vue3 자체 함수로 지원하는 방법과, 다양한 method 의 api 통신을 수행하는 방법을 정리 및 공유
- typescript 활용을 통한 코드 체계화와 에러 방지
- 이미지 서버에서 url을 통해 단순 조회하는 것 외에 프론트에서 사내 이미지 서버 API 호출하는 형식을 검토
  - 프론트에서 백엔드 서버를 거쳐 이미지 서버에 업로드하는 불필요한 통신과 절차를 줄이고자 하는 시도였으나, 결과적으로는 보안 상의 문제로 적용하지 못했다.
  - 단순히 해왔던 방식 외에 성능이나 효율을 최적화 하려는 시도였다. 