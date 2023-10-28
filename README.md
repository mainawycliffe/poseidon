### Experiment Firebase Headless CMS

This is a simple experiment to test the use of Firebase as a headless CMS.

I am going to use Angular to Build the CMS and you will provide schemas, that
will be used to generate the UI for the CMS. The Data will be stored in
Firestore, Firebase Authentication will be used to authenticate users (Not part
of MVP).

The CMS will be able to create, read, update and delete data from Firestore.

(I am probably way over my head here, but I want to try it anyway)

### MVP

- [ ] Provide UI to create, read, update and delete data from Firestore
- [ ] Handle Security Rules for Firestore (Major Challenge, I have no idea how
      to do this, yet - we could use firebase functions to circumvent this
      though, but I would like to avoid that)
- [ ] Integrate a very Simplistic Authentication System (Firebase Auth) for MV -
      ignore user roles for now - all users are admins
- [ ] Provide decent way of managing Users (CRUD)
- [ ] Make use the Angular is hidden from the Developer (No need to know Angular
      to use this CMS, unless you want to extend it)
- [ ] Codegen the UI, something like `npx create-cms name-of-cms` and then
      `cd name-of-cms && npm start
- [ ] Need to be deployable, if it ever gets to that point

#### Ideas on Security Rules

Just a few ideas on how to handle security rules for Firestore:

- Generate security rules based on the schemas provided, i.e. for a schema
  `users` we would generate the following security rules:

```js
match /users/{userId} {
  allow read: if true;
  allow create: if true;
  allow update: if true;
  allow delete: if true;
}
```

NB: Once we have a way to manage user roles, we would need to add a check for whether the user is an admin or not.

- Provide a way to override the generated security rules.
- If the schema changes, we would need to update the security rules as well and
  before the CMS starts or in parallel.
- Firebase Functions would be a way to circumvent the security rules, but I
  would like to avoid that. It would be simpler though, as we would probably
  either deploy a single function to handle all CRUD operations or multiple
  functions per collection - delete, update, create, read.

### Stretch Goals

- [ ] Provide a way to manage user roles (After proof of concept)
- [ ] Provide endpoints for the CMS to be used by other applications, that are
      cached and hooked up to a CDN (Firebase Hosting)
- [ ] Provide away to bring the UI into none Angular Applications (React, Vue,
      Svelte, etc.)

### Way in the Future

- [ ] Provide a way for granular control of authorization, i.e. only allow
      certain users to update certain fields of a document
