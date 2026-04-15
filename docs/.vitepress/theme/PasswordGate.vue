<script setup lang="ts">
import { ref, onMounted } from 'vue'

const password = ref('')
const authenticated = ref(false)
const error = ref(false)
const STORAGE_KEY = 'cosy-portal-auth'
const CORRECT_PASSWORD = 'cosy2026'

onMounted(() => {
  if (typeof window !== 'undefined') {
    const saved = sessionStorage.getItem(STORAGE_KEY)
    if (saved === 'true') {
      authenticated.value = true
    }
  }
})

function handleSubmit() {
  if (password.value === CORRECT_PASSWORD) {
    authenticated.value = true
    error.value = false
    sessionStorage.setItem(STORAGE_KEY, 'true')
  } else {
    error.value = true
    password.value = ''
  }
}
</script>

<template>
  <div v-if="!authenticated" class="gate">
    <div class="gate-content">
      <div class="logo">🏠</div>
      <h1 class="title">COSY Portal</h1>
      <p class="tagline">크리에이터의 운영체제</p>
      <p class="subtitle">Creator Operating System Yours</p>
      <form class="input-group" @submit.prevent="handleSubmit">
        <input
          v-model="password"
          type="password"
          placeholder="비밀번호를 입력하세요"
          :class="{ 'input-error': error }"
          autofocus
        />
        <button type="submit">입장</button>
      </form>
      <p v-if="error" class="error-msg">비밀번호가 올바르지 않습니다.</p>
      <p class="footer-text">© 2026 COSY Portal (EP × glowuprizz JV)</p>
    </div>
  </div>
  <slot v-else />
</template>

<style scoped>
.gate {
  position: fixed;
  inset: 0;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #0a0a0c;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
}

.gate-content {
  text-align: center;
  max-width: 480px;
  padding: 2rem;
}

.logo {
  font-size: 3rem;
  margin-bottom: 1rem;
  filter: drop-shadow(0 0 20px rgba(72, 187, 120, 0.3));
}

.title {
  font-size: 2.5rem;
  font-weight: 300;
  letter-spacing: 0.3em;
  color: #e8e6e3;
  margin-bottom: 0.5rem;
}

.tagline {
  font-size: 1rem;
  color: #48bb78;
  font-style: italic;
  margin-bottom: 0.25rem;
}

.subtitle {
  font-size: 0.85rem;
  color: #666;
  margin-bottom: 2rem;
}

.input-group {
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  margin-bottom: 1rem;
}

.input-group input {
  padding: 0.75rem 1.25rem;
  border: 1px solid #2d2d35;
  border-radius: 8px;
  background: #16161a;
  color: #e8e6e3;
  font-size: 0.9rem;
  width: 260px;
  outline: none;
  transition: border-color 0.2s;
}

.input-group input:focus {
  border-color: #48bb78;
}

.input-group input.input-error {
  border-color: #e53e3e;
}

.input-group button {
  padding: 0.75rem 1.5rem;
  border: 1px solid #48bb78;
  border-radius: 8px;
  background: transparent;
  color: #48bb78;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.2s;
}

.input-group button:hover {
  background: #48bb78;
  color: #0a0a0c;
}

.error-msg {
  color: #e53e3e;
  font-size: 0.8rem;
  margin-top: 0.5rem;
}

.footer-text {
  color: #444;
  font-size: 0.75rem;
  margin-top: 2rem;
}
</style>
