```typescript
import { useState, useMemo } from 'react';
import { DEFAULT_INVESTMENT_AMOUNT } from '../constants';
import { calculateMultiCycleResults } from '../../../utils/calculations';
import { parseCurrency } from '../../../utils/formatting';
import type { CycleType } from '../../../utils/types';
import type { InvestmentSettings } from '../../settings/types';

export function useInvestmentCalculator() {
  const [investmentInput, setInvestmentInput] = useState(DEFAULT_INVESTMENT_AMOUNT);
  const [selectedCycle, setSelectedCycle] = useState<CycleType>('1');
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [settings, setSettings] = useState<InvestmentSettings>({
    globalReturnRate: 28,
    unusedFundsRate: 1,
    cycleDuration: 24,
    paymentSchedule: [
      { month: 0, percentage: 5 },
      { month: 3, percentage: 30 },
      { month: 6, percentage: 20 },
      { month: 12, percentage: 15 },
      { month: 14, percentage: 20 },
      { month: 16, percentage: 5 },
      { month: 18, percentage: 5 },
    ],
  });

  const amount = useMemo(() => 
    parseCurrency(investmentInput),
    [investmentInput]
  );

  const results = useMemo(() => 
    calculateMultiCycleResults(amount, selectedCycle, settings),
    [amount, selectedCycle, settings]
  );

  return {
    investmentInput,
    setInvestmentInput,
    selectedCycle,
    setSelectedCycle,
    isSettingsOpen,
    setIsSettingsOpen,
    settings,
    setSettings,
    amount,
    results,
  };
}
```