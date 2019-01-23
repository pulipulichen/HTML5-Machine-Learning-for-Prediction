/*
const net = new brain.NeuralNetwork();

net.train([{input: { r: 0.03, g: 0.7, b: 0.5 }, output: { black: 1 }},
           {input: { r: 0.16, g: 0.09, b: 0.2 }, output: { white: 1 }},
           {input: { r: 0.5, g: 0.5, b: 1.0 }, output: { white: 1 }}]);

const output = net.run({ r: 0.03, g: 0.7, b: 0.5 });  // { white: 0.99, black: 0.002 }
log(output)
log(output['black']+ output['white'])
*/

/*
MLR = ML.MultivariateLinearRegression

const x = [[0, 0], [1, 2], [2, 3], [3, 4]];
// Y0 = X0 * 2, Y1 = X1 * 2, Y2 = X0 + X1
const y = [[0], [2], [4], [6]];
const mlr = new MLR(x, y);
log(mlr.predict([1, 3]))
*/

RFRegression = ML.RandomForestRegression
var dataset = [
  [73, 80, 75, 152],
  [93, 88, 93, 185],
  [89, 91, 90, 180],
  [96, 98, 100, 196],
  [73, 66, 70, 142],
  [53, 46, 55, 101],
  [69, 74, 77, 149],
  [47, 56, 60, 115],
  [87, 79, 90, 175],
  [79, 70, 88, 164],
  [69, 70, 73, 141],
  [70, 65, 74, 141],
  [93, 95, 91, 184],
  [79, 80, 73, 152],
  [70, 73, 78, 148],
  [93, 89, 96, 192],
  [78, 75, 68, 147],
  [81, 90, 93, 183],
  [88, 92, 86, 177],
  [78, 83, 77, 159],
  [82, 86, 90, 177],
  [86, 82, 89, 175],
  [78, 83, 85, 175],
  [76, 83, 71, 149],
  [96, 93, 95, 192]
];

var trainingSet = new Array(dataset.length);
var predictions = new Array(dataset.length);

for (var i = 0; i < dataset.length; ++i) {
  trainingSet[i] = dataset[i].slice(0, 3);
  predictions[i] = dataset[i][3];
}

var options = {
  seed: 3,
  maxFeatures: 2,
  replacement: false,
  nEstimators: 200
};

var regression = new RFRegression(options);
regression.train(trainingSet, predictions);
var result = regression.predict([[70, 93, 73]]);
log(result)