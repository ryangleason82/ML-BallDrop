# ML-BallDrop

Basics of Machine Learning to predict how many balls will land in a specific bucket using the k nearest neighbor algorithm. Here are some of my notes

## Important concepts learned:

- K Nearest Neighbor Algorithm
  - "Birds of a feather flock together"
- Features vs Labels
  - Independent vs dependent variables
  - Point of this is to find a correlation between the two
  - The key is to find an algorithm that helps you accomplish this
- Classification vs Regression
  - classification: when the value of our labels belong to a _discrete_ set
  - regression: when the value of our labels belong to a _continuous_ set
- Test vs Training sets of data
  - do this in order to find an ideal k value
  - record a bunch of data points, split into training/test
  - for each 'test' record, run knn using the training data
  - does the result of knn equal test?
- Feature Normalization
  - Difference between .51 and .54 is much smaller than 510 and 540 (look on a graph)
  - So we must normalize them by putting them between 0 and 1
- Feature selections
  - choosing to leave some features out for better results
- Common data structures for ML (array of arrays)
