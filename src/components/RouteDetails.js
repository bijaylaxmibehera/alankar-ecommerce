import { createBrowserRouter } from 'react-router-dom'
import Wishlist from './Wishlist/Wishlist'
import RootLayout from './RootLayout/RootLayout'
import Home from './Home/Home'
import Cart from './Cart/Cart'
import Signup from './Signup/Signup'
import Login from './Login/Login'
import Profile from './Profile/Profile'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/wishlists',
        element: <Wishlist />
      },
      {
        path: '/cart',
        element: <Cart />
      },
      {
        path: '/profile',
        element: <Profile />
      },
      {
        path: '/signup',
        element: <Signup />
      },
      {
        path: '/login',
        element: <Login />
      },
    ]
  }
])

export default router
