export interface Article {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  tags?: string[];
  content: string;
}

export const articles: Article[] = [
  {
    slug: "designing-for-failure",
    title: "Designing for Failure: Lessons from Production Incidents",
    description: "How embracing failure modes early in system design leads to more resilient architectures. A retrospective on incidents that shaped our approach.",
    date: "Dec 2024",
    readTime: "8 min",
    tags: ["Architecture", "SRE"],
    content: `
## The Inevitability of Failure

Every system fails. The difference between a minor blip and a major incident often comes down to decisions made months or years earlier, during the design phase. After a decade of building and operating distributed systems, I've learned that the most resilient architectures are those that embrace failure as a first-class design constraint.

## Lessons from the Field

### Lesson 1: Timeouts Are Not Optional

In 2019, we experienced a cascading failure that took down our entire payment processing pipeline. The root cause? A single downstream service that stopped responding, combined with the absence of proper timeouts.

Without timeouts, threads accumulated waiting for responses that would never come. Connection pools exhausted. Memory pressure mounted. Eventually, the entire system ground to a halt.

**The fix was simple:** Every external call now has an explicit timeout. We treat "no timeout specified" as a bug, enforced through linting and code review.

### Lesson 2: Circuit Breakers Save Lives

After the timeout incident, we implemented circuit breakers across all service boundaries. The pattern is straightforward:

- **Closed state:** Requests flow normally
- **Open state:** Requests fail fast without attempting the call
- **Half-open state:** Periodic probes test if the downstream has recovered

The key insight is that failing fast is often better than failing slow. A quick error response allows clients to implement fallback behavior, while a slow timeout cascades delays throughout the system.

### Lesson 3: Graceful Degradation Over Perfect Availability

Not all features are equally critical. During the design phase, we now explicitly categorize functionality:

- **Critical:** Must work or the entire product is unusable
- **Important:** Significantly degrades experience if unavailable
- **Nice-to-have:** Can be disabled without major impact

This classification drives architectural decisions. Critical paths get redundancy, caching, and fallback mechanisms. Nice-to-have features are designed to fail silently.

## Building a Culture of Resilience

Technical patterns are only part of the solution. We've also invested in:

- **Chaos engineering:** Regular failure injection in non-production environments
- **Game days:** Simulated incidents to practice response procedures
- **Blameless postmortems:** Focus on systemic improvements, not individual blame

## The Counterintuitive Truth

The systems that never fail are often the most dangerous. They create a false sense of security, and when they eventually do fail—and they will—nobody knows how to respond.

The systems I trust most are those that fail regularly, in small and contained ways, operated by teams that have practiced recovery so many times it's become routine.

---

*Failure is not the enemy. Surprise is.*
    `,
  },
  {
    slug: "case-against-microservices",
    title: "The Case Against Microservices (Sometimes)",
    description: "When a monolith is the right choice, and how to know when it is time to split. Trade-offs most teams get wrong.",
    date: "Oct 2024",
    readTime: "12 min",
    tags: ["Systems Design"],
    content: `
## The Microservices Pendulum

Every few years, the industry swings between architectural extremes. In the 2010s, microservices became the default answer to every scaling challenge. Now, we're seeing a correction—prominent voices advocating for monoliths, and companies consolidating their service sprawl.

The truth, as always, lies somewhere in the middle.

## When Monoliths Win

### Early Stage Products

For startups and new products, a well-structured monolith is almost always the right choice. The reasons are practical:

- **Velocity:** Fewer deployment pipelines, simpler debugging, faster iteration
- **Refactoring:** Changing boundaries is trivial when everything is in one codebase
- **Operational simplicity:** One thing to deploy, monitor, and scale

I've seen teams spend months building Kubernetes infrastructure and service mesh configurations when they had three engineers and zero users. That's time that should have gone into product development.

### Small to Medium Teams

The often-quoted rule of thumb—one service per team—exists for good reason. Services require ownership. Without dedicated teams, you get orphaned services, inconsistent practices, and operational burden that falls on whoever is unlucky enough to be on call.

If you have 10 engineers, you probably shouldn't have 50 services.

## When to Split

The decision to decompose should be driven by specific pain points, not architectural fashion:

### Independent Scaling Requirements

When one part of your system has fundamentally different scaling characteristics—say, a real-time analytics pipeline versus a CRUD API—separation makes sense. But be honest: do you actually have this problem, or do you anticipate having it someday?

### Team Autonomy

As organizations grow, coordination costs increase. Services can provide clear boundaries that allow teams to move independently. But this only works if those boundaries are well-defined and stable.

### Deployment Independence

If you need to deploy one component multiple times per day while others change monthly, separation reduces risk. Conversely, if everything always deploys together anyway, the separation is ceremony without benefit.

## The Hidden Costs

Before splitting, honestly assess whether you're prepared for:

- **Distributed system complexity:** Network partitions, eventual consistency, distributed tracing
- **Operational overhead:** More things to deploy, monitor, and debug
- **API versioning:** Breaking changes become much harder to coordinate
- **Data management:** Queries that were simple JOINs become cross-service orchestration

## My Framework

When evaluating architecture, I ask:

1. What specific problem are we solving by splitting?
2. Do we have the team structure to support independent ownership?
3. Are we willing to accept the operational complexity?
4. Have we exhausted simpler solutions (better modularity, async processing, caching)?

If the answers aren't compelling, the monolith stays.

---

*The best architecture is the simplest one that solves your actual problems.*
    `,
  },
  {
    slug: "database-migrations-at-scale",
    title: "Database Migrations at Scale: A Practical Guide",
    description: "Zero-downtime schema changes, backward compatibility, and the tooling we built to migrate 10TB without incidents.",
    date: "Aug 2024",
    readTime: "15 min",
    tags: ["Databases", "Infrastructure"],
    content: `
## The Challenge

Last year, we faced a daunting task: migrating our primary PostgreSQL database from a single 10TB instance to a sharded architecture, with zero downtime and no data loss. This is the story of how we did it.

## Principles That Guided Us

### 1. Every Change Must Be Backward Compatible

This is non-negotiable for zero-downtime migrations. Every schema change must work with both the old and new versions of application code. In practice, this means:

- **Adding columns:** Always nullable or with defaults
- **Removing columns:** First stop reading, then stop writing, then drop
- **Renaming:** Add new column, dual-write, backfill, switch reads, drop old

### 2. Small Steps, Frequently

Large migrations are terrifying. Small migrations are routine. We broke our 10TB migration into hundreds of incremental steps, each deployed independently:

- Add new tables
- Start dual-writing
- Backfill historical data (in batches)
- Switch reads
- Remove old writes
- Drop old tables

### 3. Automated Verification

Every migration included:

- Pre-migration consistency checks
- Post-migration data validation
- Automatic rollback triggers if thresholds exceeded

## The Tooling We Built

### Migration Orchestrator

A custom tool that managed the migration state machine:

\`\`\`
PENDING → DUAL_WRITE → BACKFILLING → SWITCHING → COMPLETE
                ↓           ↓            ↓
             FAILED      FAILED       FAILED
                ↓           ↓            ↓
           ROLLING_BACK  ROLLING_BACK  ROLLING_BACK
\`\`\`

Each state transition was logged, monitored, and reversible.

### Backfill Engine

For 10TB of historical data, naive approaches don't work. Our backfill engine:

- Processed data in configurable batch sizes
- Throttled based on database load
- Checkpointed progress for resume capability
- Ran during off-peak hours automatically

### Shadow Comparison

Before switching reads, we ran both paths in parallel:

- Execute query against old system
- Execute query against new system
- Compare results
- Log discrepancies

This caught edge cases our tests had missed.

## Lessons Learned

### Expect the Unexpected

Despite months of planning, we encountered:

- Queries that behaved differently due to index differences
- Edge cases in data that our migration logic didn't handle
- Performance characteristics that varied under production load

The ability to pause, investigate, and resume was invaluable.

### Communication Is Everything

Technical execution was only half the battle. We maintained:

- Daily status updates to stakeholders
- Clear escalation paths
- Documented rollback procedures everyone understood

### Celebrate the Boring

The best migrations are boring. No drama, no heroics, no late nights. If you're excited during a migration, something has probably gone wrong.

---

*The goal isn't to migrate fast. The goal is to migrate safely.*
    `,
  },
  {
    slug: "technical-debt-framework",
    title: "On Technical Debt and When to Pay It",
    description: "A framework for quantifying technical debt and making business cases for refactoring work.",
    date: "May 2024",
    readTime: "6 min",
    tags: ["Engineering Culture"],
    content: `
## Beyond the Metaphor

"Technical debt" is a useful metaphor, but it's often too vague to drive decisions. When everything is debt, nothing is prioritized. We needed a more rigorous framework.

## Categorizing Debt

Not all debt is equal. We classify it into three categories:

### 1. Velocity Debt

Debt that slows down future development. Symptoms:

- Long onboarding times for new features
- Repeated bugs in the same areas
- Fear of changing certain code paths

**Quantification:** Track time spent on workarounds, bug fixes, and "understanding the system" versus new feature development.

### 2. Reliability Debt

Debt that increases incident risk. Symptoms:

- Frequent pages for the same systems
- Manual intervention required for routine operations
- Missing monitoring or alerting

**Quantification:** Incident frequency, MTTR, and on-call burden.

### 3. Scalability Debt

Debt that limits growth. Symptoms:

- Performance degradation under load
- Manual capacity planning
- Known bottlenecks waiting to become problems

**Quantification:** Current utilization versus limits, projected growth, and time to hit constraints.

## Making the Business Case

Engineers often struggle to justify refactoring work because they frame it in technical terms. Business stakeholders don't care about code quality—they care about outcomes.

Instead of: *"We need to refactor the authentication module."*

Try: *"The authentication system causes 40% of our on-call pages. Refactoring would reduce incidents by an estimated 30 hours per month of engineering time, plus reduce customer-facing authentication errors by 50%."*

## The Debt Budget

We allocate 20% of each sprint to debt reduction. This isn't negotiable—it's a fixed cost of maintaining a healthy codebase. The team decides how to spend it based on the highest-impact opportunities.

## When Not to Pay

Some debt isn't worth addressing:

- **Stable systems:** If it's not changing and not causing problems, leave it alone
- **Sunset code:** Don't refactor what you're replacing
- **Premature optimization:** Debt that might matter someday isn't debt today

## The Compound Interest Problem

The most dangerous debt is the kind that accumulates silently. Small shortcuts compound. Today's hack becomes tomorrow's assumption becomes next year's "that's just how it works."

Regular debt review—quarterly at minimum—catches these before they become architectural constraints.

---

*Technical debt is a choice. Make it consciously.*
    `,
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug);
}
