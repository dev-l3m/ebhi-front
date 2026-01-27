<template>
  <v-dialog v-model="dialogModel" max-width="500" persistent>
    <v-card rounded="xl">
      <v-card-title class="pa-6 text-error">
        <v-icon color="error" class="mr-2">mdi-alert</v-icon>
        Confirmer la suppression
      </v-card-title>
      <v-divider></v-divider>
      <v-card-text class="pa-6">
        <p v-if="itemName">
          Êtes-vous sûr de vouloir supprimer <strong>{{ itemName }}</strong> ?
        </p>
        <p v-else>
          Êtes-vous sûr de vouloir supprimer cet élément ?
        </p>
        <p class="text-caption text-grey-darken-1 mt-2">Cette action est irréversible.</p>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions class="pa-6">
        <v-spacer></v-spacer>
        <v-btn variant="text" @click="handleCancel" rounded="lg">Annuler</v-btn>
        <v-btn color="error" @click="handleDelete" :loading="deleting" rounded="lg">Supprimer</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  },
  itemName: {
    type: String,
    default: ''
  },
  deleting: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['update:modelValue', 'confirm'])

const dialogModel = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value)
})

const handleDelete = () => {
  emit('confirm')
}

const handleCancel = () => {
  dialogModel.value = false
}
</script>
