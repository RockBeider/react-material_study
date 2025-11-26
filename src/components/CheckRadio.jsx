import { useId, memo, forwardRef } from "react";

/**
 * CheckRadio Component
 *
 * 체크박스(checkbox)와 라디오 버튼(radio)을 렌더링하는 재사용 가능한 컴포넌트입니다.
 * React.memo로 감싸져 있어 props가 변경되지 않으면 리렌더링되지 않습니다.
 *
 * @component
 * @example
 * // 기본 체크박스
 * <CheckRadio label="동의합니다" onChange={(e) => console.log(e.target.checked)} />
 *
 * // 라디오 버튼
 * <CheckRadio type="radio" name="group1" value="option1" label="옵션 1" />
 *
 * // children을 사용한 라벨
 * <CheckRadio><span>동의합니다</span></CheckRadio>
 *
 * @param {Object} props
 * @param {string} [props.id] - input 요소의 ID. 생략 시 useId로 자동 생성됩니다.
 * @param {"checkbox" | "radio"} [props.type="checkbox"] - input 타입 (기본값: "checkbox")
 * @param {string|boolean} [props.label] - 라벨 텍스트. boolean true일 경우 children이 렌더링됨.
 * @param {boolean} [props.isChecked] - 체크 여부 (제어 컴포넌트일 때 사용)
 * @param {boolean} [props.isDisabled=false] - 비활성화 여부
 * @param {function} [props.onChange] - 변경 이벤트 핸들러
 * @param {string} [props.className=""] - 추가 CSS 클래스
 * @param {React.ReactNode} [props.children] - 라벨 내용
 * @param {Object} [props.rest] - 기타 input 요소에 전달할 props (name, value, required 등)
 */
const CheckRadio = forwardRef(function CheckRadio(
  {
    id,
    type = "checkbox",
    label,
    isChecked,
    isDisabled = false,
    onChange,
    className = "",
    children,
    ...rest
  },
  ref
) {
  // ID가 없으면 자동 생성하여 접근성 보장
  const uniqueId = useId();
  const finalId = id || uniqueId;

  const isControlled = isChecked !== undefined;

  const inputProps = {
    id: finalId,
    type,
    disabled: isDisabled,
    className,
    onChange,
    // 제어/비제어 모드에 따라 checked 속성 결정
    ...(isControlled ? { checked: isChecked } : { defaultChecked: rest.defaultChecked }),
    ...rest,
  };

  // 라벨 내용 결정: children 우선, 그 다음 label prop (문자열인 경우)
  const labelContent = children || (typeof label === "string" && label !== "true" ? label : null);
  const hasLabel = !!labelContent;

  return (
    <>
      <input ref={ref} {...inputProps} />
      {hasLabel && (
        <label htmlFor={finalId}>
          {labelContent}
        </label>
      )}
    </>
  );
});

// 불필요한 리렌더링 방지를 위해 memo 사용
export default memo(CheckRadio);