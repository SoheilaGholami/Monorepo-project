import type { UserConfig } from "@commitlint/types";
import { affectedApps } from "./scripts/validate-commit.mjs";

const stagedApp = [...affectedApps].join("");
const config: UserConfig = {
  extends: ["@commitlint/config-conventional"],
  plugins: [
    {
      rules: {
        "header-match-team-pattern": (parsed: Record<string, unknown> | null) => {
          if (!parsed) {
            return [false, "Unable to parse the commit message. Check the format."];
          }

          const app = parsed["app"] as string | undefined;
          const type = parsed["type"] as string | undefined;
          const subject = parsed["subject"] as string | undefined;

          // Ensure the subject is not empty and is at least 5 characters
          if (!subject || subject.length < 5) {
            return [false, "Subject must be at least 5 characters long."];
          }

          // Ensure the app matches the staged files
          if (app !== stagedApp) {
            return [false, "Commit message must be on staged files"];
          }

          // Validate required fields
          if (!app || !type || !subject) {
            return [false, "Commit message must follow the format '[APP-NAME] <type>: subject'"];
          }

          return [true, ""]; // If all checks pass
        },
      },
    },
  ],
  rules: {
    "header-trim": [0],
    "header-match-team-pattern": [
      2, // Severity: 2 = error
      "always",
      /^\[([a-zA-Z-]+)\] (build|ci|chore|docs|feat|fix|perf|refactor|style|test|merge)(\([a-zA-Z0-9-]+\))?:\s?(.{5,})\s*$/,
    ],
    "subject-empty": [2, "never"], // Enforce non-empty subject
  },
  parserPreset: {
    parserOpts: {
      headerPattern: /^\[([a-zA-Z-]+)\] (build|ci|chore|docs|feat|fix|perf|refactor|style|test|merge)(\([a-zA-Z0-9-]+\))?:\s?(.{5,})\s*$/,
      headerCorrespondence: ["app", "type", "scope", "subject"], // Ensure 'subject' is correctly mapped
    },
  },
};

export default config;
