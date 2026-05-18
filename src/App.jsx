import { RouterProvider } from 'react-router-dom';
import router from './router';
import useDarkMode from './hooks/useDarkMode';

function App() {
  useDarkMode(); // Inicializa el tema

  return (
    <RouterProvider router={router} />
  );
}

export default App;
