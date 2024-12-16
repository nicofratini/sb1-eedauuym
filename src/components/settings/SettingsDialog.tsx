```typescript
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Settings, X, Plus, Trash2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import type { InvestmentSettings } from './types';

interface SettingsDialogProps {
  isOpen: boolean;
  onClose: () => void;
  settings: InvestmentSettings;
  onSave: (settings: InvestmentSettings) => void;
}

export const SettingsDialog: React.FC<SettingsDialogProps> = ({
  isOpen,
  onClose,
  settings,
  onSave,
}) => {
  const { t } = useTranslation();
  const [localSettings, setLocalSettings] = React.useState<InvestmentSettings>(settings);

  React.useEffect(() => {
    setLocalSettings(settings);
  }, [settings]);

  const handleSave = () => {
    const sortedSchedule = [...localSettings.paymentSchedule].sort((a, b) => a.month - b.month);
    onSave({
      ...localSettings,
      paymentSchedule: sortedSchedule,
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    >
      {/* Dialog content */}
    </motion.div>
  );
};
```