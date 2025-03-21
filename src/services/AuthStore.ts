import { defineStore } from 'pinia'

export const authSetStore = defineStore('auth', {
  state: () => ({
    user: JSON.parse(localStorage.getItem('user') || 'null'),
    token: localStorage.getItem('token') || null,
  }),

  actions: {
    login(userData: { email: string; password: string }): boolean {
      const validEmail = 'adso@xample.com'
      const validPassword = '1234'
      debugger
      if (userData.email === validEmail && userData.password === validPassword) {
        const mockUser = { id: 1, name: 'Usuario demo', email: userData.email }
        const mockToken = 'fake-jwt-token'

        this.user = mockUser
        this.token = mockToken

        localStorage.setItem('user', JSON.stringify(mockUser))
        localStorage.setItem('token', mockToken)

        return true // Devuelve `true` y deja que el componente maneje la redirección
      }

      return false
    },
  },
})
