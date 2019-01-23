/*
const net = new brain.NeuralNetwork();

net.train([{input: { r: 0.03, g: 0.7, b: 0.5 }, output: { black: 1 }},
           {input: { r: 0.16, g: 0.09, b: 0.2 }, output: { white: 1 }},
           {input: { r: 0.5, g: 0.5, b: 1.0 }, output: { white: 1 }}]);

const output = net.run({ r: 0.03, g: 0.7, b: 0.5 });  // { white: 0.99, black: 0.002 }
log(output)
log(output['black']+ output['white'])
*/
MLR = ML.MultivariateLinearRegression

const x = [[0, 0], [1, 2], [2, 3], [3, 4]];
// Y0 = X0 * 2, Y1 = X1 * 2, Y2 = X0 + X1
const y = [[0, 0, 0], [2, 4, 3], [4, 6, 5], [6, 8, 7]];
const mlr = new MLR(x, y);
console.log(mlr.predict([3, 3]));
log(mlr.predict([1, 2]))