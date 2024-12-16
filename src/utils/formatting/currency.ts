```typescript
import { CURRENCY_FORMAT_OPTIONS } from '../../components/investment/constants/formatting';

export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('fr-FR', CURRENCY_FORMAT_OPTIONS).format(amount);
};

export const parseCurrency = (value: string): number => {
  const cleanValue = value.replace(/[^\d.,]/g, '');
  const numberValue = cleanValue.replace(',', '.');
  return Number(numberValue) || 0;
};
```