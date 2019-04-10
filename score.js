const outputs = [];

function onScoreUpdate(dropPosition, bounciness, size, bucketLabel) {
	// Ran every time a balls drops into a bucket
	outputs.push([dropPosition, bounciness, size, bucketLabel]);
}

// Initiate test, generate report
function runAnalysis() {
	const testSetSize = 100;
	const [testSet, trainingSet] = splitDataSet(outputs, testSetSize);

	let numberCorrect = 0;
	for (let i = 0; i < testSet.length; i++) {
		const bucket = knn(trainingSet, testSet[i][0]);
		if (bucket === testSet[i][3]) {
			numberCorrect++;
		}
	}

	_.range(1, 20).forEach(k => {
		const accuracy = _.chain(testSet)
			.filter(testPoint => knn(trainingSet, testPoint[0], k) === testPoint[3])
			.size()
			.divide(testSetSize)
			.value();

		console.log("For k of ", k, " Accuracy: ", accuracy);
	});
}

// Calculate distance using any number of factors
function distance(pointA, pointB) {
	// pointA = [300, .5, 16], pointB = ...

	return (
		_.chain(pointA)
			.zip(pointB)
			.map(([a, b]) => (a - b) ** 2)
			.sum()
			.value() ** 0.5
	);
}

// Implement knn function
// Calculate distance from test to trained data
// Find the most likely buckets
function knn(data, point, k) {
	return _.chain(data)
		.map(row => [distance(row[0], point), row[3]])
		.sortBy(row => row[0])
		.slice(0, k)
		.countBy(row => row[1])
		.toPairs()
		.sortBy(row => row[1])
		.last()
		.first()
		.parseInt()
		.value();
}

// Splitting data into Training and Test to find ideal K
// Shuffle data so its not just first half
function splitDataSet(data, testCount) {
	const shuffled = _.shuffle(data);

	const testSet = _.slice(shuffled, 0, testCount);
	const trainingSet = _.slice(shuffled, testCount);

	return [testSet, trainingSet];
}
