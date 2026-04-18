# Professional MUI Theming System

A comprehensive theming solution for your React + MUI application with modern design patterns, smooth animations, and professional aesthetics.

## Features

### 🎨 **Professional Color Palette**

- Carefully crafted color tokens with proper contrast ratios
- Support for light and dark modes
- Extended color variants (blue, purple, green, orange, red)
- Consistent color naming and accessibility compliance

### 🧩 **Enhanced Component Styling**

- Glassmorphism effects and modern shadows
- Smooth transitions and hover animations
- Professional button variants with gradients
- Enhanced form controls with focus states
- Improved cards, papers, and navigation elements

### 🌓 **Theme Switching**

- Persistent theme preferences using localStorage
- System preference detection
- Smooth theme transitions
- Multiple toggle UI variants (icon, switch, menu)

### 🎯 **Advanced Features**

- Custom typography scale with Inter font
- Responsive breakpoints
- Professional shadow system
- Animation utilities
- Gradient backgrounds
- Utility functions for consistent styling

## Quick Start

### 1. Wrap Your App

```tsx
import ThemeProviderWrapper from "./theme";

function App() {
  return <ThemeProviderWrapper>{/* Your app content */}</ThemeProviderWrapper>;
}
```

### 2. Use Theme Toggle Component

```tsx
import ThemeToggle from './components/ThemeToggle';

// Icon variant (default)
<ThemeToggle />

// Switch variant with label
<ThemeToggle variant="switch" showLabel />

// Menu variant for dropdowns
<ThemeToggle variant="menu" />
```

### 3. Access Theme Context

```tsx
import { useThemeContext } from "./theme/hooks";

function MyComponent() {
  const { themeMode, toggleTheme, isDark } = useThemeContext();

  return <Button onClick={toggleTheme}>Current mode: {themeMode}</Button>;
}
```

## Theme Structure

```
src/theme/
├── index.tsx              # Main theme provider
├── const.ts               # Theme constants
├── types.ts               # TypeScript definitions
├── hooks.ts               # Theme context hooks
├── utils.ts               # Utility functions
└── themeOptions/
    ├── palette.ts         # Color definitions
    ├── themeComponents.ts # Component styling
    └── variants.ts        # Additional theme variants
```

## Using Theme Utilities

### Glassmorphism Effect

```tsx
import { glassmorphism } from "./theme/utils";

const MyComponent = () => {
  const theme = useTheme();

  return <Box sx={glassmorphism(theme, 0.1)}>Glassmorphism content</Box>;
};
```

### Gradient Backgrounds

```tsx
import { gradientBackground } from "./theme/utils";

const HeroSection = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        background: gradientBackground.primary(theme),
        color: "primary.contrastText",
      }}
    >
      Hero content
    </Box>
  );
};
```

### Responsive Utilities

```tsx
import { responsiveStyles } from "./theme/utils";

const ResponsiveComponent = () => (
  <Box
    sx={{
      ...responsiveStyles.hideOnMobile,
      ...responsiveStyles.centerContent,
    }}
  >
    Desktop only, centered content
  </Box>
);
```

## Color System

### Primary Colors

- **Light Mode**: Modern blue palette (#2196f3)
- **Dark Mode**: Softer blue variant (#42a5f5)

### Secondary Colors

- **Light Mode**: Elegant purple (#9c27b0)
- **Dark Mode**: Lighter purple (#ba68c8)

### Status Colors

- **Success**: Green variants
- **Warning**: Orange variants
- **Error**: Red variants
- **Info**: Blue variants

## Typography

- **Font Family**: Inter (fallback to system fonts)
- **Scale**: 6 heading levels + body text
- **Weights**: 400 (regular), 600 (semi-bold), 700 (bold)
- **Line Heights**: Optimized for readability

## Component Enhancements

### Buttons

- Gradient backgrounds for contained variant
- Smooth hover animations with elevation
- Enhanced focus states
- Consistent padding and typography

### Cards & Papers

- Glassmorphism effects
- Smooth hover animations
- Professional shadows
- Rounded corners with consistent border radius

### Form Controls

- Enhanced focus states with glow effects
- Improved hover interactions
- Consistent border radius and spacing
- Better accessibility features

### Navigation

- Backdrop blur effects
- Smooth transitions
- Enhanced list item interactions
- Professional sidebar styling

## Customization

### Adding New Color Variants

1. Add colors to `palette.ts`:

```tsx
export const customColors = {
  teal: {
    50: "#e0f2f1",
    // ... more shades
    900: "#004d40",
  },
};
```

2. Use in theme:

```tsx
const customPalette: PaletteOptions = {
  primary: {
    main: customColors.teal[500],
  },
};
```

### Creating Custom Components

```tsx
// In themeComponents.ts
MuiCustomComponent: {
  styleOverrides: {
    root: ({ theme }) => ({
      backgroundColor: theme.palette.background.paper,
      borderRadius: theme.shape.borderRadius,
      transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
    }),
  },
},
```

## Best Practices

### 1. **Use Theme Tokens**

Always use theme palette colors instead of hardcoded values:

```tsx
// ✅ Good
sx={{ color: 'primary.main' }}

// ❌ Avoid
sx={{ color: '#2196f3' }}
```

### 2. **Consistent Spacing**

Use theme spacing for consistent layout:

```tsx
// ✅ Good
sx={{ padding: 2, margin: 1 }}

// ❌ Avoid
sx={{ padding: '16px', margin: '8px' }}
```

### 3. **Responsive Design**

Leverage theme breakpoints:

```tsx
sx={{
  padding: { xs: 1, sm: 2, md: 3 }
}}
```

### 4. **Smooth Transitions**

Use consistent transition timing:

```tsx
sx={{
  transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)'
}}
```

## Performance Notes

- Theme switching is optimized with useMemo
- localStorage persistence prevents theme flicker
- Smooth animations use CSS transforms for better performance
- Component styling uses theme tokens to enable dynamic updates

## Browser Support

- Modern browsers with CSS Grid and Flexbox support
- CSS custom properties for theme variables
- Backdrop filter support for glassmorphism effects
- Prefers-color-scheme media query support

## Contributing

When adding new theme features:

1. Follow existing naming conventions
2. Ensure accessibility compliance
3. Test in both light and dark modes
4. Add TypeScript definitions
5. Update documentation

---

This theming system provides a solid foundation for creating beautiful, professional, and accessible user interfaces with Material-UI. The modular structure allows for easy customization while maintaining consistency across your application.
