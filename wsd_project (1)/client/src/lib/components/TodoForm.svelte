<script>
  import { useTodoState } from "$lib/states/todoState.svelte.js";
  let todoState = useTodoState();

  const addTodo = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const todo = Object.fromEntries(form);
    todo.id = crypto.randomUUID();
    todo.done = form.get("done") ? true : false;
    todoState.add(todo);
    e.target.reset();
  };
</script>

<form on:submit={addTodo}>
  <label for="name">Todo</label>
  <input id="name" name="name" type="text" placeholder="Enter a new todo" required />
  <div>
    <input id="done" name="done" type="checkbox" />
    <label for="done">Done</label>
  </div>
  <input type="submit" value="Add Todo" />
</form>
