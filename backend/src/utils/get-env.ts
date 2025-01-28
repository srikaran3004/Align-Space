//This file helps use to handle env and if some values are not provided it will throw an error
export const getEnv = (key: string, defaultValue: string = ""): string => {
    const value = process.env[key];
    if (value === undefined) {
      if (defaultValue) {
        return defaultValue;
      }
      throw new Error(`Enviroment variable ${key} is not set`);
    }
    return value;
  }; 