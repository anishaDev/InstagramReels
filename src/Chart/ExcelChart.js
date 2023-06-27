import React from 'react';
import { View, Text, TouchableOpacity, PermissionsAndroid } from 'react-native';
import RNFS from 'react-native-fs';
import XLSX from 'xlsx';

const ExcelApp = () =>  {

  // Function to handle exporting bar chart data to Excel
  const exportDataToExcel = () => {
    // Sample bar chart data
    let barChartData = [
      { month: 'January', value: 50 },
      { month: 'February', value: 70 },
      { month: 'March', value: 90 },
      { month: 'April', value: 65 },
      { month: 'May', value: 80 },
    ];
    var RNFS = require("react-native-fs")
 // function to handle exporting
 const exportDataToExcel = () => {

    // Created Sample data
    let sample_data_to_export = [{id: '1', name: 'First User'},{ id: '2', name: 'Second User'}];

    let wb = XLSX.utils.book_new();
    let ws = XLSX.utils.json_to_sheet(sample_data_to_export)    
    XLSX.utils.book_append_sheet(wb,ws,"Users")
    const wbout = XLSX.write(wb, {type:'binary', bookType:"xlsx"});

    // Write generated excel to Storage
    RNFS.writeFile(RNFS.ExternalStorageDirectoryPath + '/my_exported_file.xlsx', wbout, 'ascii').then((r)=>{
     console.log('Success');
    }).catch((e)=>{
      console.log('Error', e);
    });

  }




    // Prepare worksheet data
    let worksheetData = [
      ['Month', 'Value'],
      ...barChartData.map(item => [item.month, item.value]),
    ];

    let wb = XLSX.utils.book_new();
    let ws = XLSX.utils.aoa_to_sheet(worksheetData);
    XLSX.utils.book_append_sheet(wb, ws, 'Bar Chart Data');
    const wbout = XLSX.write(wb, { type: 'binary', bookType: 'xlsx' });

    // Write generated Excel file to storage
    const filePath = RNFS.ExternalStorageDirectoryPath + '/bar_chart_data.xlsx';
    RNFS.writeFile(filePath, wbout, 'ascii')
      .then(() => {
        console.log('Bar chart data exported to Excel:', filePath);
      })
      .catch(error => {
        console.log('Error exporting bar chart data to Excel:', error);
      });
  };

  const handleClick = async () => {
    try {
      // Check if WRITE_EXTERNAL_STORAGE permission is already granted
      let isPermittedExternalStorage = await PermissionsAndroid.check(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE
      );

      if (!isPermittedExternalStorage) {
        // Request WRITE_EXTERNAL_STORAGE permission
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: 'Storage Permission Needed',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          }
        );

        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          // Permission granted, export bar chart data to Excel
          exportDataToExcel();
          console.log('WRITE_EXTERNAL_STORAGE permission granted');
        } else {
          // Permission denied
          console.log('WRITE_EXTERNAL_STORAGE permission denied');
        }
      } else {
        // Permission already granted, export bar chart data to Excel
        exportDataToExcel();
      }
    } catch (error) {
      console.log('Error while checking permission:', error);
    }
  };

  return (
    <View
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
    }}>
    <TouchableOpacity
      onPress={() => handleClick()}
      style={{
        width: '50%',
        paddingVertical: 10,
        paddingHorizontal: 15,
        backgroundColor: 'blue',
        marginVertical: 20,
      }}>
      <Text style={{textAlign: 'center', color: 'white'}}>
        Export to Excel
      </Text>
    </TouchableOpacity>
  </View>
  );
};

export default ExcelApp;
