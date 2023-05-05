import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useCounterStore = defineStore('todo', () => {
  const todos = ref<Array<string>>([]);

  function insertTodo(todoTitle: string) {
    todos.value.push(todoTitle);
  }

  function removeTodo(todoId: number) {
    todos.value.filter((todo) => todo[todoId]);
  }

  function editTodo(todoId: number, newTodoTitle: string) {
    todos.value[todoId] = newTodoTitle;
  }

  return { todos, insertTodo, editTodo, removeTodo };
});
