# Professional Card Maker

A modern React-based web application for creating professional business cards that can be shared on social networks. Built with TypeScript, Vite, and SCSS for a smooth development experience.

## 🚀 Features

- **Real-time Preview**: See your business card update instantly as you type
- **Professional Design**: Clean, modern business card layout
- **Responsive Interface**: Works seamlessly on desktop and mobile devices
- **Easy to Use**: Simple form interface for entering contact details
- **Modern Tech Stack**: Built with React 19, TypeScript, and Vite

## 📋 Prerequisites

Before running this application, make sure you have the following installed:

- **Node.js** (version 16 or higher)
- **npm** or **yarn** package manager

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd BusinessCardMaker
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5000` to view the application

## 🎯 Usage

1. **Enter Your Details**: Fill in the form with your:
   - Name
   - Designation/Job Title
   - Phone Number
   - Email Address

2. **Preview Your Card**: The business card preview updates in real-time as you type

3. **Share Your Card**: Once satisfied with your design, you can share the generated business card on your social networks

## 📁 Project Structure

```
BusinessCardMaker/
├── public/                 # Static assets and favicons
├── src/
│   ├── components/         # React components
│   │   ├── BusinessCard/   # Business card display component
│   │   ├── Form/          # Input form component
│   │   ├── FormElement/   # Individual form field component
│   │   ├── Header/        # Application header
│   │   └── Preview/       # Preview section component
│   ├── App.tsx            # Main application component
│   ├── App.scss           # Main application styles
│   ├── index.scss         # Global styles
│   └── main.tsx           # Application entry point
├── package.json           # Project dependencies and scripts
└── README.md             # This file
```

## 🛠️ Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality

## 🎨 Technologies Used

- **React 19** - Modern React with latest features
- **TypeScript** - Type-safe JavaScript development
- **Vite** - Fast build tool and development server
- **SCSS** - Advanced CSS with variables and nesting
- **ESLint** - Code quality and consistency

## 🔧 Development

### Adding New Features

1. Create new components in the `src/components/` directory
2. Follow the existing component structure with separate `.tsx` and `.scss` files
3. Update the main `App.tsx` to include new functionality

### Styling

- Use SCSS for component-specific styles
- Follow the existing naming conventions
- Global styles are in `src/index.scss`

## 📱 Browser Support

This application is built with modern web technologies and supports:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Built with [React](https://reactjs.org/)
- Styled with [SCSS](https://sass-lang.com/)
- Bundled with [Vite](https://vitejs.dev/)
- Icons from [Favicon Generator](https://realfavicongenerator.net/)

---

**Happy Card Making! 🎉**
