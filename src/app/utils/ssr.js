import fs from "node:fs";
import { join } from "path";
import yaml from "yaml";


export const getYamlContent = (fileName) => {
  const dirPath = join(process.cwd(), "src", "data", "yaml", fileName);
  const fileContents = fs.readFileSync(dirPath, "utf8");
  return yaml.parse(fileContents);
};

