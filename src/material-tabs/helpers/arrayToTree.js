/**
 * Unflattens an array to a tree with runtime O(n)
 *
 * This algorithm was taken from Philip Stanislaus's
 * "Performant Array to Tree" which has O(n) complexity.
 * It builds the tree in a single pass.
 * @link https://github.com/philipstanislaus
 * @link https://www.npmjs.com/package/performant-array-to-tree
 */
export const arrayToTree = (items) => {
  /**
   * The nested tree.
   * @type {*[]}
   */
  const rootItems = [];

  // (1) Create a holder for each item.

  const lookup = {};

  for (const item of items) {
    const itemId = item["id"];
    const parent = item["parent"];

    // (2) Create a placeholder for each item in the lookup.
    // Details are added later.

    if (!lookup[itemId]) lookup[itemId] = { ["children"]: [] };

    // (3) Add the details of the item.

    lookup[itemId] = { ...item, ["children"]: lookup[itemId]["children"] };

    // (4) Create a variable for the current item.

    const TreeItem = lookup[itemId];

    // (5) Determine where the item goes in the tree.

    // If the item has no parentId, it is the root node.
    if (parent === null || parent === undefined || parent === "") {
      rootItems.push(TreeItem);
    } else {
      /*
       * If the item has a parentId, add it to the tree.
       */
      // (6) Add a placeholder for parent of the current item.

      if (!lookup[parent]) lookup[parent] = { ["children"]: [] };

      // (7) Add the current item to its parent.

      lookup[parent]["children"].push(TreeItem);
    }
  }

  return rootItems;
};

// const tree = arrayToTree([
//   { id: "x001", parent: null, name: "Joe" },

//   { id: "x002", parent: "x001", name: "Sammy", children: [] },
//   { id: "x003", parent: "x001", name: "Emily", children: [] },
//   { id: "x004", parent: "x001", name: "Scott", children: [] },

//   { id: "x005", parent: "x002", name: "Fred", children: [] },
//   { id: "x006", parent: "x002", name: "Vickie", children: [] },
//   { id: "x007", parent: "x002", name: "Marlow", children: [] },

//   { id: "x008", parent: "x003", name: "Anna", children: [] },
//   { id: "x009", parent: "x003", name: "Brad", children: [] },
//   { id: "x010", parent: "x003", name: "Sarah", children: [] },

//   { id: "x011", parent: "x004", name: "Mark", children: [] },
//   { id: "x012", parent: "x004", name: "Debbie", children: [] },
//   { id: "x013", parent: "x004", name: "Boomer", children: [] },

//   { id: "x014", parent: "x005", name: "Stuey", children: [] },
//   { id: "x015", parent: "x005", name: "Jessie", children: [] },
//   { id: "x016", parent: "x005", name: "Tolstoy", children: [] },

//   { id: "x017", parent: "x009", name: "Maddie", children: [] },
//   { id: "x018", parent: "x009", name: "Scout", children: [] },
//   { id: "x019", parent: "x009", name: "Jordie", children: [] },
// ]);

// console.log(JSON.stringify(tree, undefined, 2));
