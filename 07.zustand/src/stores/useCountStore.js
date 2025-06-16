// create : store를 생성해주는 함수
import { create } from "zustand"

// create 함수 사용 시 -> () => ({}) 형태로 사용! 
const useCountStore = create((set) => ({  // set -> 매개 함수
    count:0,  // count 초기화 
    increase:() => set((state)=>({  // state -> 매개 변수
        count:state.count + 1,
    })),
    // number -> Count.jsx에서 대입되는 수
    // -> 대입된 수만큼 증가시키기
    increaseBy:(number) => set((state) => ({
        count:state.count + number,
    })),
    decrease:() => set((state) => ({  // 삼항연산자 사용!
        // 0보다 크면 1 감소, 0 이하면 그대로
        count:
        state.count>0 ? state.count-1 : state.count
    }))
    // 또는 아래와 같이 작성 가능하다!
    // decrease:()=>{
    //     let {count} = get();
    //     console.log(get());

    //     if(count > 0){
    //         set((state)=>({
    //             count:state.count-1,
    //         }))
    //     }
    // }
}));

export default useCountStore;
