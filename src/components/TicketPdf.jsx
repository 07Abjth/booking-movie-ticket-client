import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    page: { padding: 30 },
    section: { margin: 10, padding: 10, flexGrow: 1 },
    title: { fontSize: 20, textAlign: 'center' },
});


export const TicketPDF = ({ booking }) => (
    <Document>
        <Page size="A4" style={styles.page}>
            <View style={styles.section}>
                <Text style={styles.title}>Movie Ticket</Text>
                <Text>Booking ID: {booking._id}</Text>
                <Text>Movie: {booking.movie.title}</Text>
                <Text>Theater: {booking.theater.name}</Text>
                <Text>Seats: {booking.selectedSeats.join(', ')}</Text>
                <Text>Total Amount: ₹{booking.totalAmount}</Text>
                <Text>Show Time: {booking.showTime}</Text>
            </View>
        </Page>
    </Document>
);
 