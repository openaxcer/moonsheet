import {existsSync, readFileSync} from "fs";
import * as yaml from "js-yaml";
import {join} from "path";

const CONFIG_FILE = "env.yaml";

export default () => {
    return yaml.load(
        existsSync(join(__dirname, CONFIG_FILE))
            ? readFileSync(join(__dirname, CONFIG_FILE), "utf8")
            : null
    ) as Record<string, any>;
};
