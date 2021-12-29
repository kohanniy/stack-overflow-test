export const toString = (value: any) => typeof value === 'string' ? value : String(value);

export const convertMnemonics = (str: string) => {
  const convertedStr = str.replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");

  return convertedStr;
};