
class BTree {
    constructor() {
      this.products = new Map();
    }
  
    insert(key, product) {
      this.products.set(key, product);
    }
  
    search(key) {
      return this.products.get(key);
    }
  }
  
 
  class InvertedIndex {
    constructor() {
      this.index = new Map();
    }
  
    add(term, productId) {
      if (!this.index.has(term)) {
        this.index.set(term, new Set());
      }
      this.index.get(term).add(productId);
    }
  
    search(term) {
      return this.index.get(term) || new Set();
    }
  }
  
  
  class HybridIndex {
    constructor() {
      this.bTree = new BTree();
      this.invertedIndex = new InvertedIndex();
      this.productsByName = [];
    }
  
    addProduct(product) {
      // Add product to B-Tree by ID
      this.bTree.insert(product.id, product);
  
      // Add product to Inverted Index using keywords
      product.keywords.forEach((keyword) => {
        this.invertedIndex.add(keyword.toLowerCase(), product.id);
      });
  
      // Store products for regex-based search by name
      this.productsByName.push(product);
    }
  
    search(query) {
      const lowercaseQuery = query.toLowerCase();
  
      const regex = new RegExp(lowercaseQuery, "i");
      const nameMatches = this.productsByName.filter((product) =>
        regex.test(product.name)
      );
  
      const keywords = lowercaseQuery.split(" ").filter(Boolean);
      const resultIds = new Set();
  
      keywords.forEach((keyword) => {
        const ids = this.invertedIndex.search(keyword);
        ids.forEach((id) => resultIds.add(id));
      });
  
      let result = Array.from(resultIds).map((id) => this.bTree.search(id));
      return nameMatches.length > result.length ? nameMatches : result;
    }
  }
  
  
  const hybridIndex = new HybridIndex();
  
  export default hybridIndex;
  