/**
 * Tout d'abord, nous importons l'extension html-react-parser afin de pouvoir
 * analyser le code HTML et le convertir en React.
 */
import parse from "html-react-parser";

/**
 * Ensuite, nous importons le balisage et la logique (Twig) du composant, le schéma de données (YML),
 * ainsi que tous les styles ou fichiers JS que le composant peut utiliser.
 */
import title from "./title.twig";
import data from "./title.yml";

/**
 * Ensuite, nous définissons une configuration par défaut à utiliser pour le composant.
 * Ces paramètres seront hérités par toutes les stories du composant, si celui-ci dispose de plusieurs variations.
 * `component` est un nom arbitraire attribué à la configuration par défaut.
 * `title` détermine l'emplacement et le nom de la story dans la barre latérale de Storybook.
 * `render` utilise l'extension du parser pour convertir le HTML du composant en React.
 * `args` utilise les variables définies dans le fichier title.yml en tant qu'arguments React.
 */
const component = {
  title: "Atoms/Title",
};

/**
 * Exportez le composant Title et affichez-le dans Storybook en tant que Story.
 * La clé `name` permet d'attribuer un nom à chaque story du composant.
 * Par exemple: `Title`, `Title dark`, `Title light`, etc.
 */
export const TitleElement = {
  name: "Title",
  render: (args) => parse(title(args)),
  args: { ...data },
};

/**
 * Enfin, exportez l'objet par défaut, `component`. Storybook/React nécessite cette étape.
 */
export default component;
