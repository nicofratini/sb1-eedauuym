```typescript
import { PERCENTAGE_FORMAT_OPTIONS } from '../../components/investment/constants/formatting';

export const formatPercentage = (value: number): string => {
  return new Intl.NumberFormat('fr-FR', PERCENTAGE_FORMAT_OPTIONS).format(value / 100);
};

export const parsePercentage = (value: string): number => {
  const cleanValue = value.replace(/[^\d.,]/g, '');
  const numberValue = cleanValue.replace(',', '.');
  return Number(numberValue) || 0;
};
```