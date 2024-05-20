import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { AuthProvider } from './assets/contexts/AuthProvider.tsx'
import { UserProvider } from './assets/contexts/UserProvider.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <AuthProvider>
    <UserProvider>
    <App />
    </UserProvider>
  </AuthProvider>,
)
