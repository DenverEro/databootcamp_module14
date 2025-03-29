// URL to the data
const dataURL = "https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json";

// Populate metadata panel
function buildMetadata(sampleId) {
  d3.json(dataURL).then(data => {
    const info = data.metadata.find(obj => obj.id == sampleId);
    const panel = d3.select("#sample-metadata");

    panel.html(""); // Clear existing content

    for (const [key, value] of Object.entries(info)) {
      panel.append("p").text(`${key.toUpperCase()}: ${value}`);
    }
  });
}

// Build bar and bubble charts
function buildCharts(sampleId) {
  d3.json(dataURL).then(data => {
    const sample = data.samples.find(s => s.id === sampleId);
    const { otu_ids, otu_labels, sample_values } = sample;

    // --- Bar Chart ---
    const topIndices = sample_values
      .map((v, i) => [v, i])
      .sort((a, b) => b[0] - a[0])
      .slice(0, 10)
      .map(([_, i]) => i)
      .reverse();

    const barData = [{
      x: topIndices.map(i => sample_values[i]),
      y: topIndices.map(i => `OTU ${otu_ids[i]}`),
      text: topIndices.map(i => otu_labels[i]),
      type: "bar",
      orientation: "h"
    }];

    const barLayout = {
      title: "Top 10 OTUs Found",
      margin: { t: 40, l: 100 }
    };

    Plotly.newPlot("bar", barData, barLayout);

    // --- Bubble Chart ---
    const bubbleData = [{
      x: otu_ids,
      y: sample_values,
      text: otu_labels,
      mode: "markers",
      marker: {
        size: sample_values,
        color: otu_ids,
        colorscale: "Earth"
      }
    }];

    const bubbleLayout = {
      title: "All OTUs in Sample",
      xaxis: { title: "OTU ID" },
      yaxis: { title: "Bacteria Count" },
      margin: { t: 50 }
    };

    Plotly.newPlot("bubble", bubbleData, bubbleLayout);
  });
}

// Populate dropdown and initialize dashboard
function initDashboard() {
  d3.json(dataURL).then(data => {
    const dropdown = d3.select("#selDataset");

    data.names.forEach(id => {
      dropdown.append("option")
        .text(id)
        .attr("value", id);
    });

    const firstId = data.names[0];
    buildMetadata(firstId);
    buildCharts(firstId);
  });
}

// Event handler for dropdown change
function optionChanged(newId) {
  buildMetadata(newId);
  buildCharts(newId);
}

// Initialize everything
initDashboard();
