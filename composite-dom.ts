interface IDomElement {
  print();
}

class TextNode implements IDomElement {
  private text:string;
  
  constructor(text : string) {
    this.text = text;
  }

  print() {
    console.log(this.text)
  }
}

class DomElement implements IDomElement {
  
  private texts:string;
  private elements:IDomElement[];

  constructor(texts:string) {
    this.texts = texts;
    this.elements = [];
  }
  
  print() {
    console.log();
  }

  add(texts) {
    this.elements.push(texts);
  }
}

/*
interface Component {
  doThis():void;
}

class Leaf implements Component {
  doThis():void {}
}

class Composite implements Component {
  addElement() {}
  doThis():void {}
}
*/



