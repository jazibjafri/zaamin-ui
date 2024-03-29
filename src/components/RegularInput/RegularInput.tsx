import React, { useState } from 'react';
import {
    View,
    TextInput,
    TextInputProps,
    NativeSyntheticEvent,
    TextInputEndEditingEventData,
} from 'react-native';
import { globalStyles } from 'styles/app.styles';
import { validators, Validators } from 'util/validators';
import { RegularText } from 'components/RegularText';

interface OwnProps extends TextInputProps {
    validators?: Validators[];
    onChangeText: (val: string, err?: boolean) => void;
    validateOn?: 'start-editing' | 'end-editing';
}

const RegularInput: React.FC<OwnProps> = ({
    style,
    onChangeText,
    value,
    validators: validatorTypes = [],
    validateOn = 'end-editing',
    ...rest
}) => {
    const [hasError, setHasError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const validateInput = (val: string) => {
        if (validatorTypes.length) {
            const validations = validatorTypes.map(type => {
                const currentValidator = validators[type];
                return currentValidator(val);
            });
            const result = validations.reduce((prev, cur) => {
                /* return failed validation if any one validation fails */
                return {
                    result: prev.result && cur.result,
                    reason: !prev.result ? prev.reason : cur.reason,
                };
            });
            return result;
        }
        return {
            result: true,
            reason: '',
        };
    };
    const handleSuccess = () => {
        setHasError(false);
        setErrorMessage('');
    };
    const handleError = (error: string) => {
        setErrorMessage(error);
        setHasError(true);
    };
    const handleChange = (val: string) => {
        const validation = validateInput(val);
        if (validateOn === 'start-editing') {
            if (!validation.result) {
                handleError(validation.reason);
            } else {
                handleSuccess();
            }
        }
        onChangeText(val, !validation.result);
        return;
    };
    const handleBlur = (evt: NativeSyntheticEvent<TextInputEndEditingEventData>) => {
        const validation = validateInput(evt.nativeEvent.text);
        if (validation.result) {
            handleSuccess();
        } else {
            handleError(validation.reason);
        }
    };

    return (
        <>
            <TextInput
                onChangeText={handleChange}
                onEndEditing={handleBlur}
                value={value}
                {...rest}
                style={[globalStyles.defaultInput, style]}
            />
            {hasError && (
                <View style={globalStyles.defaultError}>
                    <RegularText style={globalStyles.defaultErrorText}>
                        {errorMessage}
                    </RegularText>
                </View>
            )}
        </>
    );
};

export { RegularInput };
