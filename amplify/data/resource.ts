import { type ClientSchema, a, defineData } from "@aws-amplify/backend";

/*== STEP 1 ===============================================================
The section below creates a Todo database table with a "content" field. Try
adding a new "isDone" field as a boolean. The authorization rule below
specifies that any user authenticated via an API key can "create", "read",
"update", and "delete" any "Todo" records.
=========================================================================*/
const schema = a.schema({
  Todo: a
    .model({
      content: a.string(),
      isDone: a.boolean(),
    })
    .authorization((allow) => [allow.publicApiKey()]),
    Venue: a
    .model({
      content: a.string(),
      isDone: a.boolean(),
    })
    .authorization((allow) => [allow.publicApiKey()]),
    Gig: a
    .model({
      content: a.string(),
      start: a.date(),
      end: a.date(),
      actId: a.integer(),
    })
    .authorization((allow) => [allow.publicApiKey()]),
    Act: a
    .model({
      name: a.string(),
      genre: a.string(),
      description: a.string(),
    })
    .authorization((allow) => [allow.publicApiKey()]),
    User: a
    .model({
      email: a.string(),
      password: a.string(),
      role: a.string(),
    })
    .authorization((allow) => [allow.publicApiKey()]),
    GigAct: a
    .model({
      gigId: a.integer(),
      actId: a.integer(),
    })
    .authorization((allow) => [allow.publicApiKey()]),
    VenueAct: a
    .model({
      venueId: a.integer(),
      actId: a.integer(),
    })
    .authorization((allow) => [allow.publicApiKey()]),
    UserAct: a
    .model({
      userId: a.integer(),
      actId: a.integer(),
    })
    .authorization((allow) => [allow.publicApiKey()]),
    UserVenue: a
    .model({
      userId: a.integer(),
      venueId: a.integer(),
    })
    .authorization((allow) => [allow.publicApiKey()]),
    UserGig: a
    .model({
      userId: a.integer(),
      gigId: a.integer(),
    })
    .authorization((allow) => [allow.publicApiKey()]),

});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: "apiKey",
    apiKeyAuthorizationMode: {
      expiresInDays: 30,
    },
  },
});

/*== STEP 2 ===============================================================
Go to your frontend source code. From your client-side code, generate a
Data client to make CRUDL requests to your table. (THIS SNIPPET WILL ONLY
WORK IN THE FRONTEND CODE FILE.)

Using JavaScript or Next.js React Server Components, Middleware, Server 
Actions or Pages Router? Review how to generate Data clients for those use
cases: https://docs.amplify.aws/gen2/build-a-backend/data/connect-to-API/
=========================================================================*/

/*
"use client"
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";

const client = generateClient<Schema>() // use this Data client for CRUDL requests
*/

/*== STEP 3 ===============================================================
Fetch records from the database and use them in your frontend component.
(THIS SNIPPET WILL ONLY WORK IN THE FRONTEND CODE FILE.)
=========================================================================*/

/* For example, in a React component, you can use this snippet in your
  function's RETURN statement */
// const { data: todos } = await client.models.Todo.list()

// return <ul>{todos.map(todo => <li key={todo.id}>{todo.content}</li>)}</ul>
