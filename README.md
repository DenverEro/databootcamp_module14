# Belly Button Biodiversity Dashboard

This project is part of Module 14 of the Data Analytics Bootcamp, focused on using **JavaScript**, **D3.js**, and **Plotly** to create interactive visualizations based on real-world biological data.

## 🔬 Project Description

The dataset comes from a study of the microbial species (Operational Taxonomic Units, or OTUs) found in human navels. Each test subject in the study has a unique sample ID.

The dashboard allows users to:
- Select a test subject from a dropdown menu
- View a **horizontal bar chart** of the top 10 bacterial cultures found in that individual
- Explore a **bubble chart** showing all bacterial cultures per sample
- View a demographic panel with metadata (age, location, washing frequency, etc.)

## 📊 Features

### Bar Chart

- Shows the top 10 OTUs for the selected subject
- Ordered from most to least prevalent
- Example from Subject `940`:
  - Top OTU ID: `1167`
  - Count: `163`
  - Other OTUs in top 10: `2859`, `482`, `2264`, etc.

### Bubble Chart

- Displays all OTUs found in the selected sample
- X-axis: OTU IDs
- Y-axis: Count of bacteria
- Bubble size reflects sample value (bacteria count)
- Bubble color mapped to OTU ID for differentiation

### Demographic Info

- Pulled from the `metadata` portion of the dataset
- Example for Subject `940`:
  ```
  ID: 940
  ETHNICITY: Caucasian
  GENDER: F
  AGE: 24
  LOCATION: Beaufort/NC
  BBTYPE: I
  WFREQ: 2
  ```

## 🧰 Technologies Used

- HTML / Bootstrap
- JavaScript (ES6)
- D3.js (v7)
- Plotly.js
- GitHub Pages for deployment

## 🚀 Live Demo

Check out the deployed dashboard here:  
👉 [https://denverero.github.io/databootcamp_module14/](https://denverero.github.io/databootcamp_module14/)

## 📁 File Structure

```
databootcamp_module14/
├── index.html
├── static/
│   └── js/
│       └── app.js
```

## 📌 Notes

- Data is accessed via a static URL:  
  `https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json`
- All charts and metadata update dynamically when a new subject is selected.

## ✍️ Author

Seven G  
[GitHub Profile](https://github.com/denverero)
