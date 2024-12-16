```typescript
export const DEFAULT_INVESTMENT_AMOUNT = '1000000';

export const DEFAULT_PAYMENT_SCHEDULE = [
  { month: 0, percentage: 5 },
  { month: 3, percentage: 30 },
  { month: 6, percentage: 20 },
  { month: 12, percentage: 15 },
  { month: 14, percentage: 20 },
  { month: 16, percentage: 5 },
  { month: 18, percentage: 5 },
];

export const INVESTMENT_RATES = {
  DEFAULT_GLOBAL_RATE: 28,
  DEFAULT_UNUSED_FUNDS_RATE: 1,
  DEFAULT_CYCLE_DURATION: 24,
};
```