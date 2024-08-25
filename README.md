# React + TypeScript + Vite

1. bun install
<!-- 2. bun playwright install -->
2. npx playwright install
--------
3. cd buntests
4. bun --bun playwright test // --workers=5



--------------------------------------------------------
Inside that directory, you can run several commands:

  bun playwright test
    Runs the end-to-end tests.

  bun playwright test --ui
    Starts the interactive UI mode.

  bun playwright test --project=chromium
    Runs the tests only on Desktop Chrome.

  bun playwright test example
    Runs the tests in a specific file.

  bun playwright test --debug
    Runs the tests in debug mode.

  bun playwright codegen
    Auto generate tests with Codegen.

We suggest that you begin by typing:
  cd buntest
  bun playwright test