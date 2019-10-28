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
    - `size--`
- Enqueue
    - `(f + size) % N` (끝 인덱스 다음)에 element 추가
    - `size++`

> Big-O 는 모든 연산 다 `O(1)`이다.

## 리스트 기반 큐

### singly linked list
- `enqueue`, `dequeue`는 `O(1)`이다.
- `capacity` 제한이 없다.

### 구현 (enqueue, dequeue)
```java
/*
    Node<Element>(e:Element, next: Node<Element>);
*/
public void enqueue(Element e) {
    head.next = new Node<Element>(e, null);
    head = head.next;
    size++;
}
public Element dequeue() {
    if(isEmpty()){
        return null;
    }
    Element ret = first();
    tail = tail.next;
    tail.e = null; //detach from e to make it deallocated
    size‐‐;
    return ret;
}
public Element first() {
    if(isEmpty()){
        return null;
    }
    return tail.next.e;
}
/*...*/
```

## 요세퍼스 문제(조세푸스 문제)

- [Josephus Problem](https://en.wikipedia.org/wiki/Josephus_problem)
- 큐로 구현해보자

### 로직

- `k` 번 만큼 `dequeue`한 element를 `enqueue`한다.
- 위 시행이 끝나면 `dequeue`한다.
- 새로운 큐에서 반복

### 구현

::: warning 중요
시험이 있다면 나오기 좋은 부분입니다.
이런 부분은 private repository 에서 다룹니다.
:::

## 더블 엔디드 큐 (Double-Ended Queue)

- 양방향으로 삽입, 제거가 가능하게 끔 한 큐다.

### 연산들

- `first()`, `last()`
- `addFirst()`, `addLast()`
- `removeFirst()`, `removeLast()`
- `size()`, `isEmpty()`

### 인터페이스

```java
public interface DEque<E>
{
    public int size();
    public boolean isEmpty();
    public E first();
    public E last();
    public void addFirst(E e);
    public void addLast(E e);
    public E removeFirst();
    public E removeLast();
}
```

### 구현 (어레이 기반 deque)

```java
int index(int i){
    return (i + N) % N;
}
int lastIndex(){
    index(f + size - 1);
}
/* 이후 각 index에 맞춰서 메소드 만들면된다. */
// ex Element last(){ return isEmpty? null: data[lastIndex()];}
```

