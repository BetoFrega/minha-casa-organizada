# Minha Casa Organizada

Minha Casa Organizada (My Organized House) is a Next.js TypeScript web application for home organization and management. The repository currently contains minimal setup and needs to be initialized as a Next.js project.

**ALWAYS reference these instructions first and fallback to search or bash commands only when you encounter unexpected information that does not match the info here.**

## Working Effectively

### Initial Project Setup (First Time Only)
When working with this repository for the first time, you need to initialize the Next.js project.

**IMPORTANT**: Since the repository contains existing files, use this workaround:

- `cd /home/runner/work/minha-casa-organizada/minha-casa-organizada`
- `npx create-next-app@latest temp-next --typescript --tailwind --eslint --app --no-src-dir --no-import-alias --yes` -- takes 30-45 seconds. NEVER CANCEL. Set timeout to 120+ seconds.
- `cp -r temp-next/* . && cp temp-next/.* . 2>/dev/null || true` -- copy files to main directory
- `rm -rf temp-next` -- clean up temporary directory
- Wait for the installation to complete fully
- **NEVER CANCEL** package installations even if they appear to take a long time

### Development Workflow

#### Bootstrap and Build the Project:
- `npm install` -- takes 10-30 seconds. NEVER CANCEL. Set timeout to 120+ seconds.
- `npm run build` -- **KNOWN ISSUE**: Build may fail due to Google Fonts network restrictions. This is expected in sandboxed environments.
- `npm run dev` -- starts development server, takes 1-2 seconds. NEVER CANCEL. Set timeout to 60+ seconds.
- Development server runs on `http://localhost:3000`

#### Testing and Quality:
- `npm run lint` -- takes 1-5 seconds. NEVER CANCEL. Set timeout to 60+ seconds.
- `npm run type-check` -- TypeScript type checking (if script exists)
- **No test suite exists yet** - you may need to add Jest or Vitest if testing is required

#### Development Server:
- **ALWAYS run the initial setup steps first if the project is not initialized**
- Start development: `npm run dev`
- The server will be available at `http://localhost:3000`
- **NEVER CANCEL** the development server startup process

## Validation

### Manual Testing Requirements:
- **ALWAYS manually validate any changes** by running the development server
- **CRITICAL**: After making changes, always run through this validation:
  1. Start the development server with `npm run dev`
  2. Wait for "✓ Ready in XXXXms" message before proceeding
  3. Navigate to `http://localhost:3000` in your browser (if browser access available)  
  4. Verify the page loads without JavaScript errors
  5. Check browser console for any runtime errors
  6. Test navigation and interactive elements you've modified
  7. Stop the server with Ctrl+C when done testing

### Pre-commit Validation:
- **ALWAYS run `npm run lint` before committing** or the CI will fail
- Fix any linting errors before proceeding
- Ensure TypeScript compilation succeeds with `npm run build` (note the Google Fonts limitation)

### Known Limitations:
- **Google Fonts Issue**: Build process may fail due to external font requests being blocked in sandboxed environments
- **Network Restrictions**: Some external dependencies may fail to load during build
- **Workaround**: For development, the `npm run dev` server works correctly despite build issues

## Common Tasks

### Project Structure (Expected after initialization):
```
/
├── .github/
├── .next/                    # Build output (generated)
├── app/                      # Next.js App Router pages
├── components/               # React components (may be created)
├── public/                   # Static assets
├── styles/                   # CSS/styling files
├── package.json              # Dependencies and scripts
├── next.config.ts           # Next.js configuration
├── tailwind.config.ts       # Tailwind CSS config
├── tsconfig.json            # TypeScript configuration
├── eslint.config.mjs        # ESLint configuration
└── README.md                # Project documentation
```

### Key Dependencies (after setup):
- **React 19.1.0** - UI library
- **Next.js 15.5.0** - React framework
- **TypeScript ^5** - Type checking
- **Tailwind CSS** - Utility-first CSS
- **ESLint** - Code linting

### Adding New Features:
- Create React components in `/app` or `/components` directory
- Use TypeScript for all new code
- Follow Next.js App Router conventions
- Use Tailwind CSS for styling
- Always run linting after changes

### Environment Variables:
- Create `.env.local` for local environment variables
- Use `process.env.VARIABLE_NAME` in code
- **NEVER commit sensitive environment variables**

## Timing Expectations

**MEASURED TIMINGS (actual test results):**
- **Project initialization**: 25-30 seconds (tested)
- **npm install**: Not needed after initialization (dependencies already installed)
- **npm run dev startup**: 1-2 seconds (tested: "✓ Ready in 1131ms")
- **npm run build**: May fail due to network restrictions, expect 10-30 seconds if successful  
- **npm run lint**: 1-2 seconds (tested: instantaneous)

**NEVER CANCEL these operations** - they complete quickly but set generous timeouts to be safe.

## Repository Status

- **Current State**: Minimal repository with only README.md and .gitignore
- **Technology Stack**: Node.js 20.19.4, npm 10.8.2, yarn 1.22.22 available
- **Next Steps**: Initialize Next.js project on first use
- **Gitignore**: Already configured for Node.js/TypeScript/Next.js development

## Development Environment

- **Node.js**: v20.19.4 (available)
- **npm**: v10.8.2 (available)  
- **yarn**: v1.22.22 (available)
- **Git**: Available for version control

## Critical Reminders

- **NEVER CANCEL** long-running operations like package installs or builds
- **ALWAYS** set timeouts of 120+ seconds for npm operations
- **ALWAYS** validate your changes by running the development server
- **ALWAYS** run linting before committing changes
- **Repository name translates to "My Organized House"** - this should be a home organization application