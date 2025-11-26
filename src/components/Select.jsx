import { memo } from "react";

/**
 * Select Component
 *
 * React.memo로 감싸져 있어 props가 변경되지 않으면 리렌더링되지 않습니다.
 *
 * @param {Object} props
 * @param {string} [props.label] - 라벨 텍스트 (Optional)
 * @param {Array<{value: string, label: string}>} [props.options=[]] - 선택 옵션 배열
 * @param {string} [props.id] - select 요소의 id
 * @param {string} [props.name] - select 요소의 name
 */
function Select({ label, options = [], id, name, ...props }) {
    return (
        <div className="select-container">
            {label && <label htmlFor={id}>{label}</label>}
            <select id={id} name={name} {...props}>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default memo(Select);
