# 📚 Documentation Structure

Complete guide to the documentation structure of this project.

## 📁 Documentation Organization

```
clipboard-monorepo/
├── README.md                    # Main README (English)
├── README.zh-CN.md              # Main README (Chinese)
│
├── docs/                        # Documentation site (VitePress)
│   ├── DOCUMENTATION.md        # This file
│   ├── DOCS_REORGANIZATION.md  # Reorganization summary
│   ├── .vitepress/             # VitePress configuration
│   ├── index.md                # Documentation home page
│   ├── guide.md                # Usage guide
│   ├── api.md                  # API reference
│   ├── publishing.md           # Detailed publishing docs
│   ├── github-pages-setup.md   # Detailed GitHub Pages setup
│   │
│   └── guides/                 # All guides and tutorials
│       ├── README.md           # Guides index
│       │
│       ├── QUICK_START.md      # 3-step quick start
│       ├── PUBLISHING.md       # Quick publishing guide
│       ├── QUICK_PUBLISH.md    # 5-step publishing
│       ├── PRE_PUBLISH_CHECKLIST.md
│       ├── FINAL_CHECKLIST.md
│       │
│       ├── CONTRIBUTING.md     # Contributing guide
│       ├── PROJECT_OVERVIEW.md # Project overview
│       │
│       ├── NPM_SETUP.md        # npm configuration
│       ├── GITHUB_PAGES_SETUP.md
│       │
│       ├── CNPM_FIX.md         # Troubleshooting
│       ├── SCOPE_FIX.md
│       ├── LOCKFILE_UPDATE.md
│       ├── CHANGESET_FIX.md
│       ├── UPDATE_PACKAGE_NAME.md
│       └── PACKAGE_NAME_UPDATE_SUMMARY.md
│
└── packages/react-clipboard-lite/
    └── README.md               # Package README
```

## 📖 Documentation Types

### 1. Main Documentation (Root Level)

- **README.md** - Project introduction, quick start, links (root)
- **README.zh-CN.md** - Chinese version of README (root)
- **docs/DOCUMENTATION.md** - This file, documentation structure guide
- **docs/DOCS_REORGANIZATION.md** - Documentation reorganization summary

### 2. VitePress Site (`docs/`)

**Main Pages:**

- `index.md` - Home page with features and quick examples
- `guide.md` - Complete usage guide with examples
- `api.md` - Full API reference
- `publishing.md` - Detailed publishing documentation
- `github-pages-setup.md` - Detailed GitHub Pages setup

**Configuration:**

- `.vitepress/config.ts` - VitePress configuration

### 3. Guides (`docs/guides/`)

**Getting Started:**

- `QUICK_START.md` - 3-step quick start guide
- `PROJECT_OVERVIEW.md` - Complete project overview

**Publishing:**

- `PUBLISHING.md` - Quick publishing guide
- `QUICK_PUBLISH.md` - 5-step publishing guide
- `PRE_PUBLISH_CHECKLIST.md` - Pre-publish checklist
- `FINAL_CHECKLIST.md` - Final checklist before release

**Setup & Configuration:**

- `NPM_SETUP.md` - Complete npm configuration guide
- `GITHUB_PAGES_SETUP.md` - GitHub Pages setup guide

**Troubleshooting:**

- `CNPM_FIX.md` - Fix CNPM registry issues
- `SCOPE_FIX.md` - Fix package scope issues
- `LOCKFILE_UPDATE.md` - Lockfile update issues
- `CHANGESET_FIX.md` - Changeset issues
- `UPDATE_PACKAGE_NAME.md` - Update package name
- `PACKAGE_NAME_UPDATE_SUMMARY.md` - Package name update summary

**Contributing:**

- `CONTRIBUTING.md` - How to contribute

### 4. Package Documentation

- `packages/react-clipboard-lite/README.md` - Package-specific README for npm

## 🔗 Documentation Links

### For Users

1. Start with [README.md](../README.md)
2. Visit [Documentation Site](https://suchuhong.github.io/clipboard-monorepo/)
3. Try [Storybook Examples](https://suchuhong.github.io/clipboard-monorepo/storybook/)
4. Check [API Reference](./api.md)

### For Contributors

1. Read [Contributing Guide](./guides/CONTRIBUTING.md)
2. Review [Project Overview](./guides/PROJECT_OVERVIEW.md)
3. Follow [Development Workflow](./guides/CONTRIBUTING.md#development-workflow)

### For Publishers

1. Quick: [Quick Start](./guides/QUICK_START.md)
2. Detailed: [Publishing Guide](./guides/PUBLISHING.md)
3. Checklist: [Pre-Publish Checklist](./guides/PRE_PUBLISH_CHECKLIST.md)

### For Troubleshooting

1. npm issues: [NPM Setup](./guides/NPM_SETUP.md)
2. CNPM issues: [CNPM Fix](./guides/CNPM_FIX.md)
3. Scope issues: [Scope Fix](./guides/SCOPE_FIX.md)
4. Lockfile issues: [Lockfile Update](./guides/LOCKFILE_UPDATE.md)
5. Changeset issues: [Changeset Fix](./guides/CHANGESET_FIX.md)

## 📝 Documentation Guidelines

### Writing Style

- Use clear, concise language
- Include code examples
- Add step-by-step instructions
- Use emojis for visual clarity
- Provide both quick and detailed versions

### File Naming

- Use UPPERCASE for root-level guides
- Use descriptive names
- Use hyphens for multi-word names
- Keep names concise but clear

### Cross-References

- Always use relative paths
- Link to related documentation
- Provide context for links
- Keep links up to date

### Maintenance

- Update docs when code changes
- Keep examples working
- Review and update regularly
- Remove outdated information

## 🔄 Documentation Workflow

### Adding New Documentation

1. Determine the type (guide, reference, tutorial)
2. Choose the appropriate location
3. Follow the naming convention
4. Add to relevant index files
5. Update cross-references
6. Test all links

### Updating Documentation

1. Make changes in the appropriate file
2. Update related documentation
3. Check all cross-references
4. Test examples and code snippets
5. Update last modified date

### Reviewing Documentation

- Check for broken links
- Verify code examples work
- Ensure consistency
- Update outdated information
- Improve clarity

## 🎯 Quick Reference

| Need                   | Document                                                |
| ---------------------- | ------------------------------------------------------- |
| Get started quickly    | [QUICK_START.md](./guides/QUICK_START.md)               |
| Understand the project | [PROJECT_OVERVIEW.md](./guides/PROJECT_OVERVIEW.md)     |
| Publish to npm         | [PUBLISHING.md](./guides/PUBLISHING.md)                 |
| Contribute code        | [CONTRIBUTING.md](./guides/CONTRIBUTING.md)             |
| Setup GitHub Pages     | [GITHUB_PAGES_SETUP.md](./guides/GITHUB_PAGES_SETUP.md) |
| Fix npm issues         | [NPM_SETUP.md](./guides/NPM_SETUP.md)                   |
| All guides             | [guides/README.md](./guides/README.md)                  |

## 📞 Support

- **Issues**: https://github.com/suchuhong/clipboard-monorepo/issues
- **Discussions**: https://github.com/suchuhong/clipboard-monorepo/discussions
- **Documentation**: https://suchuhong.github.io/clipboard-monorepo/
