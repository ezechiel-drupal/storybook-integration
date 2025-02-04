/** @type { import('@storybook/react').Preview } */
import Twig from "twig";
import drupalFilters from "twig-drupal-filters";
import "../dist/css/reset.css";
import "../dist/css/styles.css";

function setupFilters(twig) {
  twig.cache();
  drupalFilters(twig);
  return twig;
}

setupFilters(Twig);

const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
