// PartialLoader.tsx
import React from 'react';
import {config} from '@site/config'

const path = config.partials.Test

// Define props interface for the PartialLoader component
interface PartialLoaderProps {
  partialName: string;
}

// Create the PartialLoader component using TypeScript
const PartialLoader: React.FC<PartialLoaderProps> = ({ partialName }) => {
  let PartialComponent: React.ComponentType | null = null;

    // Dynamically import the MDX partial located in the _partials directory
    PartialComponent = require(path).default;

  // Render the partial if it exists, otherwise render null
  return PartialComponent ? <PartialComponent /> : 'did not work';
};

export default PartialLoader;