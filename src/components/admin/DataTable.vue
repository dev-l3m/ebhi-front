<template>
  <v-card elevation="4" rounded="xl">
    <v-card-title class="pa-6">
      <v-icon :color="iconColor" class="mr-2">{{ icon }}</v-icon>
      {{ title }} ({{ total }})
    </v-card-title>
    <v-divider></v-divider>
    <v-data-table
      :headers="headers"
      :items="items"
      :loading="loading"
      :items-per-page="pagination.limit"
      :page="pagination.page"
      @update:page="handlePageChange"
      class="elevation-0"
    >
      <template v-for="(_, slot) in $slots" v-slot:[slot]="props">
        <slot :name="slot" v-bind="props"></slot>
      </template>
    </v-data-table>
    <v-divider v-if="showPagination"></v-divider>
    <v-card-actions v-if="showPagination" class="pa-4">
      <v-spacer></v-spacer>
      <v-pagination
        :model-value="pagination.page"
        :length="pagination.totalPages"
        :total-visible="7"
        @update:model-value="handlePageChange"
      ></v-pagination>
    </v-card-actions>
  </v-card>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    default: 'mdi-table'
  },
  iconColor: {
    type: String,
    default: 'primary'
  },
  headers: {
    type: Array,
    required: true
  },
  items: {
    type: Array,
    default: () => []
  },
  loading: {
    type: Boolean,
    default: false
  },
  total: {
    type: Number,
    default: 0
  },
  pagination: {
    type: Object,
    default: () => ({
      page: 1,
      limit: 10,
      totalPages: 0
    })
  },
  showPagination: {
    type: Boolean,
    default: true
  }
})

const emit = defineEmits(['page-change'])

const handlePageChange = page => {
  emit('page-change', page)
}
</script>

<style scoped>
.v-data-table {
  background: transparent;
}
</style>
