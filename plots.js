function init() {
    var selector = d3.select("#selDataset");
  
    d3.json("samples.json").then((data) => {
      console.log(data);
      var sampleNames = data.names;
      sampleNames.forEach((sample) => {
        selector
          .append("option")
          .text(sample)
          .property("value", sample);
      });
  })}
  
  init();

  function optionChanged(newSample) {
    buildMetadata(newSample);
    buildCharts(newSample);
  }

 function buildMetadata(sample) {
    d3.json("samples.json").then((data) => {
      var metadata = data.metadata;
      var resultsArray = metadata.filter(sampleObj => sampleObj.id == sample);
      var result = resultsArray[0];
      console.log(result)
      var panel = d3.select("#sample-metadata");
  
      panel.html("");
      Object.entries(result).forEach(([key,value]) => {
       panel.append("h6").text(`${key}: ${value}`);
     });
    
    });
 }

  //function buildMetadata(sample) {
    //d3.json("samples.json").then((data) => {
     // var metadata= data.metadata;
     // var resultsarray= metadata.filter(sampleobject => 
      //  sampleobject.id == sample);
     // var result= resultsarray[0]
      //var panel = d3.select("#sample-metadata");
     // panel.html("");
     // Object.entries(result).forEach(([key, value]) => {
      //  panel.append("h6").text(`${key}: ${value}`);
      //});
  
    //buildGauge(result.wfreq)
  
  
  
   // });
  //}