# 🥖 Bakery Ecommerce Project

An intuitive and responsive ecommerce platform for a fictitious bakery, allowing users to browse products, add them to their cart, and proceed to checkout. Built using **React**, **TypeScript**, **Redux**, and **CSS**.

## 📋 Project Overview

This project simulates an online store for a bakery, retrieving product data from a mock API. It demonstrates core ecommerce functionalities, including cart management, product browsing, and payment simulation. The main goal was to practice building a full-featured ecommerce site with advanced state management and form handling.

## 🚀 Key Features

### 🛒 Shopping Cart with Local Storage

- Utilizes the **Local Storage API** to preserve cart data across browser sessions.
- Ensures that products added to the cart remain available even after the user refreshes the page or closes the browser.

### 🔄 Global State Management with Redux

- Implements **Redux** for efficient global state management.
- Integrates **Redux Toolkit Query (RTK)** for streamlined API requests and caching.

### 📱 Responsive Design

- Designed to be fully responsive across all devices using **Flexbox** and **CSS Grid**.
- Provides an optimized experience on mobile, tablet, and desktop screens.

### 💳 Interactive Credit Card Input

- Uses **React-Credit-Cards-2** to offer an intuitive and user-friendly payment entry interface.
- Enhances the checkout process by providing real-time card validation feedback.

### ⚠️ Error Handling

- Displays **toast notifications** to alert users if the API is unreachable or if an error occurs.
- Ensures a smooth user experience by gracefully managing unexpected issues.

### 📝 Complex Form Validation

- Customizable form components with flexible validation rules passed as props.
- Prevents invalid inputs (e.g., letters, special characters, or numbers) based on specified rules.
- Supports custom validation logic and configurable form submission handling.

### 📦 Modular Component Architecture

- Components are designed with a clear and maintainable architecture.
- Simplifies onboarding for new developers by organizing components in a logical and easy-to-understand structure.

### 🎨 Pure Vanilla CSS

- No external CSS frameworks or libraries were used.
- Strengthens core **CSS** skills by implementing custom styles from scratch.

## 🛠️ Technologies Used

- **React**: Frontend framework for building dynamic user interfaces.
- **TypeScript**: Enhances JavaScript with type safety for better code quality and maintainability.
- **Redux & RTK**: State management and API data fetching.
- **Local Storage API**: Persists data locally in the user's browser.
- **React-Credit-Cards-2**: Provides an interactive credit card component.
- **CSS (Flexbox & Grid)**: Styles the entire application without relying on external libraries.

## 📅 Project Duration

- **Development Time**: 2 weeks

## 💡 How to Run the Project

1. **Clone the repository:**

   ```bash
   git clone https://github.com/nicktechz/dh-ecommerce-frontend-app.git
   ```

2. **Install dependencies:**

   ```bash
   pnpm install
   ```

3. **Start the development server:**

   ```bash
   pnpm run dev
   ```

4. **Open the server:** You can open the project on http://localhost:5153

## Contact

For any questions or feedback, please reach out to:

Nicolas Andres Rueda Macias

- Email: nicktechz0510@gmail.com
- LinkedIn: https://linkedin.com/in/nicrueda/
