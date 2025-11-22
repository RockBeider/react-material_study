function CheckRadio({
    id = "",
    type = "checkbox",
    name = "",
    className = "",
    isChecked = false,
    isDisabled = false,
    label = null,
    onChange = undefined, // optional controlled handler
}) {
    // label can be string or { labelText, labelFor }
    let labelTag = null;
    if (label) {
        if (typeof label === "string") {
            labelTag = <label htmlFor={id}>{label}</label>;
        } else if (typeof label === "object" && label.labelText) {
            const forId = label.labelFor || id;
            labelTag = <label htmlFor={forId}>{label.labelText}</label>;
        }
    }

    // If consumer provides onChange, treat as controlled (use checked).
    // Otherwise use defaultChecked for uncontrolled inputs.
    const inputProps = {
        id,
        type,
        name,
        className,
        disabled: isDisabled,
    };
    if (typeof onChange === "function") {
        inputProps.checked = isChecked;
        inputProps.onChange = onChange;
    } else {
        inputProps.defaultChecked = isChecked;
    }

    return (
        <>
            <input {...inputProps} />
            {labelTag}
        </>
    );
}

export default CheckRadio;
