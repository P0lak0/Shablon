import Element from "../constructor/Element.js";

const originalCardData = ['Card 1', 'Card 2', 'Card 3', 'Card 4', 'Card 5'];
const newCardData = ['New Card 1', 'New Card 2', 'New Card 3'];

const originalCards = originalCardData.map(el => new Element('div', 'card', el).get());
const newCards = newCardData.map(el => new Element('div', 'small-card', el).get());

const originalContent = new Element('div', 'content-section', originalCards);
const newContent = new Element('div', 'content-section', newCards);

const content = new Element('div', 'content', [originalContent.get(), newContent.get()]);

export default content;