<script setup lang="ts">
import { ref } from 'vue';

const todos = ref<Array<string>>([]);
const inputText = ref<string>('');
let modalVisible = ref<boolean>(false);

function createTodo() {
  if (!inputText.value.length) return alert('Insert some value');
  if (todos.value.find((todo) => todo === inputText.value))
    return (modalVisible.value = true);

  todos.value.push(inputText.value);
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

  <v-list lines="one" class="list">
    <v-list-item v-for="(item, index) in todos" :key="index" :title="item">
    </v-list-item>
  </v-list>
  Duplicated Name There are already an todo with same predicted name

  <!-- modal -->
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
              todos.push(inputText);
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
  margin: 0 20px;
}
</style>
