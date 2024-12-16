```typescript
import { useState, useCallback } from 'react';
import { DEFAULT_INVESTMENT_AMOUNT } from '../constants';
import { formatCurrency, parseCurrency } from '../../../utils/formatting';

export function useInvestmentForm() {
  const [value, setValue] = useState(DEFAULT_INVESTMENT_AMOUNT);

  const handleChange = useCallback((inputValue: string) => {
    const cleanValue = inputValue.replace(/[^\d,]/g, '');
    setValue(cleanValue);
  }, []);

  const handleCalculate = useCallback(() => {
    const numericValue = parseCurrency(value);
    if (numericValue) {
      setValue(formatCurrency(numericValue));
    }
  }, [value]);

  return {
    value,
    handleChange,
    handleCalculate
  };
}
```