# 🤝 Contributing to GitSeeker

First off, **thank you** for considering contributing to GitSeeker! It's people like you that make GitSeeker such a great tool.

## 🌟 Ways to Contribute

There are many ways you can contribute to GitSeeker:

- 🐛 **Report bugs** — Help us identify and fix issues
- 💡 **Suggest features** — Share your ideas for improvements
- 📝 **Improve documentation** — Help others understand the project
- 🎨 **Design improvements** — Enhance the UI/UX
- 💻 **Code contributions** — Add features or fix bugs
- 🌍 **Translations** — Help make GitSeeker multilingual
- ⭐ **Spread the word** — Star the repo and share with others

## 🚀 Getting Started

### Prerequisites

- Node.js 18 or higher
- Git
- A GitHub account
- Basic knowledge of React, Next.js, and TypeScript

### Development Setup

1. **Fork the repository**
   - Click the "Fork" button in the top right of the GitHub page

2. **Clone your fork**
   ```bash
   git clone https://github.com/YOUR_USERNAME/gitseeker.git
   cd gitseeker
   ```

3. **Add upstream remote**
   ```bash
   git remote add upstream https://github.com/PrivateVictories-Main/gitseeker.git
   ```

4. **Install dependencies**
   ```bash
   npm install
   ```

5. **Start development server**
   ```bash
   npm run dev
   ```

6. **Open in browser**
   - Navigate to [http://localhost:3000](http://localhost:3000)

## 📋 Development Workflow

### Creating a Branch

Always create a new branch for your work:

```bash
# Update your main branch
git checkout main
git pull upstream main

# Create a new feature branch
git checkout -b feature/your-feature-name
```

Branch naming conventions:
- `feature/` — New features
- `fix/` — Bug fixes
- `docs/` — Documentation changes
- `refactor/` — Code refactoring
- `test/` — Adding tests
- `chore/` — Maintenance tasks

### Making Changes

1. **Write clean code**
   - Follow the existing code style
   - Use TypeScript types
   - Add comments for complex logic

2. **Test your changes**
   - Ensure the app runs without errors
   - Test on different browsers if possible
   - Check responsive design

3. **Commit your changes**
   ```bash
   git add .
   git commit -m "feat: add amazing new feature"
   ```

   Commit message format:
   - `feat:` — New feature
   - `fix:` — Bug fix
   - `docs:` — Documentation
   - `style:` — Code style changes
   - `refactor:` — Code refactoring
   - `test:` — Adding tests
   - `chore:` — Maintenance

### Submitting a Pull Request

1. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```

2. **Create Pull Request**
   - Go to the original repository
   - Click "New Pull Request"
   - Select your branch
   - Fill in the PR template

3. **PR Description**
   Include:
   - What changes you made
   - Why you made them
   - Screenshots (if UI changes)
   - Related issues

4. **Wait for review**
   - Maintainers will review your PR
   - Address any requested changes
   - Once approved, it will be merged!

## 🎨 Code Style Guidelines

### TypeScript

```typescript
// ✅ Good
interface ProjectCardProps {
  project: UnifiedProject;
  onAnalyze?: () => void;
}

export function ProjectCard({ project, onAnalyze }: ProjectCardProps) {
  // Component logic
}

// ❌ Bad
function ProjectCard(props: any) {
  // Component logic
}
```

### React Components

```typescript
// ✅ Good - Functional component with hooks
export function SearchBar({ onSearch }: SearchBarProps) {
  const [query, setQuery] = useState("");
  
  return (
    <input
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
}

// ❌ Bad - Class component
class SearchBar extends React.Component {
  // ...
}
```

### Styling

```typescript
// ✅ Good - Tailwind classes
<button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg">
  Click me
</button>

// ❌ Bad - Inline styles
<button style={{ padding: "8px 16px", background: "blue" }}>
  Click me
</button>
```

## 🐛 Reporting Bugs

### Before Reporting

1. **Search existing issues** — Your bug might already be reported
2. **Try the latest version** — The bug might be fixed
3. **Check documentation** — It might be expected behavior

### Bug Report Template

```markdown
**Describe the bug**
A clear description of what the bug is.

**To Reproduce**
Steps to reproduce the behavior:
1. Go to '...'
2. Click on '...'
3. See error

**Expected behavior**
What you expected to happen.

**Screenshots**
If applicable, add screenshots.

**Environment:**
- Browser: [e.g. Chrome 120]
- OS: [e.g. macOS 14]
- Version: [e.g. 1.0.0]

**Additional context**
Any other relevant information.
```

## 💡 Suggesting Features

### Feature Request Template

```markdown
**Is your feature request related to a problem?**
A clear description of the problem.

**Describe the solution you'd like**
What you want to happen.

**Describe alternatives you've considered**
Other solutions you've thought about.

**Additional context**
Mockups, examples, or other context.
```

## 📝 Documentation

Good documentation is crucial! When contributing:

- **Update README.md** if you add features
- **Add JSDoc comments** for functions
- **Update USAGE_GUIDE.md** for user-facing changes
- **Keep code comments** clear and concise

Example:

```typescript
/**
 * Searches across multiple sources and ranks results by relevance.
 * 
 * @param query - The search query string
 * @param sources - Array of sources to search
 * @param deepSearch - Whether to perform deep search (default: true)
 * @returns Promise resolving to array of ranked projects
 */
export async function searchAllSources(
  query: string,
  sources: SourceType[],
  deepSearch: boolean = true
): Promise<UnifiedProject[]> {
  // Implementation
}
```

## 🧪 Testing

While we don't have automated tests yet, please manually test:

1. **Core functionality**
   - Search works across all sources
   - AI analysis functions correctly
   - Settings save and persist

2. **Edge cases**
   - Empty search
   - No results
   - API errors
   - Rate limits

3. **Browser compatibility**
   - Chrome/Edge
   - Safari
   - Firefox

4. **Responsive design**
   - Mobile (375px+)
   - Tablet (768px+)
   - Desktop (1024px+)

## ❓ Questions?

- 💬 **GitHub Discussions** — Ask questions
- 🐛 **GitHub Issues** — Report bugs
- 📧 **Email** — Contact maintainers

## 📜 Code of Conduct

### Our Pledge

We pledge to make participation in our project a harassment-free experience for everyone.

### Our Standards

**Positive behavior:**
- Using welcoming language
- Being respectful of differing viewpoints
- Gracefully accepting constructive criticism
- Focusing on what's best for the community

**Unacceptable behavior:**
- Trolling, insulting comments, or personal attacks
- Public or private harassment
- Publishing others' private information
- Other conduct which could reasonably be considered inappropriate

### Enforcement

Instances of abusive behavior may be reported to the project maintainers. All complaints will be reviewed and investigated.

## 🎉 Recognition

Contributors will be:
- Listed in the README
- Mentioned in release notes
- Given credit in commit messages

Thank you for making GitSeeker better! 🚀

---

<div align="center">

**Questions? Open an issue or discussion!**

[📖 Documentation](README.md) • [🐛 Report Bug](../../issues) • [💡 Request Feature](../../issues)

</div>

