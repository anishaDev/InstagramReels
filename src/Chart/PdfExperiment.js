import React, { useState } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import jsPDF from "jspdf";
import htmlToImage from "html-to-image";

const PdfApp = () => {
  const [chartData, setChartData] = useState([
    {
      label: "January",
      value: 100,
    },
    {
      label: "February",
      value: 200,
    },
    {
      label: "March",
      value: 300,
    },
  ]);

  const exportToPDF = async () => {
    const doc = new jsPDF();

    // Get all charts as HTML Elements
    const charts = document.querySelectorAll(".chart");

    // Convert each HTML Element with chart into image
    for (const chart of charts) {
      const imgData = await htmlToImage.toPng(chart);
      doc.addImage(imgData, 0, 0);
    }

    // Save the pdf doc
    doc.save("chart.pdf");
  };

  return (
    <View style={styles.container}>
      <View style={styles.chart}>
        <BarChart data={chartData} />
      </View>
      <Button
        title="Export to PDF"
        onPress={exportToPDF}
        style={styles.button}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  chart: {
    width: "100%",
    height: "100%",
  },
  button: {
    margin: 10,
  },
});

export default PdfApp;