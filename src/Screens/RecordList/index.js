import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
} from 'react-native';
import React, {useContext, useState, useEffect} from 'react';
// import {ThemeContext} from '../../theming/contexts/ThemeContext';
import * as Animatable from 'react-native-animatable';
import styles from './styles';
import HomeIcon from '../../assets/icons/home.svg';
import UnSendIcon from '../../assets/icons/unsendmsg.svg';

const RecordList = () => {
  // const {isLightTheme, lightTheme, darkTheme} = useContext(ThemeContext);
  // const theme = isLightTheme ? lightTheme : darkTheme;

  const [data, setData] = useState([
    {
      id: '1',
      address: '123 Main Street',
      customerName: 'John Doe',
      jobType: 'Plumbing',
      jobStatus: 'In Progress',
      unreadMessages: true,
      quote: '$200',
      paidStatus: 'complete',
      termsStatus: 'requested',
      reportStatus: 'not done',
      createdDate: '2023-07-01',
      nextDeadlineDate: '2023-07-15',
    },
    {
      id: '2',
      address: '456 Elm Street',
      customerName: 'Jane Smith',
      jobType: 'Electrical',
      jobStatus: 'Completed',
      unreadMessages: true,
      quote: '$300',
      paidStatus: 'incomplete',
      termsStatus: 'not requested',
      reportStatus: 'complete',
      createdDate: '2023-07-02',
      nextDeadlineDate: '2023-07-20',
    },
    {
      id: '3',
      address: '456 Elm Street',
      customerName: 'Jane Smith',
      jobType: 'Electrical',
      jobStatus: 'Completed',
      unreadMessages: true,
      quote: '$300',
      paidStatus: 'incomplete',
      termsStatus: 'not requested',
      reportStatus: 'complete',
      createdDate: '2023-07-02',
      nextDeadlineDate: '2023-07-20',
    },
    {
      id: '4',
      address: '456 Elm Street',
      customerName: 'Jane Smith',
      jobType: 'Electrical',
      jobStatus: 'Completed',
      unreadMessages: true,
      quote: '$300',
      paidStatus: 'incomplete',
      termsStatus: 'not requested',
      reportStatus: 'complete',
      createdDate: '2023-07-02',
      nextDeadlineDate: '2023-07-20',
    },
    {
      id: '5',
      address: '456 Elm Street',
      customerName: 'Jane Smith',
      jobType: 'Electrical',
      jobStatus: 'Completed',
      unreadMessages: true,
      quote: '$300',
      paidStatus: 'incomplete',
      termsStatus: 'not requested',
      reportStatus: 'complete',
      createdDate: '2023-07-02',
      nextDeadlineDate: '2023-07-20',
    },
  ]);

  // useEffect(() => {
  //     // Simulating an API call to fetch data
  //     const fetchData = async () => {
  //       try {
  //         // Make the API call and retrieve the data
  //         const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  //         const json = await response.json();

  //         // Update the state with the fetched data
  //         setData(json);
  //       } catch (error) {
  //         console.error('Error fetching data:', error);
  //       }
  //     };

  //     fetchData();
  //   }, []);

  const renderListItem = ({item}) => {
    const {
      address,
      customerName,
      jobType,
      jobStatus,
      unreadMessages,
      quote,
      paidStatus,
      termsStatus,
      reportStatus,
      createdDate,
      nextDeadlineDate,
      id,
    } = item;

    const getStatusIconColor = status => {
      if (status === 'complete') {
        return 'green';
      } else if (status === 'requested') {
        return 'amber';
      } else {
        return 'grey';
      }
    };
    const getStatusIcon = status => {
      if (status === 'complete') {
        return checkCompleteIcon;
      } else if (status === 'requested') {
        return checkRequestedIcon;
      } else {
        return checkNotDoneIcon;
      }
    };
    const getDeadlineDateColor = deadlineDate => {
      const today = new Date();
      const nextDeadline = new Date(deadlineDate);

      if (nextDeadline.toDateString() === today.toDateString()) {
        return 'amber';
      } else if (nextDeadline < today) {
        return 'red';
      } else {
        return 'green';
      }
    };

    return (
      <View style={[styles.cardContainer, {backgroundColor: "#fff"}]}>
        <View style={styles.rowView}>
          <Text style={styles.jobStatus1}>jobStatus:</Text>
          <Text style={[styles.jobStatus, {backgroundColor: "#fff"}]}>
            {jobStatus}
          </Text>
        </View>
        <View style={styles.rowView}>
          <Text style={styles.customerName1}>User Name:</Text>
          <Text style={styles.customerName}>{customerName}</Text>
        </View>
        <View style={styles.statusiconView}>
          <HomeIcon style={styles.icon} fill={"#000"} />

          <Text style={styles.address}>:{address}</Text>
        </View>
        <View style={styles.rowView}>
          <Text style={styles.jobType1}>Profession:</Text>
          <Text style={styles.jobType}>{jobType}</Text>
        </View>

        {unreadMessages && (
          <UnSendIcon style={styles.unreadMessageIcon} fill={"#000"} />
        )}
        <View style={styles.rowView}>
          <Text style={styles.quote1}>Quote:</Text>
          <Text style={styles.quote}>{quote}</Text>
        </View>
        <View style={styles.statusIconsContainer}>
          {/* 
          <Image
            source={getStatusIcon(paidStatus)}
            style={[
              styles.statusIcon,
              {tintColor: getStatusIconColor(paidStatus)},
            ]}
          />
          <Image
            source={getStatusIcon(termsStatus)}
            style={[
              styles.statusIcon,
              {tintColor: getStatusIconColor(termsStatus)},
            ]}
          /> 
            <Image
            source={getStatusIcon(reportStatus)}
            style={[
              styles.statusIcon,
              {tintColor: getStatusIconColor(reportStatus)},
            ]}
          /> */}
        </View>
        <View style={styles.rowView}>
          <Text style={styles.createdDate1}>createdDate:</Text>
          <Text style={styles.createdDate}>{createdDate}</Text>
        </View>
        <View style={styles.rowView}>
          <Text style={styles.createdDate1}>nextDeadlineDate:</Text>
          <Text
            style={[
              styles.nextDeadlineDate,
              {color: getDeadlineDateColor(nextDeadlineDate)},
            ]}>
            {nextDeadlineDate}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <View style={[styles.mainWrapper, {backgroundColor:"#fff"}]}>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={renderListItem}
        numColumns={1}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

export default RecordList;
