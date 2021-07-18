import React, {useRef, useState, useCallback,} from 'react';

import { Container } from './styles';

const Input = ({icon: Icon, isErrored = false, defaultValue = '', ...rest}) => {
  const inputRef = useRef(null);

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    if (inputRef.current && inputRef.current.value) {
      setIsFilled(true);
    } else {
      setIsFilled(false);
    }
  }, []);

  return (
    <Container isErrored={isErrored} isFilled={isFilled} isFocused={isFocused}>
      {Icon && <Icon size={20} />}
      <input
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        defaultValue={defaultValue}
        ref={inputRef}
        {...rest}
      />
    </Container>
  );
};

export default Input;
