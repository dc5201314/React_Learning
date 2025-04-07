/*
 * @Author: dc 1090504489@qq.com
 * @Date: 2025-03-19 13:39:21
 * @LastEditors: dc 1090504489@qq.com
 * @LastEditTime: 2025-03-19 13:39:45
 * @FilePath: \06-react-fetch\src\store\counterStore.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { create } from "zustand";
const useCounterStore = create((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
}));
export default useCounterStore;
