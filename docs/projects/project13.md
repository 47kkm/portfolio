---
type: projects
depth: 2
title: MOA
description: 매출·비용·예산을 한곳에 모아 보는 매장 관리 서비스
category: 개인 프로젝트
stack: [Java, Spring Boot, MySQL, Nuxt3]
period: 2026.10 ~ 진행 중
order: 13
---

# MOA (모아)

## 프로젝트 개요
매출과 비용, 예산 등 매장 운영 데이터를 한곳에 모아 현황을 파악하고 분석하는 매장 관리 서비스. 프론트엔드 경험을 바탕으로 요구사항 정의부터 백엔드 설계·구현, 검증까지 전 과정을 직접 진행하는 개인 프로젝트로, 현재 진행 중이다.

## 프로젝트 정보
- [MOA GitHub](https://github.com/47kkm/MOA)
- Phase 1 서비스 구현 (2026.10 ~ 11월 예정), 이후 Phase 2 AI 기능 탑재

## 기술 스택
- BACK: Java 17, Spring Boot 3, Spring Modulith, Spring Data JPA, MySQL 8
- FRONT: Nuxt3, TypeScript, Nuxt UI, ECharts
- TEST: JUnit 5, Testcontainers, Vitest

## 설계 방향
- DDD 기반 모듈러 모놀리스
  - 매장, 매출, 비용, 분류, 예산, 리포트를 도메인 모듈로 나누고 모듈마다 DB 스키마를 분리하였다.
  - 모듈 사이에는 FK나 JOIN 없이 공개 API와 도메인 이벤트로만 통신하며, `Spring Modulith` 테스트로 경계를 강제한다.
- TDD 중심의 개발 프로세스
  - 요구사항 정의 → 기획 → 기능별 PRD → 테스트 케이스 → 단위 테스트 → 구현 순서로, PRD 하나를 끝까지 마친 뒤 다음으로 넘어간다.
  - 기획서와 설계 문서는 AI 리뷰로 한 번 더 점검하고, 받은 피드백과 반영 여부를 기록으로 남긴다.
- AI 기능을 고려한 단계적 설계
  - Phase 1에서는 AI 기능 없이 결정적인 로직을 테스트로 고정하고, Phase 2에서 AI를 붙일 자리만 미리 확보한다.
  - 분류 체계를 tree 구조로 모델링하고, `LLMClient` 포트만 정의해 두며, 리포트를 집계 데이터와 서술로 나누어 설계하였다.

## 진행 현황
- <Badge type="tip" text="완료" vertical="middle" /> 브랜딩, 요구사항 정의서 (이벤트 스토밍, 유비쿼터스 언어 포함)
- <Badge type="tip" text="완료" vertical="middle" /> 기획서 7개 장 (매장 설정, 비용 분류, 매출, 비용, 예산 설정, 대시보드, 리포트)
- <Badge type="warning" text="진행 중" vertical="middle" /> 설계 문서 (공통 설계, store·category 모듈)
- <Badge type="info" text="예정" vertical="middle" /> 모듈별 구현 → 프론트엔드 대시보드 → 검증, 이후 Phase 2 AI 기능
