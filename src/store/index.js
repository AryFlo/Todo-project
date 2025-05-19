import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persist'

export const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)