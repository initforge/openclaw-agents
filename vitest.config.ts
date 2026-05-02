import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    environment: "node",
    include: [
      "apps/**/tests/unit/**/*.test.ts",
      "apps/**/tests/integration/**/*.test.ts",
      "packages/**/tests/unit/**/*.test.ts",
      "packages/**/tests/integration/**/*.test.ts",
    ],
    exclude: ["**/node_modules/**", "**/dist/**", "**/.next/**"],
    coverage: {
      reporter: ["text", "html"],
      include: ["apps/**/src/**/*.ts", "packages/**/src/**/*.ts"],
      exclude: ["apps/web-admin/**", "**/*.d.ts"],
    },
  },
});
