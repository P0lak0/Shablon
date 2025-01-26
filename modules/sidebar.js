import Element from "../constructor/Element.js";

const sidebarContent = [
  'Link 1',
  'Link 2',
  'Link 3',
];

const links = sidebarContent.map(link => new Element('div', 'sidebar-link', link).get());

const sidebar = new Element('div', 'sidebar', links);

export default sidebar;