import * as fs from 'fs';

// Define types for the preprocessor parameters
interface PreprocessorParams {
  filePath: string;
  fileContent: string;
  config: CustomConfig;
}

interface CustomConfig {
    platform_code: string;
    partials: {
      [key: string]: string; // Allow any key-value pair under partials
    };
    [key: string]: any; // Allow additional key-value pairs in the root object
  }

const customPreprocessor = ({ filePath, fileContent, config }: PreprocessorParams): string => {
  // Get the path to the partial from the custom config
  const partialPath: string = config.partials.Test;

  // Check if the partial file exists
  const fileExists = fs.existsSync(partialPath);

  if (fileExists) {
    // Replace the placeholder with the import statement and render logic
    return fileContent.replaceAll(
      '{{MY_VAR}}',
      `import Partial from '${partialPath}';\n\n<Partial/>`
    );
  } else {
    // Render an empty string if the file does not exist
    return fileContent.replaceAll('{{MY_VAR}}', `does not work ${partialPath}`);
  }
};

export default customPreprocessor;