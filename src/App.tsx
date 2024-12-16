```typescript
import React from 'react';
import { AppLayout } from './components/layout';
import { InvestmentCalculator } from './components/investment';

export default function App() {
  return (
    <AppLayout>
      <InvestmentCalculator />
    </AppLayout>
  );
}
```