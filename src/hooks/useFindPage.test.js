import useFindPage from "./useFindPage";
import mockDataTips from "../../public/mockData/tips.json";
import { renderHook } from "@testing-library/react-hooks";

test("useFindPage custom hook works", () => {
  const tips = mockDataTips;

  const { result } = renderHook(() => useFindPage(tips, "Food"));

  expect(result.current).toBe(tips[2]);
});
