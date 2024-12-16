```typescript
import React from 'react';
import { LanguageSelector } from '../language/LanguageSelector';
import { SettingsButton } from '../settings/SettingsButton';
import { useTranslation } from 'react-i18next';

export const Header: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="flex items-center justify-between mb-8">
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
        {t('title')}
      </h1>
      <div className="flex items-center space-x-4">
        <LanguageSelector />
        <SettingsButton />
      </div>
    </div>
  );
};
```