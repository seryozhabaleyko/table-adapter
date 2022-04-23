import React from 'react';
import { useFormikContext } from 'formik';

type ControlsProps = {
    submitCaption?: string;
};

export const FormikControls: React.FC<ControlsProps> = ({ submitCaption = 'Save' }) => {
    const {
        isSubmitting, isValidating, isValid,
    } = useFormikContext();
    const isInflight = isValidating || isSubmitting;

    return (
        <div>
            <button
                type="submit"
                disabled={!isValid || isInflight}
            >
                {submitCaption}
            </button>
        </div>
    );
};
