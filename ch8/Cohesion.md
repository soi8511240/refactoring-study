# 응집도 Cohesion

- 서로 밀접하게 연관 있는 속성(data)과 행동(method)이 함께 뭉쳐있는 정도

## Bad - high coupling, low cohesion 
Bad - 모듈내 응집도는 낮고 외부 모듈간의 결합도가 높음.

## Good - loose coupling, high cohesion
Good - 서로 밀접하게 연관 있는 속성(data)과 행동(method)이 함께 뭉쳐(모듈, 클래스, 함수)있는 정도
- 유지보수시 다른 클래스/모듈의 변화에 크게 영향을 받지않음.

### 모듈/클래스 하나당, 한가지의 책임(한가지의 도메인)을 가지도록하자.(data, method)
