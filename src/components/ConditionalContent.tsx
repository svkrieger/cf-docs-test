import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { config } from '@site/config'

interface ConditionalContentProps {
  configKey: string; // The config parameter key (e.g., "customConfigParam")
  valuesMap: Record<string, string>; // Mapping of values to their associated content
}

const ConditionalContent: React.FC<ConditionalContentProps> = ({ configKey, valuesMap }) => {
//   const { siteConfig } = useDocusaurusContext();
//   const configValue: String = siteConfig.customFields[configKey];

const configValue: string = config[configKey]

  // If the config value is not in the valuesMap, render a default content
  const content = valuesMap[configValue] || 'Default content is rendered when the config value is unknown.';

  return <p>{content}</p>;
};

export default ConditionalContent;