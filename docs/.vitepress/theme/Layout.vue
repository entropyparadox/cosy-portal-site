<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import PasswordGate from './PasswordGate.vue'

const { Layout } = DefaultTheme
</script>

<template>
  <PasswordGate>
    <Layout />
  </PasswordGate>
</template>
