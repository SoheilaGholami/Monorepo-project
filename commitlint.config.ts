import type { UserConfig } from "@commitlint/types";
import { affectedApps } from "./scripts/validate-commit.mjs";
// import { affectedApps } from './scripts/validate-commit';
// const conf = require('./config');

const stagedApp = [...affectedApps].join("");
// console.log({ affectedApps });
const config: UserConfig = {
  extends: ["@commitlint/config-conventional"],
  plugins: [
    {
      rules: {
        "header-match-team-pattern": (parsed: Record<string, unknown> | null) => {
          if (!parsed) {
            return [false, "Unable to parse the commit message. Check the format."];
          }

          // Extract commit fields with type casting
          const app = parsed["app"] as string | undefined;
          const type = parsed["type"] as string | undefined;
          const subject = parsed["subject"] as string | undefined;

          console.log({ app, type, subject });
          // checked app-name === stagedApp
          console.log({ app, stagedApp });
          if (app !== stagedApp) {
            return [false, "Commit message must be on staged files"];
          }
          // Validate required fields
          if (!app || !type || !subject) {
            return [false, "Commit message must follow the format '[APP-NAME] <type> (scope): subject'"];
          }

          // Optional scope validation
          const scope = parsed["scope"] as string | undefined;
          if (!scope) {
            return [true, "Commit message without scope is allowed but recommended."];
          }

          return [true, ""]; // If all checks pass
        },
      },
    },
  ],
  rules: {
    "header-match-team-pattern": [
      2, // Severity: 2 = error
      "always",
      /^\[([a-zA-Z-]+)\] (build|ci|chore|docs|feat|fix|pref|refactor|revert|style|test)(\([a-zA-Z0-9-]+\))?: (\S.{5,})\s*$/,
    ],
    "subject-empty": [2, "never"], // Enforce non-empty subject
  },
  parserPreset: {
    parserOpts: {
      headerPattern: /^\[([a-zA-Z-]+)\] (build|ci|chore|docs|feat|fix|pref|refactor|revert|style|test)(\([a-zA-Z0-9-]+\))?: (\S.{5,})\s*$/,
      headerCorrespondence: ["app", "type", "scope", "subject"], // Use 'subject' here
    },
  },
};

export default config;
