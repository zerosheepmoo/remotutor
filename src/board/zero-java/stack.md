# Stack

## 시작 전

- Adapter Pattern(어답터 패턴) 을 알자! [객체지향 패턴들](./oop-patterns)
- Java Lambda(자바 람다식)을 알자! [자바 람다식](http://tcpschool.com/java/java_lambda_concept)

## 스택이란?

- FILO (First In Last Out) 원리를 따라 삽입/수정되는 오브젝트의 모음집.

## 주 연산

- Push: element를 스택에 추가합니다.
- Pop: 최근에 추가되었던 element를 스택에서 제거하여 반환합니다.

## 더 많은 연산들

- `push()`
- `pop()`
- `top()`: 가장 최근의 element 반환 (without removing)
- `size()`: element의 갯수
- `isEmpty()`: 스택의 비어있는지 유무에 따른 `boolean` 값

### 예시

| 메소드 | 반환값 | 스택 |
|:---:|:---:|:---:|
| `push(1)` | - | (1) |
| `push(-1)` | - | (1, -1) |
| `size()` | `2` | (1, -1) |
| `isEmpty()` | `false` | (1, -1) |
| `pop()` | `-1` | (1) |
| `top()` | `1` | (1) |
| `pop()` | `1` | () |
| `pop()` | `null` | () |
| `isEmpty()` | `true` | () |

> 참고로 `push()`의 Big-O 는 `O(n)`이다. 다른 operation 들은 `O(1)`

## 인터페이스

```java
public interface Stack<E>{
    public int size();
    public boolean isEmpty();
    public void push(E e);
    public E top();
    public E pop();
}
```

## 어레이 기반 스택

`stack`을 implements 하는 `array`를 만들어보자.

### 조건
- data[0]: bottom
- data[sp-1]: top
- Dynamic array 여야한다.

### 로직 상세

```java
//sudoCode
class StaDynaArray implements Stack{
    int capacity, sp;
    E[] arr;
    //constructor
    public StaDynaArray(int capacity){};
    //method
    public void resize(int cap);
    //interface stack
    public void push(E e);
    public E pop();
    public E top();
    public int size();
    public boolean isEmpty();
}
```

## 리스트 기반 스택

- `push()`랑 `pop()` 모두  first element에서 일어난다면 Big-O는 `O(n)`이 된다.
- Circulary Double Linked List를 사용해서 예제를 만들어 보는 것을 추천!

### 로직 상세

- Adapter Pattern이 적용된 예시입니다.

```java

class staList<E> implements stack<E>{
    List<E> list;
    public staList(){
        list = new CDLL<E>();
    }
    public int size(){
        return list.size();
    }
    public boolean isEmpty(){
        return list.isEmpty();
    }
    public void push(E e){
        list.add(0, e);
    }
    public E top(){
        return list.get(0);
    }
    public E pop(){
        return list.remove(0);
    }
}

```

## 함수 호출과 스택

- Stack Frame(스택 프레임)이 스레드의 스택에 푸쉬된다.
- 스택 프레임은...
    - 실제 매개변수 (Actual Parameter)
    - 지역 변수 (Local Variables)
    - 일시적 변수 (Temporary Variables)
    - 주소 반환 (return address)

### 예시

- 코드

```java
public static String dblOutput(String str){
    String substr = null;
    if(str.length() ==0){
        return str;
    }
    else{
        substr = str.substring(1);
        return dblOutput(substr) + str.charAt(0) + str.charAt(0);
    }
}
public static void main(String[] args){
    String s = dblOutput("He");
    System.out.println("output: " + s);
}
```

- 해당 스택 프레임(위가 가장 나중에 added)

| 파라미터 | 지역변수 | 일시적 변수 | `return address` |
|:---:|:---:|:---:|:---:|
| `str: ""` | `substr: "null"` | - | O |
| `str: "e"` | `substr: ""` | ` dblOutput("") + "e" + "e"` | O |
| `str: "He"` | `substr: "e"` | `dblOutput("e") + "H" +  "H"` | O |
| `args={}` | `s=null` | `"output: " + s` | O |

## 재귀함수 없이 만들기

- Recursion(재귀함수) 없이 `stack`으로 위의 과정을 만들 수 있다!
```java
// 여기는 함수 안
// 지역변수로 stack type을 갖고있는다.
// for 문으로 str.charAt(i)를 stack에 두번씩 str.length()만큼 반복하여 넣어준다.
// while 문으로 stack이 Empty 될 때까지 pop()해준 것을 새 String 변수에 Concat 해준다.
// 그변수를 리턴한다.
```

## 피보나치 수열을 스택으로 구현해보기

::: warning 중요
시험이 있다면 나오기 좋은 부분입니다.
이런 부분은 private repository 에서 다룹니다.
:::

## 괄호 짝맞추기

::: warning 중요
시험이 있다면 나오기 좋은 부분입니다.
이런 부분은 private repository 에서 다룹니다.
:::

<Disqus />