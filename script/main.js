$(function () {
  /*
}
  console.log("Hello world.")
  
  data = [[0,0], [0,1], [1,0], [1,1]];
  labels = [-1, 1, 1, -1];
  svm = new svmjs.SVM();
  svm.train(data, labels); // C is a parameter to SVM
  
  testdata = [[1,1], [1,0]];
  testlabels = svm.predict(data);
  
  $("#result").html(JSON.stringify(testlabels))
  */
})

var log = function (t) {
  if (typeof(t) === "object") {
    t = JSON.stringify(t)
  }
  $("#result").html(t)
}

SVM = ML.SVM

var options = {
  C: 0.01,
  tol: 10e-4,
  maxPasses: 10,
  maxIterations: 10000,
  kernel: 'rbf',
  kernelOptions: {
    sigma: 0.5
  }
};

var svm = new SVM(options);

// Train the classifier - we give him an xor
var features = [[0,0],[0,1],[1,1],[1,0]];
var labels = [1, -1, 1, -1];
svm.train(features, labels);

// Let's see how narrow the margin is
var margins = svm.margin(features);
log(svm.margin([[0.5,0.5]]))

// Let's see if it is separable by testing on the training data
//log(svm.predict([[0.2,0.2]])); // [1, -1, 1, -1]
