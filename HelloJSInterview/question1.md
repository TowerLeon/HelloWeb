give me three requirements and let me finish them with nodejs

Nice—here are **3 practical Node.js requirements**, each a step up in difficulty. They’re intentionally a bit underspecified, like real work. You fill in the details and implement them.

---

## ✅ Requirement 1 — HTTP + Basics (warm-up)

**Build a simple REST service**

**Must do**

* Use **Node.js** (plain `http` or Express—your choice)
* Expose endpoint:
  `POST /echo`
* Accept JSON body:

  ```json
  { "message": "hello" }
  ```
* Respond with:

  ```json
  {
    "message": "hello",
    "length": 5,
    "timestamp": "<ISO-8601>"
  }
  ```

**Constraints**

* Validate input (missing / non-string message → 400)
* No global variables for request state

**What this tests**

* HTTP basics
* JSON parsing
* Validation
* Clean response design

---

## ✅ Requirement 2 — Async + Filesystem (real-world)

**Build a lightweight task logger**

**Must do**

* Endpoint: `POST /tasks`
* Body:

  ```json
  { "title": "learn node", "priority": 2 }
  ```
* Append each task to a file `tasks.log` (JSON Lines format)
* Each record must include:

    * `id` (UUID or equivalent)
    * `title`
    * `priority`
    * `createdAt`

**Constraints**

* File writes must be **non-blocking**
* Handle concurrent requests safely
* Reject priority outside `1–5`

**Bonus**

* `GET /tasks` returns all tasks (streaming preferred)

**What this tests**

* async/await
* fs streams
* race-condition awareness
* data modeling

---

## ✅ Requirement 3 — Architecture + Reliability (hard)

**Build a rate-limited API with in-memory state**

**Must do**

* Endpoint: `GET /api/data`
* Rate limit: **5 requests per minute per IP**
* Exceed → HTTP `429`

**Additional rules**

* Reset window automatically
* No external databases or Redis
* Code must be testable (logic separated from server wiring)

**Bonus**

* Graceful shutdown (`SIGINT`)
* Unit tests for limiter logic

**What this tests**

* State management
* Time windows
* Separation of concerns
* Production thinking

---

## How I suggest you do this

1. Finish **Requirement 1**
2. Paste your code here
3. I’ll review it like a senior engineer:

    * correctness
    * async mistakes
    * Node.js best practices
    * edge cases

If you want:

* ❌ **No Express** (pure Node)
* 🧪 **Test-driven**
* 📦 **TypeScript**
* 🐳 **Dockerized**

Say the word and I’ll tighten the constraints 😄
