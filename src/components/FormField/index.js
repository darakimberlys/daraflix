import React from "react";

function FormField({value, type, name, onChange, label}) {
    return(
        <div>
        <label>
            {label}
            <input
            label={label}
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            />
        </label>
    </div>
    )
}

export default FormField;