const should = chai.should();
const expect = chai.expect;
const assert = chai.assert;

describe("ShoppingListItem", () => {
  it("should be a function", () => {
    expect(ShoppingListItem).to.be.a("function");
  });

  describe("#name", () => {
    it("ShoppingListItem should have a property named 'name'", () => {
      const myShoppingListItem = new ShoppingListItem(
        "Avocado",
        "Must be eaten immediately."
      );
      myShoppingListItem.name.should.equal("Avocado");
    });
  });

  describe("#description", () => {
    it("ShoppingListItem should have a property named 'description'", () => {
      const myShoppingListItem = new ShoppingListItem(
        "Avocado",
        "Must be eaten immediately."
      );
      myShoppingListItem.description.should.equal("Must be eaten immediately.");
    });
  });

  describe("#is_done", () => {
    it("ShoppingListItem should have a property named 'is_done'", () => {
      const myShoppingListItem = new ShoppingListItem(
        "Avocado",
        "Must be eaten immediately."
      );
      expect(myShoppingListItem.is_done).to.be.false;
    });
  });

  describe(".check", () => {
    it("ShoppingListItem should have a method named 'check'", () => {
      const myShoppingListItem = new ShoppingListItem(
        "Avocado",
        "Must be eaten immediately."
      );
      expect(myShoppingListItem.check).to.be.a("function");
    });
    it("Calling the instance's check method should set it's 'is_done' property to true", () => {
      const myShoppingListItem = new ShoppingListItem(
        "Avocado",
        "Must be eaten immediately."
      );
      myShoppingListItem.check();
      myShoppingListItem.is_done.should.equal(true);
    });
  });

  describe(".uncheck", () => {
    it("ShoppingListItem should have a method named 'uncheck'", () => {
      const myShoppingListItem = new ShoppingListItem(
        "Avocado",
        "Must be eaten immediately."
      );
      expect(myShoppingListItem.uncheck).to.be.a("function");
    });
    it("Calling the instance's uncheck method should set it's 'is_done' property to false", () => {
      const myShoppingListItem = new ShoppingListItem(
        "Avocado",
        "Must be eaten immediately."
      );
      myShoppingListItem.uncheck();
      myShoppingListItem.is_done.should.equal(false);
    });
  });

  describe(".render", () => {
    it("ShoppingListItem should have a method named 'render'", () => {
      const myShoppingListItem = new ShoppingListItem(
        "Avocado",
        "Must be eaten immediately."
      );
      expect(myShoppingListItem.render).to.be.a("function");
    });
    it("Calling the instance's render method will construct and return an html formatted string.", () => {
      const myShoppingListItem = new ShoppingListItem(
        "Avocado",
        "Must be eaten immediately."
      );
      const avocadoRender = myShoppingListItem.render();
      expect(avocadoRender).to.be.a("string");
    });
  });
});

describe("ShoppingList", () => {
  it("should be a function", () => {
    expect(ShoppingList).to.be.a("function");
  });

  describe("#items", () => {
    it("ShoppingList should have a property named 'items'", () => {
      const myShoppingList = new ShoppingList();
      expect(myShoppingList.items).to.be.an("Array");
    });
    it("should be an array", () => {
      const myShoppingList = new ShoppingList();
      myShoppingList.items.should.deep.equal([]);
    });
  });

  describe(".addItem", () => {
    it("ShoppingList should have a method named 'addItem'", () => {
      const myShoppingList = new ShoppingList();
      expect(myShoppingList.addItem).to.be.a("function");
    });
    it("it should add an item (by passing in a ShoppingListItem object) to the items array", () => {
      const myShoppingList = new ShoppingList();
      const avocado = new ShoppingListItem(
        "Avocado",
        "Must be eaten immediately."
      );
      myShoppingList.addItem(avocado);
      myShoppingList.items.should.contain(avocado);
    });
  });

  describe(".removeItem", () => {
    it("ShoppingList should have a method named 'removeItem'", () => {
      const myShoppingList = new ShoppingList();
      expect(myShoppingList.removeItem).to.be.a("function");
    });
    it("Invoking the removeItem method by passing in a ShoppingListItem object (that exists in the items array) should remove that object from the items array", () => {
      const myShoppingList = new ShoppingList();
      const avocado = new ShoppingListItem(
        "Avocado",
        "Must be eaten immediately."
      );
      const chips = new ShoppingListItem("chips", "Store in a cool dry place.");
      myShoppingList.addItem(avocado);
      myShoppingList.addItem(chips);
      myShoppingList.removeItem("Avocado");
      myShoppingList.items.should.contain(chips);
      expect(myShoppingList.items.length).to.equal(1);
    });
    it("Invoking the removeItem method with no parameters should remove the last item in the items list, if there are any itmes, else it does nothing", () => {
      const myShoppingList = new ShoppingList();
      const avocado = new ShoppingListItem(
        "Avocado",
        "Must be eaten immediately."
      );
      const chips = new ShoppingListItem("chips", "Store in a cool dry place.");
      myShoppingList.addItem(avocado);
      myShoppingList.addItem(chips);
      myShoppingList.removeItem();
      expect(myShoppingList.items.length).to.equal(1);

      myShoppingList.removeItem();
      myShoppingList.removeItem();
      expect(myShoppingList.items).to.deep.equal([]);
    });
    it("Invoking the removeItem method by passing in anything else that is not a ShoppingListItem object (that exists in the items array) should immediately throw an error", () => {
      const myShoppingList = new ShoppingList();
      expect(function() {
        myShoppingList.removeItem("Avocado");
      }).to.throw(TypeError, "Item does not exist!");
    });
  });

  describe(".render", () => {
    it("ShoppingList should have a method named 'render'", () => {
      const myShoppingList = new ShoppingList();
      expect(myShoppingList.render).to.be.a("function");
    });
    it("Calling the instance's render method will concatenate the result of calling render() on each item in this object's items array...", () => {
      const myShoppingList = new ShoppingList();
      const avocado = new ShoppingListItem(
        "Avocado",
        "Must be eaten immediately."
      );
      const chips = new ShoppingListItem("chips", "Store in a cool dry place.");
      myShoppingList.addItem(avocado);
      myShoppingList.addItem(chips);
      console.log("render: ", myShoppingList.render());
      expect(myShoppingList.render()).to.deep.include("</li>");
    });
    it("the results should be wrapped in <ul> tags", () => {
      const myShoppingList = new ShoppingList();
      const avocado = new ShoppingListItem(
        "Avocado",
        "Must be eaten immediately."
      );
      const chips = new ShoppingListItem("chips", "Store in a cool dry place.");
      myShoppingList.addItem(avocado);
      myShoppingList.addItem(chips);
      expect(myShoppingList.render()).to.deep.include("<ul>");
    });
    it("the results should return an html formatted string", () => {
      const myShoppingList = new ShoppingList();
      const avocado = new ShoppingListItem(
        "Avocado",
        "Must be eaten immediately."
      );
      const chips = new ShoppingListItem("chips", "Store in a cool dry place.");
      myShoppingList.addItem(avocado);
      myShoppingList.addItem(chips);
      expect(myShoppingList.render()).to.be.a("string");
    });
  });
});
