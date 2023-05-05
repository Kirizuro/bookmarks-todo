<script setup lang="ts">
import { ref } from 'vue';
import { useCounterStore } from '@store/todo';

const { todos, editTodo, insertTodo, removeTodo } = useCounterStore();

const inputText = ref<string>('');
let modalVisible = ref<boolean>(false);

function createTodo() {
  if (!inputText.value.trim().length) return alert('Insert some value');
  if (todos.find((todo) => todo === inputText.value))
    return (modalVisible.value = true);

  insertTodo(inputText.value);

  inputText.value = '';
}
</script>

<template>
  <div class="container">
    <input
      class="input"
      @keyup.enter="createTodo()"
      type="text"
      placeholder="Insert todo name"
      v-model="inputText"
    />
  </div>

  <v-list v-if="todos.length" lines="one" class="list">
    <v-hover v-slot="{ isHovering, props }">
      <v-list-item
        v-for="(item, index) in todos"
        :key="index"
        :title="item"
        v-bind="props"
      >
        <v-btn variant="text" v-show="isHovering"> teste {{ index }} </v-btn>
      </v-list-item>
    </v-hover>
  </v-list>

  <v-dialog v-model="modalVisible" persistent width="auto">
    <v-card>
      <v-card-title class="text-h5"> Duplicated Name</v-card-title>
      <v-card-text
        >There are already an todo with same predicted name</v-card-text
      >
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="green-darken-1"
          variant="text"
          @click="modalVisible = false"
        >
          Disagree
        </v-btn>
        <v-btn
          color="green-darken-1"
          variant="text"
          @click="
            {
              modalVisible = false;
              insertTodo(inputText);
              inputText = '';
            }
          "
        >
          Agree
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
}

.input {
  padding: 20px;
  width: 80%;
  border-radius: 20px;
  border-style: none;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}

.list {
  margin: 30px 20px;
  background-color: #fff;
  border-radius: 30px;
}
</style>
