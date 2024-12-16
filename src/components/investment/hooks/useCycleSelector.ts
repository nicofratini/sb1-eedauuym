```typescript
import { useState, useCallback } from 'react';
import type { CycleType } from '../../../utils/types';

export function useCycleSelector() {
  const [selectedCycle, setSelectedCycle] = useState<CycleType>('1');

  const handleCycleChange = useCallback((cycle: CycleType) => {
    setSelectedCycle(cycle);
  }, []);

  return {
    selectedCycle,
    handleCycleChange
  };
}
```