# Contributing to @such12138/react-clipboard-lite

Thank you for your interest in contributing! This guide will help you get started.

## Development Setup

### Prerequisites

- Node.js >= 18.0.0
- pnpm >= 9.0.0

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd such-clipboard-monorepo
```

2. Install dependencies:

```bash
pnpm install
```

## Development Workflow

### Running the Development Environment

```bash
# Start Storybook (recommended for component development)
pnpm run storybook

# Start the demo app
cd apps/vite-demo
pnpm run dev

# Watch mode for library builds
pnpm --filter @such12138/react-clipboard-lite run dev
```

### Making Changes

1. Create a new branch:

```bash
git checkout -b feat/your-feature-name
# or
git checkout -b fix/your-bug-fix
```

2. Make your changes in the appropriate directory:
   - Library code: `packages/react-clipboard-lite/src/`
   - Tests: `packages/react-clipboard-lite/tests/`
   - Stories: `packages/react-clipboard-lite/stories/`
   - Documentation: `docs/`

3. Run tests and linting:

```bash
# Run tests
pnpm test

# Run linter
pnpm run lint

# Format code
pnpm run format
```

### Testing

```bash
# Run all tests once
pnpm test

# Run tests in watch mode
pnpm --filter @such12138/react-clipboard-lite run test:watch

# Run E2E tests
cd apps/vite-demo
pnpm run test:e2e
```

### Building

```bash
# Build all packages
pnpm run build

# Build specific package
pnpm --filter @such12138/react-clipboard-lite run build
```

## Commit Guidelines

We use [Conventional Commits](https://www.conventionalcommits.org/) with strict formatting:

### Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Rules

- **subject must be lowercase** (enforced by commitlint)
- No period at the end of subject
- Use imperative mood ("add" not "added" or "adds")

### Types

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks
- `perf`: Performance improvements
- `ci`: CI/CD changes

### Examples

✅ **Good:**

```
feat(button): add loading state to copy button

- add isLoading prop
- show spinner during copy operation
- disable button while loading
```

```
fix(clipboard): handle clipboard permission errors

Fixes #123
```

```
docs: update installation instructions
```

❌ **Bad:**

```
feat(button): Add loading state  # subject must be lowercase
```

```
Update docs  # missing type
```

```
fix: Fixed the bug.  # subject should not end with period
```

### Pre-commit Hooks

The project uses Husky to run checks before commits:

- **pre-commit**: Runs ESLint and Prettier on staged files
- **commit-msg**: Validates commit message format

If your commit is rejected, fix the issues and try again.

## Pull Request Process

1. Update documentation if needed
2. Add tests for new features
3. Ensure all tests pass: `pnpm test`
4. Ensure linting passes: `pnpm run lint`
5. Create a changeset for your changes:

```bash
pnpm run changeset
```

6. Push your branch and create a Pull Request
7. Fill out the PR template with details about your changes

## Project Structure

```
such-clipboard-monorepo/
├── packages/
│   └── react-clipboard-lite/     # Main library
│       ├── src/                   # Source code
│       │   ├── CopyButton.tsx
│       │   ├── CopyOnClick.tsx
│       │   ├── useClipboard.ts
│       │   └── index.tsx
│       ├── tests/                 # Unit tests
│       ├── stories/               # Storybook stories
│       └── package.json
├── apps/
│   └── vite-demo/                 # Demo application
├── docs/                          # VitePress documentation
├── .github/workflows/             # CI/CD
├── pnpm-workspace.yaml            # Workspace config
└── eslint.config.js               # ESLint config
```

## Code Style

- Use TypeScript for all new code
- Follow the existing code style
- Use meaningful variable and function names
- Add JSDoc comments for public APIs
- Keep functions small and focused

## Testing Guidelines

- Write tests for all new features
- Maintain or improve code coverage
- Use descriptive test names
- Test edge cases and error conditions

Example:

```tsx
describe("CopyButton", () => {
  it("copies text to clipboard on click", async () => {
    // Test implementation
  });

  it("shows copied state after successful copy", async () => {
    // Test implementation
  });

  it("calls onCopied callback when provided", async () => {
    // Test implementation
  });
});
```

## Documentation

- Update relevant documentation in `docs/`
- Add JSDoc comments to exported functions/components
- Update README.md if adding major features
- Add examples to Storybook

## Release Process

Releases are managed with Changesets:

1. Create a changeset:

```bash
pnpm run changeset
```

2. Select the package(s) to version
3. Choose the version bump type (major/minor/patch)
4. Write a clear description of changes
5. Commit the changeset file

The CI will automatically create a release PR when changesets are merged to main.

## Getting Help

- Check existing issues and discussions
- Ask questions in pull request comments
- Review the documentation

## License

By contributing, you agree that your contributions will be licensed under the project's license.
