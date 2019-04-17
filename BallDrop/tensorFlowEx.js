// Create a tensor
const data = tf.tensor([1, 2, 3]);
const otherData = tf.tensor([4, 5, 6]);

// Return shape
data.shape;

// Elementwise operations
// Shapes must match
// Creates a brand new tensor
data.add(otherData);
data.sub(otherData);
data.mul(otherData);
data.div(otherData);

// Broadcasting
const data = tf.tensor([1, 2, 3]);
const otherData = tf.tensor([4]);

// Logging tensor information without all object information
data.print();

// Create a tensor
const data = tf.tensor([10, 20, 30], [40, 50, 60]);
const otherData = tf.tensor([4, 5, 6]);

// Print out individual value
// Row 0 column 0
data.get(0, 0);

// Update values in a tensor
// THIS DOESN'T EXIST, MUST CREATE NEW TENSOR
data.set(0, 0, 50);

// Retrieving a column of a tensor
// Row, column. Size (number) of rows, size (number) of columns
data.slice([0, 1], [6, 1]);

// To find the number of rows
data.shape[0];
// Better way to do it replace size with -1
data.slice([0, 1], [-1, 1]);

// Concatenate two tensors
// Second argument is 0 or 1 for HOW you want to concatenate
// They refer to axis of concatenation.
tensorA.concat(tensorB, 1);

// Find the sum of each tensor
jumpData.sum();
// Find the sum along an axis
jumpData.sum(1);
// Second argument of sum preserves the dimensions
jumpData.sum(1, true).concat(playerData, 1);
// Alternate, but more robust way to do this
jumpData.sum(1).expandDims(1);
