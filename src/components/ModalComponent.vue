<script setup lang="ts">
interface Props {
  modalVisible: boolean;
  titleModal: string;
  textModal: string;
  acceptedText?: string;
  declineText?: string;
}
interface Emits {
  (e: 'closeModal'): void;
  (e: 'closeModalAccepted'): void;
}

const emit = defineEmits<Emits>();
const props = withDefaults(defineProps<Props>(), {
  acceptedText: 'Agree',
  declineText: 'Disagree',
});
</script>

<template>
  <v-dialog :v-model="modalVisible" persistent width="auto">
    <v-card>
      <v-card-title class="text-h5">{{ titleModal }}</v-card-title>
      <v-card-text>{{ textModal }}</v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="green-darken-1"
          variant="text"
          @click="$emit('closeModal')"
        >
          {{ declineText }}
        </v-btn>
        <v-btn
          color="green-darken-1"
          variant="text"
          @click="$emit('closeModalAccepted')"
        >
          {{ acceptedText }}
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<style scoped></style>
