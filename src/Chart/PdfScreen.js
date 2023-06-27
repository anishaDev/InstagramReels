// import { StyleSheet, Text, TouchableOpacity, View,PermissionsAndroid  } from 'react-native'
// import React, { useEffect,useRef } from 'react'
// import Icon from 'react-native-vector-icons/FontAwesome';
// import { BarChart } from "react-native-gifted-charts";
// import RNHTMLtoPDF from 'react-native-html-to-pdf';


// const PdfScreen = () => {
//     useEffect(() => {
//         generatePDF();
//       }, []);
//       const chartRef = useRef(null);
//       const generatePDF = async () => {
//         try {
//           const permission = await PermissionsAndroid.request(
//             PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE
//           );
    
//           if (permission === PermissionsAndroid.RESULTS.GRANTED) {
//             const options = {
//               html: `
//                 <html>
//                   <body>
//                     <div id="chart" style="width: 100%; height: 300px;"></div>
//                   </body>
//                 </html>
//               `,
//               fileName: 'chart',
//               directory: 'Documents',
//             };
    
//             const filePath = await RNHTMLtoPDF.convert(options);
    
//             // Get the chart image as base64 data
//             const base64Data = await chartRef.current.toDataURL();
    
//             // Now you can use the base64Data and filePath to send the PDF file or perform any other actions
    
//             console.log('PDF file path:', filePath);
//           } else {
//             console.log('Permission denied');
//           }
//         } catch (error) {
//           console.error('Error generating PDF:', error);
//         }
//       };



//     const showOptions = () => {

//         // Handle the onPress event to show the option text
//         console.log('Export to PDF');
//       };
//       const barData = [
//         {
//           value: 10,
//           // label: 'Jan',
//           spacing: 4,
//           labelWidth: 30,
//           labelTextStyle: {color: 'gray'},
//           frontColor: '#bc3cf6',
        
       
    
//         },
//         {
//           value: 12,
//           // label: 'Jan',
//           spacing: 4,
//           labelWidth: 30,
//           labelTextStyle: {color: 'gray'},
//           frontColor: '#f46964',
//         },
//         {
//           value: 14,
//           // label: 'Jan',
//           spacing: 4,
//           labelWidth: 30,
//           labelTextStyle: {color: 'gray'},
//           frontColor: '#f46964',
//         },
//         {
//           value: 16,
//           // label: 'Jan',
//           spacing: 4,
//           labelWidth: 30,
//           labelTextStyle: {color: 'gray'},
//           frontColor: '#f16eb8',
//         },
//         {value: 18, frontColor: '#bc3cf6',spacing: 4,labelWidth: 30,},
//         {
//           value: 19,
//           // label: 'Jan',
//           spacing: 4,
//           labelWidth: 30,
//           labelTextStyle: {color: 'gray'},
//           frontColor: '#f16eb8',
//         },
//         {
//           value: 19,
//           // label: 'Jan',
//           spacing: 4,
//           labelWidth: 30,
//           labelTextStyle: {color: 'gray'},
//           frontColor: '#f16eb8',
//         },
//         {value: 18, frontColor: '#bc3cf6',spacing: 4,labelWidth:30,
//         showTopLabel: true,
    
//         topLabelComponent: () => (
//           <View style={{height:8,width:8,backgroundColor:'black',borderRadius:100,bottom:20}}>
//           <Text style={{
//               color: "black",
//               fontSize: 10,
//               marginBottom: 6,
//               zIndex: 33,
//               position: "absolute",
//               width: 40,
//               bottom: 5,
//               textAlign: "auto"
//           }}>Lorese</Text>
    
//           </View>
        
//         )
//       },
    
//         {
//           value: 16,
//           // label: 'Jan',
//           spacing: 4,
//           labelWidth: 30,
//           labelTextStyle: {color: 'gray'},
//           frontColor: '#f16eb8',
//         },
//         {
//           value: 14,
//           // label: 'Jan',
//           spacing: 4,
//           labelWidth: 30,
//           labelTextStyle: {color: 'gray'},
//           frontColor: '#f46964',
//         },
//         {
//           value: 12,
//           // label: 'Jan',
//           spacing: 4,
//           labelWidth: 30,
//           labelTextStyle: {color: 'gray'},
//           frontColor: '#f46964',
//         },
//         {
//           value: 10,
//           // label: 'Jan',
//           spacing: 4,
//           labelWidth: 15,
//           labelTextStyle: {color: 'gray'},
//           frontColor: '#bc3cf6',
       
    
//         },
//         {
//           value: 10,
//           // label: 'Jan',
//           spacing: 4,
//           labelWidth: 15,
//           labelTextStyle: {color: 'gray'},
//           frontColor: '#f46964',
       
    
//         },
//         {
//           value: 12,
//           // label: 'Jan',
//           spacing: 4,
//           labelWidth: 15,
//           labelTextStyle: {color: 'gray'},
//           frontColor: '#bc3cf6',
//         },
//         {
//           value: 14,
//           // label: 'Jan',
//           spacing: 4,
//           labelWidth: 30,
//           labelTextStyle: {color: 'gray'},
//           frontColor: '#f46964',
//         },
//         {
//           value: 16,
//           // label: 'Jan',
//           spacing: 4,
//           labelWidth: 30,
//           labelTextStyle: {color: 'gray'},
//           frontColor: '#f16eb8',
//         },
//         {value: 18, frontColor: '#bc3cf6',spacing: 4,labelWidth: 30,},
//         {
//           value: 20,
//           // label: 'Jan',
//           spacing: 4,
//           labelWidth: 15,
//           labelTextStyle: {color: 'gray'},
//           frontColor: '#bc3cf6',
//         },
//         {
//           value: 22,
//           // label: 'Jan',
//           spacing: 4,
//           labelWidth: 30,
//           labelTextStyle: {color: 'gray'},
//           frontColor: '#f46964',
//         },
//         {
//           value: 24,
//           // label: 'Jan',
//           spacing: 4,
//           labelWidth: 15,
//           labelTextStyle: {color: 'gray'},
//           frontColor: '#bc3cf6',
       
    
//         },
//         {
//           value: 26,
//           // label: 'Jan',
//           spacing: 4,
//           labelWidth: 30,
//           labelTextStyle: {color: 'gray'},
//           frontColor: '#f46964',
//         },
//         {
//           value: 28,
//           // label: 'Jan',
//           spacing: 4,
//           labelWidth: 30,
//           labelTextStyle: {color: 'gray'},
//           frontColor: '#f46964',
//         },
//         {
//           value: 30,
//           // label: 'Jan',
//           spacing: 4,
//           labelWidth: 30,
//           labelTextStyle: {color: 'gray'},
//           frontColor: '#f16eb8',
//           topLabelComponent: () => (
//             <View style={{height:8,width:8,backgroundColor:'black',borderRadius:100,bottom:20}}>
//             <Text style={{
//                 color: "black",
//                 fontSize: 10,
//                 marginBottom: 6,
//                 zIndex: 33,
//                 position: "absolute",
//                 width: 40,
//                 bottom: 5,
//                 textAlign: "auto"
//             }}>Lorese</Text>
      
//             </View>
          
//           )
//         },
//         {value: 30, frontColor: '#bc3cf6',spacing: 4, labelWidth: 30,},
//         {
//           value: 30,
//           // label: 'Jan',
//           spacing: 4,
//           labelWidth: 30,
//           labelTextStyle: {color: 'gray'},
//           frontColor: '#f16eb8',
//         },
//         {
//           value: 28,
//           // label: 'Jan',
//           spacing: 4,
//           labelWidth: 15,
//           labelTextStyle: {color: 'gray'},
//           frontColor: '#bc3cf6',
//         },
//         {
//           value: 26,
//           // label: 'Jan',
//           spacing:4,
//           labelWidth: 30,
//           labelTextStyle: {color: 'gray'},
//           frontColor: '#f46964',
//         },
//         {
//           value: 24,
//           // label: 'Jan',
//           spacing: 4,
//           labelWidth: 30,
//           labelTextStyle: {color: 'gray'},
//           frontColor: '#f16eb8',
//         },
//         {value: 22, frontColor: '#bc3cf6',spacing: 4, labelWidth: 30,},
//         {
//           value: 20,
//           // label: 'Jan',
//           spacing: 4,
//           labelWidth: 15,
//           labelTextStyle: {color: 'gray'},
//           frontColor: '#bc3cf6',
//         },
//         {
//           value: 18,
//           // label: 'Jan',
//           spacing: 4,
//           labelWidth: 30,
//           labelTextStyle: {color: 'gray'},
//           frontColor: '#f46964',
//         },
//         {
//           value: 16,
//           // label: 'Jan',
          
//           spacing: 4,
//           labelWidth: 15,
//           labelTextStyle: {color: 'gray',bottom:100},
//           frontColor: '#bc3cf6',
       
    
//         },
//         {
//           value: 14,
//           // label: 'Jan',
//           spacing: 4,
//           labelWidth: 30,
//           labelTextStyle: {color: 'gray'},
//           frontColor: '#f46964',
//         },
//         {
//           value: 12,
//           // label: 'Jan',
//           spacing: 4,
//           labelWidth: 30,
//           labelTextStyle: {color: 'gray'},
//           frontColor: '#f46964',
//         },
//         {
//           value: 9,
//           // label: 'Jan',
//           spacing: 4,
//           labelWidth: 30,
//           labelTextStyle: {color: 'gray'},
//           frontColor: '#f16eb8',
//         },
//         {value: 8, frontColor: '#bc3cf6',spacing: 4,labelWidth: 30,},
//         {
//           value: 7,
//           // label: 'Jan',
//           spacing: 4,
//           labelWidth: 30,
//           labelTextStyle: {color: 'gray'},
//           frontColor: '#f16eb8',
//           topLabelComponent: () => (
//             <View style={{height:8,width:8,backgroundColor:'black',borderRadius:100,bottom:20}}>
//             <Text style={{
//                 color: "black",
//                 fontSize: 10,
//                 marginBottom: 6,
//                 zIndex: 33,
//                 position: "absolute",
//                 width: 40,
//                 bottom: 5,
//                 textAlign: "auto"
//             }}>Lorese</Text>
      
//             </View>
          
//           )
//         },
    
//         {
//           value: 8,
//           // label: 'Jan',
//           spacing: 4,
//           labelWidth: 15,
//           labelTextStyle: {color: 'gray'},
//           frontColor: '#bc3cf6',
//         },
//         {
//           value: 9,
//           // label: 'Jan',
//           spacing: 4,
//           labelWidth: 30,
//           labelTextStyle: {color: 'gray'},
//           frontColor: '#f46964',
//         },
//         {
//           value: 10,
//           // label: 'Jan',
//           spacing: 4,
//           labelWidth: 30,
//           labelTextStyle: {color: 'gray'},
//           frontColor: '#f16eb8',
//         },
//         {value: 12, frontColor: '#bc3cf6',spacing: 4, labelWidth: 30,},
//         {
//           value: 14,
//           // label: 'Jan',
//           spacing: 4,
//           labelWidth: 15,
//           labelTextStyle: {color: 'gray'},
//           frontColor: '#bc3cf6',
//         },
//         {
//           value: 16,
//           // label: 'Jan',
//           spacing: 4,
//           labelWidth: 30,
//           labelTextStyle: {color: 'gray'},
//           frontColor: '#f46964',
//         },
//         {
//           value: 18,
//           // label: 'Jan',
//           spacing: 4,
//           labelWidth: 15,
//           labelTextStyle: {color: 'gray'},
//           frontColor: '#bc3cf6',
       
    
//         },
//         {
//           value: 20,
//           // label: 'Jan',
//           spacing: 4,
//           labelWidth: 30,
//           labelTextStyle: {color: 'gray'},
//           frontColor: '#f46964',
//         },
//         {
//           value: 20,
//           // label: 'Jan',
//           spacing: 4,
//           labelWidth: 30,
//           labelTextStyle: {color: 'gray'},
//           frontColor: '#f46964',
//         },
//         {
//           value: 22,
//           // label: 'Jan',
//           spacing: 4,
//           labelWidth: 30,
//           labelTextStyle: {color: 'gray'},
//           frontColor: '#f16eb8',
//         },
//         {value: 24, frontColor: '#bc3cf6',spacing: 4,labelWidth: 30,},
//         {
//           value: 26,
//           // label: 'Jan',
//           spacing: 4,
//           labelWidth: 30,
//           labelTextStyle: {color: 'gray'},
//           frontColor: '#f16eb8',
//         },
//         {
//           value: 28,
//           // label: 'Jan',
//           spacing: 4,
//           labelWidth: 15,
//           labelTextStyle: {color: 'gray'},
//           frontColor: '#bc3cf6',
//         },
//         {
//           value: 30,
//           // label: 'Jan',
//           spacing: 4,
//           labelWidth: 30,
//           labelTextStyle: {color: 'gray'},
//           frontColor: '#f46964',
//         },
            
//       ];
    
//   return (
//     <View style={styles.container}>

      
//         <View
//     style={{
//       backgroundColor: '#f9f9f9',

//       borderRadius: 15,
//       height: '80%',
//       width: '100%',
//      elevation: 6,
//       marginTop:40,

//     }}>
//      <TouchableOpacity style={{height:30,width:30,borderRadius:100,backgroundColor:'yellow'}}
//       onPress={showOptions}>
//         <Icon
//         name="ellipsis-v"
//         size={20}
//         color="black"
//         style={styles.icon}
       
//       />
//         </TouchableOpacity>
//     <BarChart
//     ref={chartRef} // Assign a ref to the BarChart component
//      data={barData}
//      barWidth={3} // Set bar width to a thin value
//      spacing={0} // Set spacing to 0 for no space between bars
//      roundedTop={true}
//      width={500}
//      roundedBottom
//      hideRules={true}
//      xAxisThickness={0}
//      yAxisThickness={0}
//      yAxisTextStyle={{ color: 'gray' }}
//      noOfSections={3}
//      maxValue={75}
//      rulesType="solid"
 
//     />
    
//   </View>
        
//       <Text>PdfScreen</Text>
//     </View>
//   )
// }

// export default PdfScreen

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         // Add other styles for the main container
//         // ...
//       },
//       icon: {
//         position: 'absolute',
//         top: 10,
//         right: 10,
//         // Add other styles for the icon
//         // ...
//       },
// })



import React, { useEffect, useRef ,useState} from 'react';
import { StyleSheet, Text, TouchableOpacity, View, PermissionsAndroid,Linking, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { BarChart } from 'react-native-gifted-charts';
import RNFS from 'react-native-fs';
import ViewShot from "react-native-view-shot";
import RNHTMLtoPDF from 'react-native-html-to-pdf';
import FileViewer from "react-native-file-viewer";
import { LineChart } from 'react-native-svg-charts';
import ChartPDFComponent from './ChartPDFComponent';
import { WebView } from "react-native-webview";
const PdfScreen = () => {
    const [pdfFilePath, setPdfFilePath] = useState('');
console.log(pdfFilePath,"pdfFilePath=/")
  useEffect(() => {
    generatePDF();
  }, []);


  const chartRef = useRef(null);
//   const generatePDF = async () => {
//     try {
//       const permission = await PermissionsAndroid.request(
//         PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE
//       );

//       if (permission === PermissionsAndroid.RESULTS.GRANTED && chartRef.current) {
//         const options = {
//           html: `
//             <html>
//               <body>
//                 <div id="chart" style="width: 100%; height: 300px;"></div>
//               </body>
//             </html>
//           `,
//           fileName: 'chart',
//           directory: 'Documents',
//         };

//         const filePath = await RNHTMLtoPDF.convert(options);

//         // Capture the screenshot of the BarChart component
//         const base64Data = await ViewShot.captureRef(chartRef, {
//           format: 'png',
//           quality: 1,
//           result: 'base64',
//         });

//         // Now you can use the base64Data and filePath to send the PDF file or perform any other actions

//         console.log('PDF file path:', filePath);
//       } else {
//         console.log('Permission denied or chartRef is null');
//       }
//     } catch (error) {
//       console.error('Error generating PDF:', error);
//     }
//   };




// const htmlData = `
// <div>
//     <canvas id="barChart" width="400" height="300"></canvas>

//     <script>
//         // Get the canvas element
//         const canvas = document.getElementById('barChart');
//         const ctx = canvas.getContext('2d');

//         // Define the data for the bar chart
//         const data = [25, 30, 45, 60, 20, 65, 43, 67, 89, 45, 78, 90, 12, 23, 67, 76, 45, 34, 89, 45, 76, 12, 45, 71, 90, 34, 67];

//         // Define the colors for the bars
//         const colors = ['#bc3cf6', '#f46964', '#f16eb8', '#bc3cf6', '#f46964', '#f16eb8','#bc3cf6'];

//         // Calculate the width and height of each bar
//         const barWidth = canvas.width / data.length;
//         const maxBarHeight = canvas.height - 10;

//         // Draw the bars
//         for (let i = 0; i < data.length; i++) {
//             const barHeight = (data[i] / Math.max(...data)) * maxBarHeight;
//             const x = i * barWidth;
//             const y = canvas.height - barHeight;

//             // Draw the bar
//             ctx.fillStyle = colors[i];
//             ctx.fillRect(x, y, barWidth - 5, barHeight);
//         }
//     </script>
//     <h1>hellooooo</h1>
//     </div>
// `

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



const generatePDF = async () => {
    try {
      const permission = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE
      );

      if (permission === PermissionsAndroid.RESULTS.GRANTED && chartRef.current) {
        const options = {
          html: '<h1>PDF TEST</h1>',
          fileName: 'chart',
          directory: 'Documents',
        };

        const { filePath } = await RNHTMLtoPDF.convert(options);

        // Capture the screenshot of the BarChart component
        const base64Data = await ViewShot.captureRef(chartRef, {
          format: 'png',
          quality: 1,
          result: 'base64',
        });

        // Now you can use the base64Data and filePath to send the PDF file or perform any other actions
        setPdfFilePath(filePath);

        console.log('PDF file path:', filePath);
      } else {
        console.log('Permission denied or chartRef is null');
      }
    } catch (error) {
      console.error('Error generating PDF:', error);
    }
  };



//export the chart bar to pdf
  const exportPDF = async () => {
    let options = {
        html: htmlData,
        fileName: "chart",
        directory: "Download",
        base64: true
    };
    let file = await RNHTMLtoPDF.convert(options)
    Alert.alert(file.filePath);
  
    openPDFFile(file.filePath)
};

const openPDFFile = (filepath) => {
    const path = filepath;
    FileViewer.open(path, { showOpenWithDialog: true })
        .then(() => {
          console.log("sucessfully open pdf")
        })
        .catch(error => {
            console.log("error", error)
        });
};




  // const handleOpenPDF = () => {
  //   if (pdfFilePath) {
  //     const filePath = `file://${RNFS.MainBundlePath}/${pdfFilePath}`;
  //     Linking.openURL(filePath);
  //   } else {
  //     console.log('PDF file path not available');
  //   }
  // };

  // const handleDownloadPDF = () => {
  //   if (pdfFilePath) {
  //     const downloadDest = `${RNFS.DownloadDirectoryPath}/chart.pdf`;
  //     RNFS.copyFile(pdfFilePath, downloadDest)
  //       .then(() => {
  //         console.log('PDF file downloaded:', downloadDest);
  //       })
  //       .catch((error) => {
  //         console.error('Error downloading PDF:', error);
  //       });
  //   } else {
  //     console.log('PDF file path not available');
  //   }
  // };



  const showOptions = () => {
    // Handle the onPress event to show the option text
    console.log('Export to PDF');
  };

      const barData = [
        {
          value: 10,
          // label: 'Jan',
          spacing: 4,
          labelWidth: 30,
          labelTextStyle: {color: 'gray'},
          frontColor: '#bc3cf6',
        
       
    
        },
        {
          value: 12,
          // label: 'Jan',
          spacing: 4,
          labelWidth: 30,
          labelTextStyle: {color: 'gray'},
          frontColor: '#f46964',
        },
        {
          value: 14,
          // label: 'Jan',
          spacing: 4,
          labelWidth: 30,
          labelTextStyle: {color: 'gray'},
          frontColor: '#f46964',
        },
        {
          value: 16,
          // label: 'Jan',
          spacing: 4,
          labelWidth: 30,
          labelTextStyle: {color: 'gray'},
          frontColor: '#f16eb8',
        },
        {value: 18, frontColor: '#bc3cf6',spacing: 4,labelWidth: 30,},
        {
          value: 19,
          // label: 'Jan',
          spacing: 4,
          labelWidth: 30,
          labelTextStyle: {color: 'gray'},
          frontColor: '#f16eb8',
        },
        {
          value: 19,
          // label: 'Jan',
          spacing: 4,
          labelWidth: 30,
          labelTextStyle: {color: 'gray'},
          frontColor: '#f16eb8',
        },
        {value: 18, frontColor: '#bc3cf6',spacing: 4,labelWidth:30,
        showTopLabel: true,
    
        topLabelComponent: () => (
          <View style={{height:8,width:8,backgroundColor:'black',borderRadius:100,bottom:20}}>
          <Text style={{
              color: "black",
              fontSize: 10,
              marginBottom: 6,
              zIndex: 33,
              position: "absolute",
              width: 40,
              bottom: 5,
              textAlign: "auto"
          }}>Lorese</Text>
    
          </View>
        
        )
      },
    
        {
          value: 16,
          // label: 'Jan',
          spacing: 4,
          labelWidth: 30,
          labelTextStyle: {color: 'gray'},
          frontColor: '#f16eb8',
        },
        {
          value: 14,
          // label: 'Jan',
          spacing: 4,
          labelWidth: 30,
          labelTextStyle: {color: 'gray'},
          frontColor: '#f46964',
        },
        {
          value: 12,
          // label: 'Jan',
          spacing: 4,
          labelWidth: 30,
          labelTextStyle: {color: 'gray'},
          frontColor: '#f46964',
        },
        {
          value: 10,
          // label: 'Jan',
          spacing: 4,
          labelWidth: 15,
          labelTextStyle: {color: 'gray'},
          frontColor: '#bc3cf6',
       
    
        },
        {
          value: 10,
          // label: 'Jan',
          spacing: 4,
          labelWidth: 15,
          labelTextStyle: {color: 'gray'},
          frontColor: '#f46964',
       
    
        },
        {
          value: 12,
          // label: 'Jan',
          spacing: 4,
          labelWidth: 15,
          labelTextStyle: {color: 'gray'},
          frontColor: '#bc3cf6',
        },
        {
          value: 14,
          // label: 'Jan',
          spacing: 4,
          labelWidth: 30,
          labelTextStyle: {color: 'gray'},
          frontColor: '#f46964',
        },
        {
          value: 16,
          // label: 'Jan',
          spacing: 4,
          labelWidth: 30,
          labelTextStyle: {color: 'gray'},
          frontColor: '#f16eb8',
        },
        {value: 18, frontColor: '#bc3cf6',spacing: 4,labelWidth: 30,},
        {
          value: 20,
          // label: 'Jan',
          spacing: 4,
          labelWidth: 15,
          labelTextStyle: {color: 'gray'},
          frontColor: '#bc3cf6',
        },
        {
          value: 22,
          // label: 'Jan',
          spacing: 4,
          labelWidth: 30,
          labelTextStyle: {color: 'gray'},
          frontColor: '#f46964',
        },
        {
          value: 24,
          // label: 'Jan',
          spacing: 4,
          labelWidth: 15,
          labelTextStyle: {color: 'gray'},
          frontColor: '#bc3cf6',
       
    
        },
        {
          value: 26,
          // label: 'Jan',
          spacing: 4,
          labelWidth: 30,
          labelTextStyle: {color: 'gray'},
          frontColor: '#f46964',
        },
        {
          value: 28,
          // label: 'Jan',
          spacing: 4,
          labelWidth: 30,
          labelTextStyle: {color: 'gray'},
          frontColor: '#f46964',
        },
        {
          value: 30,
          // label: 'Jan',
          spacing: 4,
          labelWidth: 30,
          labelTextStyle: {color: 'gray'},
          frontColor: '#f16eb8',
          topLabelComponent: () => (
            <View style={{height:8,width:8,backgroundColor:'black',borderRadius:100,bottom:20}}>
            <Text style={{
                color: "black",
                fontSize: 10,
                marginBottom: 6,
                zIndex: 33,
                position: "absolute",
                width: 40,
                bottom: 5,
                textAlign: "auto"
            }}>Lorese</Text>
      
            </View>
          
          )
        },
        {value: 30, frontColor: '#bc3cf6',spacing: 4, labelWidth: 30,},
        {
          value: 30,
          // label: 'Jan',
          spacing: 4,
          labelWidth: 30,
          labelTextStyle: {color: 'gray'},
          frontColor: '#f16eb8',
        },
        {
          value: 28,
          // label: 'Jan',
          spacing: 4,
          labelWidth: 15,
          labelTextStyle: {color: 'gray'},
          frontColor: '#bc3cf6',
        },
        {
          value: 26,
          // label: 'Jan',
          spacing:4,
          labelWidth: 30,
          labelTextStyle: {color: 'gray'},
          frontColor: '#f46964',
        },
        {
          value: 24,
          // label: 'Jan',
          spacing: 4,
          labelWidth: 30,
          labelTextStyle: {color: 'gray'},
          frontColor: '#f16eb8',
        },
        {value: 22, frontColor: '#bc3cf6',spacing: 4, labelWidth: 30,},
        {
          value: 20,
          // label: 'Jan',
          spacing: 4,
          labelWidth: 15,
          labelTextStyle: {color: 'gray'},
          frontColor: '#bc3cf6',
        },
        {
          value: 18,
          // label: 'Jan',
          spacing: 4,
          labelWidth: 30,
          labelTextStyle: {color: 'gray'},
          frontColor: '#f46964',
        },
        {
          value: 16,
          // label: 'Jan',
          
          spacing: 4,
          labelWidth: 15,
          labelTextStyle: {color: 'gray',bottom:100},
          frontColor: '#bc3cf6',
       
    
        },
        {
          value: 14,
          // label: 'Jan',
          spacing: 4,
          labelWidth: 30,
          labelTextStyle: {color: 'gray'},
          frontColor: '#f46964',
        },
        {
          value: 12,
          // label: 'Jan',
          spacing: 4,
          labelWidth: 30,
          labelTextStyle: {color: 'gray'},
          frontColor: '#f46964',
        },
        {
          value: 9,
          // label: 'Jan',
          spacing: 4,
          labelWidth: 30,
          labelTextStyle: {color: 'gray'},
          frontColor: '#f16eb8',
        },
        {value: 8, frontColor: '#bc3cf6',spacing: 4,labelWidth: 30,},
        {
          value: 7,
          // label: 'Jan',
          spacing: 4,
          labelWidth: 30,
          labelTextStyle: {color: 'gray'},
          frontColor: '#f16eb8',
          topLabelComponent: () => (
            <View style={{height:8,width:8,backgroundColor:'black',borderRadius:100,bottom:20}}>
            <Text style={{
                color: "black",
                fontSize: 10,
                marginBottom: 6,
                zIndex: 33,
                position: "absolute",
                width: 40,
                bottom: 5,
                textAlign: "auto"
            }}>Lorese</Text>
      
            </View>
          
          )
        },
    
        {
          value: 8,
          // label: 'Jan',
          spacing: 4,
          labelWidth: 15,
          labelTextStyle: {color: 'gray'},
          frontColor: '#bc3cf6',
        },
        {
          value: 9,
          // label: 'Jan',
          spacing: 4,
          labelWidth: 30,
          labelTextStyle: {color: 'gray'},
          frontColor: '#f46964',
        },
        {
          value: 10,
          // label: 'Jan',
          spacing: 4,
          labelWidth: 30,
          labelTextStyle: {color: 'gray'},
          frontColor: '#f16eb8',
        },
        {value: 12, frontColor: '#bc3cf6',spacing: 4, labelWidth: 30,},
        {
          value: 14,
          // label: 'Jan',
          spacing: 4,
          labelWidth: 15,
          labelTextStyle: {color: 'gray'},
          frontColor: '#bc3cf6',
        },
        {
          value: 16,
          // label: 'Jan',
          spacing: 4,
          labelWidth: 30,
          labelTextStyle: {color: 'gray'},
          frontColor: '#f46964',
        },
        {
          value: 18,
          // label: 'Jan',
          spacing: 4,
          labelWidth: 15,
          labelTextStyle: {color: 'gray'},
          frontColor: '#bc3cf6',
       
    
        },
        {
          value: 20,
          // label: 'Jan',
          spacing: 4,
          labelWidth: 30,
          labelTextStyle: {color: 'gray'},
          frontColor: '#f46964',
        },
        {
          value: 20,
          // label: 'Jan',
          spacing: 4,
          labelWidth: 30,
          labelTextStyle: {color: 'gray'},
          frontColor: '#f46964',
        },
        {
          value: 22,
          // label: 'Jan',
          spacing: 4,
          labelWidth: 30,
          labelTextStyle: {color: 'gray'},
          frontColor: '#f16eb8',
        },
        {value: 24, frontColor: '#bc3cf6',spacing: 4,labelWidth: 30,},
        {
          value: 26,
          // label: 'Jan',
          spacing: 4,
          labelWidth: 30,
          labelTextStyle: {color: 'gray'},
          frontColor: '#f16eb8',
        },
        {
          value: 28,
          // label: 'Jan',
          spacing: 4,
          labelWidth: 15,
          labelTextStyle: {color: 'gray'},
          frontColor: '#bc3cf6',
        },
        {
          value: 30,
          // label: 'Jan',
          spacing: 4,
          labelWidth: 30,
          labelTextStyle: {color: 'gray'},
          frontColor: '#f46964',
        },
            
      ];

  return (
    <View style={styles.container}>
       <View
    style={{
      backgroundColor: '#f9f9f9',

      borderRadius: 15,
      height: '50%',
      width: '100%',
     elevation: 6,
      marginTop:40,

    }}>
     <TouchableOpacity style={{height:30,width:30,borderRadius:100,backgroundColor:'yellow'}}
      onPress={showOptions}>
        <Icon
        name="ellipsis-v"
        size={20}
        color="black"
        style={styles.icon}
       
      />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={exportPDF}>
        <Text style={styles.buttonText}>Open PDF</Text>
      </TouchableOpacity>
      {/* <TouchableOpacity style={styles.button} onPress={handleDownloadPDF}>
        <Text style={styles.buttonText}>Download PDF</Text>
      </TouchableOpacity> */}
       
    {/* <BarChart
    // ref={chartRef} // Assign a ref to the BarChart component
     data={barData}
     barWidth={3} // Set bar width to a thin value
     spacing={0} // Set spacing to 0 for no space between bars
     roundedTop={true}
     width={500}
     roundedBottom
     hideRules={true}
     xAxisThickness={0}
     yAxisThickness={0}
     yAxisTextStyle={{ color: 'gray' }}
     noOfSections={3}
     maxValue={75}
     rulesType="solid"
 
    /> */}
       <WebView
      originWhitelist={['*']}
      source={{ html: htmlData }}
    />
  </View>

        
  
      
    </View>
  );
};

export default PdfScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // Add other styles for the main container
    // ...
  },
  chartContainer: {
    backgroundColor: '#f9f9f9',
    borderRadius: 15,
    height: '80%',
    width: '100%',
    elevation: 6,
    marginTop: 40,
  },
  icon: {
    position: 'absolute',
    top: 10,
    right: 10,
    // Add other styles for the icon
    // ...
  },
  button: {
    backgroundColor: '#e67e22',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 20,
    width:120,
    
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
