# 마크다운 작성법

> [링크](https://heropy.blog/2017/09/30/markdown/)를 참조하면 더 많은 내용을 알 수 있다.
> 사실 그냥 구글링해서 마크다운 문법을 보는 것이 가장 바람직하다.

## 헤더

`#`으로 표현한다.

- 예시코드

```markdown
# 헤더1
## 헤더2(여기까지 사이드바에 표시된다.)
<!-- 여기부턴 사이드바에 표시안됨 -->
### 헤더3
#### 헤더4
##### 헤더5
###### 헤더6
```

## 강조

```markdown
*이텔릭* 또는 _이텔릭_
**두껍게** 또는 __두껍게__
~~취소선~~
```

### 반영결과

*이텔릭*
**두껍게**
~~취소선~~

## 목록

```markdown
- 순서필요없는 목록
1. 순서필요한 목록
1. 이렇게하면 자동으로...
```

### 반영결과

1. 첫번째
    - i
    - ii
2. 두번째
    - iii
    - iv
3. 세번째
    - v

## 링크

```markdown
[링크제목](url)
```

### 반영결과

[처음으로](./)

## 코드 강조

### 인라인 코드

```markdown
`한번만 백틱`으로 가능
```

### 코드 블록

```markdown
총 세번의 백틱을 위아래로
자기가 만들고자 하는 코드 블럭의 타입(언어)를 위쪽의 백틱들 다음에다가 지정 가능.
```

> java, python, markdown, javascript, typescript 등이 가능하다.

### 반영결과

- `한 번만 강조`하면 이렇게 된다. 아래는 java의 코드블럭.

```java
int i = 0;
```

## 인용

```markdown
> 꺽쇄를 쓰면 된다.
```

### 반영결과

> 인용을 했다!
>> 꺽쇄 여러번에 중첩인용문!

## 테이블

- 좌측정렬: `---`
- 우측정렬: `---:`
- 가운데정렬: `:---:`

```markdown
| 분류1 | 분류2 | 분류3 |
|---|:---:|---:|
| 값1 | 값2 | 값3 |
<!-- |좌측정렬|가운데정렬|우측정렬| -->
```

### 반영결과

| 분류1 | 분류2 | 분류3 |
|---|:---:|---:|
| 값1 | 값2 | 값3 |

## 수평선

```markdown
---
```

### 반영결과

---

## 특정페이지에 덧글 컴포넌트추가

```markdown
<Disqus />
```

---
::: warning disqus 오류 있을지 모르니 조심하세요.
- 버그를 발견했다면 연락주세요
:::

<Disqus/>