package lec7;

import java.util.function.Function;

import hw214_4.Stack;
import hw214_4.StackByArray;

public class Main {
	public static int fibo(int n) { // fibonacci number
		if (n <= 1)
			return n;
		else {
			return fibo(n - 1) + fibo(n - 2);
		}
	}

	static class FiboFrame {
		// 제가 몇 몇개 아무래도 착각을 한 거 같더군요 죄송해요ㅠㅠ 이대로 보시면 이해가 되실거같아요!
		public int n;
		public Function<Integer, Function<Integer, Integer>> f0;
		public Function<Integer, Integer> f1;
		public Function a;
		public Integer f2;// 위 둘은 지금보면 function 타입 프로퍼티로 선언 되어있어요. 이 경우 FF.f1 이러면 접근 가능하겠죠?
		// java api를 뒤져보면 Function<T, R> 이 T가 input type, R이 result type으로 받게 되어있습니다.

		public FiboFrame(int n) {
			this.n = n; // 위에 있는 n임을 쉽게 확인할 수 있습니다.
			f0 = a -> b -> a + b; // same to a -> (b -> a + b)
			f2 = n <= 1 ? n : null; // n이 1보다 작거나 같으면 n이 들어가고 아니면 null이 부여됩니다.
			// Integer로 선언한 이유는 int는 null부여를 못하니까
		}

		public void apply(int n) {
			if (f1 == null) // f1이 null일 경우
				f1 = f0.apply(n); // f1은 f0.apply(n)을 받겠죠? apply는 함수타입의 내장 메소드로
			// 아까 살펴보았던 R apply (T t) 입니다. function argument로 n을 주고 결과로 받은 것을 주는 거죠.
			// 이제 argument 부분이 f0에서 Integer 였고, 결과부분이 Function<Integer, Integer>니까
			// f1의 형식이랑 딱 맞죠?
			// 아까 그 자리가 그 자리라고 얘기할려고 했던 게 이부분이 였습니다.
			else if (f2 == null)
				f2 = f1.apply(n);
			// f1에 apply를 하게 되면 당연히 R로 Integer가 나오게 되니, f2의 타입이랑 같죠?
			else
				throw new IllegalStateException("already took 2 params");
			// 둘 다 null이 아닐경우에는 이미 2개의 파라미터를 다받았음을 이야기합니다.
		}
	}

	public static int fiboIter(int n) {
		Stack<FiboFrame> stack = new StackByArray<FiboFrame>(); // stack array 생성 후
		stack.push(new FiboFrame(n)); // 스택에는 FiboFrame에 n만큼 넣게 됩니다. 3을 넣었다고 가정해요.
		while (true) {// 그럼 이제 이터레이터 끝날 때까지 돌겠죠?
			FiboFrame frame = stack.top(); 
			// 1번째) 우선 FF(3)이 들어간 상태니까 f0에는 람다식이, f2는 null로 초기화되어요.
			// 2번째) 지금 top에 FF(2)가 들어간 상태입니다. f0에는 람다식이 f2는 null로 초기화 되겠죠?
			// 3번째) 지금 top에 FF(1)이 들어간 상태입니다. f0에는 람다식이 f2는 1이 되겠죠?
			// 4번째) 지금 top에 FF(2)가 있습니다. f1은 방금 때문에 값이 들어있게 됩니다. f2는 아직 null이네요.
			// 5번째) 지금 top에 FF(0)가 있습니다. f0에는 람다식이 f2는 1이 되겠죠?
			// 6번째) 지금 top에 FF(2)가 있습니다. f0에는 람다식 f1에는 b->1+b, f2에는 2가 들어있군요.
			// 7번째) 지금 top에 FF(3)가 있습니다. f0에는 람다식, f1에는 b->1+b, f2에는 null이 들어있군요.
			// 8번째) 지금 top에 FF(1)이 있습니다. f0에는 람다식, f2는 1이 되겠죠?
			// 9번째) 지금 top에 FF(3)이 있습니다. f0에는 람다식, f1에는 b->1+b, f2는 2이군요. 
			if (frame.f2 != null) { 
				// 1번째) f2는 null이죠? else if로 갑니다.
				// 2번째) f2는 null이죠? else if로 갑니다.
				// 3번째) f2는 1이죠? 안에 것을 실행해봅시다.
				// 4번째) f2는 null이죠? else if로 갑니다.
				// 5번째) f2는 1이죠? 안에 것을 실행해봅시다.
				// 6번째) f2는 1이죠? 안에 것을 실행해봅시다.
				// 7번째) f2는 null이죠? else if로 갑니다.
				// 8번째) f2는 1이죠? 안에 것을 실행해봅시다.
				// 9번째) f2는 2이죠? 안에 것을 실행해봅시다.
				int fib = stack.pop().f2; 
				// 3번째) stack.pop().f2는 1입니다. (n==1에 해당하는 f2값)
				// 5번째) stack.pop().f2는 0입니다. (n==0에 해당하는 f2값)
				// 6번째) stack.pop().f2는 1입니다.
				// 8번째) stack.pop().f2는 1입니다. (n==1에 해당하는 f2값)
				// 9번째) stack.pop().f2는 2입니다.
				if (stack.isEmpty()) 
					// 3번째) 스택이 안비었습니다.
					// 5번째) 스택이 안비었습니다.
					// 6번째) 스택이 안비었습니다.
					// 8번째) 스택이 안비었습니다.
					// 9번째) 스택이 비었습니다! 이제 2을 반환할 일만 남았군요!
					return fib;// 2을 뱉습니다. 맞는지 확인해볼 까요? 0, 1, 1, 2...정확합니다!
				else // update the caller
					stack.top().apply(fib); 
				// 3번째 ) caller를 업데이트합니다. 즉 stack.top()인 FiboFrame(2)에게 apply(1)을 해주는 것입니다.
				// f1이 null이었으니까 f1에 f0.apply(1)을 해주죠? 그럼 f1(b -> 1 + b)이 존재하게됩니다. 끝났으니 위로
				// 5번째 ) FiboFrame(2)에게 apply(1)을 해줍니다. f1값이 있고 f2값이 없으니까 0 -> 1 + 0을 해주어
				// f2에 1을 넣어주게됩니다. 끝났으니 위로
				// 6번째 ) FiboFrame(3)에게 apply(1)를 해줍니다. 3은 f1, f2 둘다 null이니까 f1먼저 적용합니다.
				// f1 은 b -> 1 + b가 되겠군요. 끝났으니 위로.
				// 8번째 ) FiboFrame(3)에게 apply(1)을 해줍시다. 3의 f1은 b -> 1 + b이고 f2는 null입니다.
				// f2 는 1 -> 1 + 1 해서 2가 되겠군요. f2에 2가 들어갑니다. 끝났으니 위로
			} else if (frame.f1 == null)
				// 1번째) f1이 null이죠? 그럼 이제 stack에 새로운 FiboFrame(3 - 1)을 넣습니다. 끝났으니 다시 위로
				// 2번째) f1이 null이죠? 그럼 이제 stack에 새로운 FiboFrame(2 - 1)을 넣습니다. 끝났으니 다시 위로
				// 4번째) f1이 b -> 1 + b 였죠? 다음 else if로 갑니다.
				// 7번째) f1이 b -> 1 + b 였죠? 다음 else if로 갑니다.
				stack.push(new FiboFrame(frame.n - 1)); // ~ fibo(n‐1)
			else if (frame.f2 == null)
				// 4번째) f2는 null이죠? fibo(2-2)를 스택에 쌓습니다.
				// 7번째) f2는 null이죠? fibo(3-2)을 스택에 쌓습니다.
				stack.push(new FiboFrame(frame.n - 2)); // ~ fibo(n‐2)
		}
	}

	public static void main(String[] args) {
		// TODO Auto-generated method
		//main 에서 테스트 해보고 싶으시면 하세요!

	}

}
