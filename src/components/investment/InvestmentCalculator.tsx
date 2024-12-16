```typescript
import React from 'react';
import { motion } from 'framer-motion';
import { InvestmentForm } from './InvestmentForm';
import { ResultsDisplay } from './ResultsDisplay';
import { Timeline } from './Timeline';
import { InterestChart } from './InterestChart';
import { CycleSelector } from './CycleSelector';
import { CycleResults } from '../cycles/CycleResults';
import { SettingsDialog } from '../settings/SettingsDialog';
import { useInvestmentCalculator } from './hooks/useInvestmentCalculator';

export const InvestmentCalculator: React.FC = () => {
  const {
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
  } = useInvestmentCalculator();

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-6"
      >
        <div className="flex flex-col items-center gap-6">
          <div className="w-full max-w-xl">
            <InvestmentForm
              value={investmentInput}
              onChange={setInvestmentInput}
            />
          </div>
          <div className="w-full">
            <CycleSelector
              selectedCycle={selectedCycle}
              onChange={setSelectedCycle}
              cycleDuration={settings.cycleDuration}
            />
          </div>
        </div>
      </motion.div>

      <ResultsDisplay
        totalReturn={results.totalReturn}
        netGain={results.netGain}
        unusedFundsInterest={results.totalUnusedFundsInterest}
        annualizedRate={results.annualizedRate}
        totalRate={results.totalRate}
        totalDuration={results.totalDuration}
        globalReturnRate={settings.globalReturnRate}
      />

      <CycleResults 
        cycles={results.cycles}
        hasLeverage={false}
      />

      <Timeline 
        periods={results.periods}
        cycleDuration={settings.cycleDuration}
      />

      <InterestChart
        interestPeriods={results.interestPeriods}
        periods={results.periods}
        totalInvestment={amount}
        totalReturn={results.totalReturn}
        unusedFundsRate={settings.unusedFundsRate}
        cycleDuration={settings.cycleDuration}
        selectedCycle={selectedCycle}
      />

      <SettingsDialog
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        settings={settings}
        onSave={setSettings}
      />
    </div>
  );
};
```