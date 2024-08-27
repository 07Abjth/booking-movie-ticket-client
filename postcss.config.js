// postcss.config.js
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

export default {
  plugins: [
    tailwindcss(),     // Initialize Tailwind CSS
    autoprefixer(),    // Initialize Autoprefixer
  ],
};

