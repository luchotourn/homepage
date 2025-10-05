# Code Efficiency Report - luchotourn/homepage

**Date:** October 2, 2025  
**Repository:** luchotourn/homepage  
**Analyzed by:** Devin AI

## Executive Summary

This report documents several code efficiency issues identified in the homepage codebase. These issues range from duplicated logic and redundant operations to opportunities for better code organization and potential performance improvements.

## Issues Identified

### ⭐ Issue #1: Duplicated File Reading Logic in blog.ts (FIXED IN PR)

**Severity:** Medium  
**Impact:** Performance & Maintainability  
**Location:** `src/lib/blog.ts`

**Description:**
Both `getPosts()` (lines 18-44) and `getAllPostSlugs()` (lines 68-77) independently perform the same file system operations:
- Check if the posts directory exists
- Read the directory contents
- Filter for `.md` files

This creates unnecessary duplicate file system operations and violates the DRY (Don't Repeat Yourself) principle.

**Current Implementation:**
```typescript
// In getPosts()
if (!fs.existsSync(postsDirectory)) {
  fs.mkdirSync(postsDirectory, { recursive: true });
  return [];
}
const fileNames = fs.readdirSync(postsDirectory);
const allPosts = fileNames.filter((name) => name.endsWith('.md'))...

// In getAllPostSlugs()
if (!fs.existsSync(postsDirectory)) {
  return [];
}
const fileNames = fs.readdirSync(postsDirectory);
return fileNames.filter((name) => name.endsWith('.md'))...
```

**Recommendation:**
Extract the common logic into a helper function `getMarkdownFiles()` that both functions can use.

**Status:** ✅ Fixed in this PR

---

### Issue #2: Duplicated Inline Styles Across Components

**Severity:** Low  
**Impact:** Maintainability & Code Size  
**Location:** `src/app/page.tsx`

**Description:**
The same style object is repeated multiple times throughout the homepage component:

```typescript
style={{ color: '#2563eb', opacity: 1, fontWeight: 'bold', textDecoration: 'underline', lineHeight: 1 }}
```

This appears on lines 33, 49, 58, and 67. If the link styling needs to change, it requires updating multiple locations.

**Recommendation:**
Extract these styles into:
1. A shared CSS class in `globals.css` (preferred for consistency with `.homepage-link` hover styles)
2. A constant object at the top of the file
3. A shared component for styled links

**Example Fix:**
```css
/* In globals.css */
.homepage-link {
  color: #2563eb;
  opacity: 1;
  font-weight: bold;
  text-decoration: underline;
  line-height: 1;
}
```

---

### Issue #3: Regex Operations Running on Every Request

**Severity:** Low  
**Impact:** Performance  
**Location:** `src/lib/about.ts` (lines 24, 27-30)

**Description:**
The `getAboutInfo()` function performs regex operations on markdown content every time it's called:

```typescript
descriptionHtml = descriptionHtml.replace(/<\/?p>/g, '');
descriptionHtml = descriptionHtml.replace(
  /<a[^>]*href="([^"]*)"[^>]*>([^<]*)<\/a>/g,
  '<a href="$1" target="_blank"...>$2</a>'
);
```

For static content that doesn't change frequently, these operations could be cached.

**Recommendation:**
1. Consider caching the processed result (though this may conflict with Next.js's built-in caching strategies)
2. Pre-process the content at build time if it's truly static
3. If using Next.js App Router, verify that the function is properly memoized

**Note:** Next.js may already be caching this effectively through its build process. Verify actual impact before optimizing.

---

### Issue #4: Inconsistent Directory Handling Between Functions

**Severity:** Low  
**Impact:** Consistency  
**Location:** `src/lib/blog.ts`

**Description:**
`getPosts()` creates the directory if it doesn't exist (line 21):
```typescript
fs.mkdirSync(postsDirectory, { recursive: true });
```

But `getAllPostSlugs()` simply returns an empty array (line 70).

This inconsistency could lead to unexpected behavior depending on which function is called first.

**Recommendation:**
Standardize the behavior - either both functions should create the directory, or neither should (creating it elsewhere, like in initialization).

**Note:** This is partially addressed by the fix in Issue #1, as the helper function now provides consistent behavior.

---

### Issue #5: Repeated Color Values Without Variables

**Severity:** Very Low  
**Impact:** Maintainability  
**Location:** Multiple files (`page.tsx`, `globals.css`)

**Description:**
Color values like `rgba(0, 0, 0, 0.7)` and `#2563eb` are repeated throughout the codebase without being defined as CSS variables or constants.

**Examples:**
- `rgba(0, 0, 0, 0.7)` appears in multiple places in `page.tsx`
- `#2563eb` (blue color) is used for link colors

**Recommendation:**
Define these as CSS custom properties or constants:

```css
:root {
  --text-primary: rgba(0, 0, 0, 0.7);
  --link-color: #2563eb;
  --link-hover-color: #60a5fa;
}
```

This makes it easier to maintain a consistent color scheme and adjust colors site-wide.

---

### Issue #6: Synchronous File Operations

**Severity:** Very Low  
**Impact:** Performance (context-dependent)  
**Location:** `src/lib/blog.ts` and `src/lib/about.ts`

**Description:**
All file operations use synchronous methods (`fs.readFileSync`, `fs.readdirSync`).

**Current Implementation:**
```typescript
const fileContents = fs.readFileSync(fullPath, 'utf8');
```

**Analysis:**
In the context of Next.js static site generation (SSG), synchronous file operations are actually acceptable and may even be preferred since:
- They run at build time, not at request time
- Next.js handles the build process asynchronously at a higher level
- Simpler code without async/await complexity

**Recommendation:**
No change needed unless the site switches to server-side rendering (SSR) for these pages. If moving to SSR, consider using the asynchronous versions (`fs.promises.readFile`).

---

## Summary

| Issue | Severity | Fixed | Priority for Future Work |
|-------|----------|-------|-------------------------|
| #1: Duplicated file reading logic | Medium | ✅ Yes | N/A |
| #2: Duplicated inline styles | Low | ❌ No | Medium |
| #3: Regex operations on every request | Low | ❌ No | Low |
| #4: Inconsistent directory handling | Low | ⚠️ Partially | Low |
| #5: Repeated color values | Very Low | ❌ No | Low |
| #6: Synchronous file operations | Very Low | ❌ No | Very Low |

## Recommendations for Future Improvements

1. **Create a shared styles configuration** - Extract common colors and styles into CSS variables or a theme configuration
2. **Consider a link component** - Create a reusable `<HomeLink>` component to eliminate duplicated link styling
3. **Performance monitoring** - Measure actual performance impact before optimizing further
4. **Code organization** - Consider moving file system utilities to a separate utilities module if the codebase grows

## Conclusion

The most impactful efficiency improvement has been implemented in this PR (Issue #1). The remaining issues are minor and can be addressed in future updates if needed. The codebase is generally well-structured and follows good Next.js patterns.
