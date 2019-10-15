# Stack

## Before you start

- Learn enum Type
- Learn Adapter Pattern [OOP Patterns](./oop-patterns)
- Learn Java Lambda

## What's Stack?

- A collection of Objects that are inserted or removed following FILO (First In Last Out) principle.

## Main Operation

- Push: add an element to stack
- Pop: remove the most recently added element from stack and return it.

## More Opeartions

- `push()`
- `pop()`
- `top()`: return the most recently added element from stack (without removing)
- `size()`: number of element
- `isEmpty()`: `true` when stack has no element.

### Operations Example

| Operation | return value | stack status |
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

> In addition, `push()`'s Big-O is `O(n)`. The other operations are `O(1)`

## Interface

```java
public interface Stack<E>{
    public int size();
    public boolean isEmpty();
    public void push(E e);
    public E top();
    public E pop();
}
```

## Array based stack

Let's create an `array` that implements `stack`.

### Conditions
- data[0]: bottom
- data[sp-1]: top
- Dynamic array 여야한다.

### Logic Details

```java
//sudo code
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

## List Based Stack

- Big-O of `push()` and `pop()` are `O(n)` if operation occurs at head. (e.g. Single Linked Array)
- Circulary Double Linked List를 사용해서 예제를 만들어 보는 것을 추천!

### Logic Details

- Adapter Pattern was implemented

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

## Function call & Stack

- Stack Frame is pushed on to the stack of the thread.
- Stack Frame may contain...
    - Actual Parameter
    - Local Variables
    - Temporary Variables
    - return address

### Example

- code

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

- corresponding stack frames(the latest added is the top)

| parameter | local variables | temporary variables | `return address` |
|:---:|:---:|:---:|:---:|
| `str: ""` | `substr: "null"` | - | O |
| `str: "e"` | `substr: ""` | ` dblOutput("") + "e" + "e"` | O |
| `str: "He"` | `substr: "e"` | `dblOutput("e") + "H" +  "H"` | O |
| `args={}` | `s=null` | `"output: " + s` | O |

## -Without Recursion

```java
// Here is inside of function
// has stack type as local varaible
// str.charAt(i) is added twice on to the stack `str.length()`times with `for` statement
// the return value of `pop()` should be concated with `res` and repeat through `while` statement when stack becomes empty
// return `res`
```

## Fibonacci Squence (stack)

::: warning 
it would be covered at private repository;
:::

## matching parantheses

::: warning 
it would be covered at private repository;
:::

<Disqus />