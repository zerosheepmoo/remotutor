# Queue

## 시작 전

## 큐란?

- FIFO(First In First Out) 의 원칙에 따라 삽입 / 제거되는 오브젝트의 모음집

## 주 연산

- enqueue: element를 큐에 추가합니다.
- dequeue: 가장 오래 전에 추가했던 element를 제거합니다.

## 더 많은 연산들

- `enqueue(e)`
- `dequeue()`
- `first()`: 큐의 첫번째 element를 반환 (제거 없이)
- `size()`: element의 갯수
- `isEmpty()`: 비어있는 지에 따른 `boolean` 값

### 예시

| 메소드 | 반환값 | 큐 |
|:---:|:---:|:---:|
| `enqueue(1)` | - | (1) |
| `enqueue(-1)` | - | (1, -1) |
| `size()` | `2` | (1, -1) |
| `isEmpty()` | `false` | (1, -1) |
| `dequeue()` | `1` | (-1) |
| `first()` | `-1` | (-1) |
| `dequeue()` | `-1` | () |
| `dequeue()` | `null` | () |
| `isEmpty()` | `true` | () |

## 인터페이스

```java
public interface Queue<E> {
    int size();
    boolean isEmpty();
    void enqueue(E e);
    E dequeue();
    E first();
}
```

## 어레이 기반 큐 (1)

- enqueue가 `O(1)`, dequeue가 `O(n)`
- 어레이 끝 부분이 존재하면 그곳에 enqueue (size < `data.length`)
- dequeue를 하면 index 0부터 빠진 뒤 왼쪽으로 한 칸씩 움직임.

## 어레이 기반 큐 (2)

- enqueue와 dequeue가 `O(1)`
- enqueue는 **(1)**의 방식과 동일하나, dequeue는 첫번째 element가 들어있는 index `f`를 `+1`씩 더한다.
- 점점 enqueue랑 dequeue를 할 수록 `f`가 어레이 마지막 index로 다가가게 된다. ( 쓸 수 있는 `data`가 점점 작아짐)

## 어레이 기반 큐 (3)
- circularly로 만드는 것 _(가장 일반적)_
- `f`는 **(2)**의 방법처럼 증가하지만 사용할 수 있는 어레이의 공간은 줄어들지 않음. ( 쓸 수 있는 `data`가 그대로)

### 구현

- Dequeue
    - 인덱스가 `f`인 element를 지움
    - `f = (f + 1) % N`
    - `size` 감소
- Add element to (f)