import React, { useRef } from 'react';
import { WebView } from 'react-native-webview';
import RNPrint from 'react-native-print';
import { PermissionsAndroid,Button } from 'react-native';
import RNFetchBlob from 'rn-fetch-blob';

const WebViewScreen = () => {
  const webViewRef = useRef(null);

  const htmlData = `
  
<html>
<head>
  <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
</head>
<body>
  <div>
    <canvas id="myChart"></canvas>
  </div>
  <script>
    const ctx = document.getElementById('myChart');

    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  </script>
</body>
</html>
  `

  const printToPDF = async () => {
    const permission = PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE;
    const granted = await PermissionsAndroid.request(permission);
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        if (webViewRef && webViewRef.current) {
            webViewRef.current.captureScreen({ format: 'png', quality: 1 })
              .then((uri) => {
                console.log('Screen captured:', uri);
                // Use the captured screen image URI as needed (e.g., save to storage, share, etc.)
              })
              .catch((error) => {
                console.error('Failed to capture screen:', error);
              });
          }
      const options = {
        html: htmlData,
        fileName: 'exported_chart.pdf',
        directory: 'Documents',
      };

      RNPrint.print({ filePath: uri, ...options }).then((jobName) => {
        console.log('Job Name:', jobName);
      });
    } else {
      console.log('Permission denied.');
    }
  };

  return (
    <>
      <WebView
        ref={webViewRef}
        originWhitelist={['*']}
        source={{ html: htmlData }}
      />
      <Button title="Export to PDF" onPress={printToPDF} />
    </>
  );
};

export default WebViewScreen;
