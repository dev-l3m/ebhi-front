<template>
  <v-dialog v-model="dialogModel" :max-width="maxWidth" scrollable persistent>
    <v-card rounded="xl">
      <v-card-title class="pa-6">
        <v-icon color="primary" class="mr-2">{{ editing ? 'mdi-pencil' : 'mdi-plus' }}</v-icon>
        {{ editing ? editTitle : createTitle }}
      </v-card-title>
      <v-divider></v-divider>
      <v-card-text class="pa-6">
        <v-form ref="form" v-model="valid">
          <slot name="form" :editing="editing" :form-data="formData"></slot>
        </v-form>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions class="pa-6">
        <v-spacer></v-spacer>
        <v-btn variant="text" @click="handleCancel" rounded="lg"> Annuler </v-btn>
        <v-btn
          color="primary"
          @click="handleSave"
          :loading="saving"
          :disabled="!valid"
          rounded="lg"
        >
          {{ editing ? 'Modifier' : 'Créer' }}
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup>
import { ref, watch, computed } from 'vue'

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  },
  editing: {
    type: Boolean,
    default: false
  },
  createTitle: {
    type: String,
    default: 'Nouvel élément'
  },
  editTitle: {
    type: String,
    default: "Modifier l'élément"
  },
  maxWidth: {
    type: [String, Number],
    default: 900
  },
  saving: {
    type: Boolean,
    default: false
  },
  initialData: {
    type: Object,
    default: () => ({})
  }
})

const emit = defineEmits(['update:modelValue', 'save', 'cancel'])

const dialogModel = computed({
  get: () => props.modelValue,
  set: value => emit('update:modelValue', value)
})

const form = ref(null)
const valid = ref(false)
const formData = ref({ ...props.initialData })

watch(
  () => props.initialData,
  newData => {
    formData.value = { ...newData }
  },
  { deep: true }
)

watch(
  () => props.modelValue,
  isOpen => {
    if (isOpen) {
      formData.value = { ...props.initialData }
    } else {
      form.value?.resetValidation()
    }
  }
)

const handleSave = () => {
  if (valid.value) {
    emit('save', formData.value)
  }
}

const handleCancel = () => {
  emit('cancel')
  dialogModel.value = false
}
</script>
