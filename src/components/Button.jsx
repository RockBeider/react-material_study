import { memo } from "react";

/**
 * Button Component
 *
 * 기본 버튼 컴포넌트입니다.
 * React.memo로 감싸져 있어 props가 변경되지 않으면 리렌더링되지 않습니다.
 *
 * @component
 * @example
 * // 기본 사용
 * <Button onClick={handleClick} title="클릭하세요" />
 *
 * // Children 사용
 * <Button onClick={handleClick}>
 *   <span>아이콘</span> 저장
 * </Button>
 *
 * @param {Object} props
 * @param {string} [props.type="button"] - 버튼 타입 (button, submit, reset)
 * @param {string} [props.title] - 버튼 텍스트 (children이 없을 경우 사용됨)
 * @param {React.ReactNode} [props.children] - 버튼 내부 컨텐츠 (name보다 우선순위 높음)
 * @param {function} [props.onClick] - 클릭 이벤트 핸들러
 * @param {string} [props.className=""] - 추가 CSS 클래스
 * @param {Object} [props.rest] - 기타 button 요소에 전달할 props (disabled, aria-label 등)
 */
function Button({
  type = "button",
  title,
  children,
  onClick,
  className = "",
  ...rest
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`btn ${className}`.trim()}
      {...rest}
    >
      {children || title}
    </button>
  );
}

export default memo(Button);
