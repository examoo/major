import { forwardRef } from "react";

const CheckBox = ({ label, checked, onChange }) => {
    return (
        <div className="flex items-center">
            <input
                type="checkbox"
                checked={checked}
                onChange={onChange}
                className="mr-2"
            />
            <span>{label}</span>
        </div>
    );
};

export default forwardRef(CheckBox);