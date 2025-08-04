# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

- Created Vite+React app
- Installed Tailwind CSS
- Installed DaisyUI and added navbar component 
- Installed React router DOM
- Navigation overview
  Body 
    NavBar
    Route = / Feed
    Route = /login Login
    Route = /signup Signup
    Route = /connections Connections
    Route = /profile 
- Installed Axios for api calling
- CORS - solve CORS error in backend -> add middleware with configs, credentials: true and add your   local dev env url to whitelist it 
- Pass {withCredentials:true} to Axios call
- Installed Redux
- Created a redux store, reducer and slice
