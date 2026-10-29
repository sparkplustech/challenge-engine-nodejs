# Challenge Engine – Backend Learner Guide

**Step-by-step guide to complete backend challenges, run reviews, and keep your repository up to date.**

---

## Step 1: Clone the Repository

Clone the repository to your computer:

```bash
git clone https://github.com/sparkplustech/challenge-engine-nodejs.git
cd challenge-engine-nodejs
```

---

## Step 2: Create Your Own GitHub Repository

Create a personal GitHub repository where you'll save your challenge work.

1. Sign in to GitHub.
2. Click **+ → New repository**.
3. Give it a name (for example: `my-nodejs-challenge-engine`).
4. Leave it **empty** (don't add a README or `.gitignore`).
5. Click **Create repository**.
6. Copy the repository's **HTTPS URL**.

You'll use this as your **origin** repository.

---

## Step 3: Configure Git Remotes

From the project root, run:

```bash
git remote add upstream https://github.com/sparkplustech/challenge-engine-nodejs.git
git remote set-url origin <your-repository-url>
git remote -v
```

Replace:

```text
<your-repository-url>
```

with your own GitHub repository URL.

Your remotes should look like:

- **origin** → Your GitHub repository
- **upstream** → Course repository

---

## Step 4: Run Setup (One Time)

From the repository root:

```bash
npm run setup
```

This command will:

- Install project dependencies.
- Set up all backend course projects.
- Prepare the review engine.
- Install everything needed to start solving challenges.

> Run this once when you first clone the repository and again after pulling major updates.

---

## Step 5: Configure AI Review (Optional)

If you want AI-powered code reviews, create a `.env` file in the repository root:

```env
GROQ_API_KEY=your_api_key
```

The review engine will automatically use this key when available.

> **Note:** AI Review is optional. The challenge engine works normally without it.

---

## Step 6: Install Nodemon (One Time Per Course)

Each backend course uses **nodemon** during development.

Before starting a course, install it inside that course's project folder:

```bash
cd courses/<course-id>/project
npm install --save-dev nodemon
```

Examples:

```bash
cd courses/01-javascript-fundamentals-async/project
npm install --save-dev nodemon
```

```bash
cd courses/02-nodejs-core-fundamentals/project
npm install --save-dev nodemon
```

Repeat this once for every course you work on.

---

## Step 7: Start the Dashboard

Build the dashboard once:

```bash
npm run dashboard:build
```

Start the dashboard:

```bash
npm run dashboard
```

Dashboard URL:

```
http://localhost:7700
```

## Step 8: Start a Course Project

Choose the course you're working on.

Example:

```bash
cd courses/01-javascript-fundamentals-async/project
npm run dev
```

Other available backend courses:

```text
courses/02-nodejs-core-fundamentals/project
courses/03-express-rest-api-development/project
courses/04-typescript-backend-development/project
courses/05-nestjs-enterprise-framework/project
```

Each course project runs independently.
Refer the challengeflow.md for more clarification 

---

## Step 9: Complete a Challenge

1. Open a challenge from the dashboard or open its README:

```
courses/<course-id>/project/challenges/<challenge-id>/README.md
```

2. Read the requirements carefully.
3. Modify **only** the files listed under **Files In Scope**.
4. Save your changes.

---

## Step 10: Run a Review

From the repository root:

```bash
npm run review:challenge -- --course=<courseId> --challenge=<challengeId>
```

Example:

```bash
npm run review:challenge -- --course=01-javascript-fundamentals-async --challenge=01-es6-syntax-foundations
```

You can also run reviews directly from the dashboard by clicking **Run Review**.

Keep improving your solution until you pass.

---

## Step 11: Push Your Work

Save your progress to GitHub:

```bash
git add .
git commit -m "Complete challenge 01-es6-syntax-foundations"
git push -u origin main
```

After your first push, simply use:

```bash
git push
```

---

## Step 12: Get Latest Course Updates

To receive new challenges and updates from the course repository:

```bash
npm run sync-upstream
```

Or manually:

```bash
git add .
git commit -m "WIP before update"
git fetch upstream
git merge upstream/main -X theirs
```

After updating, run setup again:

```bash
npm run setup
```

---

# Quick Reference

| Task | Command |
|------|---------|
| First-time setup | `npm run setup` |
| Build dashboard | `npm run dashboard:build` |
| Start dashboard | `npm run dashboard` |
| Dashboard development | `npm run dashboard:dev` |
| Install nodemon | `cd courses/<course>/project && npm install --save-dev nodemon` |
| Start a course | `cd courses/<course>/project && npm run dev` |
| Review one challenge | `npm run review:challenge -- --course=<courseId> --challenge=<challengeId>` |
| Review an entire course | `npm run review:course -- --course=<courseId>` |
| Review all courses | `npm run review:all` |
| Push your work | `git add . && git commit -m "..." && git push` |
| Sync with course updates | `npm run sync-upstream` |

---

# Troubleshooting

### Setup fails

Run:

```bash
npm install
npm run setup
```

---

### Dashboard doesn't start

Build it first:

```bash
npm run dashboard:build
npm run dashboard
```

---

### `nodemon` is not recognized

Install it inside the course project:

```bash
npm install --save-dev nodemon
```

---

### Review score is 0%

Check that:

- You only modified the required files.
- Placeholder code (`TODO`, `throw new Error(...)`) has been removed.
- The required function is exported correctly.

---

### Git remotes are incorrect

Check your remotes:

```bash
git remote -v
```

Update your origin:

```bash
git remote set-url origin <your-repository-url>
```

Add the course repository if it's missing:

```bash
git remote add upstream https://github.com/sparkplustech/challenge-engine-nodejs.git
```

---

### Merge conflicts

Use:

```bash
npm run sync-upstream
```

or

```bash
git merge upstream/main -X theirs
```

---

# How Your Challenges Are Scored

Each challenge is evaluated using:

- ✅ Functional Tests
- ✅ Code Quality
- ✅ Required Architecture
- ✅ Best Practices
- ✅ AI Review (if configured)

> **Note:** A challenge containing placeholder code or missing required files will receive a **0% score**.

---

# Generated Reports

The review engine automatically updates:

- `learner-results/progress.json`
- `pathway-review/pathway-summary.json`
- `pathway-review/skill-breakdown.json`

These files track your progress across all backend courses.

---

## Happy Coding! 🚀