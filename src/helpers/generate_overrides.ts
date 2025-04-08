import fs from 'fs';
import path from 'path';
import {config} from '../../config'

// Define the types for parsing config
type Partial = Record<string, string>;

interface Config {
  partials: Partial[];
}
const overridesPath = path.resolve(__dirname, '../../src/components/Overrides.tsx');

// Function to parse config.ts and generate Overrides.tsx
function generateOverrides(): void {
    const partials: Partial = config.partials

  // Prepare to write the Overrides.tsx content
  let overridesContent = `import type { ReactNode } from 'react';\n`;
  overridesContent += `import React from 'react';\n`

  Object.entries(partials).forEach(([componentName, filePath]) => {
    const resolvedFilePath = path.resolve(filePath);

    // Check if the file exists
    if (fs.existsSync(resolvedFilePath)) {
      const importName = `${componentName}Partial`;
      overridesContent += `import ${importName} from '@site/${filePath}';\n\n`;
      overridesContent += `export function ${componentName}(): ReactNode {\n`;
      overridesContent += `  return <${importName} />;\n`;
      overridesContent += `}\n\n`;
    } else {
      console.warn(`File not found: ${resolvedFilePath}`);
    }
  });

  // Write the Overrides.tsx file
  fs.writeFileSync(overridesPath, overridesContent, 'utf8');
  console.log('Overrides.tsx has been generated successfully.');
}

// Run the function
generateOverrides();