# Markdown basic

> recommand to google this :D

## Header

by using `#`

- code

```markdown
# h1
## h2(여기까지 사이드바에 표시된다.)
<!-- 여기부턴 사이드바에 표시안됨 -->
### h3
#### h4
##### h5
###### h6
```

## highlight

```markdown
*italic* 또는 _italic_
**bold** 또는 __bold__
~~canceled~~
```

### result

*italic*
**bold**
~~canceled~~

## list

```markdown
- ordered list
1. unordered list
1. haha
```

### result

1. First
    - i
    - ii
2. Second
    - iii
    - iv
3. Third
    - v

## hyperLink

```markdown
[URL name](url)
```

### result

[return to the top](./)

## code highlight

### inline code

```markdown
by using `back tick`
```

### code block

```markdown
backtick three times (locate top and bottom of the code)
you can choose the programming lanugauge by writing it right after to the backticks of the top
```

> java, python, markdown, javascript, typescript is available

### result

- `inline code`

- Here is java's code block.
```java
int i = 0;
```

## citation

```markdown
> by using right angle bracket
```

### result

> yeahy!
>> you can use nested citations by using RAB several times.

## table

- left align: `---`
- Right align: `---:`
- Center align: `:---:`

```markdown
| feature1 | feature2 | feature3 |
|---|:---:|---:|
| value1 | value2 | value3 |
```

### result

| feature1 | feature2 | feature3 |
|---|:---:|---:|
| value1 | value2 | value3 |

## horizontal line

```markdown
---
```

### result

---

## disqus component (replying)

```markdown
<Disqus />
```

---
::: warning disqus it may contain errors
if you discovered then let the administrator know
:::

<Disqus/>