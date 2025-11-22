function CheckRadio({
  id, // id는 접근성을 위해 필수 권장
  type = "checkbox",
  label,
  isChecked = false,
  isDisabled = false,
  onChange,
  className = "",
  ...rest // 1. 나머지 Props 받기 (확장성)
}) {
  // 2. 제어/비제어 컴포넌트 로직 단순화
  const isControlled = typeof onChange === "function";

  // 3. 동적 속성 할당
  const inputProps = {
    id,
    type,
    disabled: isDisabled,
    className,
    onChange,
    // 조건에 따라 key를 다르게 설정 (computed property name)
    [isControlled ? "checked" : "defaultChecked"]: isChecked,
    ...rest // aria-label, required 등 다른 속성도 자동 전달
  };

  return (
    <>
      <input {...inputProps} />
      {/* 4. Label 로직 단순화 */}
      {label && (
        <label htmlFor={id}>
          {typeof label === "object" ? label.labelText : label}
        </label>
      )}
    </>
  );
}

export default CheckRadio;