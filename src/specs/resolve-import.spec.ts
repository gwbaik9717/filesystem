import { expect, test } from "vitest";
import { resolveImport } from "../index.js";

test("Basic", () => {
  const tsCompilerOptions = {
    moduleResolution: "Bundler" as const,
    baseUrl: ".",
    paths: {
      "~/*": ["./src/*"],
    },
  };

  function fileExists(path: string) {
    return path === "src/shared/ui/index.ts";
  }

  expect(
    resolveImport(
      "~/shared/ui",
      "src/pages/home/ui/HomePage.tsx",
      tsCompilerOptions,
      fileExists,
    ),
  ).toBe("src/shared/ui/index.ts");
});
