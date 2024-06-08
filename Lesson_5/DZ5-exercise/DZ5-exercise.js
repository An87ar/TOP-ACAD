// Exercise 2
// class HtmlElement {
//     constructor(tagName, selfClosing = false, textContent = '') {
//         this.tagName = tagName;
//         this.selfClosing = selfClosing;
//         this.textContent = textContent;
//         this.attributes = [];
//         this.styles = [];
//         this.children = [];
//     }

//     setAttribute(name, value) {
//         this.attributes.push({ name, value });
//     }

//     setStyle(property, value) {
//         this.styles.push({ property, value });
//     }

//     appendChild(element) {
//         if (this.selfClosing) {
//             throw new Error("Self-closing tags cannot have children.");
//         }
//         this.children.push(element);
//     }

//     prependChild(element) {
//         if (this.selfClosing) {
//             throw new Error("Self-closing tags cannot have children.");
//         }
//         this.children.unshift(element);
//     }

//     getHtml() {
//         let attrStr = this.attributes.map(attr => `${attr.name}="${attr.value}"`).join(' ');
//         if (attrStr) attrStr = ' ' + attrStr;

//         let styleStr = this.styles.map(style => `${style.property}: ${style.value};`).join(' ');
//         if (styleStr) styleStr = ` style="${styleStr}"`;

//         let childrenHtml = this.children.map(child => child.getHtml()).join('');

//         if (this.selfClosing) {
//             return `<${this.tagName}${attrStr}${styleStr} />`;
//         }

//         return `<${this.tagName}${attrStr}${styleStr}>${this.textContent}${childrenHtml}</${this.tagName}>`;
//     }
// }

// // Example usage:
// const wrapper = new HtmlElement('div');
// wrapper.setAttribute('id', 'wrapper');
// wrapper.setStyle('display', 'flex');

// const div = new HtmlElement('div');
// div.setStyle('width', '300px');
// div.setStyle('margin', '10px');
// wrapper.appendChild(div);

// const h3 = new HtmlElement('h3', false, 'Title Text');
// div.appendChild(h3);

// const img = new HtmlElement('img', false);
// img.setStyle('width', '100%');
// img.setAttribute('src', 'lipsum.jpg');
// img.setAttribute('alt', 'Lorem Ipsum');
// div.appendChild(img);

// const paragraph = new HtmlElement('p', false, 'Lorem Ipsum BIG');
// paragraph.setStyle('text-align', 'justify');
// div.appendChild(paragraph);

// const link = new HtmlElement('a', false, 'More...');
// link.setAttribute('href', 'https://www.lipsum.com/');
// link.setAttribute('raget', '_blank');
// paragraph.appendChild(link);

// wrapper.appendChild(div);

// // Adding to the document
// document.write(wrapper.getHtml());

/*-------------------------------*/

// Exercise 3-4
// class CssClass {
//     constructor(className) {
//         this.className = className;
//         this.styles = [];
//     }

//     setStyle(property, value) {
//         const index = this.styles.findIndex(style => style.property === property);
//         if (index !== -1) {
//             this.styles[index].value = value;
//         } else {
//             this.styles.push({ property, value });
//         }
//     }

//     removeStyle(property) {
//         this.styles = this.styles.filter(style => style.property !== property);
//     }

//     getCss() {
//         const styleString = this.styles.map(style => `${style.property}: ${style.value};`).join(' ');
//         return `.${this.className} { ${styleString} }`;
//     }
// }

// class HtmlElement {
//     constructor(tagName, innerText = '', classes = []) {
//         this.tagName = tagName;
//         this.innerText = innerText;
//         this.classes = classes;
//         this.children = [];
//     }

//     addClass(className) {
//         this.classes.push(className);
//     }

//     addChild(childElement) {
//         this.children.push(childElement);
//     }

//     getHtml() {
//         const classesString = this.classes.join(' ');
//         const childrenHtml = this.children.map(child => child.getHtml()).join('');
//         return `<${this.tagName} class="${classesString}">${this.innerText}${childrenHtml}</${this.tagName}>`;
//     }
// }

// class HtmlBlock {
//     constructor(rootElement) {
//         this.rootElement = rootElement;
//         this.styles = [];
//     }

//     addStyle(cssClass) {
//         this.styles.push(cssClass);
//     }

//     getCode() {
//         const stylesString = this.styles.map(style => style.getCss()).join('\n');
//         const htmlString = this.rootElement.getHtml();
//         return `<style>${stylesString}</style>\n${htmlString}`;
//     }
// }


// const cssClass1 = new CssClass('red-text');
// cssClass1.setStyle('color', 'red');

// const cssClass2 = new CssClass('large-text');
// cssClass2.setStyle('font-size', '20px');

// // Создаём HTML-элементы
// const rootElement = new HtmlElement('div');

// const child1 = new HtmlElement('p', 'This is a red text paragraph.');
// child1.addClass('red-text');

// const child2 = new HtmlElement('p', 'This is a large text paragraph.');
// child2.addClass('large-text');

// rootElement.addChild(child1);
// rootElement.addChild(child2);

// // Создаём HTML-блок
// const htmlBlock = new HtmlBlock(rootElement);
// htmlBlock.addStyle(cssClass1);
// htmlBlock.addStyle(cssClass2);


// // Получаем полный HTML-код
// const htmlCode = htmlBlock.getCode();

// // Добавляем код на страницу
// document.write(htmlCode);