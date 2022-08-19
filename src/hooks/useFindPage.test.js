import useFindPage from "./useFindPage";
import mockDataTips from "../../public/mockData/tips.json";
import { renderHook } from "@testing-library/react-hooks";

test("useFindPage custom hook works", () => {
  const { result } = renderHook(() => useFindPage(mockDataTips, "Food"));

  expect(result.current).toBe(mockDataTips[2]);
});
