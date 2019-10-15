# Basic -1-

## Java Data Type

### 기본형 (primitive type)

| Type | declaration | value example | bit |
|:---:|:---:|:---:|:---:|
| Boolean | `boolean` | `true`, `false` |  |
| Integer | `byte` | `12` | 8-bit |
| Integer | `short` | `24` | 16-bit |
| Integer | `int` | `257` | 32-bit |
| Integer | `long` | `890L` | 64-bit |
| Floating-point number | `float` | `3.141592F` | 32-bit |
| Floating-point number | `double` | `4.533e21` | 64-bit |

### 자료형 (reference type)

- Class type
- Array type
- Interface type
- Enum type

## 오브젝트와 클래스

### 오브젝트
- 클래스의 인스턴스

### 클래스
- 오브젝트의 한 종류
- Fields 와 methods로 구성

### 코드

```java
public class Person {
    // fields
    private String name;
    // constructor
    public Person(){
        this.name = "Unknown";
    }
    public Person(String name){
        this.name = name;
    }
    // method
    public String getName(){
        return this.name;
    }
    public void sayHi(){
        System.out.println("Hi!");
    }
}
```

## 오브젝트 생성

### reference variable

- 클래스 인스턴스의 **위치정보(주소)**를 갖고 있습니다.

### Dot operator

- 클래스의 인스턴스 ( = 오브젝트) 의 멤버들에게 접근하기 위해 사용합니다.

### method signature

```java
// method
public void setMapReference(int xCoordinate, int yCoordinate)
{
//method code
}

// method signature
setMapReference(int, int)
```
### 예제

```java
// p는 reference variable
Person p = new Person("jack");

//dot operator
String name = p.getName();
```


## Java Virtual Machine (JVM)

- java application을 class loader로 로딩한 뒤 java api 와 같이 실행함.
- java 가 어떤 OS를 쓰느냐에 상관없이 코드를 사용 가능하게 해줌.
- garbage collector 로 메모리 관리를 해줌.
- stacks-base

### 순서

1. JVM이 프로그램 메모리 할당
1. 컴파일러가 자바 소스코드(`.java`)를 자바 바이트코드(`.class`)로 바꾼다.
1. class loader로 class 파일들을 JVM에 로딩한다.
1. execution engine이 해석
1. runtime data areas 에 배치 후 수행

### Runtime Data Area

- Multi-thread
    - thread
        - pc
        - native method stack
        - jvm stack
- Heap
- method area
    - runtime constant pool

#### PC register

- 스레드가 어떤 명령을 실행할까?
- operand from stack 을 저장하는 공간

#### Native method stack

- 자바 외 언어로 작성된 코드를 위한 메모리 영역 (e.g. c / c++)

#### Stack Area

- local variable
- paramter
- return value
- temporary variable

#### Heap Area

- 객체 저장
- `new` 연산자로 invoke

> Garbage Collection이 일어납니다!

2. Permanent generation
2. Eden
2. Survivor
2. Old

#### Method Area

- 바이트 코드
- 필드 정보
- 클래스 정보
- 타입 정보

> 얘도 arbage Collection이 일어납니다!