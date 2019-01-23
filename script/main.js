$(function () {
  console.log("Hello world.")
  
  data = [[0,0], [0,1], [1,0], [1,1]];
  labels = [-1, 1, 1, -1];
  svm = new svmjs.SVM();
  svm.train(data, labels); // C is a parameter to SVM
  
  testdata = [[1,1], [1,0]];
  testlabels = svm.predict(data);
  
  $("#result").html(JSON.stringify(testlabels))
})