import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, FlatList, Alert, TouchableOpacity } from 'react-native';
import { API, graphqlOperation, Auth } from 'aws-amplify';
import LnerStts from "../../../../components/MyAc/LoanReq/MakeLnReq";

import { listSMAccounts } from '../../../../src/graphql/queries';
import * as Clipboard from 'expo-clipboard';  

const FetchSMNonCovLns = props => {
    const [Loanees, setLoanees] = useState([]);  // Stores fetched accounts
    const [filteredLoanees, setFilteredLoanees] = useState([]); // Stores filtered results
    const [loading, setLoading] = useState(false);
    const [awsEmail, setAWSEmail] = useState("");

    useEffect(() => {
        fetchLoanees();
    }, []);

    const fetchLoanees = async () => {
        setLoading(true);
        try {
            const userInfo = await Auth.currentAuthenticatedUser();
            const Lonees = await API.graphql(
                graphqlOperation(listSMAccounts, {
                    filter: { acStatus: { eq: "AccountActive" } }
                })
            );
            setLoanees(Lonees.data.listSMAccounts.items);
        } catch (e) {
            console.error("Error fetching accounts:", e);
        } finally {
            setLoading(false);
        }
    };

    // Dynamic Filtering based on input
    const handleSearch = (text) => {
        setAWSEmail(text);
        const filtered = Loanees.filter(loanee =>
            loanee.phonecontact.includes(text)
        );
        setFilteredLoanees(filtered);
    };

    // Function to copy email to clipboard
    const copyToClipboard = async (email) => {
        await Clipboard.setStringAsync(email);
        Alert.alert("Copied to Clipboard!", `Email: ${email}`);
    };

    return (
        <View style={styles.image}>

            {/* Always Visible Search Bar */}
            <View style={styles.sendLoanView}>
                <TextInput
                    placeholder="+254724......"
                    value={awsEmail}
                    onChangeText={handleSearch} 
                    style={styles.sendLoanInput}
                    editable={true}
                />
            </View>

            {/* Conditional Rendering: FlatList only shows when typing */}
            {awsEmail.length > 0 ? (
                <FlatList
                    style={{ width: "100%" }}
                    data={filteredLoanees}
                    renderItem={({ item }) => (
                        <View>
                            <LnerStts SMAc={item} />
                            <TouchableOpacity
                                style={styles.copyButton}
                                onPress={() => copyToClipboard(item.awsemail)}>
                                <Text style={styles.copyButtonText}>Copy Email</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                    keyExtractor={(item, index) => index.toString()}
                    refreshing={loading}
                />
            ) : (
                <Text style={styles.label}>Start typing a phone number to see your pal. Start with country code.</Text>
            )}
        </View>
    );
};

const styles = {
    ...styles,
    copyButton: {
        marginTop: 10,
        backgroundColor: 'orange',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center'
    },
    copyButtonText: {
        color: 'white',
        fontWeight: 'bold'
    }
};

export default FetchSMNonCovLns;
