"use client";

import { useState, useEffect } from "react";
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";
import "./../app/app.css";
import { Amplify } from "aws-amplify";
import outputs from "@/amplify_outputs.json";
import "@aws-amplify/ui-react/styles.css";
import { Button } from '@/components/ui/button'
import Link from 'next/link'

Amplify.configure(outputs);

const client = generateClient<Schema>();

export default function App() {
  const [todos, setTodos] = useState<Array<Schema["Todo"]["type"]>>([]);

  function listTodos() {
    client.models.Todo.observeQuery().subscribe({
      next: (data) => setTodos([...data.items]),
    });
  }

  useEffect(() => {
    listTodos();
  }, []);

  function createTodo() {
    client.models.Todo.create({
      content: window.prompt("Todo content"),
    });
  }

  return (
      <main>
          <h1>My todos</h1>
          <button onClick={createTodo}>+ new</button>
          <ul>
              {todos.map((todo) => (
                  <li key={todo.id}>{todo.content}</li>
              ))}
          </ul>
          <div>
              🥳 App successfully hosted. Try creating a new todo.
              <br/>
              <a href="https://docs.amplify.aws/nextjs/start/quickstart/nextjs-app-router-client-components/">
                  Review next steps of this tutorial.
              </a>
          </div>
          <div className="flex min-h-[calc(100vh-8rem)] items-center justify-center">
              <div className="text-center">
                  <h1 className="text-4xl font-bold mb-4">Welcome to GigPro</h1>
                  <p className="text-xl mb-8">Manage your gigs, acts, and website with ease</p>
                  <div className="flex gap-4 justify-center">
                      <Button asChild>
                          <Link href="/act-manager">Act Manager</Link>
                      </Button>
                      <Button asChild>
                          <Link href="/gig-manager">Gig Manager</Link>
                      </Button>
                      <Button asChild>
                          <Link href="/website-manager">Website Manager</Link>
                      </Button>
                  </div>
              </div>
          </div>
      </main>
  );
}
