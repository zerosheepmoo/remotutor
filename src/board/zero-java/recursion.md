# Recursion

> 다음의 글을 읽어보면 좋습니다!

- [재귀적 정의](https://en.wikipedia.org/wiki/Recursive_definition)
- [문제 모음집](https://www.geeksforgeeks.org/recursion-practice-problems-solutions/)

## 재귀란?

- recursive(재귀)는 자신을 정의할 때 자기 자신을 참조하는 것을 말합니다.
- base case와 recursive case가 있습니다.

### 예시

- 팩토리얼
    - base case: n=0 -> 1
    - recursive case: n>=1 -> n * (n-1)!

- Binary Search (이진 검색)

- 그 외에도 루프로 구현한 것들을 recursive로 재구현 가능

## 재귀 알고리즘을 잘 구현하기 위해서는?

- 연습입니다. 최대한 많고 다양한 문제를 풀다보면 아이디어가 잘 떠오르게 됩니다.

## 재귀 알고리즘 분석

### Factorial

```java
public static int factorial(int n){
    if (n<0){
        return -1;
    }
    else if(n==0){
        return 1;
    }
    else{
        return n * fatorial(n-1);
    }
}
```

- `factorial(0)`의 경우 함수가 한 번만 `call`되며 `1`을 반환합니다.
- `factorial(1)`의 경우 함수가 두 번 `call`되며 `1`을 반환합니다.
- `factorial(n)`의 경우 함수가 `n+1`번 `call`되며 `(n)!`을 반환합니다.
- 따라서 Big-O 표기법에 따라 ( `O(n+1)` -> )`O(n)`의 시간복잡도를 가집니다.

### Binary Search

- 통상의 이진탐색 알고리즘으로 가정합니다.
- 한 번 `call`될 때 검색하고자하는 숫자의 후보들은, `call`전의 갯수가 `n`라고 가정 할 때, `n/2`만큼 줄어든다.
- `r`번 시행후에 `n/2^r`만큼의 후보가 남는다.
- `r`번 시행 후, 이진 탐색이 끝났을 때에는 `n/2^r < 1`을 만족하여야 한다. (그래야 후보가 하나로 좁혀지므로)
- 양변에 `log n`을 씌운다고 생각할 때, `r = |log n| + 1`을 만족한다 (|x|는 가우스 x)
- 따라서 Big-O 표기법에 따라 `O(log n)`의 시간복잡도를 가진다.

### File System

- `r`개의 파일들의 사용용량을 측정하는 알고리즘이 있다고 해보자.
- 파일은 텍스트 파일이거나 폴더 형태이다.
- 텍스트 파일일 경우에는 한 번만 파일용량을 측정한다.
- 폴더의 경우에는 하위 파일 및 폴더의 용량을 측정한다.
- `nesting level`이 0인 파일부터 점점 1, 2, 3... 이런 식으로 높아진다고 이야기하자.
- 그렇다면 파일 하나당 갖고 있는 하위 파일의 갯수를 `n-1`이라하면, 자기 자신까지 총 `n`번 용량을 측정하는 함수를 `call`하게 된다.
- 따라서 `O(n)`이다.

